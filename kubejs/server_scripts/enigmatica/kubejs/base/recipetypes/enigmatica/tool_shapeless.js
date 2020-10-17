events.listen('recipes', function (event) {
    event.recipes.enigmatica.tool_shapeless({
        ingredients: [
            {
                tag: 'forge:tools/knife'
            },
            {
                item: 'minecraft:porkchop'
            }
        ],
        result: {
            item: 'simplefarming:raw_bacon',
            count: 2
        }
    });
});
