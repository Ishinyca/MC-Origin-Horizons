const fragmentForgeRemovals = [
    'oritech:grinder/compat/mekanism/dust/lapis',
    'oritech:grinder/compat/enderio/dust/lapis',
]

ServerEvents.recipes(event => {
  fragmentForgeRemovals.forEach( (recipeId) => {
    event.remove({id: recipeId})
  });

  event.recipes.oritech
    .grinder()
    .itemInputs("minecraft:lapis_lazuli")
    .itemOutputs('mekanism:dust_lapis_lazuli')
    .time(120)
});
