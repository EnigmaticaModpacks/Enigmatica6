onEvent('recipes', (event) => {
    honeyVarieties.forEach((honeyVariety) => {
        if (honeyVariety == 'resourcefulbees:honey') {
            return;
        }

        event.recipes.create.compacting(Item.of(honeyVariety + '_block'), [Fluid.of(honeyVariety, 1000)]);
    });

    var data = {
        recipes_unheated: [
            {
                inputs: [Fluid.of('resourcefulbees:honey')],
                output: 'minecraft:honey_block'
            },
            {
                inputs: [
                    '#forge:dusts/wood',
                    '#forge:dusts/wood',
                    '#forge:dusts/wood',
                    '#forge:dusts/wood',
                    { fluidTag: 'minecraft:water', amount: 250 }
                ],
                output: Item.of('minecraft:paper', 6)
            },
            {
                inputs: [Fluid.of('immersiveengineering:concrete', 500)],
                output: 'immersiveengineering:slab_concrete'
            },
            {
                inputs: [Fluid.of('immersiveengineering:concrete', 1000)],
                output: 'immersiveengineering:concrete'
            },
            {
                inputs: [Fluid.of('industrialforegoing:latex', 900)],
                output: Item.of('industrialforegoing:dryrubber', 1)
            },
            {
                inputs: [Fluid.of('resourcefulbees:honey', 1000)],
                output: 'minecraft:honey_block',
                id: 'create:compacting/honey'
            }
        ],
        recipes_heated: [
            {
                inputs: ['minecraft:vine'],
                output: Fluid.of('industrialforegoing:latex', 50)
            },
            {
                inputs: ['minecraft:dandelion'],
                output: Fluid.of('industrialforegoing:latex', 50)
            }
        ],
        recipes_superheated: []
    };

    data.recipes_unheated.forEach((recipe) => {
        if (recipe.id) {
            event.recipes.create.compacting(recipe.output, recipe.inputs).id(recipe.id);
        } else {
            event.recipes.create.compacting(recipe.output, recipe.inputs);
        }
    });
    data.recipes_heated.forEach((recipe) => {
        event.recipes.create.compacting(recipe.output, recipe.inputs).heated();
    });
    data.recipes_superheated.forEach((recipe) => {
        event.recipes.create.compacting(recipe.output, recipe.inputs).superheated();
    });
});
