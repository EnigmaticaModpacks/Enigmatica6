onEvent('block.tags', (event) => {
    event.get('enigmatica:tree_of_life/oak').add(['kubejs:crystalline_oak_leaves', 'minecraft:oak_leaves']);
    event
        .get('enigmatica:tree_of_life/palo_verde')
        .add(['kubejs:crystalline_flowering_palo_verde_leaves', 'byg:flowering_palo_verde_leaves']);
    event
        .get('enigmatica:tree_of_life/dark_oak_wood')
        .add(['kubejs:crystalline_dark_oak_wood', 'minecraft:dark_oak_wood']);
});
