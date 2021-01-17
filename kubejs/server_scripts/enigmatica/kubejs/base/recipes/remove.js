events.listen('recipes', function (event) {
    event.remove({ type: 'mekanism:combining' });
    event.remove({ type: 'minecraft:smelting', output: 'minecraft:obsidian' });
    event.remove({ type: 'minecraft:blasting', output: 'minecraft:obsidian' });
    event.remove({ mod: 'prettypipes' });

    var outputRemovals = [
        'additionalbars:crossed_iron_bars',

        'bambooeverything:bamboo_bundle',

        'byg:blue_enchanted_crafting_table',
        'byg:green_enchanted_crafting_table',

        'craftingstation:crafting_station',

        'decorative_blocks:lattice',

        'akashictome:tome',

        'magicfeather:magicfeather',

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

        'astralsorcery:infuser/gold_ore',

        'bloodmagic:smelting/ingot_netherite_scrap',

        'botania:fertilizer_dye',

        'buildersaddition:iron_rod',

        'create:mechanical_crafting/integrated_circuit',
        'create:pressing/lapis_block',

        'engineersdecor:dependent/slag_brick_block_recipe',

        'immersiveengineering:crafting/stick_steel',
        'immersiveengineering:crafting/stick_aluminum',
        'immersiveengineering:crafting/stick_iron',

        'mapperbase:steel_nugget_from_blasting',
        'mapperbase:steel_plate_from_blasting',
        'mapperbase:steel_block_from_blasting',
        'mapperbase:steel_ingot_from_blasting',
        'mapperbase:steel_rod_from_blasting',
        'mapperbase:steel_rod',
        'mapperbase:iron_rod',

        'morevanillalib:obsidian_shard',

        'thermal:machine/plugins/create/pulverizer_create_zinc_ore',
        'thermal:machine/plugins/mekanism/pulverizer_mek_osmium_ore'
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

    event.remove({
        output: '/extrastorage:disk_\\w+/',
        mod: 'extrastorage'
    });
    event.remove({
        output: '/extrastorage:storagepart_\\w+/',
        mod: 'extrastorage',
        type: 'minecraft:crafting_shaped'
    });

    event.remove({
        output: '/buildersaddition:\\w+_vertical_slab/',
        mod: 'buildersaddition',
        type: 'minecraft:crafting_shaped'
    });

    event.remove({
        output: 'mekanism:sawdust',
        mod: 'mekanism',
        type: 'mekanism:sawing'
    });

    event.remove({
        output: '/\\w+:\\w+_gear/',
        type: 'minecraft:crafting_shaped'
    });

    event.remove({
        output: '/emendatusenigmatica:\\w+_rod/',
        mod: 'immersiveengineering',
        type: 'immersiveengineering:metal_press'
    });

    event.remove({
        output: '/emendatusenigmatica:\\w+_rod/',
        mod: 'immersiveposts'
    });

    event.remove({
        output: '/emendatusenigmatica:\\w+_gear/',
        mod: 'immersiveengineering'
    });

    event.remove({
        input: '#forge:ores',
        mod: 'create',
        type: 'create:milling'
    });

    event.remove({
        input: '#forge:ores',
        mod: 'create',
        type: 'create:crushing'
    });

    event.remove({
        mod: 'occultism',
        type: 'occultism:miner'
    });

    event.remove({ type: 'valhelsia_structures:axe_crafting' });

    beamRecipes.forEach((recipe) => {
        event.remove({ output: recipe.output });
    });
});
