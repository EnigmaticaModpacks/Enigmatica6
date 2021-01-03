events.listen('recipes', function (event) {
    output = 'emendatusenigmatica:dimensional_gem';
    count = 8;
    event.recipes.mekanism.enriching({
        type: 'mekanism.enriching',
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
