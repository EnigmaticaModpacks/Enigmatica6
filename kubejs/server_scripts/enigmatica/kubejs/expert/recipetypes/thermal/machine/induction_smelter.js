onEvent('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/thermal/induction_smelter';
    const recipes = [
        {
            inputs: [Item.of('#forge:ingots/cobalt', 3), 'thermal:blizz_powder'],
            outputs: [Item.of('undergarden:froststeel_ingot', 3)],
            id: `${id_prefix}froststeel_ingot`
        },
        {
            inputs: ['glassential:glass_ghostly', 'quark:white_crystal_cluster', 'atum:sand'],
            outputs: [Item.of('atum:crystal_glass', 2)],
            id: `${id_prefix}crystal_glass`
        },
        {
            inputs: ['#forge:clay', '#forge:sand', '#forge:gravel'],
            outputs: [Item.of('tconstruct:seared_brick', 2)],
            id: `${id_prefix}seared_brick`
        },
        {
            inputs: ['tconstruct:grout'],
            outputs: ['tconstruct:seared_brick'],
            id: `${id_prefix}seared_brick_from_grout`
        },
        {
            inputs: ['minecraft:magma_cream', '#minecraft:soul_fire_base_blocks', '#forge:gravel'],
            outputs: [Item.of('tconstruct:scorched_brick', 2)],
            id: `${id_prefix}scorched_brick`
        },
        {
            inputs: ['tconstruct:nether_grout'],
            outputs: ['tconstruct:scorched_brick'],
            id: `${id_prefix}scorched_brick_from_nether_grout`
        },
        {
            inputs: [
                Ingredient.of('4x #forge:dusts/lithium'),
                Ingredient.of('3x #forge:ingots/aluminum'),
                '#forge:ingots/copper'
            ],
            outputs: [Item.of('4x mekanism:alloy_reinforced')],
            id: `${id_prefix}alloy_reinforced`
        },
        {
            inputs: [
                Item.of('6x ars_nouveau:warding_stone'),
                'immersiveengineering:coil_mv',
                Item.of('3x fluxnetworks:flux_dust')
            ],
            outputs: [Item.of('6x compactmachines:wall')],
            id: `${id_prefix}cm_wall`
        }
    ];

    recipes.forEach((recipe) => {
        event.recipes.thermal.smelter(recipe.outputs, recipe.inputs).id(recipe.id);
    });
});
