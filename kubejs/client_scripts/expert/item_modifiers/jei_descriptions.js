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
        },
        {
            items: ['resourcefulbees:t2_apiary', 'resourcefulbees:t3_apiary', 'resourcefulbees:t4_apiary'],
            description: [
                'Crafting this will not return any bees contained in the ingredients - make sure to remove them before crafting!'
            ]
        }
    ];

    recipes.forEach((recipe) => {
        recipe.items.forEach((item) => {
            event.add(item, recipe.description);
        });
    });

    const disabledItems = ['pneumaticcraft:air_compressor', 'pneumaticcraft:advanced_air_compressor'];
    disabledItems.forEach((item) => {
        event.add(
            item,
            "This item has been disabled in Expert mode, if you managed to obtain it please report it on Enigmatica 6's issue tracker: https://github.com/NillerMedDild/Enigmatica6/issues"
        );
    });
});
