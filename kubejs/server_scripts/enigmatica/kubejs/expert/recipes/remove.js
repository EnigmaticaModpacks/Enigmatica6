events.listen('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }

    const idRemovals = [
        'ars_nouveau:stone_2',
        'minecraft:leather_to_stripes',
        'quark:building/crafting/candles/candle_basic'
    ];

    const outputRemovals = ['create:andesite_alloy', 'tiab:timeinabottle'];

    const patchouli_safe_removals = [
        { output: 'ars_nouveau:arcane_stone', id: 'ars_nouveau:arcane_stone' },
        { output: 'ars_nouveau:crystallizer', id: 'ars_nouveau:crystallizer' },
        { output: 'ars_nouveau:volcanic_accumulator', id: 'ars_nouveau:volcanic_accumulator' }
    ];

    idRemovals.forEach((id) => {
        event.remove({ id: id });
    });

    outputRemovals.forEach((output) => {
        event.remove({ output: output });
    });

    patchouli_safe_removals.forEach((recipe) => {
        event.shaped(recipe.output, ['A'], { A: 'kubejs:altered_recipe_indicator' }).id(recipe.id);
    });
});
