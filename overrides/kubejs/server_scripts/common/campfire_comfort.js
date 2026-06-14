// ==========================================
//           CAMPFIRE COMFORT CONFIG
// ==========================================

// How often (in seconds) the script checks for campfires and reapplies the effect.
// NOTE: For best performance, 1 to 5 seconds is recommended. 1 second is safest 
// because it prevents the effect icon from flickering in the player's UI.
const CHECK_FREQUENCY_SECONDS = 5; 

// How long (in seconds) the Comfort effect lasts once given to the player.
// NOTE: This should ALWAYS be higher than the CHECK_FREQUENCY. If your check frequency
// is 1 second, making this 3 or 4 seconds ensures a smooth buffer so the effect 
// doesn't accidentally run out between ticks.
const COMFORT_DURATION_SECONDS = 30;

// The search radius around the player.
// This defines how many blocks away from the player (in all directions) the script will scan.
// NOTE: Keep this between 3 and 8. Setting this too high (e.g., 16+) will drastically
// increase the number of blocks scanned and will cause server lag (TPS drops).
const SEARCH_RADIUS = 4;

// ==========================================
//                 LOGIC CODE
// ==========================================

ServerEvents.tick(event => {
    // Convert seconds to ticks (1 second = 20 ticks)
    let tickFrequency = CHECK_FREQUENCY_SECONDS * 20;

    // A ticking counter that throttles the script to only run based on the frequency config
    if (event.server.getTickCount() % tickFrequency !== 0) return;

    // Get all online players
    let players = event.server.getPlayerList().getPlayers();

    players.forEach(player => {
        let level = player.level;
        let pPos = player.blockPosition();
        let foundCampfire = false;
        
        let r = SEARCH_RADIUS;

        // Scan the cuboid area around the player based on configured radius
        // It scans horizontally (-r to +r) and vertically 3 blocks up/down
        for (let x = -r; x <= r; x++) {
            for (let y = -3; y <= 3; y++) {
                for (let z = -r; z <= r; z++) {
                    let blockState = level.getBlockState(pPos.offset(x, y, z));
                    let blockId = blockState.getBlock().getDescriptionId(); 

                    // Check if the block is any type of campfire
                    if (blockId.includes('campfire')) {
                        // Check if the campfire is lit
                        if (blockState.getValue(BlockProperties.LIT)) {
                            foundCampfire = true;
                            break;
                        }
                    }
                }
                if (foundCampfire) break;
            }
            if (foundCampfire) break;
        }

        // Apply the effect if a lit campfire is within the configured radius
        if (foundCampfire) {
            // effect give <player> <effect> <seconds> <amplifier> <hideParticles>
            player.runCommandSilent(`effect give @s farmersdelight:comfort ${COMFORT_DURATION_SECONDS} 0 true`);
        }
    });
});
