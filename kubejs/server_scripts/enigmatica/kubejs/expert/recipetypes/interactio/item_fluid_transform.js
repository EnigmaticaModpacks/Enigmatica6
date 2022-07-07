onEvent('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }

    const recipes = [
        {
            inputs: [
                { item: 'eidolon:enchanted_ash', count: 2 },
                { tag: 'forge:clay', count: 1 },
                { tag: 'forge:dusts/mana', count: 1 },
                { tag: 'forge:dusts/lapis', count: 1 },
            ],
            fluid: { fluid: 'water' },
            output: {
                entries: [{ result: { item: 'ars_nouveau:magic_clay', count: 2 }, weight: 1 }],
                empty_weight: 0,
                rolls: 1,
            },
            consume_fluid: 0.0,
            id: 'ars_nouveau:magic_clay',
        },
        {
            inputs: [
                { item: 'eidolon:enchanted_ash', count: 1 },
                { item: 'atum:coin_gold', count: 6 },
                { item: 'meetyourfight:phantoplasm', count: 1 },
                { tag: 'forge:dusts/mana', count: 1 },
                { tag: 'forge:dusts/lapis', count: 1 },
            ],
            fluid: { fluid: 'water' },
            output: {
                entries: [{ result: { item: 'meetyourfight:spectres_eye', count: 1 }, weight: 1 }],
                empty_weight: 0,
                rolls: 1,
            },
            consume_fluid: 0.0,
            id: 'meetyourfight:spectres_eye',
        },
        {
            inputs: [{ item: 'kubejs:hot_compressed_iron_ingot', count: 1 }],
            fluid: { fluid: 'water' },
            output: {
                entries: [{ result: { item: 'pneumaticcraft:ingot_iron_compressed', count: 1 }, weight: 1 }],
                empty_weight: 0,
                rolls: 1,
            },
            consume_fluid: 0.0,
            id: 'enigmatica:expert/interactio/ingot_iron_compressed',
        },
        {
            inputs: [{ item: 'kubejs:hot_compressed_iron_block', count: 1 }],
            fluid: { fluid: 'water' },
            output: {
                entries: [{ result: { item: 'pneumaticcraft:compressed_iron_block', count: 1 }, weight: 1 }],
                empty_weight: 0,
                rolls: 1,
            },
            consume_fluid: 0.0,
            id: 'enigmatica:expert/interactio/compressed_iron_block',
        },
    ];

    recipes.forEach((recipe) => {
        const re = event.custom({
            type: 'interactio:item_fluid_transform',
            inputs: recipe.inputs,
            output: recipe.output,
            fluid: recipe.fluid,
            consume_fluid: recipe.consume_fluid,
        });
        if (recipe.id) {
            re.id(recipe.id);
        }
    });
});
