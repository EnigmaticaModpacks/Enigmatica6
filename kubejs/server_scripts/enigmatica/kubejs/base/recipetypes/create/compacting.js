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
                output: 'minecraft:honey_block'
            },
            {
                inputs: [
                    'create:wheat_flour',
                    'create:wheat_flour',
                    'create:wheat_flour',
                    {fluidTag: 'forge:milk', amount: 250}
                ],
                output: 'farmersdelight:pie_crust'
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
                output: 'immersiveengineering:slab_concrete'
            },
            {
                inputs: [
                    Fluid.of('thermal:latex', 1000)
                ],
                output: Item.of('thermal:rubber', 3)
            }
        ],
        recipes_heated: [
            {
                inputs: [
                    'minecraft:vine'
                ],
                output: Fluid.of('thermal:latex', 50)
            },
            {
                inputs: [
                    'minecraft:dandelion'
                ],
                output: Fluid.of('thermal:latex', 50)
            }
        ],
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
