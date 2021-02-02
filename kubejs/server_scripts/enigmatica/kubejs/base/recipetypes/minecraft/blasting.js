events.listen('recipes', (event) => {
    var data = {
        recipes: [{ input: 'minecraft:rotten_flesh', output: 'occultism:tallow', xp: 0.5 }]
    };
    data.recipes.forEach((recipe) => {
        event.blasting(recipe.output, recipe.input).xp(recipe.xp);
    });
});
