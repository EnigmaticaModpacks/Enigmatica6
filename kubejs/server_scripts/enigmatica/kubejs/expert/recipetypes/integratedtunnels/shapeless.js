onEvent('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }

    const recipes = [
        {
            output: 'integratedtunnels:part_exporter_item',
            inputs: ['integratedtunnels:part_interface_item', 'prettypipes:high_extraction_module'],
            id: 'integratedtunnels:crafting/part_exporter_item'
        },
        {
            output: 'integratedtunnels:part_importer_item',
            inputs: ['integratedtunnels:part_interface_item', 'prettypipes:high_retrieval_module'],
            id: 'integratedtunnels:crafting/part_importer_item'
        },
        {
            output: 'integratedtunnels:part_interface_filter_item',
            inputs: [
                'integratedtunnels:part_interface_item',
                'integratedtunnels:part_interface_item',
                'prettypipes:high_filter_module'
            ],
            id: 'integratedtunnels:crafting/part_interface_filter_item'
        },
        {
            output: 'integratedtunnels:part_exporter_fluid',
            inputs: ['integratedtunnels:part_interface_fluid', 'ppfluids:high_fluid_extraction_module'],
            id: 'integratedtunnels:crafting/part_exporter_fluid'
        },
        {
            output: 'integratedtunnels:part_importer_fluid',
            inputs: ['integratedtunnels:part_interface_fluid', 'ppfluids:high_fluid_retrieval_module'],
            id: 'integratedtunnels:crafting/part_importer_fluid'
        },
        {
            output: 'integratedtunnels:part_interface_filter_fluid',
            inputs: [
                'integratedtunnels:part_interface_fluid',
                'integratedtunnels:part_interface_fluid',
                'ppfluids:high_fluid_filter_module'
            ],
            id: 'integratedtunnels:crafting/part_interface_filter_fluid'
        }
    ];

    recipes.forEach((recipe) => {
        event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
    });
});
