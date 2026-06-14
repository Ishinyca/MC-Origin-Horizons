// ==========================================
// --- MASTER TOGGLE CONTROL ---
// ==========================================
const SCRIPT_ENABLED = false; // Set to false to entirely disable all automation and admin commands

// --- JAVA CLASS INITIALIZATION ---
const FTB_CHUNKS_API_CLASS = Java.loadClass("dev.ftb.mods.ftbchunks.api.FTBChunksAPI");
const CHUNK_DIM_POS_CLASS = Java.loadClass("dev.ftb.mods.ftblibrary.math.ChunkDimPos");

// --- CONFIGURATION OPTIONS ---
const SPAWN_CHANCE = 0.35;       
const COOLDOWN_DAYS = 2;         
const MIN_DISTANCE = 50;         
const MAX_DISTANCE = 300;        

// --- SPLIT GATEWAY POOLS ---
const NORMAL_GATEWAYS = [
    "gateways:basic/blaze", 
    "gateways:basic/enderman", 
    "gateways:basic/slime", 
    "gateways:emerald_grove", 
    "gateways:hellish_fortress", 
    "gateways:overworldian_nights"
];

const ENDLESS_GATEWAYS = [
    "gateways:endless/blaze"
];

const MSG_INITIAL_WARNING = "§cAn unstable energy signature has been detected in the Overworld. A spatial rift is forming today...§r";

let ACTIVE_COUNTDOWNS = [];
let globalCooldownDays = 0;
let lastDayTimeCheck = 0;

/**
 * Dynamic Name Processor
 */
function formatGatewayName(gatewayId) {
    let path = gatewayId.includes(':') ? gatewayId.split(':')[1] : gatewayId;
    
    if (path.startsWith("basic/")) path = path.substring(6);
    if (path.startsWith("endless/")) path = path.substring(8);
    
    let parts = path.split(/[\/_]+/);
    let formattedParts = parts.map(part => {
        if (!part) return "";
        return part.charAt(0).toUpperCase() + part.slice(1);
    });
    
    return "Gateway: " + formattedParts.join(" ");
}

/**
 * 1.21.1 FTB Chunks API Claim Verification
 */
function isChunkClaimedByFTB(level, blockPos) {
    try {
        if (FTB_CHUNKS_API_CLASS && CHUNK_DIM_POS_CLASS) {
            let apiInstance = FTB_CHUNKS_API_CLASS.api();
            if (apiInstance) {
                let manager = apiInstance.getManager();
                if (manager) {
                    let chunkX = blockPos.getX() >> 4;
                    let chunkZ = blockPos.getZ() >> 4;
                    let dimPos = new CHUNK_DIM_POS_CLASS(level.dimension, chunkX, chunkZ);
                    
                    let claimedChunk = manager.getChunk(dimPos);
                    return claimedChunk != null;
                }
            }
        }
    } catch (e) {
        console.warn("[Gateway Script] Claim verification failed: " + e);
    }
    return false;
}

function createClickableMessage(prefixText, x, y, z, suffixText) {
    return Text.of(prefixText)
        .append(Text.of(` [X: ${x}, Y: ${y}, Z: ${z}] `)
            .gold()
            .underlined(true)
            .click({ action: 'run_command', value: `/ftbchunks waypoint add "Gateway Rift" ${x} ${y} ${z}` }))
        .append(Text.of(suffixText));
}

/**
 * Dynamic System Setup
 */
function setupGatewayCountdown(ctx, seconds, nearPlayer, forcedPoolType) {
    // If master toggle is off, stop execution immediately and notify the OP
    if (!SCRIPT_ENABLED) {
        ctx.source.sendFailure(Text.of("Gateway spawning system is currently disabled via server scripts configuration."));
        return 0;
    }

    let server = ctx.source.server;
    let level = server.getLevel("minecraft:overworld");
    if (!level) return 0;

    let overworldPlayers = [];
    server.players.forEach(p => {
        if (String(p.level.dimension).includes("overworld")) {
            overworldPlayers.push(p);
        }
    });

    if (overworldPlayers.length === 0) {
        ctx.source.sendFailure(Text.of("No players found in the Overworld to anchor the gateway spawn."));
        return 0;
    }

    let targetPlayer = ctx.source.player ? ctx.source.player : overworldPlayers[Math.floor(Math.random() * overworldPlayers.length)];
    let spawnPos = findValidSpawnPos(level, targetPlayer, nearPlayer);
    
    let chosenGatewayId = "";
    let gatewayType = ""; 

    if (forcedPoolType === "normal") {
        chosenGatewayId = NORMAL_GATEWAYS[Math.floor(Math.random() * NORMAL_GATEWAYS.length)];
        gatewayType = "normal_gateway";
    } else if (forcedPoolType === "endless") {
        if (ENDLESS_GATEWAYS.length === 0) {
            ctx.source.sendFailure(Text.of("The Endless Gateway pool configuration is empty!"));
            return 0;
        }
        chosenGatewayId = ENDLESS_GATEWAYS[Math.floor(Math.random() * ENDLESS_GATEWAYS.length)];
        gatewayType = "endless_gateway";
    } else {
        let totalGateways = NORMAL_GATEWAYS.length + ENDLESS_GATEWAYS.length;
        let roll = Math.floor(Math.random() * totalGateways);
        if (roll < NORMAL_GATEWAYS.length) {
            chosenGatewayId = NORMAL_GATEWAYS[roll];
            gatewayType = "normal_gateway";
        } else {
            chosenGatewayId = ENDLESS_GATEWAYS[roll - NORMAL_GATEWAYS.length];
            gatewayType = "endless_gateway";
        }
    }
    
    ACTIVE_COUNTDOWNS.push({
        id: chosenGatewayId,
        type: gatewayType, 
        x: Math.floor(spawnPos.x),
        y: Math.floor(spawnPos.y),
        z: Math.floor(spawnPos.z),
        targetTick: server.tickCount + (seconds * 20), 
        lastAnnouncedSecond: seconds + 1
    });

    server.tell(Text.of("§4[Admin Force] " + MSG_INITIAL_WARNING));
    server.tell(createClickableMessage("§eThe rift is stabilizing at", Math.floor(spawnPos.x), Math.floor(spawnPos.y), Math.floor(spawnPos.z), `! ${seconds} seconds until gateway opening.§r`));
    
    ctx.source.sendSuccess(Text.of(`Successfully forced a ${gatewayType.replace('_', ' ')} countdown near ${targetPlayer.username} for ${seconds} seconds!`), true);
    return 1; 
}

