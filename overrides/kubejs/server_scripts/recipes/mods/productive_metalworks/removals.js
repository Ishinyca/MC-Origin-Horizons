const moltenOreIdRemoval = [
    // Unused
    'productivemetalworks:alloying/molten_invar',
    
    // Comments after are the original values
    // Gold Related
    'productivemetalworks:melting/raw_materials/gold', // 180 mb
    'productivemetalworks:melting/storage_blocks/raw_gold', // 1620 mb
    'productivemetalworks:melting/ores/gold', // 270 mb
    'productivemetalworks:melting/golden_horse_armor', // 540 mb

    // Redstone related
    'productivemetalworks:melting/ores/redstone', //500 mb

    // Emerald related
    'productivemetalworks:melting/ores/emerald', // 300 mb
    
    // Diamond related
    'productivemetalworks:melting/gems/diamond', // 100 mb - okay
    'productivemetalworks:melting/dusts/diamond', // 100 mb - okay
    'productivemetalworks:melting/diamond_horse_armor', // 600 mb
    'productivemetalworks:melting/ores/diamond', // 300 mb
    'productivemetalworks:melting/storage_blocks/diamond', // 900 mb - okay

    // Lapis related
    'productivemetalworks:melting/ores/lapis', // 500 mb

    // Nether quartz related
    'productivemetalworks:melting/ores/quarts', // 300 mb

    // Carbon related (coal/charcoal/etc)
    'productivemetalworks:melting/ores/coals', // 300 mb

    // Ancient Debris related
    'productivemetalworks:melting/ancient_debris', // 200 mb

    // Molten Blaze related
    'productivemetalworks:melting/blaze_rod', // 400 mb

    // Iron related
    'productivemetalworks:melting/raw_materials/iron', // 180 mb
    'productivemetalworks:melting/storage_blocks/raw_iron', // 1620 mb
    'productivemetalworks:melting/iron_horse_armor', // 540 mb
    'productivemetalworks:melting/ores/iron', // 270 mb

    // Copper related
    'productivemetalworks:melting/ores/copper', // 270 mb
    'productivemetalworks:melting/storage_blocks/raw_copper', // 1620 mb
    'productivemetalworks:melting/raw_materials/copper', // 180 mb

    // Aluminum related
    'productivemetalworks:melting/storage_blocks/raw_aluminum', // 1620 mb
    'productivemetalworks:melting/ores/aluminum', // 270 mb
    'productivemetalworks:melting/raw_materials/aluminum', // 180 mb

    // Lead related
    'productivemetalworks:melting/ores/lead', // 270 mb
    'productivemetalworks:melting/storage_blocks/raw_lead', // 1620 mb
    'productivemetalworks:melting/raw_materials/lead', // 180 mb

    // Nickel related
    'productivemetalworks:melting/ores/nickel', // 270 mb
    'productivemetalworks:melting/raw_materials/nickel', // 180 mb
    'productivemetalworks:melting/storage_blocks/raw_nickel', // 1620 mb

    // Osmium related
    'productivemetalworks:melting/storage_blocks/raw_osmium', // 1620 mb
    'productivemetalworks:melting/raw_materials/osmium', // 180 mb
    'productivemetalworks:melting/ores/osmium', // 270 mb

    // Platinum related
    'productivemetalworks:melting/storage_blocks/raw_platinum', // 1620 mb
    'productivemetalworks:melting/ores/platinum', // 270 mb
    'productivemetalworks:melting/raw_materials/platinum', // 180 mb

    // Silver related
    'productivemetalworks:melting/ores/silver', // 270 mb
    'productivemetalworks:melting/raw_materials/silver', // 180 mb
    'productivemetalworks:melting/storage_blocks/raw_silver', // 1620 mb

    // Tin related
    'productivemetalworks:melting/ores/tin', // 270 mb
    'productivemetalworks:melting/raw_materials/tin', // 180 mb
    'productivemetalworks:melting/storage_blocks/raw_tin', // 1620 mb

    // Uranium related
    'productivemetalworks:melting/raw_materials/uranium', // 180 mb
    'productivemetalworks:melting/ores/uranium', // 270 mb
    'productivemetalworks:melting/storage_blocks/raw_uranium', // 1620 mb

    // Zinc related
    'productivemetalworks:melting/ores/zinc', // 270 mb
    'productivemetalworks:melting/storage_blocks/raw_zinc', // 1620 mb
    'productivemetalworks:melting/raw_materials/zinc', // 180 mb

    // Steel related
    'productivemetalworks:melting/raw_materials/steel', // 180 mb
    'productivemetalworks:melting/ores/steel', // 270 mb
    'productivemetalworks:melting/storage_blocxks/raw_steel', // 1620 mb

    
]

ServerEvents.recipes(event => {
	moltenOreIdRemoval.forEach ( (recipeId) => {
		event.remove({ id: recipeId })
	});
});
