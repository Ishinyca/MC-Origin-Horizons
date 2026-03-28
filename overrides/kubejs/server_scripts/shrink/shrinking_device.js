ServerEvents.recipes(event => {
	// Shrinking Device
	event.shaped(
		Item.of('shrink:shrinking_device'),
		[
			'ABA',
			'ACA',
			'ADA'
		],
		{
			A: 'mekanism:ingot_steel',
			B: 'projecte:dark_matter',
			C: 'ars_nouveau:source_gem_block',
			D: 'minecraft:stone_button'
		}
	)
})