// --- 1. CUSTOM COMMAND REGISTRY ---
ServerEvents.commandRegistry(event => {
    const { commands: Commands, arguments: Arguments } = event;

    event.register(
        Commands.literal('forcegateway')
            .requires(src => src.hasPermission(2)) 
            .executes(ctx => {
                return setupGatewayCountdown(ctx, 120, false, "random"); 
            })
            .then(Commands.argument('seconds', Arguments.INTEGER.create(event))
                .executes(ctx => {
                    let seconds = Arguments.INTEGER.getResult(ctx, 'seconds');
                    return setupGatewayCountdown(ctx, seconds, false, "random");
                })
                .then(Commands.argument('nearPlayer', Arguments.BOOLEAN.create(event))
                    .executes(ctx => {
                        let seconds = Arguments.INTEGER.getResult(ctx, 'seconds');
                        let nearPlayer = Arguments.BOOLEAN.getResult(ctx, 'nearPlayer');
                        return setupGatewayCountdown(ctx, seconds, nearPlayer, "random");
                    })
                    .then(Commands.literal('normal')
                        .executes(ctx => {
                            let seconds = Arguments.INTEGER.getResult(ctx, 'seconds');
                            let nearPlayer = Arguments.BOOLEAN.getResult(ctx, 'nearPlayer');
                            return setupGatewayCountdown(ctx, seconds, nearPlayer, "normal");
                        })
                    )
                    .then(Commands.literal('endless')
                        .executes(ctx => {
                            let seconds = Arguments.INTEGER.getResult(ctx, 'seconds');
                            let nearPlayer = Arguments.BOOLEAN.getResult(ctx, 'nearPlayer');
                            return setupGatewayCountdown(ctx, seconds, nearPlayer, "endless");
                        })
                    )
                )
            )
    );
});

