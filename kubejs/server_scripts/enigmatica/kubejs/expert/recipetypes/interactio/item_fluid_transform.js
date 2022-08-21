onEvent('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/interactio/item_fluid_transform/';
    const recipes = [
        {
            inputs: ['2x eidolon:enchanted_ash', '#forge:clay', '#forge:dusts/mana', '#forge:dusts/lapis'],
            fluid: { fluid: 'water' },
            output: {
                entries: [{ result: { item: 'ars_nouveau:magic_clay', count: 2 }, weight: 1 }],
                empty_weight: 0,
                rolls: 1
            },
            consume_fluid: 0.0,
            id: 'ars_nouveau:magic_clay'
        },
        {
            inputs: [
                'eidolon:enchanted_ash',
                '6x atum:coin_gold',
                'meetyourfight:phantoplasm',
                '#forge:dusts/mana',
                '#forge:dusts/lapis'
            ],
            fluid: { fluid: 'water' },
            output: {
                entries: [{ result: { item: 'meetyourfight:spectres_eye', count: 1 }, weight: 1 }],
                empty_weight: 0,
                rolls: 1
            },
            consume_fluid: 0.0,
            id: 'meetyourfight:spectres_eye'
        },
        {
            inputs: ['kubejs:hot_compressed_iron_ingot'],
            fluid: { fluid: 'water' },
            output: {
                entries: [{ result: { item: 'pneumaticcraft:ingot_iron_compressed', count: 1 }, weight: 1 }],
                empty_weight: 0,
                rolls: 1
            },
            consume_fluid: 0.0,
            id: `${id_prefix}ingot_iron_compressed`
        },
        {
            inputs: ['kubejs:hot_compressed_iron_block'],
            fluid: { fluid: 'water' },
            output: {
                entries: [{ result: { item: 'pneumaticcraft:compressed_iron_block', count: 1 }, weight: 1 }],
                empty_weight: 0,
                rolls: 1
            },
            consume_fluid: 0.0,
            id: `${id_prefix}compressed_iron_block`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'interactio:item_fluid_transform';
        recipe.inputs = recipe.inputs.map((input) => Ingredient.of(input).toJson());

        event.custom(recipe).id(recipe.id);
    });
});
