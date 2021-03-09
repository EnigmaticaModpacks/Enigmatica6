events.listen('recipes', (event) => {
    honeyVarieties.forEach((honeyVariety) => {
        if (honeyVariety == 'resourcefulbees:honey') {
            return;
        }

        event.recipes.create.compacting(Item.of(honeyVariety + '_block'), [Fluid.of(honeyVariety, 1000)]);
    });

    var data = {
        recipes_unheated: [
            {
                inputs: [
                    Fluid.of('resourcefulbees:honey')
                ],
                output: Item.of('minecraft:honey_block')
            },
            {
                inputs: [
                    'create:wheat_flour',
                    'create:wheat_flour',
                    'create:wheat_flour',
                    {fluidTag: 'forge:milk', amount: 250}
                ],
                output: Item.of('farmersdelight:pie_crust', 1)
            },
            {
                inputs: [
                    '#forge:dusts/wood',
                    '#forge:dusts/wood',
                    '#forge:dusts/wood',
                    {fluidTag: 'minecraft:water', amount: 250}
                ],
                output: Item.of('minecraft:paper', 2)
            },
            {
                inputs: [
                    Fluid.of('immersiveengineering:concrete', 500)
                ],
                output: Item.of('immersiveengineering:slab_concrete', 1)
            }
        ],
        recipes_heated: [],
        recipes_superheated: []
    };
    
    data.recipes_unheated.forEach((recipe) => {
        event.recipes.create.compacting(recipe.output, recipe.inputs);
    });
    data.recipes_heated.forEach((recipe) => {
        event.recipes.create.compacting(recipe.output, recipe.inputs).heated();
    });
    data.recipes_superheated.forEach((recipe) => {
        event.recipes.create.compacting(recipe.output, recipe.inputs).superheated();
    });
});