// --- 2. GLOBAL TICK LISTENER ---
ServerEvents.tick(event => {
    // If disabled, short-circuit immediately to avoid consuming server execution cycles
    if (!SCRIPT_ENABLED) return;

    let server = event.server;
    let level = server.getLevel("minecraft:overworld");
    if (!level) return;

    let currentTick = server.tickCount;
    let currentDayTime = Number(level.dayTime());

    // --- AUTOMATED DAILY CHANCE ---
    if (currentDayTime % 24000 < 20 && (currentDayTime - lastDayTimeCheck) > 100) {
        lastDayTimeCheck = currentDayTime;

        if (globalCooldownDays > 0) {
            globalCooldownDays--;
        } else if (Math.random() <= SPAWN_CHANCE) {
            let overworldPlayers = [];
            server.players.forEach(p => {
                if (String(p.level.dimension).includes("overworld")) {
                    overworldPlayers.push(p);
                }
            });

            if (overworldPlayers.length > 0) {
                let targetPlayer = overworldPlayers[Math.floor(Math.random() * overworldPlayers.length)];
                let spawnPos = findValidSpawnPos(level, targetPlayer, false); 
                
                let totalGateways = NORMAL_GATEWAYS.length + ENDLESS_GATEWAYS.length;
                let roll = Math.floor(Math.random() * totalGateways);
                let chosenGatewayId = "";
                let gatewayType = "";

                if (roll < NORMAL_GATEWAYS.length) {
                    chosenGatewayId = NORMAL_GATEWAYS[roll];
                    gatewayType = "normal_gateway";
                } else {
                    chosenGatewayId = ENDLESS_GATEWAYS[roll - NORMAL_GATEWAYS.length];
                    gatewayType = "endless_gateway";
                }

                ACTIVE_COUNTDOWNS.push({
                    id: chosenGatewayId,
                    type: gatewayType,
                    x: Math.floor(spawnPos.x),
                    y: Math.floor(spawnPos.y),
                    z: Math.floor(spawnPos.z),
                    targetTick: currentTick + 2400, 
                    lastAnnouncedSecond: 121
                });

                server.tell(Text.of(MSG_INITIAL_WARNING));
            }
        }
    }

    // --- COUNTDOWN PROCESSING ---
    if (ACTIVE_COUNTDOWNS.length > 0) {
        for (let i = ACTIVE_COUNTDOWNS.length - 1; i >= 0; i--) {
            let active = ACTIVE_COUNTDOWNS[i];
            let ticksRemaining = active.targetTick - currentTick;
            let secondsRemaining = Math.ceil(ticksRemaining / 20);

            if (ticksRemaining <= 0) {
                try {
                    let displayTitle = formatGatewayName(active.id);
                    let nbtString = `{gate:"${active.id}",CustomName:'"${displayTitle}"'}`;
                    let spawnCommand = `execute in minecraft:overworld positioned ${active.x} ${active.y} ${active.z} run summon gateways:${active.type} ~ ~1 ~ ${nbtString}`;
                    
                    server.runCommandSilent(spawnCommand);

                    server.tell(Text.of(`§4[Rift Opened] A portal [${active.id}] has ripped open! `)
                        .append(Text.of(`[X: ${active.x}, Y: ${active.y}, Z: ${active.z}]`)
                            .gold()
                            .underlined(true)
                            .click({ action: 'run_command', value: `/ftbchunks waypoint add "Active Gateway" ${active.x} ${active.y} ${active.z}` }))
                        .append("§4 Click to add a waypoint via FTB Chunks!§r"));

                } catch (err) {
                    console.error("[Gateway Script Safeguard] Prevented a potential portal crash condition: " + err);
                    server.tell("§c[System Warning] A gateway assembly failed to form properly. Chrono-safeguards triggered to protect the server dimension!§r");
                }

                globalCooldownDays = COOLDOWN_DAYS;
                ACTIVE_COUNTDOWNS.splice(i, 1); 
                continue;
            }

            if (secondsRemaining !== active.lastAnnouncedSecond) {
                active.lastAnnouncedSecond = secondsRemaining;

                if (secondsRemaining === 60) {
                    server.tell(createClickableMessage("§eThe air grows heavy at", active.x, active.y, active.z, "... 60 seconds until gateway opening.§r"));
                } else if (secondsRemaining === 30) {
                    server.tell(createClickableMessage("§6Warning: Spatial rupture imminent at", active.x, active.y, active.z, "! 30 seconds remaining.§r"));
                } else if ([5, 4, 3, 2, 1].includes(secondsRemaining)) {
                    server.tell(createClickableMessage("§6Rift opening at", active.x, active.y, active.z, ` in ${secondsRemaining}...§r`));
                }
            }
        }
    }
});

function findValidSpawnPos(level, player, nearPlayer) {
    let pPos = player.blockPosition();
    
    let minD = nearPlayer ? 2 : MIN_DISTANCE;
    let maxD = nearPlayer ? 5 : MAX_DISTANCE;
    let attempts = nearPlayer ? 80 : 400; 
    
    for (let i = 0; i < attempts; i++) { 
        let angle = Math.random() * Math.PI * 2;
        let currentMaxDist = minD + ((maxD - minD) * (i / attempts));
        let distance = minD + Math.random() * (currentMaxDist - minD);
        
        let targetX = Math.floor(pPos.getX() + Math.cos(angle) * distance);
        let targetZ = Math.floor(pPos.getZ() + Math.sin(angle) * distance);
        
        let targetY = level.getHeight("MOTION_BLOCKING", targetX, targetZ);
        let checkPos = BlockPos(targetX, targetY, targetZ);

        if (isChunkClaimedByFTB(level, checkPos)) {
            continue; 
        }

        let blockCurrent = level.getBlock(checkPos);
        let blockAbove = level.getBlock(checkPos.above());

        if (level.canSeeSky(checkPos) && blockCurrent.air && blockAbove.air) {
            return checkPos; 
        }
    }

    let fallbackAngle = Math.random() * Math.PI * 2;
    let fallbackDist = nearPlayer ? 3 : MIN_DISTANCE;
    
    for (let radiusOffset = 0; radiusOffset < 2000; radiusOffset += 16) {
        let testX = Math.floor(pPos.getX() + Math.cos(fallbackAngle) * (fallbackDist + radiusOffset));
        let testZ = Math.floor(pPos.getZ() + Math.sin(fallbackAngle) * (fallbackDist + radiusOffset));
        let testY = level.getHeight("MOTION_BLOCKING", testX, testZ);
        let fallbackPos = BlockPos(testX, testY, testZ);
        
        if (!isChunkClaimedByFTB(level, fallbackPos)) {
            return fallbackPos;
        }
    }
    
    return BlockPos(pPos.getX(), level.getHeight("MOTION_BLOCKING", pPos.getX(), pPos.getZ()), pPos.getZ());
}