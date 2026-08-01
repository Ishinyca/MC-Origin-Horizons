// Nature's Compass will be created via Ars Nouveau

ServerEvents.recipes(event => {
    // Normal crafting
    event.remove({ id: 'naturescompass:natures_compass' })
    event.recipes.ars_nouveau.enchanting_apparatus(
        [
            '#minecraft:saplings',
            '#minecraft:saplings',
            'twilightforest:giant_log',
            'twilightforest:giant_log',
            'twilightforest:giant_obsidian',
            'twilightforest:magic_map_focus',
        ], //input
        'tempad:location_broadcaster', // reagent
        'naturescompass:naturescompass', // output
        5000
    ).id('naturescompass:natures_compass')

    // Repair
    event.remove({ id: 'naturescompass:repair_natures_compass' })
    event.recipes.ars_nouveau.enchanting_apparatus(
        [
            'naturescompass:naturescompass',
            '#minecraft:saplings',
            '#minecraft:saplings',
        ], //input
        'twilightforest:magic_map_focus', // reagent
        'naturescompass:naturescompass', // output
        2500
    ).id('naturescompass:repair_natures_compass')
})
