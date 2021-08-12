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
                { tag: 'forge:dusts/lapis', count: 1 }
            ],
            fluid: { fluid: 'water' },
            output: {
                entries: [{ result: { item: 'ars_nouveau:magic_clay', count: 2 }, weight: 1 }],
                empty_weight: 0,
                rolls: 1
            },
            consume_fluid: 1.0,
            id: 'ars_nouveau:magic_clay'
        },
        {
            inputs: [
                { item: 'ars_nouveau:magic_clay', count: 2 },
                { item: 'naturesaura:gold_powder', count: 1 },
                { tag: 'forge:dusts/mana', count: 1 },
                { tag: 'forge:dusts/lapis', count: 2 }
            ],
            fluid: { fluid: 'water' },
            output: {
                entries: [{ result: { item: 'ars_nouveau:marvelous_clay', count: 2 }, weight: 1 }],
                empty_weight: 0,
                rolls: 1
            },
            consume_fluid: 1.0,
            id: 'ars_nouveau:marvelous_clay'
        },
        {
            inputs: [
                { item: 'ars_nouveau:marvelous_clay', count: 2 },
                { tag: 'forge:dusts/emerald', count: 2 },
                { tag: 'forge:dusts/mana', count: 1 },
                { item: 'thermal:blitz_powder', count: 2 }
            ],
            fluid: { fluid: 'water' },
            output: {
                entries: [{ result: { item: 'ars_nouveau:mythical_clay', count: 2 }, weight: 1 }],
                empty_weight: 0,
                rolls: 1
            },
            consume_fluid: 1.0,
            id: 'ars_nouveau:mythical_clay'
        },
        {
            inputs: [
                { item: 'eidolon:enchanted_ash', count: 1 },
                { item: 'atum:coin_gold', count: 6 },
                { item: 'meetyourfight:phantoplasm', count: 1 },
                { tag: 'forge:dusts/mana', count: 1 },
                { tag: 'forge:dusts/lapis', count: 1 }
            ],
            fluid: { fluid: 'water' },
            output: {
                entries: [{ result: { item: 'meetyourfight:spectres_eye', count: 1 }, weight: 1 }],
                empty_weight: 0,
                rolls: 1
            },
            consume_fluid: 1.0,
            id: 'meetyourfight:spectres_eye'
        }
    ];

    recipes.forEach((recipe) => {
        const re = event.custom({
            type: 'interactio:item_fluid_transform',
            inputs: recipe.inputs,
            output: recipe.output,
            fluid: recipe.fluid,
            consume_fluid: recipe.consume_fluid
        });
        if (recipe.id) {
            re.id(recipe.id);
        }
    });
});
