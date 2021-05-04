events.listen('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }

    const idRemovals = ['ars_nouveau:stone_2', 'minecraft:leather_to_stripes'];

    const outputRemovals = ['create:andesite_alloy', 'tiab:timeinabottle'];

    const patchouli_safe_removals = [];

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
