events.listen('recipes', (event) => {
    event.remove({ type: 'thermal:numismatic_fuel' });
    var multiplier = 40;
    var data = {
        recipes: [
            {
                coin: 'forge:coins/gold',
                energy: 64000
            },
            {
                coin: 'forge:coins/invar',
                energy: 48000
            },
            {
                coin: 'forge:coins/iron',
                energy: 32000
            },
            {
                coin: 'forge:coins/enderium',
                energy: 160000
            },
            {
                coin: 'forge:coins/lead',
                energy: 48000
            },
            {
                coin: 'forge:coins/lumium',
                energy: 80000
            },
            {
                coin: 'forge:coins/nickel',
                energy: 64000
            },
            {
                coin: 'forge:coins/signalum',
                energy: 80000
            },
            {
                coin: 'forge:coins/silver',
                energy: 48000
            },
            {
                coin: 'forge:coins/tin',
                energy: 32000
            },
            {
                coin: 'forge:coins/bronze',
                energy: 40000
            },
            {
                coin: 'forge:coins/constantan',
                energy: 56000
            },
            {
                coin: 'forge:coins/copper',
                energy: 32000
            },
            {
                coin: 'forge:coins/electrum',
                energy: 60000
            }
        ]
    };
    data.recipes.forEach((recipe) => {
        event.recipes.thermal.numismatic_fuel({
            type: 'thermal.numismatic_fuel',
            ingredient: {
                tag: recipe.coin
            },
            energy: recipe.energy * multiplier
        });
    });
});
