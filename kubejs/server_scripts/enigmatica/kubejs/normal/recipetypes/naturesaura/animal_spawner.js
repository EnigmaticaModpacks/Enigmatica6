onEvent('recipes', (event) => {
    if (global.isNormalMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:normal/naturesaura/animalspawner/';

    const recipes = [
        {
            inputs: ['thermal:blitz_rod', 'thermal:blitz_powder'],
            entity: 'thermal:blitz',
            aura: 150000,
            time: 120,
            id: `${id_prefix}blitz`
        },
        {
            inputs: ['thermal:blizz_rod', 'thermal:blizz_powder'],
            entity: 'thermal:blizz',
            aura: 150000,
            time: 120,
            id: `${id_prefix}blizz`
        },
        {
            inputs: ['thermal:basalz_rod', 'thermal:basalz_powder'],
            entity: 'thermal:basalz',
            aura: 150000,
            time: 120,
            id: `${id_prefix}basalz`
        },
        {
            inputs: ['ars_nouveau:wilden_spike', 'minecraft:snow_block'],
            entity: 'ars_nouveau:wilden_guardian',
            aura: 250000,
            time: 120,
            id: `${id_prefix}wilden_guardian`
        },
        {
            inputs: ['ars_nouveau:wilden_horn', 'minecraft:bone'],
            entity: 'ars_nouveau:wilden_hunter',
            aura: 150000,
            time: 120,
            id: `${id_prefix}wilden_hunter`
        },
        {
            inputs: ['ars_nouveau:wilden_wing', 'astralsorcery:nocturnal_powder'],
            entity: 'ars_nouveau:wilden_stalker',
            aura: 150000,
            time: 120,
            id: `${id_prefix}wilden_stalker`
        }
    ];

    recipes.forEach((recipe) => {
        let ingredients = [Ingredient.of('naturesaura:birth_spirit').toJson()];

        recipe.inputs.forEach((input) => {
            ingredients.push(Ingredient.of(input).toJson());
        });

        event
            .custom({
                type: 'naturesaura:animal_spawner',
                ingredients: ingredients,
                entity: recipe.entity,
                aura: recipe.aura,
                time: recipe.time
            })
            .id(recipe.id);
    });
});
