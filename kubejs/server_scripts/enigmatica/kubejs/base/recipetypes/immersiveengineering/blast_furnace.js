onEvent('recipes', (event) => {
    const id_prefix = 'enigmatica:base/immersiveengineering/blast_furnace/';
    const recipes = [
        {
            input: '#forge:slimeball/earth',
            output: 'tconstruct:earth_slime_crystal',
            slag: 'thermal:slag',
            time: 100,
            id: `${id_prefix}earth_slime_crystal`
        },
        {
            input: '#forge:slimeball/sky',
            output: 'tconstruct:sky_slime_crystal',
            slag: 'thermal:slag',
            time: 100,
            id: `${id_prefix}sky_slime_crystal`
        },
        {
            input: '#forge:slimeball/ender',
            output: 'tconstruct:ender_slime_crystal',
            slag: 'thermal:slag',
            time: 100,
            id: `${id_prefix}ender_slime_crystal`
        },
        {
            input: '#forge:slimeball/ichor',
            output: 'tconstruct:ichor_slime_crystal',
            slag: 'thermal:slag',
            time: 100,
            id: `${id_prefix}ichor_slime_crystal`
        },
        {
            input: 'industrialforegoing:pink_slime',
            output: 'materialis:pink_slime_crystal',
            slag: 'thermal:slag',
            time: 100,
            id: `${id_prefix}pink_slime_crystal`
        }
    ];

    recipes.forEach((recipe) => {
        event.recipes.immersiveengineering
            .blast_furnace(recipe.output, recipe.input, recipe.slag)
            .time(recipe.time)
            .id(recipe.id);
    });
});
