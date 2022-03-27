onEvent('recipes', (event) => {
    treeRegistry.forEach((treeCategories) => {
        treeCategories.trees.forEach((tree) => {
            if (tree.sap) {
                if (tree.rate.living > 0) {
                    event.custom({
                        type: 'thermal:tree_extractor',
                        trunk: tree.trunk,
                        leaves: tree.leaf,
                        result: {
                            fluid: tree.sap,
                            amount: tree.rate.living
                        }
                    });
                }
            }
        });
    });
});
