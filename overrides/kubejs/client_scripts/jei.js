// Reference: https://kubejs.com/wiki/events/RecipeViewerEvents

const hide_jei_items = [
    // Mekanism
    'mekanism:mekasuit_helmet',
    'mekanism:mekasuit_bodyarmor',
    'mekanism:mekasuit_pants',
    'mekanism:mekasuit_boots',
    'mekanism:meka_tool',
    '#mekanism:unit',
    'sophisticatedstorage:basic_tier_upgrade',
    'sophisticatedstorage:basic_to_iron_tier_upgrade',
    'sophisticatedstorage:basic_to_gold_tier_upgrade',
    'sophisticatedstorage:basic_to_diamond_tier_upgrade',
    'sophisticatedstorage:basic_to_netherite_tier_upgrade',
    'sophisticatedstorage:copper_to_gold_tier_upgrade',
    'sophisticatedstorage:copper_to_diamond_tier_upgrade',
    'sophisticatedstorage:copper_to_netherite_tier_upgrade',
    'sophisticatedstorage:iron_to_diamond_tier_upgrade',
    'sophisticatedstorage:iron_to_netherite_tier_upgrade',
    'sophisticatedstorage:gold_to_netherite_tier_upgrade',
    'magic_coins:prosperity_amulet',
    'constructionwand:void_sack',
    'constructionwand:core_angel',
    'constructionwand:core_destruction',
]

RecipeViewerEvents.removeEntries('item', event => {
    hide_jei_items.forEach(item =>{
        event.remove(item)
    })
})

// Add Daily Shop
RecipeViewerEvents.addEntries('item', event => {
    event.add('dailyshop:daily_shop')
})