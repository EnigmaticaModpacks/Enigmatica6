onEvent('recipes', (event) => {
    treeRegistry.forEach((treeCategories) => {
        treeCategories.trees.forEach((tree) => {
            let strippedLog = getStrippedLogFrom(tree.trunk);
            if (tree.sap) {
                //Extract at full rate from Logs
                event
                    .custom({
                        input: { item: tree.trunk },
                        result: strippedLog,
                        breakChance: 0.005,
                        output: `{FluidName:"${tree.sap}",Amount:${tree.rate.dead}}`,
                        defaultRecipe: false,
                        type: 'industrialforegoing:fluid_extractor'
                    })
                    .id(`industrialforegoing:fluid_extractor/${tree.trunk.replace(':', '/')}`);
                // Extract at half rate from Stripped Logs
                event
                    .custom({
                        type: 'industrialforegoing:fluid_extractor',
                        input: { item: strippedLog },
                        result: 'minecraft:air',
                        breakChance: 0.005,
                        output: `{FluidName:"${tree.sap}",Amount:${tree.rate.dead / 2}}`,
                        defaultRecipe: false
                    })
                    .id(`industrialforegoing:fluid_extractor/${strippedLog.replace(':', '/')}`);
            }
        });
    });
});
