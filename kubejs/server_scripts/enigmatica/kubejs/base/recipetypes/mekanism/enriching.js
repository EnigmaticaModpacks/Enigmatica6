events.listen('recipes', function (event) {
    output = 'rftoolsbase:dimensionalshard';
    count = 8;
    event.recipes.mekanism.enriching({
        input: {
            ingredient: {
                tag: 'forge:ores/dimensional'
            }
        },
        output: {
            item: output,
            count: count
        }
    });
});
