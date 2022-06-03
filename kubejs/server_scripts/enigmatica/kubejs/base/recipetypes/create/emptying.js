onEvent('recipes', (event) => {
    const id_prefix = 'enigmatica:base/create/emptying/';

    const recipes = [
        {
            input: 'farmersdelight:milk_bottle',
            container: 'minecraft:glass_bottle',
            fluid: Fluid.of('minecraft:milk', 250),
            id: `${id_prefix}milk_bottle`
        }
    ];

    honeyVarieties.forEach((honeyVariety) => {
        let honey = honeyVariety.split(':')[1];
        recipes.push({
            input: Item.of(
                honeyVariety == 'resourcefulbees:honey' ? 'minecraft:honey_bottle' : `${honeyVariety}_bottle`
            ),
            container: Item.of('minecraft:glass_bottle'),
            fluid: Fluid.of(honeyVariety, 250),
            id: `create:emptying/${honey}_bottle`
        });
    });

    recipes.forEach((recipe) => {
        event.recipes.create.emptying([recipe.fluid, recipe.container], recipe.input).id(recipe.id);
    });
});
