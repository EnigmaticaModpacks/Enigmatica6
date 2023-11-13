onEvent('item.tooltip', (event) => {
    /*
    Valid Color Codes:
    
    .black()
    .darkBlue()
    .darkGreen()
    .darkAqua()
    .darkRed()
    .darkPurple()
    .gold()
    .gray()
    .darkGray()
    .blue()
    .green()
    .aqua()
    .red()
    .lightPurple()
    .yellow()
    .white()
    .color('#808080') //any hex color
    */
    const id_prefix = 'tooltips.enigmatica.base.'
    const recipes = [
        {
            items: [
                'integratedtunnels:part_interface_fluid',
                'integratedtunnels:part_importer_fluid',
                'integratedtunnels:part_exporter_fluid'
            ],
            text: [Text.translate('Max Fluid Transfer Rate has been limited to 65,536 mb per tick.').red()]
        },
        {
            items: [
                'integratedtunnels:part_interface_energy',
                'integratedtunnels:part_importer_energy',
                'integratedtunnels:part_exporter_energy'
            ],
            text: [Text.translate('Max Energy Transfer Rate has been limited to 65,536 FE per tick.').red()]
        },
        {
            items: ['powah:charged_snowball', 'thermal:lightning_charge'],
            text: [Text.translate('Calls down a lightning bolt on impact.').gold()]
        },
        {
            items: ['kubejs:altered_recipe_indicator'],
            text: [Text.translate('Recipe altered for Enigmatica 6: Expert. Refer to JEI.').gold()]
        },
        {
            items: ['kubejs:disabled_recipe_indicator'],
            text: [Text.translate('Recipe disabled for Enigmatica 6').gold()]
        },
        {
            items: ['tconstruct:crafting_station', 'tconstruct:part_builder', 'tconstruct:tinker_station'],
            text: [Text.translate('Craftable with any wood.').gold()]
        },
        {
            items: ['tconstruct:scorched_anvil', 'tconstruct:tinkers_anvil'],
            text: [Text.translate('Craftable with any alloy blocks.').gold()]
        },
        {
            items: [
                'engineersdecor:rebar_concrete_tile_stairs',
                'engineersdecor:rebar_concrete_tile_slab',
                'engineersdecor:rebar_concrete_tile',
                'engineersdecor:rebar_concrete_wall',
                'engineersdecor:rebar_concrete_stairs',
                'engineersdecor:rebar_concrete_slab',
                'engineersdecor:rebar_concrete',
                'thermal:enderium_glass',
                'thermal:lumium_glass',
                'thermal:signalum_glass',
                'thermal:obsidian_glass',
                'engineersdecor:panzerglass_block'
            ],
            text: [Text.translate('Immune to the Wither').color('#4F0D75')]
        },
        {
            items: ['modularrouters:blast_upgrade'],
            text: [Text.translate('Renders routers immune to the Wither').color('#4F0D75')]
        },
        {
            items: ['astralsorcery:illumination_wand'],
            text: [Text.translate('Renders blocks immune to the Wither').color('#4F0D75')]
        },
        {
            items: [
                'rftoolsbuilder:shield_block4',
                'rftoolsbuilder:shield_block3',
                'rftoolsbuilder:shield_block2',
                'rftoolsbuilder:shield_block1'
            ],
            text: [Text.translate('Shield Projections are immune to the Wither').color('#4F0D75')]
        },
        {
            items: [/bloodmagic:quick_draw_anointment/],
            text: [Text.translate('Grants Quick-Draw on Bows and Crossbows').color('#7e24b3')]
        },
        {
            items: [/bloodmagic:fortune_anointment/],
            text: [Text.translate('Grants additional Fortune on Tools').color('#7e24b3')]
        },
        {
            items: [/bloodmagic:holy_water_anointment/],
            text: [Text.translate('Grants bonus Smite damage on Melee Attacks.').color('#7e24b3')]
        },
        {
            items: [/bloodmagic:melee_anointment/],
            text: [Text.translate('Grants bonus damage on Melee Attacks').color('#7e24b3')]
        },
        {
            items: [/bloodmagic:bow_power_anointment/],
            text: [Text.translate('Grants bonus damage on Bows and Crossbows').color('#7e24b3')]
        },
        {
            items: [/bloodmagic:silk_touch_anointment/],
            text: [Text.translate('Grants Silk Touch').color('#7e24b3')]
        },
        {
            items: [/bloodmagic:hidden_knowledge_anointment/],
            text: [Text.translate('Grants bonus Experience from block harvests.').color('#7e24b3')]
        },
        {
            items: [/bloodmagic:smelting_anointment/],
            text: [Text.translate('Grants Auto Smelt').color('#7e24b3')]
        },
        {
            items: [/bloodmagic:looting_anointment/],
            text: [Text.translate('Grants additional Looting on Weapons').color('#7e24b3')]
        },
        {
            items: [/bloodmagic:bow_velocity_anointment/],
            text: [Text.translate('Grants additional projectile velocity on Bows and Crossbows').color('#7e24b3')]
        },
        {
            items: ['#enigmatica:burning_hot'],
            text: [Text.translate('Extremely hot!').darkRed()]
        },
        {
            items: [
                'resourcefulbees:t1_beehive',
                'resourcefulbees:t2_beehive',
                'resourcefulbees:t3_beehive',
                'resourcefulbees:t4_beehive'
            ],
            text: [
                Text.translate(`Tiered Beehives have been depreciated.`).red(),
                Text.translate(`Use the Hive Upgrade items on nests found in the world instead.`).red(),
                Text.translate(`Tiered Beehives can be converted to Hive Upgrades in a crafting grid.`).red()
            ]
        },
        {
            items: [/natures\w+:\w+_generator/],
            text: [Text.translate(`Aura Generator`).green()]
        },
        {
            items: ['clockout:clockout_block'],
            text: [Text.translate(`Outputs redstone when the player is online.`).aqua()]
        },
        {
            items: ['kubejs:soggy_treasure_box'],
            text: [Text.translate(`The lock appears broken... What could be inside?`).darkAqua()]
        },
        {
            items: [/masterfulmachinery:\w+_mana_port/],
            text: [Text.translate(`Compatible with Mana Spreaders and Sparks.`).green()]
        },
        {
            items: ['kubejs:amadron_survey_tools'],
            text: [Text.translate(`Tools used by Amadron Drones to gather rare resources.`).aqua()]
        },
        {
            items: ['kubejs:monster_mash'],
            text: [Text.translate(`...It caught on in a flash...`).red()]
        },
        {
            items: ['refinedstorage:silk_touch_upgrade'],
            text: [Text.translate('Does not work on spawners.').red()]
        },
        {
            items: [
                'kubejs:crystalline_flowering_palo_verde_leaves',
                'kubejs:crystalline_oak_leaves',
                'kubejs:crystalline_dark_oak_wood'
            ],
            text: [Text.translate('Fireproof').gold()]
        }
    ];

    refinedStorageItems.forEach((item) => {
        recipes.push({
            items: [`refinedstorage:${item}`],
            text: ['Can be dyed through crafting or by right clicking it with dye in-world.']
        });
    });

    recipes.forEach((recipe) => {
        event.add(recipe.items, recipe.text);
    });
});
