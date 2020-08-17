events.listen('recipes', function (event) {
    // event.recipes.powah.energizing({
    //     ingredients: [
    //         { item: 'rftoolspower:dimensionalcell_simple' },
    //         { item: 'powah:capacitor_blazing' },
    //         { item: 'powah:capacitor_blazing' }
    //     ],
    //     energy: 250000,
    //     result: {
    //         item: 'tetra:magmatic_cell',
    //         count: 1
    //     }
    // });
    event.recipes.powah.energizing({
        ingredients: [{ tag: 'forge:gems/certus_quartz' }],
        energy: 10000,
        result: {
            item: getPreferredItemInTag(ingredient.of('#forge:gems/charged_certus_quartz')).id
        }
    });
});
