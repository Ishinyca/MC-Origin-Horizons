const noCapture = "#c:capturing_not_supported"
const noFarming = "#c:spawning_not_supported"

ServerEvents.tags("entity_type", event => {

    // Bosses to Blacklist
    event.add("forge:bosses", [
        "bosses_of_mass_destruction:lich",
        "bosses_of_mass_destruction:gauntlet",
        "bosses_of_mass_destruction:void_blossom",
        "bosses_of_mass_destruction:obsidilith",
        "mowziesmobs:ferrous_wroughtnaut",
        "mowziesmobs:frostmaw",
        "mowziesmobs:umvuthi",
        "mowziesmobs:sculptor",
        "irons_spellbooks:dead_king",
        "irons_spellbooks:dead_king_corpse",
    ])

    // Say No to Capturing these specific mobs
    event.add("c:capturing_not_supported", [
        "#forge:bosses",
        //"minecraft:warden", // looks like Warden is already blacklisted
        "irons_spellbooks:citadel_keeper",
        "irons_spellbooks:pyromancer",
        "irons_spellbooks:archevoker",
        "irons_spellbooks:apothecarist",
        "irons_spellbooks:cryomancer",
        "irons_spellbooks:cursed_armor_stand",
        "irons_spellbooks:priest",
        "irons_spellbooks:cultist",
        /mutantmonsters:.*/,
        /ars_nouveau:familiar_.*/,
        /ars_nouveau:.*_weald_walker/,
        /ars_elemental:.*_familiar/,
        "cataclysm:netherite_ministrosity",
        "cataclysm:the_baby_leviathan",
        "cataclysm:modern_remnant",
        "dmr:dragon",
        "aether:mimic",
        "artifacts:mimic",
        "aether:valkyrie",
    ])


    // Ars Nouveau Containment Jar
    event.add("ars_nouveau:jar_blacklist", [
        noCapture
    ])

    // EnderIO
    event.add("enderio:soul_vial_blacklist", [
        noCapture
    ])

    // Nope to spawning too along with Capturing Inheritance
    event.add("c:spawning_not_supported", [
        noCapture,
        "minecraft:evoker",
        "minecraft:elder_guardian",
    ])

    // No farming for Ars Nouveau Drygmy
    event.add("ars_nouveau:drygmy_blacklist", [
        noFarming
    ])

    // Need to add it to the EnderIO Blacklist
    event.add("enderio:spawner_blacklist", [
        noFarming
    ])
})
