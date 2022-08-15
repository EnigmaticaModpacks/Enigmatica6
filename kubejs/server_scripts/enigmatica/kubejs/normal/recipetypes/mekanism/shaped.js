onEvent('recipes', (event) => {
    if (global.isNormalMode == false) {
        return;
    }
    const id_prefex = 'enigmatica:normal/mekanism/shaped';
    const recipes = [];

    const bin_tiers = [
        { ingredient: '#forge:ingots/copper', tier: 'basic' },
        { ingredient: '#forge:dusts/redstone', tier: 'advanced' },
        { ingredient: '#forge:ingots/osmium', tier: 'elite' },
        { ingredient: '#forge:obsidian', tier: 'ultimate' }
    ];

    bin_tiers.forEach((recipe) => {
        recipes.push({
            output: `mekanism:${recipe.tier}_bin`,
            pattern: ['ABA', 'A A', 'AAA'],
            key: {
                A: 'minecraft:smooth_stone',
                B: recipe.ingredient
            },
            id: `mekanism:bin/${recipe.tier}`
        });
    });

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
