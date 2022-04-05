onEvent('recipes', (event) => {
    const id_prefix = 'enigmatica:base/create/splashing/';
    const recipes = [
        {
            outputs: ['buildinggadgets:construction_block_dense'],
            input: 'buildinggadgets:construction_block_powder',
            id: `${id_prefix}construction_block_dense`
        },
        {
            outputs: [
                Item.of('emendatusenigmatica:silicon_gem').chance(0.5),
                Item.of('emendatusenigmatica:silicon_gem').chance(0.25)
            ],
            input: 'create:limesand',
            id: `${id_prefix}silicon_gem`
        },
        {
            outputs: ['upgrade_aquatic:driftwood_log'],
            input: '#minecraft:logs',
            id: `${id_prefix}driftwood_log`
        },
        {
            outputs: ['dustrial_decor:rusty_iron_door'],
            input: 'minecraft:iron_door',
            id: `${id_prefix}rusty_iron_door`
        },
        {
            outputs: ['dustrial_decor:rusty_iron_trapdoor'],
            input: 'minecraft:iron_trapdoor',
            id: `${id_prefix}rusty_iron_trapdoor`
        },
        {
            outputs: [Item.of('minecraft:quartz').withChance(0.25), Item.of('minecraft:redstone').withChance(0.05)],
            input: 'byg:quartzite_sand',
            id: `${id_prefix}quartz`
        },
        {
            outputs: ['botanypots:botany_pot'],
            input: '#botanypots:botany_pots/simple',
            id: `${id_prefix}botany_pot`
        },
        {
            outputs: ['botanypots:hopper_botany_pot'],
            input: '#botanypots:botany_pots/hopper',
            id: `${id_prefix}hopper_botany_pot`
        },
        {
            outputs: ['minecraft:terracotta'],
            input: '#enigmatica:washables/terracotta',
            id: `${id_prefix}terracotta`
        },
        {
            outputs: ['atum:ceramic_white'],
            input: '#enigmatica:washables/ceramic',
            id: `${id_prefix}ceramic`
        },
        {
            outputs: ['atum:ceramic_slab_white'],
            input: '#enigmatica:washables/ceramic_slab',
            id: `${id_prefix}ceramic_slab`
        },
        {
            outputs: ['atum:ceramic_tile_white'],
            input: '#enigmatica:washables/ceramic_tile',
            id: `${id_prefix}ceramic_tile`
        },
        {
            outputs: ['atum:ceramic_stairs_white'],
            input: '#enigmatica:washables/ceramic_stairs',
            id: `${id_prefix}ceramic_stairs`
        },
        {
            outputs: ['atum:ceramic_wall_white'],
            input: '#enigmatica:washables/ceramic_wall',
            id: `${id_prefix}ceramic_wall`
        },
        {
            outputs: ['betterendforge:dense_snow'],
            input: 'minecraft:snow_block',
            id: `${id_prefix}dense_snow`
        },
        {
            outputs: ['farmersdelight:wheat_dough'],
            input: '#forge:dusts/flour',
            id: `${id_prefix}wheat_dough`
        },
        {
            outputs: ['atum:emmer_dough'],
            input: 'atum:emmer_flour',
            id: `${id_prefix}emmer_dough`
        },
        {
            outputs: ['thermal:white_rockwool'],
            input: '#enigmatica:washables/rockwool',
            id: `${id_prefix}white_rockwool`
        }
    ];
    const rusty_items = [
        'quark:rusty_iron_plate_slab',
        'quark:rusty_iron_plate_stairs',
        'quark:rusty_iron_plate_vertical_slab',
        'dustrial_decor:rusty_sheet_metal',
        'dustrial_decor:rusty_sheet_metal_plating',
        'dustrial_decor:rusty_sheet_metal_plating_slab',
        'dustrial_decor:rusty_sheet_metal_plating_stairs',
        'dustrial_decor:rusty_sheet_metal_paneling',
        'dustrial_decor:rusty_sheet_metal_siding',
        'dustrial_decor:rusty_sheet_metal_walling',
        'dustrial_decor:rusty_sheet_metal_treading',
        'dustrial_decor:rusty_sheet_metal_treading_slab',
        'dustrial_decor:rusty_sheet_metal_treading_stairs',
        'dustrial_decor:rusty_sheet_metal_trapdoor',
        'dustrial_decor:rusty_sheet_metal_door'
    ];

    recipes.forEach((recipe) => {
        event.recipes.create.splashing(recipe.outputs, recipe.input).id(recipe.id);
    });

    rusty_items.forEach((item) => {
        event.recipes.create.splashing([item], item.replace('rusty_', '')).id(`${id_prefix}${item.split(':')[1]}`);
    });
});
