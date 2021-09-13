onEvent('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }

    const recipes = [
        {
            output: 'powah:photoelectric_pane',
            pattern: ['ABA', 'BCB', 'ABA'],
            key: {
                A: 'powah:dielectric_paste',
                B: '#forge:gems/silicon',
                C: 'atum:crystal_glass_pane'
            },
            id: 'powah:crafting/photoelectric_pane'
        },
        {
            output: 'powah:energizing_rod_basic',
            pattern: [' A ', 'BCB', ' D '],
            key: {
                A: 'refinedstorage:quartz_enriched_iron_block',
                B: 'powah:capacitor_basic',
                C: 'immersiveengineering:tesla_coil',
                D: 'immersiveengineering:coil_hv'
            },
            id: 'powah:crafting/energizing_rod_basic'
        },
        {
            output: Item.of('powah:dielectric_rod', 8),
            pattern: ['ABA', 'ABA', 'ABA'],
            key: {
                A: 'powah:dielectric_paste',
                B: '#forge:ingots/energized_steel'
            },
            id: 'powah:crafting/dielectric_rod'
        },
        {
            output: Item.of('powah:dielectric_rod_horizontal', 8),
            pattern: ['AAA', 'BBB', 'AAA'],
            key: {
                A: 'powah:dielectric_paste',
                B: '#forge:ingots/energized_steel'
            },
            id: 'powah:crafting/dielectric_rod_h'
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
    // TODO: Remove Powah cables when recipes using them are changed
    // event.remove({ id: /powah:crafting\/cable_/ });
});
