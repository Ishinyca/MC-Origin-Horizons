ServerEvents.recipes(event => {
	// Teleportation Core
	event.shaped(
		Item.of('mekanism:teleportation_core'),
		[
			'ABA',
			'CDC',
			'ABA'
		],
		{
			A: 'minecraft:chorus_fruit',
			B: 'minecraft:diamond_block',
			C: 'mekanism:alloy_atomic',
			D: 'minecraft:netherite_ingot'
		}
	)

	// Quantum Entangloporter
	event.shaped(
		Item.of('mekanism:quantum_entangloporter'),
		[
			'ABA',
			'CDC',
			'ABA'
		],
		{
			A: 'minecraft:chorus_fruit',
			B: 'mekanism:ultimate_control_circuit',
			C: 'mekanism:alloy_atomic',
			D: 'mekanism:teleportation_core'
		}
	)
})