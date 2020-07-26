events.listen('recipes', function (event) {
    var outputRemovals = [
        'additionalbars:crossed_iron_bars',

        //'akashictome:tome',

        'mekanism:combiner',
        'mekanism:basic_combining_factory',
        'mekanism:advanced_combining_factory',
        'mekanism:elite_combining_factory',
        'mekanism:ultimate_combining_factory',

        'minecraft:sticky_piston',

        'morevanillalib:obsidian_shard'
    ];

    var idRemovals = [
        'decorative_blocks:hellbark_beam',
        'decorative_blocks:jungle_beam',
        'decorative_blocks:birch_beam',
        'decorative_blocks:umbran_beam',
        'decorative_blocks:jacaranda_beam',
        'decorative_blocks:magic_beam',
        'decorative_blocks:palm_beam',
        'decorative_blocks:mahogany_beam',
        'decorative_blocks:willow_beam',
        'decorative_blocks:acacia_beam',
        'decorative_blocks:cherry_beam',
        'decorative_blocks:fir_beam',
        'decorative_blocks:dark_oak_beam',
        'decorative_blocks:oak_beam',
        'decorative_blocks:redwood_beam',
        'decorative_blocks:dead_beam',
        'decorative_blocks:spruce_beam'
    ];

    outputRemovals.forEach(function (removal) {
        event.remove({ output: removal });
    });

    idRemovals.forEach(function (removal) {
        event.remove({ id: removal });
    });
});
