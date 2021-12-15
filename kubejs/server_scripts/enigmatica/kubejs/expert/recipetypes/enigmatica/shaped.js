onEvent('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/enigmatica/';
    const recipes = [];

    buildWoodVariants.forEach((wood) => {
        if (wood.modId == 'minecraft') {
            return;
        }

        var dupes = [
            'palo_verde',
            'withering_oak',
            'blue_archwood',
            'green_archwood',
            'purple_archwood',
            'menril_filled',
            'watchful_aspen',
            'crustose',
            'sappy_maple',
            'avocado'
        ];

        if (dupes.includes(wood.logType)) {
            return;
        }

        //All recipes using planks here

        recipes.push(
            {
                output: Item.of('storagedrawers:oak_full_drawers_1'),
                pattern: ['AAA', ' C ', 'AAA'],
                key: {
                    A: wood.plankBlock,
                    C: 'farmersdelight:basket'
                },
                id: `${id_prefix}oak_full_drawers_1_from_${wood.logType}_planks`
            },
            {
                output: Item.of('storagedrawers:oak_full_drawers_2', 2),
                pattern: ['ACA', 'AAA', 'ACA'],
                key: {
                    A: wood.plankBlock,
                    C: 'farmersdelight:basket'
                },
                id: `${id_prefix}oak_full_drawers_2_from_${wood.logType}_planks`
            },
            {
                output: Item.of('storagedrawers:oak_full_drawers_4', 4),
                pattern: ['CAC', 'AAA', 'CAC'],
                key: {
                    A: wood.plankBlock,
                    C: 'farmersdelight:basket'
                },
                id: `${id_prefix}oak_full_drawers_4_from_${wood.logType}_planks`
            },

            {
                output: Item.of('storagedrawers:oak_half_drawers_1'),
                pattern: ['AAA', ' C ', 'AAA'],
                key: {
                    A: wood.slabBlock,
                    C: 'farmersdelight:basket'
                },
                id: `${id_prefix}oak_half_drawers_1_from_${wood.logType}_slab`
            },
            {
                output: Item.of('storagedrawers:oak_half_drawers_2', 2),
                pattern: ['ACA', 'AAA', 'ACA'],
                key: {
                    A: wood.slabBlock,
                    C: 'farmersdelight:basket'
                },
                id: `${id_prefix}oak_half_drawers_2_from_${wood.logType}_slab`
            },
            {
                output: Item.of('storagedrawers:oak_half_drawers_4', 4),
                pattern: ['CAC', 'AAA', 'CAC'],
                key: {
                    A: wood.slabBlock,
                    C: 'farmersdelight:basket'
                },
                id: `${id_prefix}oak_half_drawers_4_from_${wood.logType}_slab`
            }
        );
    });

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
