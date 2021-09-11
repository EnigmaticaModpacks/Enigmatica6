onEvent('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/pneumaticcraft/assembly/';
    const recipes = [
        {
            input: { item: 'thermal:machine_frame', count: 2 },
            output: { item: 'kubejs:rftools_machine_frame_parts', count: 1 },
            program: 'drill',
            id: `${id_prefix}rftools_machine_frame_parts`
        },
        {
            input: { item: 'kubejs:unassembled_rftools_machine_frame', count: 1 },
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
            output: { item: 'mekanism:basic_control_circuit', count: 3 },
            program: 'laser',
            id: 'mekanism:control_circuit/basic'
        },
        {
            input: { item: 'kubejs:basic_lenses_package', count: 1 },
            output: { item: 'occultism:lenses', count: 3 },
            program: 'laser',
            id: 'occultism:crafting/lenses'
        }
    ];

    let armorPieces = ['helmet', 'chestplate', 'leggings', 'boots'];
    armorPieces.forEach((armorPiece) => {
        recipes.push(
            {
                input: { item: `kubejs:pneumatic_${armorPiece}_package`, count: 1 },
                output: { item: `kubejs:pneumatic_${armorPiece}_assembly`, count: 1 },
                program: 'drill',
                id: `${id_prefix}pneumatic_${armorPiece}_assembly`
            },
            {
                input: { item: `kubejs:pneumatic_${armorPiece}_assembly`, count: 1 },
                output: { item: `pneumaticcraft:pneumatic_${armorPiece}`, count: 1 },
                program: 'laser',
                id: `${id_prefix}pneumatic_${armorPiece}`
            }
        );
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
                }
            );
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
