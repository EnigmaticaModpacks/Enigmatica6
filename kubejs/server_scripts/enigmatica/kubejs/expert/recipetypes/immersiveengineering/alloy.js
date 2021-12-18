onEvent('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const idPrefix = 'enigmatica:expert/immersiveengineering/alloy/';
    const recipes = [
        {
            inputs: [Item.of('3x #forge:ingots/cobalt'), 'thermal:blizz_powder'],
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
            inputs: [Item.of('4x #forge:storage_blocks/arcane_gold'), 'create:honeyed_apple'],
            output: Item.of('minecraft:enchanted_golden_apple'),
            id: `${idPrefix}enchanted_golden_apple`
        },
        {
            inputs: [Item.of('16x minecraft:book'), Item.of('minecraft:chainmail_helmet', '{Damage:0}').weakNBT()],
            output: Item.of('16x apotheosis:armor_head_book'),
            id: `${idPrefix}armor_head_book`
        },
        {
            inputs: [Item.of('16x minecraft:book'), Item.of('minecraft:chainmail_chestplate', '{Damage:0}').weakNBT()],
            output: Item.of('16x apotheosis:armor_chest_book'),
            id: `${idPrefix}armor_chest_book`
        },
        {
            inputs: [Item.of('16x minecraft:book'), Item.of('minecraft:chainmail_leggings', '{Damage:0}').weakNBT()],
            output: Item.of('16x apotheosis:armor_legs_book'),
            id: `${idPrefix}armor_legs_book`
        },
        {
            inputs: [Item.of('16x minecraft:book'), Item.of('minecraft:chainmail_boots', '{Damage:0}').weakNBT()],
            output: Item.of('16x apotheosis:armor_feet_book'),
            id: `${idPrefix}armor_feet_book`
        },
        {
            inputs: [Item.of('16x minecraft:book'), Item.of('minecraft:bow', '{Damage:0}').weakNBT()],
            output: Item.of('16x apotheosis:bow_book'),
            id: `${idPrefix}bow_book`
        },
        {
            inputs: [Item.of('16x minecraft:book'), Item.of('minecraft:fishing_rod', '{Damage:0}').weakNBT()],
            output: Item.of('16x apotheosis:fishing_rod_book'),
            id: `${idPrefix}fishing_rod_book`
        },
        {
            inputs: [Item.of('16x minecraft:book'), Item.of('minecraft:iron_pickaxe', '{Damage:0}').weakNBT()],
            output: Item.of('16x apotheosis:digger_book'),
            id: `${idPrefix}digger_book`
        },
        {
            inputs: [Item.of('16x minecraft:book'), Item.of('minecraft:iron_sword', '{Damage:0}').weakNBT()],
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
        }
    ];

    recipes.forEach((recipe) => {
        event.recipes.immersiveengineering.alloy(recipe.output, recipe.inputs[0], recipe.inputs[1]).id(recipe.id);
    });
});
