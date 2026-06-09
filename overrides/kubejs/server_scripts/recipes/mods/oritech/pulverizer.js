const pulverizerRemovals = [
    'oritech:pulverizer/compat/mekanism/dust/lapis',
    'oritech:pulverizer/compat/enderio/dust/lapis',
]

ServerEvents.recipes(event => {
  pulverizerRemovals.forEach( (recipeId) => {
    event.remove({id: recipeId})
  });

  event.recipes.oritech
    .pulverizer()
    .itemInputs("minecraft:lapis_lazuli")
    .itemOutputs('mekanism:dust_lapis_lazuli')
    .time(200)
});
