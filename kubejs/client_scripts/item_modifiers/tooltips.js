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
    const id_prefix = 'tooltips.enigmatica.base.';
    const recipes = [
        {
            items: [
                'integratedtunnels:part_interface_fluid',
                'integratedtunnels:part_importer_fluid',
                'integratedtunnels:part_exporter_fluid'
            ],
            text: [Text.translate(`${id_prefix}integratedtunnels_fluid`).red()]
        },
        {
            items: [
                'integratedtunnels:part_interface_energy',
                'integratedtunnels:part_importer_energy',
                'integratedtunnels:part_exporter_energy'
            ],
            text: [Text.translate(`${id_prefix}integratedtunnels_energy`).red()]
        },
        {
            items: ['powah:charged_snowball', 'thermal:lightning_charge'],
            text: [Text.translate(`${id_prefix}lightning_charge`).gold()]
        },
        {
            items: ['kubejs:altered_recipe_indicator'],
            text: [Text.translate(`${id_prefix}altered_recipe_indicator`).gold()]
        },
        {
            items: ['kubejs:disabled_recipe_indicator'],
            text: [Text.translate(`${id_prefix}disabled_recipe_indicator`).gold()]
        },
        {
            items: ['tconstruct:crafting_station', 'tconstruct:part_builder', 'tconstruct:tinker_station'],
            text: [Text.translate(`${id_prefix}tcon_station`).gold()]
        },
        {
            items: ['tconstruct:scorched_anvil', 'tconstruct:tinkers_anvil'],
            text: [Text.translate(`${id_prefix}tcon_anvil`).gold()]
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
            text: [Text.translate(`${id_prefix}wither_immune`).color('#4F0D75')]
        },
        {
            items: ['modularrouters:blast_upgrade'],
            text: [Text.translate(`${id_prefix}blast_upgrade`).color('#4F0D75')]
        },
        {
            items: ['astralsorcery:illumination_wand'],
            text: [Text.translate(`${id_prefix}illumination_wand`).color('#4F0D75')]
        },
        {
            items: [
                'rftoolsbuilder:shield_block4',
                'rftoolsbuilder:shield_block3',
                'rftoolsbuilder:shield_block2',
                'rftoolsbuilder:shield_block1'
            ],
            text: [Text.translate(`${id_prefix}shield_block`).color('#4F0D75')]
        },
        {
            items: [/bloodmagic:quick_draw_anointment/],
            text: [Text.translate(`${id_prefix}quick_draw_anointment`).color('#7e24b3')]
        },
        {
            items: [/bloodmagic:fortune_anointment/],
            text: [Text.translate(`${id_prefix}fortune_anointment`).color('#7e24b3')]
        },
        {
            items: [/bloodmagic:holy_water_anointment/],
            text: [Text.translate(`${id_prefix}holy_water_anointment`).color('#7e24b3')]
        },
        {
            items: [/bloodmagic:melee_anointment/],
            text: [Text.translate(`${id_prefix}melee_anointment`).color('#7e24b3')]
        },
        {
            items: [/bloodmagic:bow_power_anointment/],
            text: [Text.translate(`${id_prefix}bow_power_anointment`).color('#7e24b3')]
        },
        {
            items: [/bloodmagic:silk_touch_anointment/],
            text: [Text.translate(`${id_prefix}silk_touch_anointment`).color('#7e24b3')]
        },
        {
            items: [/bloodmagic:hidden_knowledge_anointment/],
            text: [Text.translate(`${id_prefix}hidden_knowledge_anointment`).color('#7e24b3')]
        },
        {
            items: [/bloodmagic:smelting_anointment/],
            text: [Text.translate(`${id_prefix}smelting_anointment`).color('#7e24b3')]
        },
        {
            items: [/bloodmagic:looting_anointment/],
            text: [Text.translate(`${id_prefix}looting_anointment`).color('#7e24b3')]
        },
        {
            items: [/bloodmagic:bow_velocity_anointment/],
            text: [Text.translate(`${id_prefix}bow_velocity_anointment`).color('#7e24b3')]
        },
        {
            items: ['#enigmatica:burning_hot'],
            text: [Text.translate(`${id_prefix}burning_hot`).darkRed()]
        },
        {
            items: [
                'resourcefulbees:t1_beehive',
                'resourcefulbees:t2_beehive',
                'resourcefulbees:t3_beehive',
                'resourcefulbees:t4_beehive'
            ],
            text: [Text.translate(`${id_prefix}beehive`).red()]
        },
        {
            items: [/natures\w+:\w+_generator/],
            text: [Text.translate(`${id_prefix}aura_generator`).green()]
        },
        {
            items: ['clockout:clockout_block'],
            text: [Text.translate(`${id_prefix}clockout_block`).aqua()]
        },
        {
            items: ['kubejs:soggy_treasure_box'],
            text: [Text.translate(`${id_prefix}soggy_treasure_box`).darkAqua()]
        },
        {
            items: [/masterfulmachinery:\w+_mana_port/],
            text: [Text.translate(`${id_prefix}mm_mana_port`).green()]
        },
        {
            items: ['kubejs:amadron_survey_tools'],
            text: [Text.translate(`${id_prefix}amadron_survey_tools`).aqua()]
        },
        {
            items: ['kubejs:monster_mash'],
            text: [Text.translate(`${id_prefix}monster_mash`).red()]
        },
        {
            items: ['refinedstorage:silk_touch_upgrade'],
            text: [Text.translate(`${id_prefix}rs_silk_touch_upgrade`).red()]
        },
        {
            items: [
                'kubejs:crystalline_flowering_palo_verde_leaves',
                'kubejs:crystalline_oak_leaves',
                'kubejs:crystalline_dark_oak_wood'
            ],
            text: [Text.translate(`${id_prefix}crystalline`).gold()]
        },
        {
            items: refinedStorageItems.map((item) => `refinedstorage:${item}`),
            text: [Text.translate('descriptions.enigmatica.base.can_be_dyed')]
        }
    ];

    recipes.forEach((recipe) => {
        event.add(recipe.items, recipe.text);
    });
});
