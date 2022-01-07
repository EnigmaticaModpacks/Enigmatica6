onEvent('recipes', (event) => {
    if (global.isNormalMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:normal/naturesaura/animalspawner/';
    const recipes = [
        {
            inputs: ['naturesaura:birth_spirit', 'thermal:blitz_rod', 'thermal:blitz_powder'],
            entity: 'thermal:blitz',
            aura: 150000,
            time: 120,
            id: `${id_prefix}blitz`
        },
        {
            inputs: ['naturesaura:birth_spirit', 'thermal:blizz_rod', 'thermal:blizz_powder'],
            entity: 'thermal:blizz',
            aura: 150000,
            time: 120,
            id: `${id_prefix}blizz`
        },
        {
            inputs: ['naturesaura:birth_spirit', 'thermal:basalz_rod', 'thermal:basalz_powder'],
            entity: 'thermal:basalz',
            aura: 150000,
            time: 120,
            id: `${id_prefix}basalz`
        },
        {
            inputs: ['naturesaura:birth_spirit', 'ars_nouveau:wilden_spike', 'minecraft:snow_block'],
            entity: 'ars_nouveau:wilden_guardian',
            aura: 250000,
            time: 120,
            id: `${id_prefix}wilden_guardian`
        },
        {
            inputs: ['naturesaura:birth_spirit', 'ars_nouveau:wilden_horn', 'minecraft:bone'],
            entity: 'ars_nouveau:wilden_hunter',
            aura: 150000,
            time: 120,
            id: `${id_prefix}wilden_hunter`
        },
        {
            inputs: ['naturesaura:birth_spirit', 'ars_nouveau:wilden_wing', 'astralsorcery:nocturnal_powder'],
            entity: 'ars_nouveau:wilden_stalker',
            aura: 150000,
            time: 120,
            id: `${id_prefix}wilden_stalker`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'naturesaura:animal_spawner';
        recipe.ingredients = recipe.inputs.map((input) => Ingredient.of(input).toJson());
        event.custom(recipe).id(recipe.id);
    });
});
