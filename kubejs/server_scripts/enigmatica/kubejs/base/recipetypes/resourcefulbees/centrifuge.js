onEvent('recipes', (event) => {
    const id_prefix = 'enigmatica:base/resourcefulbees/centrifuge/';

    const recipes = [
        {
            ingredient: {
                item: 'resourcefulbees:boobee_honeycomb'
            },
            results: [
                {
                    item: 'minecraft:ghast_tear',
                    chance: 0.15,
                    count: 2
                },
                {
                    item: 'minecraft:spectral_arrow',
                    chance: 0.2,
                    count: 3
                },
                {
                    fluid: 'minecraft:milk',
                    amount: 250,
                    chance: 0.25
                }
            ],
            time: 200,
            noBottleInput: true
        },
        {
            ingredient: {
                item: 'resourcefulbees:boobee_honeycomb_block'
            },
            results: [
                {
                    item: 'minecraft:ghast_tear',
                    chance: 0.15,
                    count: 18
                },
                {
                    item: 'minecraft:spectral_arrow',
                    chance: 0.2,
                    count: 27
                },
                {
                    fluid: 'minecraft:milk',
                    amount: 2250,
                    chance: 0.25
                }
            ],
            time: 200,
            noBottleInput: true
        },
        {
            ingredient: {
                item: 'resourcefulbees:pcbee_honeycomb'
            },
            results: [
                {
                    item: 'pneumaticcraft:empty_pcb',
                    chance: 0.01,
                    count: 1
                },
                {
                    item: 'pneumaticcraft:ingot_iron_compressed',
                    chance: 0.05,
                    count: 1
                },
                {
                    fluid: 'pneumaticcraft:etching_acid',
                    amount: 250,
                    chance: 0.2
                }
            ],
            time: 200,
            noBottleInput: true
        },
        {
            ingredient: {
                item: 'resourcefulbees:pcbee_honeycomb_block'
            },
            results: [
                {
                    item: 'pneumaticcraft:empty_pcb',
                    chance: 0.01,
                    count: 9
                },
                {
                    item: 'pneumaticcraft:ingot_iron_compressed',
                    chance: 0.05,
                    count: 9
                },
                {
                    fluid: 'pneumaticcraft:etching_acid',
                    amount: 2250,
                    chance: 0.2
                }
            ],
            time: 200,
            noBottleInput: true
        }
    ];

    recipes.forEach((recipe) => {
        fallback_id(
            event.custom({
                type: 'resourcefulbees:centrifuge',
                ingredient: recipe.ingredient,
                results: recipe.results,
                time: recipe.time,
                noBottleInput: recipe.noBottleInput
            }),
            id_prefix
        );
    });
});
