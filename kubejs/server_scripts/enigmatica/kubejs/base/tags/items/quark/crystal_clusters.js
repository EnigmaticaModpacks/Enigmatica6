onEvent('item.tags', (event) => {
    quark_crystal_colors.forEach((color) => {
        event.get('quark:crystal_clusters').add(`quark:${color}_crystal_cluster`);
        event.get(`quark:crystal_clusters/${color}`).add(`quark:${color}_crystal_cluster`);
    });
});
