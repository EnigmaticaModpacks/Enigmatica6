onEvent('item.tags', (event) => {
    var types = ['storage_blocks', 'ingots', 'nuggets', 'dusts', 'plates', 'rods', 'gears'],
        substitutionPairs = [
            {
                base: 'gold',
                substitutes: ['brass', 'bronze', 'copper', 'silver', 'tin', 'diamond', 'invar']
            },
            {
                base: 'iron',
                substitutes: ['aluminum', 'copper', 'lead', 'tin', 'brass', 'invar', 'osmium']
            }
        ];
    types.forEach((type) => {
        substitutionPairs.forEach((substitutionPair) => {
            var base = substitutionPair.base;
            substitutionPair.substitutes.forEach((substitute) => {
                event
                    .get(`forge:${type}/${base}_${substitute}`)
                    .add(`#forge:${type}/${base}`)
                    .add(`#forge:${type}/${substitute}`);
            });
        });
    });
});
