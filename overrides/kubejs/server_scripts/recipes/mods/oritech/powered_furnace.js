ServerEvents.recipes(event => {
	event.shaped(
		Item.of('oritech:powered_furnace_block'),
		[
			'AAA',
			'BCB',
			'DED'
		],
		{
			A: 'minecraft:copper_ingot',
			B: '#c:silicon',
			C: 'oritech:electrum_ingot',
			D: 'oritech:magnetic_coil',
            E: 'minecraft:furnace'
		}
	).id('oritech:crafting/electricfurnace')
});
