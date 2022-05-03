onEvent('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/astralsorcery/lightwell/';
    const recipes = [
        {
            input: { item: 'bloodmagic:slate_ampoule' },
            output: 'bloodmagic:life_essence_fluid',
            productionMultiplier: 0.25,
            shatterMultiplier: 20.0,
            color: 16056324,
            id: `${id_prefix}life_essence`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'astralsorcery:lightwell';
        event.custom(recipe).id(recipe.id);
    });
});
