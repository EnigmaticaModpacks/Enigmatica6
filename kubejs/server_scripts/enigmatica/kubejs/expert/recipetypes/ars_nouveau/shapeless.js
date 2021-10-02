onEvent('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }

    const recipes = [
        {
            output: 'ars_nouveau:ritual_flight',
            inputs: [
                'ars_nouveau:purple_archwood_log',
                'ars_nouveau:wilden_wing',
                'ars_nouveau:wilden_wing',
                'quark:bottled_cloud',
                'quark:bottled_cloud'
            ],
            id: 'ars_nouveau:ritual_flight'
        },
        {
            output: 'ars_nouveau:ritual_cloudshaping',
            inputs: [
                'ars_nouveau:blue_archwood_log',
                '#forge:dusts/silver',
                '#forge:dusts/silver',
                'quark:bottled_cloud',
                'quark:bottled_cloud'
            ],
            id: 'ars_nouveau:ritual_cloudshaping'
        },
        {
            output: 'ars_nouveau:ritual_moonfall',
            inputs: ['ars_nouveau:blue_archwood_log', 'architects_palette:moonstone', '#forge:ingots/silver'],
            id: 'ars_nouveau:ritual_moonfall'
        },
        {
            output: 'ars_nouveau:ritual_sunrise',
            inputs: ['ars_nouveau:red_archwood_log', 'architects_palette:sunstone', '#forge:ingots/sunmetal'],
            id: 'ars_nouveau:ritual_sunrise'
        },
        {
            output: 'ars_nouveau:ritual_binding',
            inputs: [
                'ars_nouveau:purple_archwood_log',
                'ars_nouveau:blank_parchment',
                'bloodmagic:reagentbinding',
                '#forge:gems/mana',
                '#forge:gems/mana',
                '#forge:gems/mana'
            ],
            id: 'ars_nouveau:ritual_binding'
        }
    ];

    recipes.forEach((recipe) => {
        event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
    });
});
