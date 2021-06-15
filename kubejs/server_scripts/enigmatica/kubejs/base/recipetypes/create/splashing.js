onEvent('recipes', (event) => {
    var data = {
        recipes: [
            {
                outputs: ['buildinggadgets:construction_block_dense'],
                input: 'buildinggadgets:construction_block_powder'
            },
            {
                outputs: [
                    Item.of('emendatusenigmatica:silicon_gem').chance(0.5),
                    Item.of('emendatusenigmatica:silicon_gem').chance(0.25)
                ],
                input: 'create:limesand'
            },
            {
                outputs: ['upgrade_aquatic:driftwood_log'],
                input: '#minecraft:logs'
            },
            {
                outputs: ['dustrial_decor:rusty_iron_door'],
                input: 'minecraft:iron_door'
            },
            {
                outputs: ['dustrial_decor:rusty_iron_trapdoor'],
                input: 'minecraft:iron_trapdoor'
            },
            {
                outputs: [Item.of('minecraft:quartz').withChance(0.25), Item.of('minecraft:redstone').withChance(0.05)],
                input: 'byg:quartzite_sand'
            },
            {
                outputs: ['botanypots:botany_pot'],
                input: '#enigmatica:washables/simplebotanypots'
            },
            {
                outputs: ['botanypots:hopper_botany_pot'],
                input: '#enigmatica:washables/hopperbotanypots'
            },
            {
                outputs: ['minecraft:terracotta'],
                input: '#enigmatica:washables/terracotta'
            },
            {
                outputs: ['betterendforge:dense_snow'],
                input: 'minecraft:snow_block'
            }
        ],
        rusty_items: [
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
        ]
    };

    data.recipes.forEach((recipe) => {
        event.recipes.create.splashing(recipe.outputs, recipe.input);
    });

    data.rusty_items.forEach((item) => {
        event.recipes.create.splashing([item], item.replace('rusty_', ''));
    });
});
