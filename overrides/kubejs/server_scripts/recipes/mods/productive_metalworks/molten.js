// ----- REGULAR 90 BASE -----
const base_add = 30 // 3 nuggets
const base_cost = 90 

const raw_9x9_block = base_cost * 9

// Outputs
const final_raw_ore_output = base_cost + base_add
const final_reg_ore_output = base_cost * 2
const final_9x9_block_output = raw_9x9_block + (base_add * 9)

// ----- REGULAR 100 BASE -----
const base_100_cost = 100
const base_100x9_cost = base_100_cost * 9

const final_reg_100x2_output = base_100_cost * 2
const final_reg_100x3_output = base_100_cost * 3

// ----- TEMPERATURES -----
const temp_1000 = 1000
const temp_1200 = 1000


ServerEvents.recipes((event) => {
    // ==================== GOLD ==================
    event.custom({
        type: 'productivemetalworks:item_melting',
        ingredient: {
            item: 'minecraft:raw_gold',
        },
        maximum_temperature: 0,
        minimum_temperature: 1000,
        result: [
            {
                amount: final_raw_ore_output,
                id: 'productivemetalworks:molten_gold',
            },
        ],
    }).id('productivemetalworks:melting/raw_materials/gold')

    event.custom({
        type: 'productivemetalworks:item_melting',
        ingredient: {
            item: 'minecraft:raw_gold_block',
        },
        maximum_temperature: 0,
        minimum_temperature: 1000,
        result: [
            {
                amount: final_9x9_block_output,
                id: 'productivemetalworks:molten_gold',
            },
        ],
    }).id('productivemetalworks:melting/storage_blocks/raw_gold')
    
    event.custom({
        type: 'productivemetalworks:item_melting',
        ingredient: {
            tag: 'c:ores/gold',
        },
        maximum_temperature: 0,
        minimum_temperature: 1000,
        result: [
            {
                amount: final_reg_ore_output,
                id: 'productivemetalworks:molten_gold',
            },
        ],
    }).id('productivemetalworks:melting/ores/gold')

    event.custom({
        type: 'productivemetalworks:item_melting',
        ingredient: {
            item: 'minecraft:golden_horse_armor',
        },
        maximum_temperature: 0,
        minimum_temperature: temp_1200,
        result: [
            {
                amount: base_cost * 5,
                id: 'productivemetalworks:molten_gold',
            },
        ],
    }).id('productivemetalworks:melting/gold_horse_armor')

    // ==================== REDSTONE ==================
    event.custom({
        type: 'productivemetalworks:item_melting',
        ingredient: {
            tag: 'c:ores/redstone',
        },
        maximum_temperature: 0,
        minimum_temperature: 1000,
        result: [
            {
                amount: final_reg_100x3_output,
                id: 'productivemetalworks:molten_redstone',
            },
        ],
    }).id('productivemetalworks:melting/ores/redstone')

    // ==================== EMERALD ==================
    event.custom({
        type: 'productivemetalworks:item_melting',
        ingredient: {
            tag: 'c:ores/emerald',
        },
        maximum_temperature: 0,
        minimum_temperature: 1000,
        result: [
            {
                amount: final_reg_100x3_output,
                id: 'productivemetalworks:molten_emerald',
            },
        ],
    }).id('productivemetalworks:melting/ores/emerald')

    // ==================== DIAMOND ==================
    event.custom({
        type: 'productivemetalworks:item_melting',
        ingredient: {
            tag: 'c:ores/diamond',
        },
        maximum_temperature: 0,
        minimum_temperature: temp_1200,
        result: [
            {
                amount: final_reg_100x3_output,
                id: 'productivemetalworks:molten_diamond',
            },
        ],
    }).id('productivemetalworks:melting/ores/diamond')

    event.custom({
        type: 'productivemetalworks:item_melting',
        ingredient: {
            item: 'minecraft:diamond_horse_armor',
        },
        maximum_temperature: 0,
        minimum_temperature: temp_1200,
        result: [
            {
                amount: base_100_cost * 5,
                id: 'productivemetalworks:molten_diamond',
            },
        ],
    }).id('productivemetalworks:melting/diamond_horse_armor')

    event.custom({
        type: 'productivemetalworks:item_melting',
        ingredient: {
            item: 'minecraft:diamond',
        },
        maximum_temperature: 0,
        minimum_temperature: temp_1200,
        result: [
            {
                amount: base_100_cost,
                id: 'productivemetalworks:molten_diamond',
            },
        ],
    }).id('productivemetalworks:melting/gems/diamond')

    event.custom({
        type: 'productivemetalworks:item_melting',
        ingredient: {
            tag: 'c:dusts/diamond',
        },
        maximum_temperature: 0,
        minimum_temperature: temp_1200,
        result: [
            {
                amount: base_100_cost,
                id: 'productivemetalworks:molten_diamond',
            },
        ],
    }).id('productivemetalworks:melting/dusts/diamond')
    event.custom({
        type: 'productivemetalworks:item_melting',
        ingredient: {
            item: 'minecraft:diamond_block',
        },
        maximum_temperature: 0,
        minimum_temperature: temp_1200,
        result: [
            {
                amount: base_100x9_cost,
                id: 'productivemetalworks:molten_diamond',
            },
        ],
    }).id('productivemetalworks:melting/gems/diamond')

    // ==================== LAPIS ==================
    event.custom({
        type: 'productivemetalworks:item_melting',
        ingredient: {
            tag: 'c:ores/lapis',
        },
        maximum_temperature: 0,
        minimum_temperature: temp_1200,
        result: [
            {
                amount: final_reg_100x3_output,
                id: 'productivemetalworks:molten_lapis',
            },
        ],
    }).id('productivemetalworks:melting/ores/lapis')

    // ==================== NETHER QUARTZ ==================
    event.custom({
        type: 'productivemetalworks:item_melting',
        ingredient: {
            tag: 'c:ores/quartz',
        },
        maximum_temperature: 0,
        minimum_temperature: temp_1000,
        result: [
            {
                amount: final_reg_100x2_output,
                id: 'productivemetalworks:molten_quartz',
            },
        ],
    }).id('productivemetalworks:melting/ores/quarts')

    // ==================== CARBON ==================
    event.custom({
        type: 'productivemetalworks:item_melting',
        ingredient: {
            tag: 'c:ores/coal',
        },
        maximum_temperature: 0,
        minimum_temperature: temp_1000,
        result: [
            {
                amount: final_reg_100x2_output,
                id: 'productivemetalworks:molten_carbon',
            },
        ],
    }).id('productivemetalworks:melting/ores/coals')

    // ==================== ANCIENT DEBRIS ==================
    event.custom({
        type: 'productivemetalworks:item_melting',
        ingredient: {
            tag: 'c:ores/netherite_scrap',
        },
        maximum_temperature: 0,
        minimum_temperature: temp_1000,
        result: [
            {
                amount: base_100_cost,
                id: 'productivemetalworks:molten_ancient_debris',
            },
        ],
    }).id('productivemetalworks:melting/ancient_debris')

    // ==================== MOLTEN BLAZE ==================
    event.custom({
        type: 'productivemetalworks:item_melting',
        ingredient: {
            tag: 'c:rods/blaze',
        },
        maximum_temperature: 0,
        minimum_temperature: temp_1000,
        result: [
            {
                amount: final_reg_100x3_output,
                id: 'productivemetalworks:molten_blaze',
            },
        ],
    }).id('productivemetalworks:melting/blaze_rod')

    // ==================== IRON ==================
    event.custom({
        type: 'productivemetalworks:item_melting',
        ingredient: {
            item: 'minecraft:raw_iron',
        },
        maximum_temperature: 0,
        minimum_temperature: 1000,
        result: [
            {
                amount: final_raw_ore_output,
                id: 'productivemetalworks:molten_iron',
            },
        ],
    }).id('productivemetalworks:melting/raw_materials/iron')

    event.custom({
        type: 'productivemetalworks:item_melting',
        ingredient: {
            item: 'minecraft:raw_iron_block',
        },
        maximum_temperature: 0,
        minimum_temperature: 1000,
        result: [
            {
                amount: final_9x9_block_output,
                id: 'productivemetalworks:molten_iron',
            },
        ],
    }).id('productivemetalworks:melting/storage_blocks/raw_iron')
    
    event.custom({
        type: 'productivemetalworks:item_melting',
        ingredient: {
            tag: 'c:ores/iron',
        },
        maximum_temperature: 0,
        minimum_temperature: 1000,
        result: [
            {
                amount: final_reg_ore_output,
                id: 'productivemetalworks:molten_iron',
            },
        ],
    }).id('productivemetalworks:melting/ores/iron')

    event.custom({
        type: 'productivemetalworks:item_melting',
        ingredient: {
            item: 'minecraft:iron_horse_armor',
        },
        maximum_temperature: 0,
        minimum_temperature: temp_1000,
        result: [
            {
                amount: base_cost * 5,
                id: 'productivemetalworks:molten_iron',
            },
        ],
    }).id('productivemetalworks:melting/iron_horse_armor')

    // ==================== COPPER ==================
    event.custom({
        type: 'productivemetalworks:item_melting',
        ingredient: {
            item: 'minecraft:raw_copper',
        },
        maximum_temperature: 0,
        minimum_temperature: 1000,
        result: [
            {
                amount: final_raw_ore_output,
                id: 'productivemetalworks:molten_copper',
            },
        ],
    }).id('productivemetalworks:melting/raw_materials/copper')

    event.custom({
        type: 'productivemetalworks:item_melting',
        ingredient: {
            item: 'minecraft:raw_copper_block',
        },
        maximum_temperature: 0,
        minimum_temperature: 1000,
        result: [
            {
                amount: final_9x9_block_output,
                id: 'productivemetalworks:molten_copper',
            },
        ],
    }).id('productivemetalworks:melting/storage_blocks/raw_copper')
    
    event.custom({
        type: 'productivemetalworks:item_melting',
        ingredient: {
            tag: 'c:ores/copper',
        },
        maximum_temperature: 0,
        minimum_temperature: 1000,
        result: [
            {
                amount: final_reg_ore_output,
                id: 'productivemetalworks:molten_copper',
            },
        ],
    }).id('productivemetalworks:melting/ores/copper')

    // ==================== ALUMINUM ==================
    event.custom({
        type: 'productivemetalworks:item_melting',
        ingredient: {
            item: 'immersiveengineering:raw_aluminum',
        },
        maximum_temperature: 0,
        minimum_temperature: 1000,
        result: [
            {
                amount: final_raw_ore_output,
                id: 'productivemetalworks:molten_aluminum',
            },
        ],
    }).id('productivemetalworks:melting/raw_materials/aluminum')

    event.custom({
        type: 'productivemetalworks:item_melting',
        ingredient: {
            item: 'immersiveengineering:raw_block_aluminum',
        },
        maximum_temperature: 0,
        minimum_temperature: 1000,
        result: [
            {
                amount: final_9x9_block_output,
                id: 'productivemetalworks:molten_aluminum',
            },
        ],
    }).id('productivemetalworks:melting/storage_blocks/raw_aluminum')
    
    event.custom({
        type: 'productivemetalworks:item_melting',
        ingredient: {
            tag: 'c:ores/aluminum',
        },
        maximum_temperature: 0,
        minimum_temperature: 1000,
        result: [
            {
                amount: final_reg_ore_output,
                id: 'productivemetalworks:molten_aluminum',
            },
        ],
    }).id('productivemetalworks:melting/ores/aluminum')

    // ==================== LEAD ==================
    event.custom({
        type: 'productivemetalworks:item_melting',
        ingredient: {
            item: 'mekanism:raw_lead',
        },
        maximum_temperature: 0,
        minimum_temperature: 1000,
        result: [
            {
                amount: final_raw_ore_output,
                id: 'productivemetalworks:molten_lead',
            },
        ],
    }).id('productivemetalworks:melting/raw_materials/lead')

    event.custom({
        type: 'productivemetalworks:item_melting',
        ingredient: {
            item: 'mekanism:block_raw_lead',
        },
        maximum_temperature: 0,
        minimum_temperature: 1000,
        result: [
            {
                amount: final_9x9_block_output,
                id: 'productivemetalworks:molten_lead',
            },
        ],
    }).id('productivemetalworks:melting/storage_blocks/raw_lead')
    
    event.custom({
        type: 'productivemetalworks:item_melting',
        ingredient: {
            tag: 'c:ores/lead',
        },
        maximum_temperature: 0,
        minimum_temperature: 1000,
        result: [
            {
                amount: final_reg_ore_output,
                id: 'productivemetalworks:molten_lead',
            },
        ],
    }).id('productivemetalworks:melting/ores/lead')

    // ==================== NICKEL ==================
    event.custom({
        type: 'productivemetalworks:item_melting',
        ingredient: {
            item: 'oritech:raw_nickel',
        },
        maximum_temperature: 0,
        minimum_temperature: 1000,
        result: [
            {
                amount: final_raw_ore_output,
                id: 'productivemetalworks:molten_nickel',
            },
        ],
    }).id('productivemetalworks:melting/raw_materials/nickel')

    event.custom({
        type: 'productivemetalworks:item_melting',
        ingredient: {
            item: 'oritech:raw_nickel_block',
        },
        maximum_temperature: 0,
        minimum_temperature: 1000,
        result: [
            {
                amount: final_9x9_block_output,
                id: 'productivemetalworks:molten_nickel',
            },
        ],
    }).id('productivemetalworks:melting/storage_blocks/raw_nickel')
    
    event.custom({
        type: 'productivemetalworks:item_melting',
        ingredient: {
            tag: 'c:ores/nickel',
        },
        maximum_temperature: 0,
        minimum_temperature: 1000,
        result: [
            {
                amount: final_reg_ore_output,
                id: 'productivemetalworks:molten_nickel',
            },
        ],
    }).id('productivemetalworks:melting/ores/nickel')

    // ==================== OSMIUM ==================
    event.custom({
        type: 'productivemetalworks:item_melting',
        ingredient: {
            item: 'mekanism:raw_osmium',
        },
        maximum_temperature: 0,
        minimum_temperature: 1000,
        result: [
            {
                amount: final_raw_ore_output,
                id: 'productivemetalworks:molten_osmium',
            },
        ],
    }).id('productivemetalworks:melting/raw_materials/osmium')

    event.custom({
        type: 'productivemetalworks:item_melting',
        ingredient: {
            item: 'mekanism:block_raw_osmium',
        },
        maximum_temperature: 0,
        minimum_temperature: 1000,
        result: [
            {
                amount: final_9x9_block_output,
                id: 'productivemetalworks:molten_osmium',
            },
        ],
    }).id('productivemetalworks:melting/storage_blocks/raw_osmium')
    
    event.custom({
        type: 'productivemetalworks:item_melting',
        ingredient: {
            tag: 'c:ores/osmium',
        },
        maximum_temperature: 0,
        minimum_temperature: 1000,
        result: [
            {
                amount: final_reg_ore_output,
                id: 'productivemetalworks:molten_osmium',
            },
        ],
    }).id('productivemetalworks:melting/ores/osmium')

    // ==================== PLATINUM ==================
    event.custom({
        type: 'productivemetalworks:item_melting',
        ingredient: {
            item: 'oritech:raw_platinum',
        },
        maximum_temperature: 0,
        minimum_temperature: 1000,
        result: [
            {
                amount: final_raw_ore_output,
                id: 'productivemetalworks:molten_platinum',
            },
        ],
    }).id('productivemetalworks:melting/raw_materials/platinum')

    event.custom({
        type: 'productivemetalworks:item_melting',
        ingredient: {
            item: 'oritech:raw_platinum_block',
        },
        maximum_temperature: 0,
        minimum_temperature: 1000,
        result: [
            {
                amount: final_9x9_block_output,
                id: 'productivemetalworks:molten_platinum',
            },
        ],
    }).id('productivemetalworks:melting/storage_blocks/raw_platinum')
    
    event.custom({
        type: 'productivemetalworks:item_melting',
        ingredient: {
            tag: 'c:ores/platinum',
        },
        maximum_temperature: 0,
        minimum_temperature: 1000,
        result: [
            {
                amount: final_reg_ore_output,
                id: 'productivemetalworks:molten_platinum',
            },
        ],
    }).id('productivemetalworks:melting/ores/platinum')

    // ==================== SILVER ==================
    event.custom({
        type: 'productivemetalworks:item_melting',
        ingredient: {
            item: 'immersiveengineering:raw_silver',
        },
        maximum_temperature: 0,
        minimum_temperature: 1000,
        result: [
            {
                amount: final_raw_ore_output,
                id: 'productivemetalworks:molten_silver',
            },
        ],
    }).id('productivemetalworks:melting/raw_materials/silver')

    event.custom({
        type: 'productivemetalworks:item_melting',
        ingredient: {
            item: 'immersiveengineering:raw_block_silver',
        },
        maximum_temperature: 0,
        minimum_temperature: 1000,
        result: [
            {
                amount: final_9x9_block_output,
                id: 'productivemetalworks:molten_silver',
            },
        ],
    }).id('productivemetalworks:melting/storage_blocks/raw_silver')
    
    event.custom({
        type: 'productivemetalworks:item_melting',
        ingredient: {
            tag: 'c:ores/silver',
        },
        maximum_temperature: 0,
        minimum_temperature: 1000,
        result: [
            {
                amount: final_reg_ore_output,
                id: 'productivemetalworks:molten_silver',
            },
        ],
    }).id('productivemetalworks:melting/ores/silver')

    // ==================== TIN ==================
    event.custom({
        type: 'productivemetalworks:item_melting',
        ingredient: {
            item: 'mekanism:raw_tin',
        },
        maximum_temperature: 0,
        minimum_temperature: 1000,
        result: [
            {
                amount: final_raw_ore_output,
                id: 'productivemetalworks:molten_tin',
            },
        ],
    }).id('productivemetalworks:melting/raw_materials/tin')

    event.custom({
        type: 'productivemetalworks:item_melting',
        ingredient: {
            item: 'mekanism:block_raw_tin',
        },
        maximum_temperature: 0,
        minimum_temperature: 1000,
        result: [
            {
                amount: final_9x9_block_output,
                id: 'productivemetalworks:molten_tin',
            },
        ],
    }).id('productivemetalworks:melting/storage_blocks/raw_tin')
    
    event.custom({
        type: 'productivemetalworks:item_melting',
        ingredient: {
            tag: 'c:ores/tin',
        },
        maximum_temperature: 0,
        minimum_temperature: 1000,
        result: [
            {
                amount: final_reg_ore_output,
                id: 'productivemetalworks:molten_tin',
            },
        ],
    }).id('productivemetalworks:melting/ores/tin')

    // ==================== URANIUM ==================
    event.custom({
        type: 'productivemetalworks:item_melting',
        ingredient: {
            item: 'mekanism:raw_uranium',
        },
        maximum_temperature: 0,
        minimum_temperature: 1000,
        result: [
            {
                amount: final_raw_ore_output,
                id: 'productivemetalworks:molten_uranium',
            },
        ],
    }).id('productivemetalworks:melting/raw_materials/uranium')

    event.custom({
        type: 'productivemetalworks:item_melting',
        ingredient: {
            item: 'mekanism:block_raw_uranium',
        },
        maximum_temperature: 0,
        minimum_temperature: 1000,
        result: [
            {
                amount: final_9x9_block_output,
                id: 'productivemetalworks:molten_uranium',
            },
        ],
    }).id('productivemetalworks:melting/storage_blocks/raw_uranium')
    
    event.custom({
        type: 'productivemetalworks:item_melting',
        ingredient: {
            tag: 'c:ores/uranium',
        },
        maximum_temperature: 0,
        minimum_temperature: 1000,
        result: [
            {
                amount: final_reg_ore_output,
                id: 'productivemetalworks:molten_uranium',
            },
        ],
    }).id('productivemetalworks:melting/ores/uranium')

    // ==================== ZINC ==================
    event.custom({
        type: 'productivemetalworks:item_melting',
        ingredient: {
            item: 'create:raw_zinc',
        },
        maximum_temperature: 0,
        minimum_temperature: 1000,
        result: [
            {
                amount: final_raw_ore_output,
                id: 'productivemetalworks:molten_zinc',
            },
        ],
    }).id('productivemetalworks:melting/raw_materials/zinc')

    event.custom({
        type: 'productivemetalworks:item_melting',
        ingredient: {
            item: 'create:raw_zinc_block',
        },
        maximum_temperature: 0,
        minimum_temperature: 1000,
        result: [
            {
                amount: final_9x9_block_output,
                id: 'productivemetalworks:molten_zinc',
            },
        ],
    }).id('productivemetalworks:melting/storage_blocks/raw_zinc')
    
    event.custom({
        type: 'productivemetalworks:item_melting',
        ingredient: {
            tag: 'c:ores/zinc',
        },
        maximum_temperature: 0,
        minimum_temperature: 1000,
        result: [
            {
                amount: final_reg_ore_output,
                id: 'productivemetalworks:molten_zinc',
            },
        ],
    }).id('productivemetalworks:melting/ores/zinc')

    // ==================== STEEL ==================
    event.custom({
        type: 'productivemetalworks:item_melting',
        ingredient: {
            item: 'stellaris:raw_steel_ingot',
        },
        maximum_temperature: 0,
        minimum_temperature: 1000,
        result: [
            {
                amount: final_raw_ore_output,
                id: 'productivemetalworks:molten_steel',
            },
        ],
    }).id('productivemetalworks:melting/raw_materials/steel')

    event.custom({
        type: 'productivemetalworks:item_melting',
        ingredient: {
            item: 'stellaris:raw_steel_block',
        },
        maximum_temperature: 0,
        minimum_temperature: 1000,
        result: [
            {
                amount: final_9x9_block_output,
                id: 'productivemetalworks:molten_steel',
            },
        ],
    }).id('productivemetalworks:melting/storage_blocks/raw_steel')
    
    event.custom({
        type: 'productivemetalworks:item_melting',
        ingredient: {
            tag: 'c:ores/steel',
        },
        maximum_temperature: 0,
        minimum_temperature: 1000,
        result: [
            {
                amount: final_reg_ore_output,
                id: 'productivemetalworks:molten_steel',
            },
        ],
    }).id('productivemetalworks:melting/ores/steel')
})