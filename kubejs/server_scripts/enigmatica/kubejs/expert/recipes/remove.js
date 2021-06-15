onEvent('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }

    const idRemovals = [
        'ars_nouveau:stone_2',
        'minecraft:leather_to_stripes',
        'quark:building/crafting/candles/candle_basic',
        'betterendforge:leather_to_stripes',
        'astralsorcery:shaped/black_marble/black_marble_raw',
        'astralsorcery:altar/black_marble_raw',
        'astralsorcery:shaped/wand'
    ];

    const outputRemovals = ['create:andesite_alloy', 'tiab:timeinabottle'];

    const patchouli_safe_removals = [
        { output: 'ars_nouveau:arcane_stone', id: 'ars_nouveau:arcane_stone' },
        { output: 'ars_nouveau:crystallizer', id: 'ars_nouveau:crystallizer' },
        { output: 'ars_nouveau:volcanic_accumulator', id: 'ars_nouveau:volcanic_accumulator' },
        { output: 'naturesaura:calling_spirit', id: 'naturesaura:calling_spirit' },
        { output: 'naturesaura:animal_spawner', id: 'naturesaura:animal_spawner' },
        { output: 'botania:spark', id: 'botania:spark' }
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
