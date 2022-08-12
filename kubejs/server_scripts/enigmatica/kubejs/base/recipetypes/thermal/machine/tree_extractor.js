onEvent('recipes', (event) => {
    const id_prefix = 'enigmatica:base/thermal/tree_extractor/';

    treeRegistry.forEach((treeCategories) => {
        treeCategories.trees.forEach((tree) => {
            if (tree.sap) {
                if (tree.rate.living > 0) {
                    fallback_id(
                        event.custom({
                            type: 'thermal:tree_extractor',
                            trunk: tree.trunk,
                            leaves: tree.leaf,
                            result: {
                                fluid: tree.sap,
                                amount: tree.rate.living
                            }
                        }),
                        id_prefix
                    );
                }
            }
        });
    });
});
