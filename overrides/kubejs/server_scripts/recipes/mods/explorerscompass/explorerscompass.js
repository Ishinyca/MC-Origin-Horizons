// Nature's Compass will be created via Ars Nouveau

ServerEvents.recipes(event => {
    // Normal crafting
    event.remove({ id: 'explorerscompass:explorers_compass' })
    event.recipes.ars_nouveau.enchanting_apparatus(
        [
            'minecraft:nether_star',
            'minecraft:netherite_block',
            'minecraft:netherite_block',
            'minecraft:cobweb',
            'minecraft:cobweb',
            'twilightforest:giant_cobblestone',
        ], //input
        'tempad:location_broadcaster', // reagent
        'explorerscompass:explorerscompass', // output
        5000
    ).id('explorerscompass:explorers_compass')

    // Repair
    event.remove({ id: 'naturescompass:' })
    event.recipes.ars_nouveau.enchanting_apparatus(
        [
            'explorerscompass:explorerscompass',
            'minecraft:netherite_ingot',
            'minecraft:netherite_ingot',
        ], //input
        'twilightforest:magic_map_focus', // reagent
        'explorerscompass:explorerscompass', // output
        2500
    ).id('explorerscompass:repair_explorers_compass')
})
