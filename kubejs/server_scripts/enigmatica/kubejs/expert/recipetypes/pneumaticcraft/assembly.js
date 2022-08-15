onEvent('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/pneumaticcraft/assembly/';
    const recipes = [
        {
            input: { item: 'thermal:machine_frame', count: 2 },
            output: { item: 'kubejs:rough_machine_frame_top', count: 1 },
            program: 'drill',
            id: `${id_prefix}rough_machine_frame_top`
        },
        {
            input: { item: 'kubejs:rough_machine_frame', count: 1 },
            output: { item: 'rftoolsbase:machine_frame', count: 1 },
            program: 'laser',
            id: 'rftoolsbase:machine_frame'
        },
        {
            input: { tag: 'forge:storage_blocks/gold', count: 1 },
            output: { item: 'supplementaries:gold_trapdoor', count: 5 },
            program: 'drill',
            id: `${id_prefix}gold_trapdoor`
        },
        {
            input: { item: 'supplementaries:gold_trapdoor', count: 5 },
            output: { item: 'pedestals:coin/default', count: 10 },
            program: 'laser',
            id: 'pedestals:upgrades/itempedestalupgradedefault'
        },
        {
            input: { item: 'kubejs:basic_circuit_package', count: 1 },
            output: { item: 'kubejs:basic_circuit_assembly', count: 1 },
            program: 'drill',
            id: `${id_prefix}basic_circuit_assembly`
        },
        {
            input: { item: 'kubejs:basic_circuit_assembly', count: 1 },
            output: { item: 'mekanism:basic_control_circuit', count: 2 },
            program: 'laser',
            id: 'mekanism:control_circuit/basic'
        },
        {
            input: { item: 'kubejs:batch_basic_circuit_package', count: 1 },
            output: { item: 'kubejs:batch_basic_circuit_assembly', count: 1 },
            program: 'drill',
            id: `${id_prefix}batch_basic_circuit_assembly`
        },
        {
            input: { item: 'kubejs:batch_basic_circuit_assembly', count: 1 },
            output: { item: 'mekanism:basic_control_circuit', count: 64 },
            program: 'laser',
            id: `${id_prefix}batch_basic_control_circuit`
        },
        {
            input: { item: 'kubejs:basic_lenses_package', count: 1 },
            output: { item: 'occultism:lenses', count: 3 },
            program: 'laser',
            id: 'occultism:crafting/lenses'
        },
        {
            input: { item: 'kubejs:basic_memory_package', count: 1 },
            output: { item: 'kubejs:basic_memory_assembly', count: 1 },
            program: 'drill',
            id: `${id_prefix}basic_memory_assembly`
        },
        {
            input: { item: 'kubejs:basic_memory_assembly', count: 1 },
            output: { item: 'kubejs:memory_basic_empty', count: 2 },
            program: 'laser',
            id: `${id_prefix}memory_basic_empty`
        },
        {
            input: { item: 'kubejs:batch_basic_memory_package', count: 1 },
            output: { item: 'kubejs:batch_basic_memory_assembly', count: 1 },
            program: 'drill',
            id: `${id_prefix}batch_basic_memory_assembly`
        },
        {
            input: { item: 'kubejs:batch_basic_memory_assembly', count: 1 },
            output: { item: 'kubejs:memory_basic_empty', count: 64 },
            program: 'laser',
            id: `${id_prefix}batch_memory_basic_empty`
        },
        {
            input: { item: 'kubejs:cpu_core_500_package', count: 1 },
            output: { item: 'kubejs:cpu_core_500_assembly', count: 1 },
            program: 'drill',
            id: `${id_prefix}cpu_core_500_assembly`
        },
        {
            input: { item: 'kubejs:cpu_core_500_assembly', count: 1 },
            output: { item: 'kubejs:cpu_core_mk_1026', count: 1 },
            program: 'laser',
            id: `${id_prefix}cpu_core_mk_1026`
        },
        {
            input: { item: 'kubejs:batch_cpu_core_500_package', count: 1 },
            output: { item: 'kubejs:batch_cpu_core_500_assembly', count: 1 },
            program: 'drill',
            id: `${id_prefix}batch_cpu_core_500_assembly`
        },
        {
            input: { item: 'kubejs:batch_cpu_core_500_assembly', count: 1 },
            output: { item: 'kubejs:cpu_core_mk_1026', count: 32 },
            program: 'laser',
            id: `${id_prefix}batch_cpu_core_mk_1026`
        },
        {
            input: { item: 'kubejs:cpu_core_1000_package', count: 1 },
            output: { item: 'kubejs:cpu_core_1000_assembly', count: 1 },
            program: 'drill',
            id: `${id_prefix}cpu_core_1000_assembly`
        },
        {
            input: { item: 'kubejs:cpu_core_1000_assembly', count: 1 },
            output: { item: 'kubejs:cpu_core_eg_28222', count: 1 },
            program: 'laser',
            id: `${id_prefix}cpu_core_eg_28222`
        },
        {
            input: { item: 'kubejs:batch_cpu_core_1000_package', count: 1 },
            output: { item: 'kubejs:batch_cpu_core_1000_assembly', count: 1 },
            program: 'drill',
            id: `${id_prefix}batch_cpu_core_1000_assembly`
        },
        {
            input: { item: 'kubejs:batch_cpu_core_1000_assembly', count: 1 },
            output: { item: 'kubejs:cpu_core_eg_28222', count: 32 },
            program: 'laser',
            id: `${id_prefix}batch_cpu_core_eg_28222`
        },
        {
            input: { item: 'kubejs:cpu_core_2000_package', count: 1 },
            output: { item: 'kubejs:cpu_core_2000_assembly', count: 1 },
            program: 'drill',
            id: `${id_prefix}cpu_core_2000_assembly`
        },
        {
            input: { item: 'kubejs:cpu_core_2000_assembly', count: 1 },
            output: { item: 'kubejs:cpu_core_as_81221', count: 1 },
            program: 'laser',
            id: `${id_prefix}cpu_core_as_81221`
        },
        {
            input: { item: 'kubejs:batch_cpu_core_2000_package', count: 1 },
            output: { item: 'kubejs:batch_cpu_core_2000_assembly', count: 1 },
            program: 'drill',
            id: `${id_prefix}batch_cpu_core_2000_assembly`
        },
        {
            input: { item: 'kubejs:batch_cpu_core_2000_assembly', count: 1 },
            output: { item: 'kubejs:cpu_core_as_81221', count: 32 },
            program: 'laser',
            id: `${id_prefix}batch_cpu_core_as_81221`
        },
        {
            input: { item: 'kubejs:batch_unassembled_pcb', count: 1 },
            output: { item: 'pneumaticcraft:unassembled_pcb', count: 32 },
            program: 'laser',
            id: `${id_prefix}batch_unassembled_pcb`
        },
        {
            input: { item: 'kubejs:assembly_io_package', count: 1 },
            output: { item: 'kubejs:assembly_io_assembly', count: 1 },
            program: 'drill',
            id: `${id_prefix}assembly_io_assembly`
        },
        {
            input: { item: 'kubejs:assembly_io_assembly', count: 1 },
            output: { item: 'pneumaticcraft:assembly_io_unit_import', count: 2 },

            program: 'laser',
            id: `${id_prefix}assembly_io_alternate`
        },
        {
            input: { item: 'kubejs:assembly_laser_package', count: 1 },
            output: { item: 'kubejs:assembly_laser_assembly', count: 1 },
            program: 'drill',
            id: `${id_prefix}assembly_laser_assembly`
        },
        {
            input: { item: 'kubejs:assembly_laser_assembly', count: 1 },
            output: { item: 'pneumaticcraft:assembly_laser', count: 1 },

            program: 'laser',
            id: `${id_prefix}assembly_laser_alternate`
        },
        {
            input: { item: 'kubejs:assembly_drill_package', count: 1 },
            output: { item: 'kubejs:assembly_drill_assembly', count: 1 },
            program: 'drill',
            id: `${id_prefix}assembly_drill_assembly`
        },
        {
            input: { item: 'kubejs:assembly_drill_assembly', count: 1 },
            output: { item: 'pneumaticcraft:assembly_drill', count: 1 },

            program: 'laser',
            id: `${id_prefix}assembly_drill_alternate`
        },
        {
            input: { item: 'kubejs:assembly_platform_package', count: 1 },
            output: { item: 'kubejs:assembly_platform_assembly', count: 1 },
            program: 'drill',
            id: `${id_prefix}assembly_platform_assembly`
        },
        {
            input: { item: 'kubejs:assembly_platform_assembly', count: 1 },
            output: { item: 'pneumaticcraft:assembly_platform', count: 1 },

            program: 'laser',
            id: `${id_prefix}assembly_platform_alternate`
        },
        {
            input: { item: 'kubejs:assembly_controller_package', count: 1 },
            output: { item: 'kubejs:assembly_controller_assembly', count: 1 },
            program: 'drill',
            id: `${id_prefix}assembly_controller_assembly`
        },
        {
            input: { item: 'kubejs:assembly_controller_assembly', count: 1 },
            output: { item: 'pneumaticcraft:assembly_controller', count: 1 },
            program: 'laser',
            id: `${id_prefix}assembly_controller_alternate`
        },
        {
            input: { tag: 'forge:storage_blocks/brass', count: 1 },
            output: { item: 'create:furnace_engine', count: 1 },
            program: 'drill',
            id: `${id_prefix}furnace_engine_alternate`
        },
        {
            input: { tag: 'forge:ingots/brass', count: 32 },
            output: { item: 'create:flywheel', count: 1 },
            program: 'drill',
            id: `${id_prefix}flywheel_alternate`
        }
    ];

    let armorSets = [
        {
            modID: 'pneumaticcraft',
            armorPieces: ['pneumatic_helmet', 'pneumatic_chestplate', 'pneumatic_leggings', 'pneumatic_boots']
        },
        {
            modID: 'mekanism',
            armorPieces: ['mekasuit_helmet', 'mekasuit_bodyarmor', 'mekasuit_pants', 'mekasuit_boots']
        }
    ];
    armorSets.forEach((armorSet) => {
        armorSet.armorPieces.forEach((armorPiece) => {
            recipes.push(
                {
                    input: { item: `kubejs:${armorPiece}_package`, count: 1 },
                    output: { item: `kubejs:${armorPiece}_assembly`, count: 1 },
                    program: 'drill',
                    id: `${id_prefix}${armorPiece}_assembly`
                },
                {
                    input: { item: `kubejs:${armorPiece}_assembly`, count: 1 },
                    output: { item: `${armorSet.modID}:${armorPiece}`, count: 1 },
                    program: 'laser',
                    id: `${id_prefix}${armorPiece}`
                }
            );
        });
    });

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
            recipes.push(
                {
                    input: { item: `kubejs:${partSize}_storage_part_package`, count: 1 },
                    output: { item: `kubejs:${partSize}_storage_part_assembly`, count: 1 },
                    program: 'drill',
                    id: `${id_prefix}${partSize}_storage_part_assembly`
                },
                {
                    input: { item: `kubejs:${partSize}_storage_part_assembly`, count: 1 },
                    output: { item: storagePartID, count: 1 },
                    program: 'laser',
                    id: `${id_prefix}${partSize}_storage_part`
                },

                {
                    input: { item: `kubejs:batch_${partSize}_storage_part_package`, count: 1 },
                    output: { item: `kubejs:batch_${partSize}_storage_part_assembly`, count: 1 },
                    program: 'drill',
                    id: `${id_prefix}batch_${partSize}_storage_part_assembly`
                },
                {
                    input: { item: `kubejs:batch_${partSize}_storage_part_assembly`, count: 1 },
                    output: { item: storagePartID, count: 30 },
                    program: 'laser',
                    id: `${id_prefix}batch_${partSize}_storage_part`
                }
            );
        });
    });

    let masteries = [
        'automation',
        'botanical',
        'astronomy',
        'alchemy',
        'ritual',
        'aura',
        'engineering',
        'energistics',
        'dimensional',
        'battle',
        'excavation',
        'culinary'
    ];

    masteries.forEach((mastery) => {
        recipes.push({
            input: { item: `kubejs:${mastery}_mastery_shard`, count: 50 },
            output: { item: `kubejs:${mastery}_mastery_token`, count: 1 },
            program: 'laser',
            id: `${id_prefix}${mastery}_mastery_token`
        });
    });

    recipes.forEach((recipe) => {
        recipe.input.type = 'pneumaticcraft:stacked_item';
        event
            .custom({
                type: `pneumaticcraft:assembly_${recipe.program}`,
                input: recipe.input,
                result: recipe.output,
                program: recipe.program
            })
            .id(recipe.id);
    });
});
