events.listen('recipes', function (event) {
    event.recipes.powah.energizing({
        ingredients: [
            { item: 'mekanism:energy_tablet' },
            { item: 'powah:capacitor_blazing' },
            { item: 'powah:capacitor_blazing' }
        ],
        energy: 250000,
        result: {
            item: 'tetra:magmatic_cell',
            count: 1
        }
    });
    event.recipes.powah.energizing({
        ingredients: [{ tag: 'forge:ingots/uranium' }],
        energy: 5000,
        result: {
            item: 'powah:uraninite',
            count: 1
        }
    });
    event.recipes.powah.energizing({
        ingredients: [{ tag: 'forge:ingots/uranium' }, { tag: 'forge:ingots/uranium' }],
        energy: 10000,
        result: {
            item: 'powah:uraninite',
            count: 2
        }
    });
    event.recipes.powah.energizing({
        ingredients: [
            { tag: 'forge:ingots/uranium' },
            { tag: 'forge:ingots/uranium' },
            { tag: 'forge:ingots/uranium' }
        ],
        energy: 15000,
        result: {
            item: 'powah:uraninite',
            count: 3
        }
    });
    event.recipes.powah.energizing({
        ingredients: [
            { tag: 'forge:ingots/uranium' },
            { tag: 'forge:ingots/uranium' },
            { tag: 'forge:ingots/uranium' },
            { tag: 'forge:ingots/uranium' }
        ],
        energy: 20000,
        result: {
            item: 'powah:uraninite',
            count: 4
        }
    });
    event.recipes.powah.energizing({
        ingredients: [
            { tag: 'forge:ingots/uranium' },
            { tag: 'forge:ingots/uranium' },
            { tag: 'forge:ingots/uranium' },
            { tag: 'forge:ingots/uranium' },
            { tag: 'forge:ingots/uranium' }
        ],
        energy: 25000,
        result: {
            item: 'powah:uraninite',
            count: 5
        }
    });
    event.recipes.powah.energizing({
        ingredients: [
            { tag: 'forge:ingots/uranium' },
            { tag: 'forge:ingots/uranium' },
            { tag: 'forge:ingots/uranium' },
            { tag: 'forge:ingots/uranium' },
            { tag: 'forge:ingots/uranium' },
            { tag: 'forge:ingots/uranium' }
        ],
        energy: 30000,
        result: {
            item: 'powah:uraninite',
            count: 6
        }
    });
    // event.recipes.powah.energizing({
    //     ingredients: [{ tag: 'forge:gems/certus_quartz' }],
    //     energy: 10000,
    //     result: {
    //         item: getPreferredItemInTag(ingredient.of('#forge:gems/charged_certus_quartz')).id
    //     }
    // });
    // event.recipes.powah.energizing({
    //     ingredients: [
    //         { tag: 'forge:gems/charged_certus_quartz' },
    //         { tag: 'forge:dusts/redstone' },
    //         { tag: 'forge:gems/quartz' }
    //     ],
    //     energy: 4000,
    //     result: {
    //         item: getPreferredItemInTag(ingredient.of('#forge:gems/fluix')).id,
    //         count: 2
    //     }
    // });
});
