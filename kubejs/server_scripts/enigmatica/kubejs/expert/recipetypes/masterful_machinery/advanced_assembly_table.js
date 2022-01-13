onEvent('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/masterful_machinery/advanced_assembly_table/';
    const recipes = [
        {
            outputs: [
                {
                    type: 'masterfulmachinery:items',
                    consumeInstantly: true,
                    data: { item: 'kubejs:batch_basic_circuit_package', count: 1 }
                }
            ],
            inputs: [
                {
                    type: 'masterfulmachinery:items',
                    consumeInstantly: true,
                    data: { item: 'kubejs:basic_circuit_package', count: 32 }
                },
                { type: 'masterfulmachinery:pncr_pressure', perTick: true, data: { air: 300 * 4 } }
            ],
            ticks: 240,
            id: `${id_prefix}batch_basic_circuit_package`
        },
        {
            outputs: [
                {
                    type: 'masterfulmachinery:items',
                    consumeInstantly: true,
                    data: { item: 'kubejs:batch_basic_memory_package', count: 1 }
                }
            ],
            inputs: [
                {
                    type: 'masterfulmachinery:items',
                    consumeInstantly: true,
                    data: { item: 'kubejs:basic_memory_package', count: 32 }
                },
                { type: 'masterfulmachinery:pncr_pressure', perTick: true, data: { air: 300 * 4 } }
            ],
            ticks: 240,
            id: `${id_prefix}batch_basic_memory_package`
        },
        {
            outputs: [
                {
                    type: 'masterfulmachinery:items',
                    consumeInstantly: true,
                    data: { item: 'kubejs:batch_cpu_core_500_package', count: 1 }
                }
            ],
            inputs: [
                {
                    type: 'masterfulmachinery:items',
                    consumeInstantly: true,
                    data: { item: 'kubejs:cpu_core_500_package', count: 32 }
                },
                { type: 'masterfulmachinery:pncr_pressure', perTick: true, data: { air: 300 * 4 } }
            ],
            ticks: 240,
            id: `${id_prefix}batch_cpu_core_500_package`
        },
        {
            outputs: [
                {
                    type: 'masterfulmachinery:items',
                    consumeInstantly: true,
                    data: { item: 'kubejs:batch_cpu_core_1000_package', count: 1 }
                }
            ],
            inputs: [
                {
                    type: 'masterfulmachinery:items',
                    consumeInstantly: true,
                    data: { item: 'kubejs:cpu_core_1000_package', count: 32 }
                },
                { type: 'masterfulmachinery:pncr_pressure', perTick: true, data: { air: 300 * 4 } }
            ],
            ticks: 240,
            id: `${id_prefix}batch_cpu_core_1000_package`
        },
        {
            outputs: [
                {
                    type: 'masterfulmachinery:items',
                    consumeInstantly: true,
                    data: { item: 'kubejs:batch_cpu_core_2000_package', count: 1 }
                }
            ],
            inputs: [
                {
                    type: 'masterfulmachinery:items',
                    consumeInstantly: true,
                    data: { item: 'kubejs:cpu_core_2000_package', count: 32 }
                },
                { type: 'masterfulmachinery:pncr_pressure', perTick: true, data: { air: 300 * 4 } }
            ],
            ticks: 240,
            id: `${id_prefix}batch_cpu_core_2000_package`
        },
        {
            outputs: [
                {
                    type: 'masterfulmachinery:items',
                    consumeInstantly: true,
                    data: { item: 'kubejs:batch_unassembled_pcb', count: 1 }
                }
            ],
            inputs: [
                {
                    type: 'masterfulmachinery:items',
                    consumeInstantly: true,
                    data: { item: 'pneumaticcraft:empty_pcb', count: 32 }
                },
                { type: 'masterfulmachinery:pncr_pressure', perTick: true, data: { air: 300 * 4 } }
            ],
            ticks: 240,
            id: `${id_prefix}batch_unassembled_pcb`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'masterfulmachinery:machine_process';
        recipe.structureId = 'advanced_assembly_table_structure';
        recipe.controllerId = 'advanced_assembly_table';
        event.custom(recipe).id(recipe.id);
    });
});
