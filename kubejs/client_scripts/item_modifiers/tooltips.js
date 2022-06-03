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
    const recipes = [
        {
            items: [
                'integratedtunnels:part_interface_fluid',
                'integratedtunnels:part_importer_fluid',
                'integratedtunnels:part_exporter_fluid'
            ],
            text: [Text.of('Max Fluid Transfer Rate has been limited to 65,536 mb per tick.').red()]
        },
        {
            items: [
                'integratedtunnels:part_interface_energy',
                'integratedtunnels:part_importer_energy',
                'integratedtunnels:part_exporter_energy'
            ],
            text: [Text.of('Max Energy Transfer Rate has been limited to 65,536 FE per tick.').red()]
        },
        {
            items: ['powah:charged_snowball', 'thermal:lightning_charge'],
            text: [Text.of('Calls down a lightning bolt on impact.').gold()]
        },
        {
            items: ['kubejs:altered_recipe_indicator'],
            text: [Text.of('Recipe altered for Enigmatica 6: Expert. Refer to JEI.').gold()]
        },
        {
            items: ['kubejs:disabled_recipe_indicator'],
            text: [Text.of('Recipe disabled for Enigmatica 6').gold()]
        },
        {
            items: ['tconstruct:crafting_station', 'tconstruct:part_builder', 'tconstruct:tinker_station'],
            text: [Text.of('Craftable with any wood.').gold()]
        },
        {
            items: ['tconstruct:scorched_anvil', 'tconstruct:tinkers_anvil'],
            text: [Text.of('Craftable with any alloy blocks.').gold()]
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
            text: [Text.of('Immune to the Wither').color('#4F0D75')]
        },
        {
            items: ['modularrouters:blast_upgrade'],
            text: [Text.of('Renders routers immune to the Wither').color('#4F0D75')]
        },
        {
            items: ['astralsorcery:illumination_wand'],
            text: [Text.of('Renders blocks immune to the Wither').color('#4F0D75')]
        },
        {
            items: [
                'rftoolsbuilder:shield_block4',
                'rftoolsbuilder:shield_block3',
                'rftoolsbuilder:shield_block2',
                'rftoolsbuilder:shield_block1'
            ],
            text: [Text.of('Shield Projections are immune to the Wither').color('#4F0D75')]
        },
        {
            items: [/bloodmagic:quick_draw_anointment/],
            text: [Text.of('Grants Quick-Draw on Bows and Crossbows').color('#7e24b3')]
        },
        {
            items: [/bloodmagic:fortune_anointment/],
            text: [Text.of('Grants additional Fortune on Tools').color('#7e24b3')]
        },
        {
            items: [/bloodmagic:holy_water_anointment/],
            text: [Text.of('Grants bonus Smite damage on Melee Attacks.').color('#7e24b3')]
        },
        {
            items: [/bloodmagic:melee_anointment/],
            text: [Text.of('Grants bonus damage on Melee Attacks').color('#7e24b3')]
        },
        {
            items: [/bloodmagic:bow_power_anointment/],
            text: [Text.of('Grants bonus damage on Bows and Crossbows').color('#7e24b3')]
        },
        {
            items: [/bloodmagic:silk_touch_anointment/],
            text: [Text.of('Grants Silk Touch').color('#7e24b3')]
        },
        {
            items: [/bloodmagic:hidden_knowledge_anointment/],
            text: [Text.of('Grants bonus Experience from block harvests.').color('#7e24b3')]
        },
        {
            items: [/bloodmagic:smelting_anointment/],
            text: [Text.of('Grants Auto Smelt').color('#7e24b3')]
        },
        {
            items: [/bloodmagic:looting_anointment/],
            text: [Text.of('Grants additional Looting on Weapons').color('#7e24b3')]
        },
        {
            items: [/bloodmagic:bow_velocity_anointment/],
            text: [Text.of('Grants additional projectile velocity on Bows and Crossbows').color('#7e24b3')]
        },
        {
            items: ['#enigmatica:burning_hot'],
            text: [Text.of('Extremely hot!').darkRed()]
        },
        {
            items: [
                'resourcefulbees:t1_beehive',
                'resourcefulbees:t2_beehive',
                'resourcefulbees:t3_beehive',
                'resourcefulbees:t4_beehive'
            ],
            text: [
                Text.of(`Tiered Beehives have been depreciated.`).red(),
                Text.of(`Use the Hive Upgrade items on nests found in the world instead.`).red(),
                Text.of(`Tiered Beehives can be converted to Hive Upgrades in a crafting grid.`).red()
            ]
        },
        {
            items: [/natures\w+:\w+_generator/],
            text: [Text.of(`Aura Generator`).green()]
        },
        {
            items: ['clockout:clockout_block'],
            text: [Text.of(`Outputs redstone when the player is online.`).aqua()]
        },
        {
            items: ['kubejs:soggy_treasure_box'],
            text: [Text.of(`The lock appears broken... What could be inside?`).darkAqua()]
        },
        {
            items: [/masterfulmachinery:\w+_mana_port/],
            text: [Text.of(`Compatible with Mana Spreaders and Sparks.`).green()]
        },
        {
            items: ['kubejs:amadron_survey_tools'],
            text: [Text.of(`Tools used by Amadron Drones to gather rare resources.`).aqua()]
        },
        {
            items: ['kubejs:monster_mash'],
            text: [Text.of(`...It caught on in a flash...`).red()]
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
