onEvent('item.registry', (event) => {
    const generalItems = [
        'common_lootbox',
        'rare_lootbox',
        'epic_lootbox',
        'legendary_lootbox',
        'miners_delight',
        'sorcerers_delight',
        'farmers_delight',
        'blacksmiths_delight',
        'scavengers_delight',
        'alchemists_delight',
        'quintuple_alfsteel_ingot',
        'altered_recipe_indicator',
        'disabled_recipe_indicator',

        // Expert
        'observatory_lens',
        'coarse_lapis_lazuli_compound',
        'smoldering_lapis_lazuli_compound',
        'cutting_essence',
        'superheated_steel_ingot',
        'hot_compressed_iron_ingot',
        'dimensional_storage_crystal',
        'spirit_entropic_gateway',
        'amadron_survey_tools',
        'basalt_powder',
        'coke_brick_blend',
        'coke_brick',
        'blast_brick_blend',
        'blast_brick',
        'red_nether_brick',
        'ground_meat',
        'memory_basic_empty',
        'memory_basic_filled',
        'memory_advanced_empty',
        'memory_advanced_filled',
        'memory_elite_empty',
        'memory_elite_filled',
        'memory_ultimate_empty',
        'memory_ultimate_filled',
        'scented_stick',
        'celestial_mycelium_filaments',
        'incomplete_book',
        'incomplete_capacitor_basic_large',
        'astrogro',
        'advanced_ram_chip',
        'monster_mash',
        'cpu_core_mk_1026',
        'cpu_core_eg_28222',
        'cpu_core_as_81221',

        'automation_mastery_shard',
        'engineering_mastery_shard',
        'energistics_mastery_shard',
        'dimensional_mastery_shard',
        'battle_mastery_shard',
        'excavation_mastery_shard',

        'botanical_mastery_shard',
        'astronomy_mastery_shard',
        'alchemy_mastery_shard',
        'ritual_mastery_shard',
        'aura_mastery_shard',
        'culinary_mastery_shard',

        'automation_mastery_token',
        'engineering_mastery_token',
        'energistics_mastery_token',
        'dimensional_mastery_token',
        'battle_mastery_token',
        'excavation_mastery_token',

        'botanical_mastery_token',
        'astronomy_mastery_token',
        'alchemy_mastery_token',
        'ritual_mastery_token',
        'aura_mastery_token',
        'culinary_mastery_token',

        'worldshaper_handle',
        'worldshaper_cog',
        'worldshaper_barrel',
        'laputian_ingot',

        'partial_alloybrick',
        'partial_blastbrick',
        'partial_cokebrick'
    ];

    const ritualDummies = [
        'summon_pink_wither',
        'summon_pharaoh',
        'craft_spirit_entropic_gateway',
        'craft_magical_feathers',
        'craft_magicfeather',
        'craft_soulsword',
        'craft_soulaxe',
        'craft_soulpickaxe',
        'craft_soulshovel',
        'craft_soulscythe',
        'craft_attunement_altar',
        'craft_mana_collector',
        'craft_logic_director',
        'craft_robit',
        'craft_feeding_upgrade',
        'craft_advanced_feeding_upgrade',
        'craft_auto_smelting_upgrade',
        'craft_pump_upgrade',
        'craft_advanced_pump_upgrade',
        'craft_xp_pump_upgrade',
        'craft_advanced_compacting_upgrade',
        'craft_tool_swapper_upgrade',
        'craft_advanced_tool_swapper_upgrade',
        'craft_refill_upgrade',
        'craft_turtle_normal',
        'craft_turtle_advanced',
        'craft_otherworldly_honey_bottle',
        'craft_mycelial_netherstar',
        'craft_mycelial_halitosis',
        'craft_mycelial_meatallurgic',
        'craft_mycelial_potion',
        'craft_mycelial_magma',
        'craft_mycelial_slimey',
        'craft_mycelial_crimed',
        'craft_mycelial_ender',
        'craft_mycelial_explosive',
        'craft_mycelial_disenchantment',
        'craft_mycelial_rocket',
        'craft_mycelial_death',
        'craft_mycelial_frosty',
        'craft_mycelial_culinary',
        'craft_mycelial_pink',
        'craft_mycelial_furnace',
        'craft_glyph_sentientharm',
        'craft_ender_dagger',
        'craft_enchantment_library',
        'craft_fisher_foliot',
        'craft_gaia_reactor_controller',
        'craft_miner_marid_irradiated',
        'craft_earth_focus',
        'craft_air_focus',
        'craft_water_focus',
        'craft_fire_focus',
        'craft_necrotic_focus',
        'craft_masterroutingnode'
    ];

    const reusableItemTextures = [
        { name: 'medium_machinery_schematics', texture: 'blueprint' },
        { name: 'heavy_machinery_schematics', texture: 'blueprint' },

        /*
        { name: 'machine_speed_augment_mk2', texture: 'machine_speed_augment' },
        { name: 'machine_speed_augment_mk3', texture: 'machine_speed_augment' },
        { name: 'machine_speed_augment_mk4', texture: 'machine_speed_augment' },

        { name: 'dynamo_output_augment_mk2', texture: 'dynamo_output_augment' },
        { name: 'dynamo_output_augment_mk3', texture: 'dynamo_output_augment' },
        { name: 'dynamo_output_augment_mk4', texture: 'dynamo_output_augment' },

        { name: 'dynamo_fuel_augment_mk2', texture: 'dynamo_fuel_augment' },
        { name: 'dynamo_fuel_augment_mk3', texture: 'dynamo_fuel_augment' },
        { name: 'dynamo_fuel_augment_mk4', texture: 'dynamo_fuel_augment' },
        */

        { name: 'diy_arc_furnace', texture: 'packing_crate_gray' },
        { name: 'diy_pumpjack', texture: 'packing_crate_yellow' },
        { name: 'diy_distillation_tower', texture: 'advanced_packing_crate_purple' },
        { name: 'diy_excavator', texture: 'advanced_packing_crate_green' },
        { name: 'mining_gadget_kit', texture: 'packing_crate_blue' },
        { name: 'flux_bore_kit', texture: 'packing_crate_lime' },
        { name: 'diy_pedestal_quarry', texture: 'packing_crate_red' },
        { name: 'diy_mekasuit_helmet', texture: 'packing_crate_red' },
        { name: 'diy_mekasuit_bodyarmor', texture: 'packing_crate_red' },
        { name: 'diy_mekasuit_pants', texture: 'packing_crate_red' },
        { name: 'diy_mekasuit_boots', texture: 'packing_crate_red' },
        { name: 'diy_meka_tool', texture: 'packing_crate_red' },
        { name: 'artisinal_ritual_kit', texture: 'advanced_packing_crate_purple' },
        { name: 'artisinal_chalk_set', texture: 'advanced_packing_crate_green' },
        { name: 'diy_pressure_chamber', texture: 'packing_crate_lime' },
        { name: 'diy_drone_kit', texture: 'packing_crate_red' },
        { name: 'assorted_router_kit', texture: 'advanced_packing_crate_purple' },
        { name: 'altar_of_birthing_kit', texture: 'packing_crate_blue' },
        { name: 'diy_furnace_engine_kit', texture: 'packing_crate_blue' },
        { name: 'imaharas_indelible_electrodes', texture: 'advanced_packing_crate_green' },
        { name: 'diy_mixer', texture: 'advanced_packing_crate_green' },
        { name: 'diy_bottling_machine', texture: 'advanced_packing_crate_purple' },
        { name: 'bright_constellation_box', texture: 'advanced_packing_crate_purple' },
        { name: 'dim_constellation_box', texture: 'advanced_packing_crate_green' },

        { name: 'engineers_school_project', texture: 'packing_crate_gray' },
        { name: 'partial_engineers_school_project', texture: 'packing_crate_gray' },
        { name: 'foundation_materials', texture: 'packing_crate_red' },
        { name: 'partial_foundation_materials', texture: 'packing_crate_red' },
        { name: 'construction_tools', texture: 'packing_crate_yellow' },
        { name: 'partial_construction_tools', texture: 'packing_crate_yellow' },
        { name: 'landscaping_materials', texture: 'packing_crate_lime' },
        { name: 'partial_landscaping_materials', texture: 'packing_crate_lime' },
        { name: 'engineering_student_meals', texture: 'packing_crate_blue' },
        { name: 'partial_engineering_student_meals', texture: 'packing_crate_blue' },
        { name: 'building_materials', texture: 'packing_crate_orange' },
        { name: 'partial_building_materials', texture: 'packing_crate_orange' },
        { name: 'big_box_o_boom', texture: 'packing_crate_gray' },
        { name: 'partial_big_box_o_boom', texture: 'packing_crate_gray' },
        { name: 'mimirs_memory_box', texture: 'packing_crate_lime' },
        { name: 'partial_mimirs_memory_box', texture: 'packing_crate_lime' },
        { name: 'box_of_thankful_dinners', texture: 'advanced_packing_crate_purple' },
        { name: 'partial_box_of_thankful_dinners', texture: 'advanced_packing_crate_purple' },
        { name: 'stim_pack', texture: 'packing_crate_red' },
        { name: 'partial_stim_pack', texture: 'packing_crate_red' },

        { name: 'engineers_school_upgrades', texture: 'advanced_packing_crate_gray' },
        { name: 'partial_engineers_school_upgrades', texture: 'advanced_packing_crate_gray' },
        { name: 'computer_package', texture: 'advanced_packing_crate_green' },
        { name: 'partial_computer_package', texture: 'advanced_packing_crate_green' },
        { name: 'fluid_drill_package', texture: 'advanced_packing_crate_purple' },
        { name: 'partial_fluid_drill_package', texture: 'advanced_packing_crate_purple' },

        { name: 'basic_memory_package', texture: 'assembly_package_filled' },
        { name: 'basic_memory_assembly', texture: 'assembly_package_processing' },
        { name: 'batch_basic_memory_package', texture: 'packing_crate_yellow' },
        { name: 'batch_basic_memory_assembly', texture: 'assembly_package_processing' },

        { name: 'cpu_core_500_package', texture: 'assembly_package_filled' },
        { name: 'cpu_core_500_assembly', texture: 'assembly_package_processing' },
        { name: 'batch_cpu_core_500_package', texture: 'packing_crate_blue' },
        { name: 'batch_cpu_core_500_assembly', texture: 'assembly_package_processing' },
        { name: 'cpu_core_1000_package', texture: 'assembly_package_filled' },
        { name: 'cpu_core_1000_assembly', texture: 'assembly_package_processing' },
        { name: 'batch_cpu_core_1000_package', texture: 'packing_crate_blue' },
        { name: 'batch_cpu_core_1000_assembly', texture: 'assembly_package_processing' },
        { name: 'cpu_core_2000_package', texture: 'assembly_package_filled' },
        { name: 'cpu_core_2000_assembly', texture: 'assembly_package_processing' },
        { name: 'batch_cpu_core_2000_package', texture: 'packing_crate_blue' },
        { name: 'batch_cpu_core_2000_assembly', texture: 'assembly_package_processing' },

        { name: 'basic_circuit_package', texture: 'assembly_package_filled' },
        { name: 'basic_circuit_assembly', texture: 'assembly_package_processing' },
        { name: 'batch_basic_circuit_package', texture: 'packing_crate_lime' },
        { name: 'batch_basic_circuit_assembly', texture: 'assembly_package_processing' },

        { name: 'basic_lenses_package', texture: 'assembly_package_filled' },
        { name: 'batch_unassembled_pcb', texture: 'packing_crate_lime' },

        { name: 'soggy_treasure_box', texture: 'common_lootbox' },

        { name: 'pneumatic_helmet_package', texture: 'assembly_package_filled' },
        { name: 'pneumatic_helmet_assembly', texture: 'assembly_package_processing' },
        { name: 'pneumatic_chestplate_package', texture: 'assembly_package_filled' },
        { name: 'pneumatic_chestplate_assembly', texture: 'assembly_package_processing' },
        { name: 'pneumatic_leggings_package', texture: 'assembly_package_filled' },
        { name: 'pneumatic_leggings_assembly', texture: 'assembly_package_processing' },
        { name: 'pneumatic_boots_package', texture: 'assembly_package_filled' },
        { name: 'pneumatic_boots_assembly', texture: 'assembly_package_processing' },

        { name: 'mekasuit_helmet_package', texture: 'assembly_package_filled' },
        { name: 'mekasuit_helmet_assembly', texture: 'assembly_package_processing' },
        { name: 'mekasuit_bodyarmor_package', texture: 'assembly_package_filled' },
        { name: 'mekasuit_bodyarmor_assembly', texture: 'assembly_package_processing' },
        { name: 'mekasuit_pants_package', texture: 'assembly_package_filled' },
        { name: 'mekasuit_pants_assembly', texture: 'assembly_package_processing' },
        { name: 'mekasuit_boots_package', texture: 'assembly_package_filled' },
        { name: 'mekasuit_boots_assembly', texture: 'assembly_package_processing' },

        { name: '1k_storage_part_package', texture: 'assembly_package_filled' },
        { name: '1k_storage_part_assembly', texture: 'assembly_package_processing' },
        { name: '4k_storage_part_package', texture: 'assembly_package_filled' },
        { name: '4k_storage_part_assembly', texture: 'assembly_package_processing' },
        { name: '16k_storage_part_package', texture: 'assembly_package_filled' },
        { name: '16k_storage_part_assembly', texture: 'assembly_package_processing' },
        { name: '64k_storage_part_package', texture: 'assembly_package_filled' },
        { name: '64k_storage_part_assembly', texture: 'assembly_package_processing' },
        { name: '256k_storage_part_package', texture: 'assembly_package_filled' },
        { name: '256k_storage_part_assembly', texture: 'assembly_package_processing' },
        { name: '1024k_storage_part_package', texture: 'assembly_package_filled' },
        { name: '1024k_storage_part_assembly', texture: 'assembly_package_processing' },
        { name: '4096k_storage_part_package', texture: 'assembly_package_filled' },
        { name: '4096k_storage_part_assembly', texture: 'assembly_package_processing' },
        { name: '16384k_storage_part_package', texture: 'assembly_package_filled' },
        { name: '16384k_storage_part_assembly', texture: 'assembly_package_processing' },

        { name: 'batch_1k_storage_part_package', texture: 'packing_crate_lime' },
        { name: 'batch_1k_storage_part_assembly', texture: 'assembly_package_processing' },
        { name: 'batch_4k_storage_part_package', texture: 'packing_crate_lime' },
        { name: 'batch_4k_storage_part_assembly', texture: 'assembly_package_processing' },
        { name: 'batch_16k_storage_part_package', texture: 'packing_crate_lime' },
        { name: 'batch_16k_storage_part_assembly', texture: 'assembly_package_processing' },
        { name: 'batch_64k_storage_part_package', texture: 'packing_crate_lime' },
        { name: 'batch_64k_storage_part_assembly', texture: 'assembly_package_processing' },
        { name: 'batch_256k_storage_part_package', texture: 'packing_crate_lime' },
        { name: 'batch_256k_storage_part_assembly', texture: 'assembly_package_processing' },
        { name: 'batch_1024k_storage_part_package', texture: 'packing_crate_lime' },
        { name: 'batch_1024k_storage_part_assembly', texture: 'assembly_package_processing' },
        { name: 'batch_4096k_storage_part_package', texture: 'packing_crate_lime' },
        { name: 'batch_4096k_storage_part_assembly', texture: 'assembly_package_processing' },
        { name: 'batch_16384k_storage_part_package', texture: 'packing_crate_lime' },
        { name: 'batch_16384k_storage_part_assembly', texture: 'assembly_package_processing' },

        { name: '64k_fluid_storage_part_package', texture: 'assembly_package_filled' },
        { name: '64k_fluid_storage_part_assembly', texture: 'assembly_package_processing' },
        { name: '256k_fluid_storage_part_package', texture: 'assembly_package_filled' },
        { name: '256k_fluid_storage_part_assembly', texture: 'assembly_package_processing' },
        { name: '1024k_fluid_storage_part_package', texture: 'assembly_package_filled' },
        { name: '1024k_fluid_storage_part_assembly', texture: 'assembly_package_processing' },
        { name: '4096k_fluid_storage_part_package', texture: 'assembly_package_filled' },
        { name: '4096k_fluid_storage_part_assembly', texture: 'assembly_package_processing' },
        { name: '16384k_fluid_storage_part_package', texture: 'assembly_package_filled' },
        { name: '16384k_fluid_storage_part_assembly', texture: 'assembly_package_processing' },
        { name: '65536k_fluid_storage_part_package', texture: 'assembly_package_filled' },
        { name: '65536k_fluid_storage_part_assembly', texture: 'assembly_package_processing' },
        { name: '262144k_fluid_storage_part_package', texture: 'assembly_package_filled' },
        { name: '262144k_fluid_storage_part_assembly', texture: 'assembly_package_processing' },
        { name: '1048576k_fluid_storage_part_package', texture: 'assembly_package_filled' },
        { name: '1048576k_fluid_storage_part_assembly', texture: 'assembly_package_processing' },

        { name: 'batch_64k_fluid_storage_part_package', texture: 'packing_crate_lime' },
        { name: 'batch_64k_fluid_storage_part_assembly', texture: 'assembly_package_processing' },
        { name: 'batch_256k_fluid_storage_part_package', texture: 'packing_crate_lime' },
        { name: 'batch_256k_fluid_storage_part_assembly', texture: 'assembly_package_processing' },
        { name: 'batch_1024k_fluid_storage_part_package', texture: 'packing_crate_lime' },
        { name: 'batch_1024k_fluid_storage_part_assembly', texture: 'assembly_package_processing' },
        { name: 'batch_4096k_fluid_storage_part_package', texture: 'packing_crate_lime' },
        { name: 'batch_4096k_fluid_storage_part_assembly', texture: 'assembly_package_processing' },
        { name: 'batch_16384k_fluid_storage_part_package', texture: 'packing_crate_lime' },
        { name: 'batch_16384k_fluid_storage_part_assembly', texture: 'assembly_package_processing' },
        { name: 'batch_65536k_fluid_storage_part_package', texture: 'packing_crate_lime' },
        { name: 'batch_65536k_fluid_storage_part_assembly', texture: 'assembly_package_processing' },
        { name: 'batch_262144k_fluid_storage_part_package', texture: 'packing_crate_lime' },
        { name: 'batch_262144k_fluid_storage_part_assembly', texture: 'assembly_package_processing' },
        { name: 'batch_1048576k_fluid_storage_part_package', texture: 'packing_crate_lime' },
        { name: 'batch_1048576k_fluid_storage_part_assembly', texture: 'assembly_package_processing' },

        { name: 'assembly_io_package', texture: 'advanced_packing_crate_green' },
        { name: 'assembly_io_assembly', texture: 'assembly_package_processing' },
        { name: 'assembly_laser_package', texture: 'advanced_packing_crate_green' },
        { name: 'assembly_laser_assembly', texture: 'assembly_package_processing' },
        { name: 'assembly_drill_package', texture: 'advanced_packing_crate_green' },
        { name: 'assembly_drill_assembly', texture: 'assembly_package_processing' },
        { name: 'assembly_platform_package', texture: 'advanced_packing_crate_green' },
        { name: 'assembly_platform_assembly', texture: 'assembly_package_processing' },
        { name: 'assembly_controller_package', texture: 'advanced_packing_crate_green' },
        { name: 'assembly_controller_assembly', texture: 'assembly_package_processing' }
    ];

    let metals = [
        'aluminum',
        'cloggrum',
        'cobalt',
        'copper',
        'froststeel',
        'gold',
        'iesnium',
        'iron',
        'lead',
        'nebu',
        'nickel',
        'osmium',
        'regalium',
        'silver',
        'thallasium',
        'tin',
        'uranium',
        'utherium',
        'zinc'
    ];

    // prettier-ignore
    const bees = [
        //keep changes mostly synced to "server_scripts/constants/resourcefulbees.js", combVariants constant
        // alloy
        { name: 'brass',          band: 0x998d38, outline: 0x998d38 },
        { name: 'bronze',         band: 0xd38c53, outline: 0xd38c53 },
        { name: 'constantan',     band: 0xd8876b, outline: 0xd8876b },
        { name: 'electrum',       band: 0xe5b840, outline: 0xe5b840 },
        { name: 'enderium',       band: 0x0a4a4a, outline: 0x0a4a4a },
        { name: 'invar',          band: 0xdfe5e2, outline: 0xdfe5e2 },
        { name: 'lumium',         band: 0xe5f3b5, outline: 0xe5f3b5 },
        { name: 'signalum',       band: 0xfd641a, outline: 0xfd641a },
        { name: 'steel',          band: 0x858585, outline: 0x858585 },
        // dev
        { name: 'kitten',         band: 0xeaa939, outline: 0x4c483b },
        { name: 'oreo',           band: 0x442920, outline: 0xe1d9b8 },
        { name: 'starry_lexxie',  band: 0xffffff, outline: 0xffa500 },
        { name: 'yeti',           band: 0xe9f4f6, outline: 0x777e86 },
        // gem
        { name: 'diamond',        band: 0x00ffff, outline: 0x00ffff },
        { name: 'emerald',        band: 0x18eb09, outline: 0x18eb09 },
        { name: 'lapis',          band: 0x345ec3, outline: 0x345ec3 },
        { name: 'redstone',       band: 0xaa0f01, outline: 0xaa0f01 },
        // magic
        { name: 'bloody',         band: 0x80251f, outline: 0x80251f },
        { name: 'carbee',         band: 0xe39c27, outline: 0xe39c27 },
        { name: 'elven',          band: 0xff66cc, outline: 0xff66cc },
        { name: 'infused',        band: 0x1bb373, outline: 0x1bb373 },
        { name: 'mana',           band: 0x4c97ff, outline: 0x4c97ff },
        { name: 'otherworldly',   band: 0x1d1d24, outline: 0x1d1d24 },
        { name: 'sky',            band: 0x73d0ff, outline: 0x73d0ff },
        { name: 'starry',         band: 0x002184, outline: 0x002184 },
        { name: 'tainted',        band: 0xcc6d3d, outline: 0xcc6d3d },
        { name: 'terrestrial',    band: 0x5bf23d, outline: 0x5bf23d },
        // material
        { name: 'clay',           band: 0xacaebd, outline: 0xacaebd },
        { name: 'enderslime',     band: 0xa777e1, outline: 0xa777e1 },
        { name: 'gravel',         band: 0x968e8e, outline: 0x968e8e },
        { name: 'ichor',          band: 0xf7731f, outline: 0xf7731f },
        { name: 'shepherd',       band: 0x945c45, outline: 0x945c45 },
        { name: 'skyslime',       band: 0x4ab1a4, outline: 0x4ab1a4 },
        // metal
        { name: 'aluminum',       band: 0xdce6f7, outline: 0xdce6f7 },
        { name: 'cobalt',         band: 0x20adc9, outline: 0x20adc9 },
        { name: 'copper',         band: 0xbb5b30, outline: 0xbb5b30 },
        { name: 'frosty',         band: 0xb9d3ec, outline: 0xb9d3ec },
        { name: 'gold',           band: 0xffdc00, outline: 0xffdc00 },
        { name: 'iron',           band: 0xffcc99, outline: 0xffcc99 },
        { name: 'lead',           band: 0x333952, outline: 0x333952 },
        { name: 'nickel',         band: 0x8c8f86, outline: 0x8c8f86 },
        { name: 'osmium',         band: 0xc1e0e7, outline: 0xc1e0e7 },
        { name: 'regal',          band: 0xebbe76, outline: 0xebbe76 },
        { name: 'silver',         band: 0xc5d1fe, outline: 0xc5d1fe },
        { name: 'tin',            band: 0x7d81a4, outline: 0x7d81a4 },
        { name: 'uranium',        band: 0x333c2f, outline: 0x333c2f },
        { name: 'zinc',           band: 0x818653, outline: 0x818653 },
        // natural
        { name: 'brutish_zombee', band: 0x2f4e32, outline: 0x2f4e32 },
        { name: 'clogged',        band: 0xba9d7b, outline: 0xba9d7b },
        { name: 'coal',           band: 0x303030, outline: 0x303030 },
        { name: 'creeper',        band: 0x0c9f0a, outline: 0x0c9f0a },
        { name: 'ender',          band: 0x339786, outline: 0x339786 },
        { name: 'forest',         band: 0x4c4c26, outline: 0x4c4c26 },
        { name: 'glowstone',      band: 0xffbc5e, outline: 0xffbc5e },
        { name: 'icy',            band: 0x92b9fe, outline: 0x92b9fe },
        { name: 'obsidian',       band: 0x663399, outline: 0x663399 },
        { name: 'pigman',         band: 0x885956, outline: 0x885956 },
        { name: 'rgbee',          band: 0xffffff, outline: 0xffffff },
        { name: 'rocky',          band: 0x8f8f8f, outline: 0x8f8f8f },
        { name: 'sand',           band: 0xe7e4bb, outline: 0xe7e4bb },
        { name: 'skeleton',       band: 0xf6f2e6, outline: 0xf6f2e6 },
        { name: 'slimy',          band: 0x73c262, outline: 0x73c262 },
        { name: 'water',          band: 0x5979ef, outline: 0x5979ef },
        { name: 'zombie',         band: 0x2f4e32, outline: 0x2f4e32 },
        // nether
        { name: 'blaze',          band: 0xfff32d, outline: 0xfff32d },
        { name: 'ghast',          band: 0xfaebd7, outline: 0xfaebd7 },
        { name: 'netherite',      band: 0x654740, outline: 0x654740 },
        { name: 'wither',         band: 0x444444, outline: 0x444444 },
        { name: 'nether_quartz',  band: 0xd4caba, outline: 0xd4caba },
        // special
        { name: 'boobee',         band: 0xe9f3ea, outline: 0xe9f3ea },
        { name: 'clockwork',      band: 0x70522e, outline: 0x70522e },
        { name: 'direbee20',      band: 0x859292, outline: 0x859292 },
        { name: 'dusty_mummbee',  band: 0xe7e4bb, outline: 0xe7e4bb },
        { name: 'generikbee',     band: 0xf25843, outline: 0xf25843 },
        { name: 'soup',           band: 0x8b7173, outline: 0x8b7173 },
        { name: 'spelling',       band: 0x905e43, outline: 0x905e43 },
        { name: 'wasabee',        band: 0x59a523, outline: 0x59a523 },
        // tech
        { name: 'basalz',         band: 0x1b141d, outline: 0x1b141d },
        { name: 'blitz',          band: 0xdef7fa, outline: 0xdef7fa },
        { name: 'blizz',          band: 0x37b7fe, outline: 0x37b7fe },
        { name: 'industrious',    band: 0xce7dce, outline: 0xce7dce },
        { name: 'pcbee',          band: 0x7a7f80, outline: 0x7a7f80 },
        // manual
        { name: 'abbee',          band: 0xe5ded5, outline: 0xffb1c5 },
    ];

    let metalTypes = ['suffused', 'fulminated', 'levigated', 'sliver'];

    metalTypes.forEach((metalType) => {
        metals.forEach((metal) => {
            generalItems.push(`${metalType}_${metal}`);
        });
    });

    generalItems.forEach((item) => {
        event.create(item).group('KubeJS').texture(`kubejs:item/${item}`);
    });

    ritualDummies.forEach((item) => {
        event.create(item).type('occultism:ritual_dummy').group('KubeJS').texture('kubejs:item/ritual_dummy');
    });

    reusableItemTextures.forEach((item) => {
        event.create(item.name).group('KubeJS').texture(`kubejs:item/${item.texture}`);
    });

    bees.forEach((bee) => {
        event
            .create(`${bee.name}_larva`)
            .group(`KubeJS`)
            .texture('kubejs:item/bee_larva')
            .parentModel('kubejs:item/bee_larva')
            .color(1, bee.band)
            .color(2, bee.outline);
    });

    // Custom Occultism Miners
    event
        .create('fisher_foliot')
        .group('KubeJS')
        .texture('kubejs:item/magic_lamp')
        .maxStackSize(1)
        .maxDamage(500)
        .displayName('Fisher Foliot');
    event
        .create('miner_marid_irradiated')
        .group('KubeJS')
        .texture('kubejs:item/magic_lamp')
        .maxStackSize(1)
        .maxDamage(50)
        .displayName('Irradiated Ore Miner Marid');

    // Custom Foods
    event
        .create('meat_ingot')
        .group('KubeJS')
        .texture('kubejs:item/meat_ingot')
        .food((food) => {
            food.hunger(8).saturation(0.5).effect('upgrade_aquatic:vibing', 2400, 1, 1.0);
        })
        .displayName('Meat Ingot');
});
