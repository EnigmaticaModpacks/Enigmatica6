onEvent('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const idPrefix = 'enigmatica:expert/immersiveengineering/alloy/';
    const recipes = [
        {
            inputs: [Ingredient.of('3x #forge:ingots/cobalt'), 'thermal:blizz_powder'],
            output: Item.of('3x undergarden:froststeel_ingot'),
            id: `${idPrefix}froststeel_ingot_3`
        },
        {
            inputs: ['minecraft:book', 'pneumaticcraft:upgrade_matrix'],
            output: Item.of('immersiveengineering:blueprint', '{blueprint:"components"}'),
            id: `immersiveengineering:crafting/blueprint_components`
        },
        {
            inputs: [Item.of('4x glassential:glass_ghostly'), '#quark:crystal_clusters/white'],
            output: Item.of('4x atum:crystal_glass'),
            id: `${idPrefix}crystal_glass`
        },
        {
            inputs: [Item.of('3x glassential:glass_ghostly'), 'quark:white_crystal'],
            output: Item.of('4x atum:crystal_glass'),
            id: `${idPrefix}crystal_glass_2`
        },
        {
            inputs: [Ingredient.of('4x #forge:storage_blocks/arcane_gold'), 'create:honeyed_apple'],
            output: Item.of('minecraft:enchanted_golden_apple'),
            id: `${idPrefix}enchanted_golden_apple`
        },
        {
            inputs: [
                Item.of('16x minecraft:book'),
                Item.of('mekanismtools:lapis_lazuli_helmet', '{Damage:0}').weakNBT()
            ],
            output: Item.of('16x apotheosis:armor_head_book'),
            id: `${idPrefix}armor_head_book`
        },
        {
            inputs: [
                Item.of('16x minecraft:book'),
                Item.of('mekanismtools:lapis_lazuli_chestplate', '{Damage:0}').weakNBT()
            ],
            output: Item.of('16x apotheosis:armor_chest_book'),
            id: `${idPrefix}armor_chest_book`
        },
        {
            inputs: [
                Item.of('16x minecraft:book'),
                Item.of('mekanismtools:lapis_lazuli_leggings', '{Damage:0}').weakNBT()
            ],
            output: Item.of('16x apotheosis:armor_legs_book'),
            id: `${idPrefix}armor_legs_book`
        },
        {
            inputs: [
                Item.of('16x minecraft:book'),
                Item.of('mekanismtools:lapis_lazuli_boots', '{Damage:0}').weakNBT()
            ],
            output: Item.of('16x apotheosis:armor_feet_book'),
            id: `${idPrefix}armor_feet_book`
        },
        {
            inputs: [Item.of('16x minecraft:book'), Item.of('botania:livingwood_bow', '{Damage:0}').weakNBT()],
            output: Item.of('16x apotheosis:bow_book'),
            id: `${idPrefix}bow_book`
        },
        {
            inputs: [Item.of('16x minecraft:book'), Item.of('aquaculture:gold_fishing_rod', '{Damage:0}').weakNBT()],
            output: Item.of('16x apotheosis:fishing_rod_book'),
            id: `${idPrefix}fishing_rod_book`
        },
        {
            inputs: [
                Item.of('16x minecraft:book'),
                Item.of('mekanismtools:lapis_lazuli_pickaxe', '{Damage:0}').weakNBT()
            ],
            output: Item.of('16x apotheosis:digger_book'),
            id: `${idPrefix}digger_book`
        },
        {
            inputs: [
                Item.of('16x minecraft:book'),
                Item.of('mekanismtools:lapis_lazuli_sword', '{Damage:0}').weakNBT()
            ],
            output: Item.of('16x apotheosis:weapon_book'),
            id: `${idPrefix}weapon_book`
        },
        {
            inputs: [Item.of('16x minecraft:book'), 'tconstruct:ender_slime_crystal'],
            output: Item.of('16x apotheosis:scrap_tome'),
            id: `${idPrefix}scrap_tome`
        },
        {
            inputs: [Item.of('16x minecraft:book'), 'tconstruct:sky_slime_crystal'],
            output: Item.of('16x apotheosis:null_book'),
            id: `${idPrefix}null_book`
        },
        {
            inputs: [Item.of('8x minecraft:book'), 'thermal:rf_coil'],
            output: Item.of('8x pedestals:bookmagnet'),
            id: 'pedestals:bookmagnet'
        },
        {
            inputs: [Item.of('8x minecraft:book'), '#forge:ingots/invar'],
            output: Item.of('8x pedestals:bookarea'),
            id: 'pedestals:bookarea'
        },
        {
            inputs: [Item.of('8x minecraft:book'), '#forge:ingots/lumium'],
            output: Item.of('8x pedestals:bookrange'),
            id: 'pedestals:bookrange'
        },
        {
            inputs: [Item.of('8x minecraft:book'), '#forge:ingots/terminite'],
            output: Item.of('8x pedestals:bookspeed'),
            id: 'pedestals:bookspeed'
        },
        {
            inputs: [Item.of('8x minecraft:book'), '#forge:ingots/infused_iron'],
            output: Item.of('8x pedestals:bookcapacity'),
            id: 'pedestals:bookcapacity'
        },
        {
            inputs: [Item.of('8x minecraft:book'), '#forge:ingots/refined_radiance'],
            output: Item.of('8x pedestals:bookadvanced'),
            id: 'pedestals:bookadvanced'
        },
        {
            inputs: [Ingredient.of('2x #forge:ingots/terminite'), '#forge:dusts/diamond'],
            output: Item.of('2x emendatusenigmatica:enderium_ingot'),
            id: `${idPrefix}enderium_ingot`
        },
        {
            inputs: [Ingredient.of('2x #forge:storage_blocks/terminite'), Ingredient.of('9x #forge:dusts/diamond')],
            output: Item.of('2x emendatusenigmatica:enderium_block'),
            id: `${idPrefix}enderium_block`
        },
        {
            inputs: [Item.of('3x modularrouters:blank_module'), Item.of('3x prettypipes:high_retrieval_module')],
            output: Item.of('3x modularrouters:puller_module_1'),
            id: 'modularrouters:puller_module_1'
        },
        {
            inputs: [Item.of('3x modularrouters:blank_module'), Item.of('3x prettypipes:high_extraction_module')],
            output: Item.of('3x modularrouters:sender_module_1'),
            id: 'modularrouters:sender_module_1'
        },
        {
            inputs: [Item.of('3x modularrouters:blank_module'), Item.of('3x ppfluids:high_fluid_retrieval_module')],
            output: Item.of('3x modularrouters:fluid_module'),
            id: 'modularrouters:fluid_module'
        },
        {
            inputs: [Item.of('3x modularrouters:blank_module'), 'thermal:charge_bench'],
            output: Item.of('3x modularrouters:energy_output_module'),
            id: 'modularrouters:energy_output_module'
        }
    ];

    recipes.forEach((recipe) => {
        event.recipes.immersiveengineering.alloy(recipe.output, recipe.inputs[0], recipe.inputs[1]).id(recipe.id);
    });
});
