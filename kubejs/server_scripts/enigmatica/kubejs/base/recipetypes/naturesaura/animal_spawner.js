events.listen('recipes', (event) => {
    var data = {
        recipes: [
            {
                ingredients: ['emendatusenigmatica:arcane_gem', 'naturesaura:gold_leaf'],
                entity: 'ars_nouveau:carbuncle',
                aura: 100000,
                time: 100
            },
            {
                ingredients: ['emendatusenigmatica:arcane_gem', 'naturesaura:ancient_sapling'],
                entity: 'ars_nouveau:sylph',
                aura: 100000,
                time: 100
            },
            {
                ingredients: ['minecraft:cod', 'minecraft:iron_bars'],
                entity: 'quark:crab',
                aura: 30000,
                time: 40
            },
            {
                ingredients: ['minecraft:spider_eye', 'minecraft:lily_pad'],
                entity: 'quark:frog',
                aura: 30000,
                time: 40
            },
            {
                ingredients: ['minecraft:leather', 'minecraft:coal'],
                entity: 'quark:foxhound',
                aura: 150000,
                time: 120
            },
            {
                ingredients: ['thermal:blitz_rod', 'thermal:blitz_powder'],
                entity: 'thermal:blitz',
                aura: 150000,
                time: 120
            },
            {
                ingredients: ['thermal:blizz_rod', 'thermal:blizz_powder'],
                entity: 'thermal:blizz',
                aura: 150000,
                time: 120
            },
            {
                ingredients: ['thermal:basalz_rod', 'thermal:basalz_powder'],
                entity: 'thermal:basalz',
                aura: 150000,
                time: 120
            }
        ]
    };
    data.recipes.forEach((recipe) => {
        event.recipes.naturesaura.animal_spawner({
            type: 'naturesaura.animal_spawner',
            ingredients: [
                {
                    item: 'naturesaura:birth_spirit'
                },
                {
                    item: recipe.ingredients[0]
                },
                {
                    item: recipe.ingredients[1]
                }
            ],
            entity: recipe.entity,
            aura: recipe.aura,
            time: recipe.time
        });
    });
});
