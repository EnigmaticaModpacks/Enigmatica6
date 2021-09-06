onEvent('recipes', (event) => {
    const idPrefix = 'enigmatica:expert/thermal/bottler/';
    if (global.isExpertMode == false) {
        return;
    }

    const recipes = [
        {
            input: 'minecraft:glass_bottle',
            fluid: Fluid.of('thermal:syrup', 250),
            output: 'kubejs:syrup_bottle'
        },
        {
            input: '#forge:dusts/sulfur',
            fluid: Fluid.of('industrialforegoing:latex', 900),
            output: 'industrialforegoing:dryrubber'
        }
    ];
    recipes.forEach((recipe) => {
        event.recipes.thermal
            .bottler(recipe.output, [recipe.fluid, recipe.input])
            .id(idPrefix + recipe.output.split(':')[1]);
    });
});
