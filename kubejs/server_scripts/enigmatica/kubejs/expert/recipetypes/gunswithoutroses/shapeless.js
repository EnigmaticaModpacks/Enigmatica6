onEvent('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }

    const recipes = [
        {
            output: Item.of('48x gunswithoutroses:iron_bullet'),
            inputs: ['#forge:nuggets/iron', '#forge:nuggets/iron', 'minecraft:gunpowder'],
            id: 'gunswithoutroses:iron_bullet'
        },
        {
            output: Item.of('48x gunswithoutroses:flint_bullet'),
            inputs: ['minecraft:flint', 'minecraft:flint', 'minecraft:gunpowder'],
            id: 'gunswithoutroses:flint_bullet'
        }
    ];

    recipes.forEach((recipe) => {
        event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
    });
});
