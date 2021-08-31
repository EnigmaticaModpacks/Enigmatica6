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
        'hot_compressed_iron_ingot'
    ];

    const assemblyTableItems = [
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

    assemblyTableItems.forEach((item) => {
        event.create(item.name).group('KubeJS').texture(`kubejs:item/${item.texture}`);
    });
});
