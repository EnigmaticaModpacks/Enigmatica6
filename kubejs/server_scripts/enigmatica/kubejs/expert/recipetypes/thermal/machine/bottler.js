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
        },
        {
            input: ['#forge:ingots/superheated_steel', '#forge:ingots/hot_compressed_iron'],
            fluid: Fluid.of('tconstruct:scorched_stone', 144 * 8),
            output: 'tconstruct:foundry_controller'
        }
    ];
    recipes.forEach((recipe) => {
        event.recipes.thermal
            .bottler(recipe.output, [recipe.fluid, recipe.input])
            .id(idPrefix + recipe.output.split(':')[1]);
    });
});
