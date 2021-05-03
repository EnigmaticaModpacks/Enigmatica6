events.listen('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }

    const idRemovals = [
        'architects_palette:sunmetal_blend',
        'pneumaticcraft:explosion_crafting/compressed_iron_ingot',
        'pneumaticcraft:explosion_crafting/compressed_iron_block'
    ];

    const outputRemovals = ['create:andesite_alloy', 'tiab:timeinabottle'];

    const patchouli_safe_removals = [
        { output: 'ars_nouveau:magic_clay', id: 'ars_nouveau:magic_clay' },
        { output: 'ars_nouveau:arcane_stone', id: 'ars_nouveau:arcane_stone' },
        { output: 'ars_nouveau:arcane_stone', id: 'ars_nouveau:stone_2' },
        { output: 'naturesaura:wood_stand', id: 'naturesaura:wood_stand' },
        { output: 'naturesaura:gold_fiber', id: 'naturesaura:gold_fiber' }
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
