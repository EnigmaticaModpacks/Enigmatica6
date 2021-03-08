events.listen('recipes', (event) => {
    event.remove({ type: 'thermal:lapidary_fuel' });
    var multiplier = 40;
    var data = {
        recipes: [
            {
                gem: 'forge:gems/lapis',
                energy: 40000
            },
            {
                gem: 'forge:gems/prismarine',
                energy: 40000
            },
            {
                gem: 'forge:gems/quartz',
                energy: 40000
            },
            {
                gem: 'forge:gems/diamond',
                energy: 500000
            },
            {
                gem: 'forge:gems/emerald',
                energy: 125000
            },
            {
                gem: 'forge:gems/mana_diamond',
                energy: 625000
            },
            {
                gem: 'forge:gems/dragonstone',
                energy: 750000
            },
            {
                gem: 'forge:gems/mana',
                energy: 10000
            },
            {
                gem: 'forge:gems/fluorite',
                energy: 40000
            },
            {
                gem: 'forge:gems/dimensional',
                energy: 700000
            },
            {
                gem: 'forge:gems/apatite',
                energy: 40000
            },
            {
                gem: 'forge:gems/aquarmarine',
                energy: 10000
            },
            {
                gem: 'forge:gems/amber',
                energy: 160000
            }
        ]
    };
    data.recipes.forEach((recipe) => {
        event.recipes.thermal.lapidary_fuel({
            ingredient: {
                tag: recipe.gem
            },
            energy: recipe.energy * multiplier
        });
    });
});
