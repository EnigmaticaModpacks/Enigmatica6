onEvent('recipes', (event) => {
    const id_prefix = 'enigmatica:base/resourcefulbees/';

    bees.forEach((bee) => {
        if (bee == 'catnip') return; // this is a comb, not a bee.
        event
            .shapeless(Item.of('resourcefulbees:bee_jar', { Entity: `resourcefulbees:${bee}_bee`, Age: -24000 }), [
                `kubejs:${bee}_larva`,
                `resourcefulbees:bee_jar`,
                `#resourcefulbees:resourceful_honeycomb`
            ])
            .id(`${id_prefix}jar_from_larva/${bee}`);
    });
});
