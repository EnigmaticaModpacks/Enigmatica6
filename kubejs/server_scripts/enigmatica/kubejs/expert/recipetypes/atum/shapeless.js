onEvent('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/atum/shapeless/';

    const recipes = [
        {
            output: '3x atum:linen_bandage',
            inputs: [
                'atum:linen_cloth',
                'atum:linen_cloth',
                'atum:linen_cloth',
                Item.of('minecraft:potion', '{Potion:"minecraft:strong_healing"}')
            ],
            id: `${id_prefix}linen_bandage_medium`
        },
        {
            output: '8x atum:linen_bandage',
            inputs: [
                'atum:linen_cloth',
                'atum:linen_cloth',
                'atum:linen_cloth',
                'atum:linen_cloth',
                Item.of('botania:brew_vial', '{brewKey:"botania:healing"}'),
                'atum:linen_cloth',
                'atum:linen_cloth',
                'atum:linen_cloth',
                'atum:linen_cloth'
            ],
            id: `${id_prefix}linen_bandage_heavy`
        }
    ];

    recipes.forEach((recipe) => {
        event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
    });
});
