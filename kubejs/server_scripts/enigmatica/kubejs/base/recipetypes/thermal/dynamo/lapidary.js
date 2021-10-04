onEvent('recipes', (event) => {
    event.remove({ type: 'thermal:lapidary_fuel' });
    var multiplier = 40;
    var data = {
        recipes: [
            { input: '#forge:gems/lapis', energy: 40000 },
            { input: '#forge:gems/prismarine', energy: 40000 },
            { input: '#forge:gems/quartz', energy: 40000 },
            { input: '#forge:gems/diamond', energy: 500000 },
            { input: '#forge:gems/emerald', energy: 125000 },
            { input: '#forge:gems/mana_diamond', energy: 625000 },
            { input: '#forge:gems/dragonstone', energy: 750000 },
            { input: '#forge:gems/mana', energy: 10000 },
            { input: '#forge:gems/fluorite', energy: 40000 },
            { input: '#forge:gems/dimensional', energy: 700000 },
            { input: '#forge:gems/apatite', energy: 40000 },
            { input: '#forge:gems/aquarmarine', energy: 10000 },
            { input: '#forge:gems/amber', energy: 160000 }
        ]
    };
    data.recipes.forEach((recipe) => {
        event.recipes.thermal.lapidary_fuel(recipe.input).energy(recipe.energy * multiplier);
    });
});
