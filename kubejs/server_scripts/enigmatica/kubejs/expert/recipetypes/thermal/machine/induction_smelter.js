onEvent('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const recipes = [
        {
            inputs: [Item.of('#forge:ingots/cobalt', 3), 'thermal:blizz_powder'],
            outputs: [Item.of('undergarden:froststeel_ingot', 3)]
        },
        {
            inputs: ['glassential:glass_ghostly', 'quark:white_crystal_cluster', 'atum:sand'],
            outputs: [Item.of('atum:crystal_glass', 2)]
        },
        {
            inputs: ['#forge:clay', '#forge:sand', '#forge:gravel'],
            outputs: [Item.of('tconstruct:seared_brick', 2)]
        },
        {
            inputs: ['tconstruct:grout'],
            outputs: ['tconstruct:seared_brick']
        },
        {
            inputs: ['minecraft:magma_cream', '#minecraft:soul_fire_base_blocks', '#forge:gravel'],
            outputs: [Item.of('tconstruct:scorched_brick', 2)]
        },
        {
            inputs: ['tconstruct:nether_grout'],
            outputs: ['tconstruct:scorched_brick']
        }
    ];

    recipes.forEach((recipe) => {
        const re = event.recipes.thermal.smelter(recipe.outputs, recipe.inputs);
        if (recipe.id) {
            re.id(recipe.id);
        }
    });
});
