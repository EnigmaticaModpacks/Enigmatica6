onEvent('item.registry', (event) => {
    const generalItems = [
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
        'syrup_bottle',
        'disabled_recipe_indicator',

        // Expert
        'observatory_lens',
        'coarse_lapis_lazuli_compound',
        'smoldering_lapis_lazuli_compound',
        'cutting_essence',
        'rftools_machine_frame_parts',
        'unassembled_rftools_machine_frame_top',
        'unassembled_rftools_machine_frame',
        'superheated_steel_ingot',
        'hot_compressed_iron_ingot',
        'dimensional_storage_crystal',
        'spirit_heat_exchanger',
        'amadron_survey_tools'
    ];

    const ritualDummies = [
        'craft_spirit_heat_exchanger',
        'summon_pharaoh',
        'craft_magical_feathers',
        'craft_magicfeather',
        'craft_soulsword',
        'craft_soulaxe',
        'craft_soulpickaxe',
        'craft_soulshovel',
        'craft_soulscythe',
        'craft_attunement_altar',
        'craft_mana_collector'
    ];

    const reusableItemTextures = [
        { name: 'machine_speed_augment_mk2', texture: 'machine_speed_augment' },
        { name: 'machine_speed_augment_mk3', texture: 'machine_speed_augment' },
        { name: 'machine_speed_augment_mk4', texture: 'machine_speed_augment' },

        { name: 'dynamo_output_augment_mk2', texture: 'dynamo_output_augment' },
        { name: 'dynamo_output_augment_mk3', texture: 'dynamo_output_augment' },
        { name: 'dynamo_output_augment_mk4', texture: 'dynamo_output_augment' },

        { name: 'dynamo_fuel_augment_mk2', texture: 'dynamo_fuel_augment' },
        { name: 'dynamo_fuel_augment_mk3', texture: 'dynamo_fuel_augment' },
        { name: 'dynamo_fuel_augment_mk4', texture: 'dynamo_fuel_augment' },

        { name: 'basic_circuit_package', texture: 'assembly_package_filled' },
        { name: 'basic_circuit_assembly', texture: 'assembly_package_processing' },
        { name: 'basic_lenses_package', texture: 'assembly_package_filled' },
        { name: 'pneumatic_helmet_package', texture: 'assembly_package_filled' },
        { name: 'pneumatic_helmet_assembly', texture: 'assembly_package_processing' },
        { name: 'pneumatic_chestplate_package', texture: 'assembly_package_filled' },
        { name: 'pneumatic_chestplate_assembly', texture: 'assembly_package_processing' },
        { name: 'pneumatic_leggings_package', texture: 'assembly_package_filled' },
        { name: 'pneumatic_leggings_assembly', texture: 'assembly_package_processing' },
        { name: 'pneumatic_boots_package', texture: 'assembly_package_filled' },
        { name: 'pneumatic_boots_assembly', texture: 'assembly_package_processing' },

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
        { name: '1048576k_fluid_storage_part_assembly', texture: 'assembly_package_processing' }
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
        event.create(item).type('occultism:ritual_dummy').group('KubeJS').texture('kubejs:item/pentacle');
    });

    reusableItemTextures.forEach((item) => {
        event.create(item.name).group('KubeJS').texture(`kubejs:item/${item.texture}`);
    });
});
