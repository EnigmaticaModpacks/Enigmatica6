onEvent('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/astralsorcery/lightwell/';

    // shatterMultiplier: higher means slower breaking
    // productionMultiplier: higher means more product per cycle

    const recipes = [
        {
            input: { item: 'bloodmagic:slate_ampoule' },
            output: 'bloodmagic:life_essence_fluid',
            productionMultiplier: 100.0,
            shatterMultiplier: 0.1,
            color: 16056324,
            id: `${id_prefix}life_essence`
        },
        {
            input: { item: 'astralsorcery:resonating_gem' },
            output: 'astralsorcery:liquid_starlight',
            productionMultiplier: 50.0,
            shatterMultiplier: 100.0,
            color: -16734209,
            id: 'astralsorcery:lightwell/starlight_resonating_gem'
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'astralsorcery:lightwell';
        event.custom(recipe).id(recipe.id);
    });
});
