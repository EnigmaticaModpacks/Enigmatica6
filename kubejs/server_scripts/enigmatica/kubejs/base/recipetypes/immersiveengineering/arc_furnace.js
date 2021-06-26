onEvent('recipes', (event) => {
    var data = {
        recipes: [
            {
                input1: '#forge:ingots/copper',
                secondaries: ['#forge:ingots/zinc'],
                outputs: [Item.of('emendatusenigmatica:brass_ingot', 2)],
                id: 'immersiveengineering:arcfurnace/alloy_brass'
            },
            {
                input1: '#forge:ingots/iron',
                secondaries: ['#forge:ingots/lead'],
                outputs: [Item.of('eidolon:pewter_ingot', 2)]
            },
            {
                input1: '#forge:ingots/iron',
                secondaries: ['#forge:dusts/ender'],
                outputs: [Item.of('betterendforge:terminite_ingot')]
            },
            {
                input1: '#forge:ingots/thallasium',
                secondaries: ['#forge:dusts/ender'],
                outputs: [Item.of('betterendforge:terminite_ingot')]
            },
            {
                input1: '#forge:ingots/netherite',
                secondaries: ['betterendforge:terminite_ingot'],
                outputs: [Item.of('betterendforge:aeternium_ingot')]
            },
            {
                input1: Ingredient.of('#forge:ingots/copper', 3),
                secondaries: ['#forge:glass'],
                outputs: [Item.of('tconstruct:tinkers_bronze_ingot', 3)]
            },
            {
                input1: '#forge:ingots/iron',
                secondaries: ['tconstruct:sky_slime_ball', 'tconstruct:seared_brick'],
                outputs: [Item.of('tconstruct:slimesteel_ingot', 2)]
            },
            {
                input1: '#forge:ingots/iron',
                secondaries: ['tconstruct:blood_slime_ball', 'minecraft:clay_ball'],
                outputs: [Item.of('tconstruct:pig_iron_ingot', 2)]
            },
            {
                input1: Ingredient.of('#forge:ingots/copper', 2),
                secondaries: ['#forge:ingots/cobalt', '#forge:obsidian'],
                outputs: [Item.of('tconstruct:hepatizon_ingot', 4)]
            },
            {
                input1: Ingredient.of('#forge:ingots/gold', 1),
                secondaries: ['#forge:ingots/cobalt', 'minecraft:magma_cream'],
                outputs: [Item.of('tconstruct:queens_slime_ingot', 2)]
            }
        ]
    };

    data.recipes.forEach((recipe) => {
        const re = event.recipes.immersiveengineering.arc_furnace(recipe.outputs, recipe.input1, recipe.secondaries);
        if (recipe.id) {
            re.id(recipe.id);
        }
    });
});
