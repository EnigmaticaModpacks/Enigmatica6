onEvent('recipes', (event) => {
    if (global.isNormalMode == false) {
        return;
    }
    var data = {
        recipes: [
            {
                inputs: ['thermal:blitz_rod', 'thermal:blitz_powder'],
                entity: 'thermal:blitz',
                aura: 150000,
                time: 120
            },
            {
                inputs: ['thermal:blizz_rod', 'thermal:blizz_powder'],
                entity: 'thermal:blizz',
                aura: 150000,
                time: 120
            },
            {
                inputs: ['thermal:basalz_rod', 'thermal:basalz_powder'],
                entity: 'thermal:basalz',
                aura: 150000,
                time: 120
            },
            {
                inputs: ['ars_nouveau:wilden_spike', 'minecraft:snow_block'],
                entity: 'ars_nouveau:wilden_guardian',
                aura: 250000,
                time: 120
            },
            {
                inputs: ['ars_nouveau:wilden_horn', 'minecraft:bone'],
                entity: 'ars_nouveau:wilden_hunter',
                aura: 150000,
                time: 120
            },
            {
                inputs: ['ars_nouveau:wilden_wing', 'astralsorcery:nocturnal_powder'],
                entity: 'ars_nouveau:wilden_stalker',
                aura: 150000,
                time: 120
            }
        ]
    };
    data.recipes.forEach((recipe) => {
        let ingredients = [Ingredient.of('naturesaura:birth_spirit').toJson()];

        recipe.inputs.forEach((input) => {
            ingredients.push(Ingredient.of(input).toJson());
        });

        const re = event.custom({
            type: 'naturesaura:animal_spawner',
            ingredients: ingredients,
            entity: recipe.entity,
            aura: recipe.aura,
            time: recipe.time
        });
        if (recipe.id) {
            re.id(recipe.id);
        }
    });
});
