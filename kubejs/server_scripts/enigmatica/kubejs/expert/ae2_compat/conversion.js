

onEvent('recipes', (event) => {
    if (!isAE2Loaded) {
        return;
    }
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/ae2_compat/conversion/';
    const trans = [
        { RS: 'external_storage', AE: 'storage_bus' },
        { RS: 'destructor', AE: 'annihilation_plane' },
        { RS: 'constructor', AE: 'formation_plane' },
        { RS: 'detector', AE: 'fluid_level_emitter' },
        { RS: 'wireless_transmitter', AE: 'wireless_access_point' },
        { RS: 'exporter', AE: 'export_bus' },
        { RS: 'importer', AE: 'import_bus' },
        { RS: 'interface', AE: 'interface' },
        { RS: 'crafter', AE: 'molecular_assembler' },
        { RS: 'controller', AE: 'controller' },
        { RS: 'security_manager', AE: 'security_station' },
        { RS: 'fluid_interface', AE: 'fluid_interface' },
        { RS: 'disk_drive', AE: 'drive' },
        { RS: 'disk_manipulator', AE: 'io_port' },
        { RS: 'cable', AE: 'fluix_glass_cable' },
        { RS: 'relay', AE: 'toggle_bus' },
        { RS: 'relay', AE: 'inverted_toggle_bus' },
        { RS: 'detector', AE: 'level_emitter' },
        { RS: 'grid', AE: 'terminal' },
        { RS: 'crafting_grid', AE: 'crafting_terminal' },
        { RS: 'pattern_grid', AE: 'pattern_terminal' },
        { RS: 'crafter_manager', AE: 'interface_terminal' },
        { RS: '64k_storage_part', AE: '64k_cell_component' },
        { RS: '16k_storage_part', AE: '16k_cell_component' },
        { RS: '4k_storage_part', AE: '4k_cell_component' },
        { RS: '1k_storage_part', AE: '1k_cell_component' },
        { RS: '64k_fluid_storage_part', AE: '1k_fluid_cell_component' },
        { RS: '256k_fluid_storage_part', AE: '4k_fluid_cell_component' },
        { RS: '1024k_fluid_storage_part', AE: '16k_fluid_cell_component' },
        { RS: '4096k_fluid_storage_part', AE: '64k_fluid_cell_component' },

    ]

    trans.forEach((tran) => {
        event.shapeless('refinedstorage:' + tran.RS, [
            'appliedenergistics2:' + tran.AE,
            'refinedstorage:quartz_enriched_iron'
            ]).id(id_prefix + tran.AE + '_to_' + tran.RS);
        event.shapeless('appliedenergistics2:' + tran.AE, [
            'refinedstorage:' + tran.RS,
            'appliedenergistics2:sky_dust'
            ]).id(id_prefix + tran.RS + '_to_' + tran.AE);
    });

});
