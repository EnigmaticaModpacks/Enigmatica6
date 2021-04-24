onEvent('item.tooltip', (event) => {
    const recipes = [
        {
            items: ['bountifulbaubles:potion_wormhole', 'bountifulbaubles:wormhole_mirror'],
            text: [
                Text.of(
                    'Do not use, you will crash immediately if in multiplayer. We have notified the mod author about the issue.'
                ).red()
            ]
        },
        {
            items: [
                'integratedtunnels:part_interface_fluid',
                'integratedtunnels:part_importer_fluid',
                'integratedtunnels:part_exporter_fluid'
            ],
            text: [Text.of('Max Fluid Transfer Rate has been limited to 65,536 mb per tick.').red()]
        },
        {
            items: [
                'integratedtunnels:part_interface_energy',
                'integratedtunnels:part_importer_energy',
                'integratedtunnels:part_exporter_energy'
            ],
            text: [Text.of('Max Energy Transfer Rate has been limited to 65,536 FE per tick.').red()]
        }
    ];

    refinedStorageItems.forEach((item) => {
        recipes.push({
            items: ['refinedstorage:' + item],
            text: ['Can be dyed through crafting or by right clicking it with dye in-world.']
        });
    });

    recipes.forEach((recipe) => {
        event.add(recipe.items, recipe.text);
    });
});
