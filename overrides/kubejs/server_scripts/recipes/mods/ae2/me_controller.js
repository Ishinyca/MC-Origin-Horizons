// ME Controller will be created via Ars Nouveau

ServerEvents.recipes(event => {
    event.remove({output:'ae2:controller'})
    event.recipes.ars_nouveau.enchanting_apparatus(
        [
            'ae2:smooth_sky_stone_block',
            'ae2:smooth_sky_stone_block',
            'ae2:smooth_sky_stone_block',
            'ae2:smooth_sky_stone_block',
            'ae2:fluix_crystal',
            'ae2:fluix_crystal',
            'ae2:fluix_crystal',
            'ae2:fluix_crystal'
        ], //input
        'ae2:not_so_mysterious_cube', // reagent
        'ae2:controller', // output
        2000
    ).id('ae2:controller')
})