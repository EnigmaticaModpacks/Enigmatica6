onEvent('item.tags', (event) => {
    var items = ['immersiveengineering:powerpack', 'mekanism:energy_tablet'];

    var tags = ['forge:storage', 'forge:storage/energy'];

    tags.forEach((tag) => {
        event
            .get(tag)
            .add(items)
            .add(/energy_cell/)
            .add(/energy_cube/)
            .add(/immersiveengineering:capacitor/)
            .add(/induction/)
            .add(/battery/)
            .add(/rftoolspower:cell/)
            .add(/rftoolspower:dimensionalcell/);
    });
});
