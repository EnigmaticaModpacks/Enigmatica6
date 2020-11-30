events.listen('recipes', function (event) {
    event.remove({ type: 'mekanism:combining' });
    event.remove({ type: 'minecraft:smelting', output: 'minecraft:obsidian' });
    event.remove({ type: 'minecraft:blasting', output: 'minecraft:obsidian' });

    var outputRemovals = [
        'additionalbars:crossed_iron_bars',

        'bambooeverything:bamboo_bundle',

        'decorative_blocks:lattice',

        //'akashictome:tome',

        'mekanism:combiner',
        'mekanism:basic_combining_factory',
        'mekanism:advanced_combining_factory',
        'mekanism:elite_combining_factory',
        'mekanism:ultimate_combining_factory',

        'minecraft:sticky_piston',

        'morevanillalib:obsidian_shard',

        'simplefarming:raw_bacon',

        'thermal:bamboo_block',

        'quantumstorage:tank',
        'quantumstorage:qsu'
    ];

    var idRemovals = [
        'aquaculture:gold_nugget_from_blasting',
        'aquaculture:gold_nugget_from_smelting',
        'aquaculture:iron_nugget_from_blasting',
        'aquaculture:iron_nugget_from_smelting',
        'aquaculture:neptunium_ingot_from_blasting',
        'aquaculture:neptinium_ingot_from_blasting',

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
        'decorative_blocks:spruce_beam',

        'immersiveengineering:crafting/stick_steel',

        'mapperbase:steel_block_from_blasting',
        'mapperbase:steel_ingot_from_blasting',
        'mapperbase:steel_rod_from_blasting',
        'mapperbase:steel_rod',

        'morevanillalib:obsidian_shard'
    ];

    outputRemovals.forEach((removal) => {
        event.remove({ output: removal });
    });

    idRemovals.forEach((removal) => {
        event.remove({ id: removal });
    });

    global.disabledItems.forEach((disabledItem) => {
        event.remove({ output: disabledItem });
    });

    // Removes log-stripping recipes from xercamod
    event.remove({ output: '/minecraft:stripped_\\w+/', mod: 'xercamod' });
});
