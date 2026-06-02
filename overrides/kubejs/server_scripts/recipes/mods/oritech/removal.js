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
];

ServerEvents.recipes(event => {
    duplicateOritechItems.forEach(recipeId =>{
        event.remove({id:recipeId});
    });
});
