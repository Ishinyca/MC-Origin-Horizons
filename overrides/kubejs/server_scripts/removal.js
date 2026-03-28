const recipeIdsToRemove = [
	// ProjectE
	'projecte:transmutation_table',
	'projecte:transmutation_tablet',
	'projecte:divining_rod_1',
	'projecte:divining_rod_2',
	'projecte:divining_rod_3',
	'projecte:dm_pick',
	'projecte:dm_axe',
	'projecte:dm_shovel',
	'projecte:dm_hoe',
	'projecte:dm_shears',
	'projecte:dm_hammer',
	'projecte:rm_pick',
	'projecte:rm_axe',
	'projecte:rm_shovel',
	'projecte:rm_hoe',
	'projecte:rm_shears',
	'projecte:rm_hammer',
	'projecte:dm_sword',
	'projecte:rm_sword',
	'projecte:rm_katar',
	'projecte:rm_morning_star',
	'projectextended:dark_matter_trident',
	'projectextended:red_matter_trident',
	'projectextended:dark_matter_shield',
	'projectextended:red_matter_shield',
	'projecte:gem_helmet',
	'projecte:gem_chestplate',
	'projecte:gem_leggings',
	'projecte:gem_boots',
	'projecte:dm_helmet',
	'projecte:dm_chestplate',
	'projecte:dm_leggings',
	'projecte:dm_boots',
	'projecte:rm_helmet',
	'projecte:rm_chestplate',
	'projecte:rm_leggings',
	'projecte:rm_boots',

	// Sophisticated Storage
	'sophisticatedstorage:basic_tier_upgrade',
	'sophisticatedstorage:basic_to_copper_tier_upgrade',
	'sophisticatedstorage:basic_to_iron_tier_upgrade',
	
	// Mekanism
	/mekanism:factory\/.*/,
	'mekanism:metallurgic_infuser',
	'mekanism:mekasuit_helmet',
	'mekanism:mekasuit_bodyarmor',
	'mekanism:mekasuit_pants',
	'mekanism:mekasuit_boots',
	'mekanism:teleportation_core',
	'mekanism:quantum_entangloporter',

	// Cataclysm Eyes
	'cataclysm:mech_eye',
	'cataclysm:flame_eye',
	//'cataclysm:void_eye',
	'cataclysm:monstrous_eye',
	'cataclysm:abyss_eye',
	'cataclysm:desert_eye',
	'cataclysm:cursed_eye',
	'cataclysm:storm_eye',

	// Shrink
	'shrink:shrinking_device'
]

const recipeOutputToRemove = [
	'mekanism:basic_tier_installer',
	'mekanism:advanced_tier_installer',
	'mekanism:elite_tier_installer',
	'mekanism:ultimate_tier_installer',
	'sophisticatedstorage:chest',
	'#projecte:alchemical_bags'
]

ServerEvents.recipes(event => {
	recipeIdsToRemove.forEach ( (recipeId) => {
		event.remove({ id: recipeId })
	})

	recipeOutputToRemove.forEach( (recipeOutput) => {
		event.remove({ output: recipeOutput })
	})
})