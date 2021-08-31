onEvent('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }

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

    const newRecipes = [
        {
            output: 'kubejs:firmament',
            pattern: ['AAB', 'ABA', 'BAA'],
            key: {
                A: 'minecraft:prismarine',
                B: 'undergarden:tremblecrust'
            }
        },
        {
            output: 'kubejs:basic_circuit_package',
            pattern: ['AAA', 'EDB', 'CCC'],
            key: {
                A: 'refinedstorage:basic_processor',

                B: Item.of(
                    'pneumaticcraft:memory_stick',
                    '{BlockEntityTag:{SavedTanks:{Tank:{FluidName:"pneumaticcraft:memory_essence",Amount:64000}}}}'
                ).weakNBT(),
                C: 'pneumaticcraft:printed_circuit_board',
                D: 'mekanism:cardboard_box',
                E: 'immersiveengineering:wirecoil_redstone'
            }
        },
        {
            output: 'kubejs:basic_lenses_package',
            pattern: ['AAA', 'BCB', 'AAA'],
            key: {
                A: 'atum:purple_stained_crystal_glass',
                B: 'occultism:spirit_attuned_gem',
                C: 'mekanism:cardboard_box'
            }
        },
        {
            output: 'kubejs:1k_storage_part_package',
            pattern: ['AAA', 'BCB', 'DEF'],
            key: {
                A: '#forge:gems/silicon',
                B: 'glassential:glass_ghostly',
                C: 'mekanism:cardboard_box',
                D: '#forge:circuits/basic',
                E: 'refinedstorage:quartz_enriched_iron',
                F: 'occultism:dimensional_matrix'
            },
            id: 'refinedstorage:1k_storage_part'
        }
    ];

    newRecipes.forEach((recipe) => {
        if (recipe.id) {
            event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
        } else {
            event.shaped(recipe.output, recipe.pattern, recipe.key);
        }
    });
});
