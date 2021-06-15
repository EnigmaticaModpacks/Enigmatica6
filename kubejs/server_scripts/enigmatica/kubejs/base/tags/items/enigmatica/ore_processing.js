onEvent('item.tags', (event) => {
    metals.forEach((metal) => {
        event.get(`enigmatica:mana_clusters`).add(`kubejs:suffused_${metal}`);
        event.get(`enigmatica:mana_clusters/${metal}`).add(`kubejs:suffused_${metal}`);

        event.get(`enigmatica:fulminated_clusters`).add(`kubejs:fulminated_${metal}`);
        event.get(`enigmatica:fulminated_clusters/${metal}`).add(`kubejs:fulminated_${metal}`);

        event.get(`enigmatica:levigated_materials`).add(`kubejs:levigated_${metal}`);
        event.get(`enigmatica:levigated_materials/${metal}`).add(`kubejs:levigated_${metal}`);

        event.get(`enigmatica:crystalline_slivers`).add(`kubejs:sliver_${metal}`);
        event.get(`enigmatica:crystalline_slivers/${metal}`).add(`kubejs:sliver_${metal}`);
    });
});
