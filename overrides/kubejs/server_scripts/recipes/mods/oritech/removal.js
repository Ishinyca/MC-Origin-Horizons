const duplicateOritechItems = [
    'oritech:compat/enderio/crafting/fluidpipe',
    'oritech:mixing/compat/create/duratium',
    'oritech:compat/enderio/alloy/duratium',
    'oritech:compat/immersiveengineering/alloying/duratium',
    'oritech:compat/immersiveengineering/arcalloying/duration',
    'oritech:compat/productivemetalworks/casting/ingot/duratium',
    'oritech:crafting/manualresin',
    'oritech:crafting/centrifugealt',
    'oritech:crafting/electricfurnacealt',
    'oritech:crafting/electricfurnace',
    'oritech:crafting/basicgen',

    // Oritech Biosteel - duplicate of steel
    'oritech:compat/productivemetalworks/melting/block/biosteel',
    'oritech:compat/productivemetalworks/alloying/biosteel',
    'oritech:compat/productivemetalworks/melting/ingot/biosteel',
    'oritech:compat/productivemetalworks/melting/dust/biosteel',
    'oritech:compat/mekanism/infusing/biosteel_dust',

    // Biosteel dust
    'oritech:pulverizer/biosteel',
    'oritech:grinder/biosteel',

    // oritech things
    'oritechthings:addon_block_speed_tier_2',
    'oritechthings:assembler/addon_block_speed_tier_2',
];

const removeOritechRecipesByOutput = [
    // Recipes to fix
    //'oritechthings:addon_block_speed_tier_2', // will replace the biosteel blcok to steel block
    'oritech:biosteel_block',
]

ServerEvents.recipes(event => {
    duplicateOritechItems.forEach(recipeId =>{
        event.remove({id:recipeId});
    });

    
    removeOritechRecipesByOutput.forEach ( (recipeOutput) => {
        event.remove({ output: recipeOutput })
    });
});
