onEvent('jei.information', (event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const recipes = [
        {
            items: ['bloodmagic:soulpickaxe'],
            description: ['Capable of mining Iesnium.']
        },
        {
            items: ['atum:nebu_hammer', 'mythicbotany:alfsteel_pick', 'aiotbotania:alfsteel_aiot'],
            description: ['Capable of breaking down Godblocks into Atum Artifacts.']
        }
    ];

    recipes.forEach((recipe) => {
        recipe.items.forEach((item) => {
            event.add(item, recipe.description);
        });
    });
});
