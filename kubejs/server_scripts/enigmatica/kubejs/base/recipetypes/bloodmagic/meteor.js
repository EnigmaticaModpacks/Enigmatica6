onEvent('recipes', (event) => {
    const id_prefix = 'enigmatica:base/bloodmagic/meteor/';
    var data = {
        recipes: [
            {
                input: 'create:andesite_alloy',
                syphon: 500000,
                explosion: 24.0,
                layers: [
                    {
                        radius: 7,
                        additionalWeight: 0,
                        minWeight: 0,
                        weightMap: [
                            { tag: 'emendatusenigmatica:copper_andesite_ore', weight: 100 },
                            { tag: 'emendatusenigmatica:zinc_andesite_ore', weight: 100 },
                            { tag: 'emendatusenigmatica:iron_andesite_ore', weight: 50 },
                            { tag: 'emendatusenigmatica:emerald_andesite_ore', weight: 75 }
                        ],
                        fill: 'minecraft:andesite',
                        shell: 'minecraft:granite'
                    }
                ],
                id: `${id_prefix}andesite`
            }
        ]
    };

    data.recipes.forEach((recipe) => {
        recipe.type = 'bloodmagic:meteor';
        recipe.input = Ingredient.of(recipe.input).toJson();
        recipe.syphon = 0;
        event.custom(recipe).id(recipe.id);
    });
});
