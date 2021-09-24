onEvent('recipes', (event) => {
    if (global.isNormalMode == false) {
        return;
    }

    const recipes = [
        {
            output: Item.of('emendatusenigmatica:signalum_dust', 4),
            inputs: [
                '#forge:dusts/silver',
                '#forge:dusts/copper',
                '#forge:dusts/copper',
                '#forge:dusts/copper',
                '#forge:dusts/redstone',
                '#forge:dusts/redstone',
                '#forge:dusts/redstone',
                '#forge:dusts/redstone'
            ],
            id: 'emendatusenigmatica:alloy_dust/signalum'
        }
    ];

    recipes.forEach((recipe) => {
        recipe.id;
        event.shapeless(recipe.output, recipe.inputs);
    });
});
