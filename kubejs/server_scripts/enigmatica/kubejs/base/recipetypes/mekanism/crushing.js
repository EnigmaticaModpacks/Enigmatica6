events.listen('recipes', function (event) {
    var input = 'forge:gems/ender';
    var output = getPreferredItemInTag(ingredient.of('#forge:dusts/ender')).id;
    var count = 1;

    event.recipes.mekanism.crushing({
        input: {
            ingredient: {
                tag: input
            }
        },
        output: {
            item: output,
            count: count
        }
    });
});
