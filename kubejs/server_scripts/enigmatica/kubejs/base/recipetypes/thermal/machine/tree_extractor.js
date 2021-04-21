events.listen('recipes', (event) => {
    treeRegistry.forEach((treeCategories) => {
        treeCategories.trees.forEach((tree) => {
            if (tree.sap) {
                event.custom({
                    type: 'thermal:tree_extractor',
                    trunk: tree.trunk,
                    leaves: tree.leaf,
                    result: {
                        fluid: tree.sap,
                        amount: tree.amount
                    }
                });
            }
        });
    });
});
