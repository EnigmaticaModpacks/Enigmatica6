onEvent('jei.information', (event) => {
    if (global.isNormalMode == false) {
        return;
    }
    const id_prefix = 'descriptions.enigmatica.normal.';
    const recipes = [
        {
            items: ['resourcefulbees:t2_apiary', 'resourcefulbees:t3_apiary', 'resourcefulbees:t4_apiary'],
            description: ['tooltips.enigmatica.normal.apiaries_craft']
        },
        {
            items: ['atum:nebu_hammer'],
            description: ['descriptions.enigmatica.expert.nebu_hammer']
        }
    ];

    recipes.forEach((recipe) => {
        for (let i = 0; i < recipe.description.length; i++) {
            recipe.description[i] = Text.translate(recipe.description[i]);
        }
        recipe.items.forEach((item) => {
            event.add(item, recipe.description);
        });
    });
});
