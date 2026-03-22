ServerEvents.recipes(event => {
	event.shaped(
		Item.of('cataclysm:mech_eye'),
		[
			'ABA',
			'BCB',
			'ABA'
		],
		{
			A: 'minecraft:redstone_block',
			B: 'minecraft:iron_block',
			C: 'minecraft:ender_eye'
		}
	)

	event.shaped(
		Item.of('cataclysm:flame_eye'),
		[
			'ABA',
			'DCD',
			'ABA'
		],
		{
			A: 'minecraft:netherite_block',
			B: 'minecraft:blaze_rod',
			C: 'minecraft:ender_eye',
			D: 'minecraft:soul_sand'
		}
	)

	//event.shaped(
	//	Item.of('cataclysm:void_eye'),
	//	[
	//		'ABA',
	//		'BCB',
	//		'ABA'
	//	],
	//	{
	//		A: 'minecraft:redstone_block',
	//		B: 'minecraft:iron_block',
	//		C: 'minecraft:ender_eye'
	//	}
	//)

	event.shaped(
		Item.of('cataclysm:monstrous_eye'),
		[
			'ABA',
			'BCB',
			'ABA'
		],
		{
			A: 'minecraft:netherite_block',
			B: 'minecraft:crying_obsidian',
			C: 'minecraft:ender_eye'
		}
	)

	event.shaped(
		Item.of('cataclysm:abyss_eye'),
		[
			'ADA',
			'BCB',
			'ADA'
		],
		{
			A: 'enderio:reinforced_obsidian_block',
			B: 'minecraft:netherite_block',
			C: 'minecraft:ender_eye',
			D: 'minecraft:coal_block'
		}
	)

	event.shaped(
		Item.of('cataclysm:desert_eye'),
		[
			'ABD',
			'ECF',
			'DBG'
		],
		{
			A: 'minecraft:gold_block',
			B: 'minecraft:chiseled_sandstone',
			C: 'minecraft:ender_eye',
			D: 'minecraft:emerald_block',
			E: 'minecraft:dead_bush',
			F: 'minecraft:cactus',
			G: 'minecraft:bone_block'
		}
	)

	event.shaped(
		Item.of('cataclysm:cursed_eye'),
		[
			'ADA',
			'BCB',
			'AEA'
		],
		{
			A: 'minecraft:gold_block',
			B: 'minecraft:phantom_membrane',
			C: 'minecraft:ender_eye',
			D: 'immersive_armors:bone_helmet',
			E: 'minecraft:rotten_flesh'
		}
	)

	event.shaped(
		Item.of('cataclysm:storm_eye'),
		[
			'AEA',
			'BCB',
			'DFD'
		],
		{
			A: 'minecraft:prismarine_bricks',
			B: 'minecraft:diamond_block',
			C: 'minecraft:ender_eye',
			D: 'minecraft:sea_lantern',
			E: 'minecraft:lightning_rod',
			F: 'minecraft:water_bucket'
		}
	)

})