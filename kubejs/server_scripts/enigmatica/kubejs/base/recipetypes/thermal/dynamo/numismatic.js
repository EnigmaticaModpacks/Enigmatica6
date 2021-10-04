onEvent('recipes', (event) => {
    event.remove({ type: 'thermal:numismatic_fuel' });
    var multiplier = 40;

    const recipes = [
        { input: '#forge:coins/gold', energy: 64000 },
        { input: '#forge:coins/invar', energy: 48000 },
        { input: '#forge:coins/iron', energy: 32000 },
        { input: '#forge:coins/enderium', energy: 160000 },
        { input: '#forge:coins/lead', energy: 48000 },
        { input: '#forge:coins/lumium', energy: 80000 },
        { input: '#forge:coins/nickel', energy: 64000 },
        { input: '#forge:coins/signalum', energy: 80000 },
        { input: '#forge:coins/silver', energy: 48000 },
        { input: '#forge:coins/tin', energy: 32000 },
        { input: '#forge:coins/bronze', energy: 40000 },
        { input: '#forge:coins/constantan', energy: 56000 },
        { input: '#forge:coins/copper', energy: 32000 },
        { input: '#forge:coins/electrum', energy: 60000 }
    ];
    recipes.forEach((recipe) => {
        event.recipes.thermal.numismatic_fuel(recipe.input).energy(recipe.energy * multiplier);
    });
});
