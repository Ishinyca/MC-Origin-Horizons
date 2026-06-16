ServerEvents.recipes(event => {
    event.recipes.oritech
        .assembler()
        .itemInputs(['oritech:machine_speed_addon', 'oritech:machine_speed_addon', 'mekanism:block_steel', 'oritech:machine_extender'])
        .itemOutputs('oritechthings:addon_block_speed_tier_2')
})