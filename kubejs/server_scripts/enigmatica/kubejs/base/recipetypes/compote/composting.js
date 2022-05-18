onEvent('recipes', (event) => {
    const id_prefix = 'enigmatica:base/compote/composting/';

    const recipes = [
        /*
        {
            add: [{ item: 'minecraft:nether_star', chance: 1.0 }],
            remove: [{ item: 'minecraft:wheat_seeds' }],
            change: [{ item: 'minecraft:pumpkin', chance: 1.0 }]
        }*/

        {
            add: [
                { item: 'minecraft:bamboo', chance: 0.5 },
                { item: 'sushigocrafting:rice_seeds', chance: 0.3 },
                { item: 'sushigocrafting:cucumber_seeds', chance: 0.3 },
                { item: 'sushigocrafting:soy_seeds', chance: 0.3 },
                { item: 'sushigocrafting:wasabi_seeds', chance: 0.3 },
                { item: 'sushigocrafting:sesame_seeds', chance: 0.3 },

                { item: 'sushigocrafting:avocado_sapling', chance: 0.3 },
                { item: 'sushigocrafting:avocado_leaves', chance: 0.3 },
                { item: 'sushigocrafting:avocado', chance: 0.65 },
                { item: 'sushigocrafting:seaweed', chance: 0.3 },

                { item: 'sushigocrafting:wasabi_root', chance: 0.65 },
                { item: 'sushigocrafting:soy_bean', chance: 0.65 },
                { item: 'sushigocrafting:cucumber', chance: 0.65 },
                { item: 'sushigocrafting:rice', chance: 0.65 },

                { item: 'atum:flax_seeds', chance: 0.3 }
            ],
            remove: [],
            change: []
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'compote:composting';
        fallback_id(event.custom(recipe), id_prefix);
    });
});
