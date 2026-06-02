ServerEvents.recipes(event => {
    // Stone Wand - Tier 1
    event.recipes.ars_nouveau.imbuement(
        'ars_nouveau:manipulation_essence',
        'constructionwand:stone_wand',
        500,
        [
            'minecraft:stick',
            'minecraft:stick',
            'minecraft:stone',
        ]
    ).id('constructionwand:stone_wand')

    // Iron Wand - Tier 2
    event.recipes.ars_nouveau.imbuement(
        'constructionwand:stone_wand',
        'constructionwand:iron_wand',
        650,
        [
            'minecraft:iron_ingot',
            'ars_nouveau:manipulation_essence',
            'justdirethings:polymorphic_catalyst'
        ]
    ).id('constructionwand:iron_wand')

    // Diamond Wand - Tier 3
    event.recipes.ars_nouveau.enchanting_apparatus(
        [
            'minecraft:diamond',
            'justdirethings:refined_t2_fluid_bucket',
            'ars_nouveau:manipulation_essence',
            'ars_nouveau:abjuration_essence'
        ],
        'constructionwand:iron_wand',
        'constructionwand:diamond_wand',
        800,
        true // keep nbt of reagent
    ).id('constructionwand:diamond_wand')

    // Netherite Wand - Tier 4
    event.recipes.ars_nouveau.enchanting_apparatus(
        [
            'minecraft:netherite_ingot',
            'justdirethings:refined_t3_fluid_bucket',
            'ars_nouveau:manipulation_essence',
            'ars_nouveau:abjuration_essence'
        ],
        'constructionwand:diamond_wand',
        'constructionwand:netherite_wand',
        950,
        true
    ).id('constructionwand:netherite_wand')

    // Infinity Wand - Tier 5
    event.recipes.draconicevolution.fusion_crafting(
        'constructionwand:netherite_wand',
        [
            'minecraft:nether_star',
            'justdirethings:refined_t4_fluid_bucket',
            'ars_nouveau:manipulation_essence',
            'ars_nouveau:abjuration_essence',
            'ars_nouveau:conjuration_essence',
            'ars_elemancy:mire_essence',
            'mekanism:teleportation_core',
            'draconicevolution:dragon_heart',
            'extendedae_plus:quantum_storage_core',
            'projecte:klein_star_omega'
        ],
        'constructionwand:infinity_wand',
        'draconic',
        10000069
    ).id('constructionwand:infinity_wand')
})
