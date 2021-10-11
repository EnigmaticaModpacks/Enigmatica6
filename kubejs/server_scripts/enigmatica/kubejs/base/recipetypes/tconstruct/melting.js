onEvent('recipes', (event) => {
    const id_prefix = 'enigmatica:base/tconstruct/melting/';
    const recipes = [
        {
            ingredient: {
                tag: 'forge:plates/emerald'
            },
            result: {
                fluid: 'tconstruct:molten_emerald',
                amount: 144
            },
            temperature: 934,
            time: 64,
            id: `${id_prefix}molten_emerald_from_plate`
        },
        {
            ingredient: {
                tag: 'forge:plates/diamond'
            },
            result: {
                fluid: 'tconstruct:molten_diamond',
                amount: 144
            },
            temperature: 1450,
            time: 79,
            id: `${id_prefix}molten_diamond_from_plate`
        },
        {
            ingredient: {
                tag: 'forge:rods/emerald'
            },
            result: {
                fluid: 'tconstruct:molten_emerald',
                amount: 144
            },
            temperature: 934,
            time: 64,
            id: `${id_prefix}molten_emerald_from_rod`
        },
        {
            ingredient: {
                tag: 'forge:rods/diamond'
            },
            result: {
                fluid: 'tconstruct:molten_diamond',
                amount: 144
            },
            temperature: 1450,
            time: 79,
            id: `${id_prefix}molten_diamond_from_rod`
        },
        {
            ingredient: {
                tag: 'forge:gears/emerald'
            },
            result: {
                fluid: 'tconstruct:molten_emerald',
                amount: 576
            },
            temperature: 934,
            time: 256,
            id: `${id_prefix}molten_emerald_from_gear`
        },
        {
            ingredient: {
                tag: 'forge:gears/diamond'
            },
            result: {
                fluid: 'tconstruct:molten_diamond',
                amount: 576
            },
            temperature: 1450,
            time: 316,
            id: `${id_prefix}molten_diamond_from_gear`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'tconstruct:melting';
        event.custom(recipe).id(recipe.id);
    });
});
