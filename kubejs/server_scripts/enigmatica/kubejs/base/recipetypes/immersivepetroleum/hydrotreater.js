onEvent('recipes', (event) => {
    const id_prefix = 'enigmatica:base/immersivepetroleum/hydrotreater/';
    const recipes = [
        {
            time: 1,
            energy: 512,
            result: { fluid: 'immersivepetroleum:diesel', amount: 7 },
            input: { tag: 'forge:diesel_sulfur', amount: 7 },
            secondary_input: { tag: 'minecraft:water', amount: 7 },
            secondary_result: { item: 'emendatusenigmatica:sulfur_dust', chance: '0.02' },
            id: 'immersivepetroleum:hydrotreater/sulfur_recovery'
        }
    ];
    recipes.forEach((recipe) => {
        recipe.type = 'immersivepetroleum:hydrotreater';
        event.custom(recipe).id(recipe.id);
    });
});
