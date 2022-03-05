onEvent('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/masterful_machinery/advanced_assembly_table/';
    const recipes = [
        {
            outputs: [
                { type: 'masterfulmachinery:items', data: { item: 'kubejs:batch_basic_circuit_package', count: 1 } }
            ],
            inputs: [
                { type: 'masterfulmachinery:items', data: { item: 'kubejs:basic_circuit_package', count: 32 } },
                { type: 'masterfulmachinery:pncr_pressure', perTick: true, data: { air: 300 * 4 } }
            ],
            ticks: 240,
            id: `${id_prefix}batch_basic_circuit_package`
        },
        {
            outputs: [
                { type: 'masterfulmachinery:items', data: { item: 'kubejs:batch_basic_memory_package', count: 1 } }
            ],
            inputs: [
                { type: 'masterfulmachinery:items', data: { item: 'kubejs:basic_memory_package', count: 32 } },
                { type: 'masterfulmachinery:pncr_pressure', perTick: true, data: { air: 300 * 4 } }
            ],
            ticks: 240,
            id: `${id_prefix}batch_basic_memory_package`
        },
        {
            outputs: [
                { type: 'masterfulmachinery:items', data: { item: 'kubejs:batch_cpu_core_500_package', count: 1 } }
            ],
            inputs: [
                { type: 'masterfulmachinery:items', data: { item: 'kubejs:cpu_core_500_package', count: 32 } },
                { type: 'masterfulmachinery:pncr_pressure', perTick: true, data: { air: 300 * 4 } }
            ],
            ticks: 240,
            id: `${id_prefix}batch_cpu_core_500_package`
        },
        {
            outputs: [
                { type: 'masterfulmachinery:items', data: { item: 'kubejs:batch_cpu_core_1000_package', count: 1 } }
            ],
            inputs: [
                { type: 'masterfulmachinery:items', data: { item: 'kubejs:cpu_core_1000_package', count: 32 } },
                { type: 'masterfulmachinery:pncr_pressure', perTick: true, data: { air: 300 * 4 } }
            ],
            ticks: 240,
            id: `${id_prefix}batch_cpu_core_1000_package`
        },
        {
            outputs: [
                { type: 'masterfulmachinery:items', data: { item: 'kubejs:batch_cpu_core_2000_package', count: 1 } }
            ],
            inputs: [
                { type: 'masterfulmachinery:items', data: { item: 'kubejs:cpu_core_2000_package', count: 32 } },
                { type: 'masterfulmachinery:pncr_pressure', perTick: true, data: { air: 300 * 4 } }
            ],
            ticks: 240,
            id: `${id_prefix}batch_cpu_core_2000_package`
        },
        {
            outputs: [{ type: 'masterfulmachinery:items', data: { item: 'kubejs:batch_unassembled_pcb', count: 1 } }],
            inputs: [
                { type: 'masterfulmachinery:items', data: { item: 'pneumaticcraft:empty_pcb', count: 32 } },
                { type: 'masterfulmachinery:pncr_pressure', perTick: true, data: { air: 300 * 4 } }
            ],
            ticks: 240,
            id: `${id_prefix}batch_unassembled_pcb`
        }
    ];

    let storageParts = [
        {
            modID: 'refinedstorage',
            sizes: ['1k', '4k', '16k', '64k', '64k_fluid', '256k_fluid', '1024k_fluid', '4096k_fluid']
        },
        {
            modID: 'extrastorage',
            sizes: [
                '256k',
                '1024k',
                '4096k',
                '16384k',
                '16384k_fluid',
                '65536k_fluid',
                '262144k_fluid',
                '1048576k_fluid'
            ]
        }
    ];

    storageParts.forEach((storagePart) => {
        storagePart.sizes.forEach((partSize) => {
            let storagePartID = `${storagePart.modID}:${partSize}_storage_part`;

            if (storagePart.modID == 'extrastorage') {
                storagePartID = `${storagePart.modID}:storagepart_${partSize}`;
            }
            recipes.push({
                outputs: [
                    {
                        type: 'masterfulmachinery:items',
                        data: { item: `kubejs:batch_${partSize}_storage_part_package`, count: 1 }
                    }
                ],
                inputs: [
                    {
                        type: 'masterfulmachinery:items',
                        data: { item: `kubejs:${partSize}_storage_part_package`, count: 30 }
                    },
                    { type: 'masterfulmachinery:pncr_pressure', perTick: true, data: { air: 300 * 4 } }
                ],
                ticks: 240,
                id: `${id_prefix}batch_${partSize}_storage_part_assembly`
            });
        });
    });

    recipes.forEach((recipe) => {
        recipe.type = 'masterfulmachinery:machine_process';
        recipe.structureId = 'advanced_assembly_table_structure';
        recipe.controllerId = 'advanced_assembly_table';
        event.custom(recipe).id(recipe.id);
    });
});
