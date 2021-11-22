onEvent('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/kubejs/shaped';
    /*
        ,
        {
            output: '',
            pattern: ['', '', ''],
            key: {
                A: ''
            },
            id: ''
        }
    */

    const recipes = [
        {
            output: 'kubejs:basic_circuit_package',
            pattern: ['AA ', 'BB ', 'CCD'],
            key: {
                A: 'refinedstorage:improved_processor',
                B: 'kubejs:memory_basic_filled',
                C: 'pneumaticcraft:printed_circuit_board',
                D: 'mekanism:cardboard_box'
            },
            id: `${id_prefix}basic_circuit_package`
        },
        {
            output: 'kubejs:basic_lenses_package',
            pattern: ['AAA', 'BCB', 'AAA'],
            key: {
                A: 'atum:purple_stained_crystal_glass',
                B: 'occultism:spirit_attuned_gem',
                C: 'mekanism:cardboard_box'
            },
            id: `${id_prefix}basic_lenses_package`
        },
        {
            output: Item.of('kubejs:red_nether_brick', 2),
            pattern: ['AB', 'BA'],
            key: {
                A: 'minecraft:nether_brick',
                B: 'minecraft:nether_wart'
            },
            id: `${id_prefix}red_nether_brick`
        },
        {
            output: 'kubejs:basic_memory_package',
            pattern: ['AAA', 'AAA', 'BC '],
            key: {
                A: 'rftoolscontrol:ram_chip',
                B: 'mekanism:cardboard_box',
                C: 'pneumaticcraft:unassembled_pcb'
            },
            id: `${id_prefix}basic_memory_package`
        },
        {
            output: Item.of('8x kubejs:scented_stick'),
            pattern: ['AAA', 'ABA', 'AAA'],
            key: {
                A: 'minecraft:stick',
                B: '#resourcefulbees:resourceful_honeycomb'
            },
            id: `${id_prefix}scented_stick`
        },

        // Storage Parts
        {
            output: 'kubejs:1k_storage_part_package',
            pattern: ['AAA', 'BCB', 'DEF'],
            key: {
                A: '#forge:gems/silicon',
                B: 'glassential:glass_ghostly',
                C: 'mekanism:cardboard_box',
                D: '#forge:circuits/basic',
                E: 'refinedstorage:quartz_enriched_iron',
                F: 'kubejs:dimensional_storage_crystal'
            },
            id: 'refinedstorage:1k_storage_part'
        },
        {
            output: 'kubejs:4k_storage_part_package',
            pattern: ['ABA', 'DCD', 'ADA'],
            key: {
                A: 'refinedstorage:basic_processor',
                B: '#forge:circuits/basic',
                C: 'mekanism:cardboard_box',
                D: 'refinedstorage:1k_storage_part'
            },
            id: 'refinedstorage:4k_storage_part'
        },
        {
            output: 'kubejs:16k_storage_part_package',
            pattern: ['ABA', 'DCD', 'ADA'],
            key: {
                A: 'refinedstorage:improved_processor',
                B: '#forge:circuits/advanced',
                C: 'mekanism:cardboard_box',
                D: 'refinedstorage:4k_storage_part'
            },
            id: 'refinedstorage:16k_storage_part'
        },
        {
            output: 'kubejs:64k_storage_part_package',
            pattern: ['ABA', 'DCD', 'ADA'],
            key: {
                A: 'refinedstorage:advanced_processor',
                B: '#forge:circuits/elite',
                C: 'mekanism:cardboard_box',
                D: 'refinedstorage:16k_storage_part'
            },
            id: 'refinedstorage:64k_storage_part'
        },
        {
            output: 'kubejs:256k_storage_part_package',
            pattern: ['ABA', 'DCD', 'ADA'],
            key: {
                A: 'extrastorage:neural_processor',
                B: '#forge:circuits/ultimate',
                C: 'mekanism:cardboard_box',
                D: 'refinedstorage:64k_storage_part'
            },
            id: 'extrastorage:part/storagepart_256k'
        },
        {
            output: 'kubejs:1024k_storage_part_package',
            pattern: ['ABA', 'DCD', 'ADA'],
            key: {
                A: 'extrastorage:neural_processor',
                B: '#forge:circuits/ultimate',
                C: 'mekanism:cardboard_box',
                D: 'extrastorage:storagepart_256k'
            },
            id: 'extrastorage:part/storagepart_1024k'
        },
        {
            output: 'kubejs:4096k_storage_part_package',
            pattern: ['ABA', 'DCD', 'ADA'],
            key: {
                A: 'extrastorage:neural_processor',
                B: '#forge:circuits/ultimate',
                C: 'mekanism:cardboard_box',
                D: 'extrastorage:storagepart_1024k'
            },
            id: 'extrastorage:part/storagepart_4096k'
        },
        {
            output: 'kubejs:16384k_storage_part_package',
            pattern: ['ABA', 'DCD', 'ADA'],
            key: {
                A: 'extrastorage:neural_processor',
                B: '#forge:circuits/ultimate',
                C: 'mekanism:cardboard_box',
                D: 'extrastorage:storagepart_4096k'
            },
            id: 'extrastorage:part/storagepart_16384k'
        },

        // Fluid Storage Parts
        {
            output: 'kubejs:64k_fluid_storage_part_package',
            pattern: ['AAA', 'BCB', 'DEF'],
            key: {
                A: '#forge:gems/silicon',
                B: 'pneumaticcraft:small_tank',
                C: 'mekanism:cardboard_box',
                D: '#forge:circuits/basic',
                E: 'refinedstorage:quartz_enriched_iron',
                F: 'kubejs:dimensional_storage_crystal'
            },
            id: 'refinedstorage:64k_fluid_storage_part'
        },
        {
            output: 'kubejs:256k_fluid_storage_part_package',
            pattern: ['ABA', 'DCD', 'ADA'],
            key: {
                A: 'refinedstorage:basic_processor',
                B: '#forge:circuits/basic',
                C: 'mekanism:cardboard_box',
                D: 'refinedstorage:64k_fluid_storage_part'
            },
            id: 'refinedstorage:256k_fluid_storage_part'
        },
        {
            output: 'kubejs:1024k_fluid_storage_part_package',
            pattern: ['ABA', 'DCD', 'ADA'],
            key: {
                A: 'refinedstorage:improved_processor',
                B: '#forge:circuits/advanced',
                C: 'mekanism:cardboard_box',
                D: 'refinedstorage:256k_fluid_storage_part'
            },
            id: 'refinedstorage:1024k_fluid_storage_part'
        },
        {
            output: 'kubejs:4096k_fluid_storage_part_package',
            pattern: ['ABA', 'DCD', 'ADA'],
            key: {
                A: 'refinedstorage:advanced_processor',
                B: '#forge:circuits/elite',
                C: 'mekanism:cardboard_box',
                D: 'refinedstorage:1024k_fluid_storage_part'
            },
            id: 'refinedstorage:4096k_fluid_storage_part'
        },
        {
            output: 'kubejs:16384k_fluid_storage_part_package',
            pattern: ['ABA', 'DCD', 'ADA'],
            key: {
                A: 'extrastorage:neural_processor',
                B: '#forge:circuits/ultimate',
                C: 'mekanism:cardboard_box',
                D: 'refinedstorage:4096k_fluid_storage_part'
            },
            id: 'extrastorage:part/storagepart_16384k_fluid'
        },
        {
            output: 'kubejs:65536k_fluid_storage_part_package',
            pattern: ['ABA', 'DCD', 'ADA'],
            key: {
                A: 'extrastorage:neural_processor',
                B: '#forge:circuits/ultimate',
                C: 'mekanism:cardboard_box',
                D: 'extrastorage:storagepart_16384k_fluid'
            },
            id: 'extrastorage:part/storagepart_65536k_fluid'
        },
        {
            output: 'kubejs:262144k_fluid_storage_part_package',
            pattern: ['ABA', 'DCD', 'ADA'],
            key: {
                A: 'extrastorage:neural_processor',
                B: '#forge:circuits/ultimate',
                C: 'mekanism:cardboard_box',
                D: 'extrastorage:storagepart_65536k_fluid'
            },
            id: 'extrastorage:part/storagepart_262144k_fluid'
        },
        {
            output: 'kubejs:1048576k_fluid_storage_part_package',
            pattern: ['ABA', 'DCD', 'ADA'],
            key: {
                A: 'extrastorage:neural_processor',
                B: '#forge:circuits/ultimate',
                C: 'mekanism:cardboard_box',
                D: 'extrastorage:storagepart_262144k_fluid'
            },
            id: 'extrastorage:part/storagepart_1048576k_fluid'
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
