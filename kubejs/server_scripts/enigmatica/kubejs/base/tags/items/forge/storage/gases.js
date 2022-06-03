onEvent('item.tags', (event) => {
    var items = ['mekanism:dynamic_tank', 'mekanism:dynamic_valve'];

    var tags = ['forge:storage', 'forge:storage/gas'];

    tags.forEach((tag) => {
        event
            .get(tag)
            .add(items)
            .add(/chemical_tank/);
    });
});
