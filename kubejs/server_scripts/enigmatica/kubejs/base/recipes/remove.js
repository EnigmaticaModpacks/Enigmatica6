events.listen('recipes', function (event) {
    event.remove({ type: 'mekanism:combining' });
    event.remove({ type: 'minecraft:smelting', output: 'minecraft:obsidian' });
    event.remove({ type: 'minecraft:blasting', output: 'minecraft:obsidian' });
    event.remove({mod: 'prettypipes'})

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

        'engineersdecor:dependent/slag_brick_block_recipe',

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

    disabledItems.forEach((disabledItem) => {
        event.remove({ output: disabledItem });
    });

    event.remove({
        output: '/buildersaddition:\\w+_vertical_slab/',
        mod: 'buildersaddition',
        type: 'minecraft:crafting_shaped'
    });

    beamRecipes.forEach((recipe) => {
        event.remove({ output: recipe.output });
    });
});
