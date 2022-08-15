onEvent('recipes', (event) => {
    if (global.isNormalMode == false) {
        return;
    }

    const recipes = [
        {
            output: 'botania:gaia_pylon',
            pattern: [' D ', 'EPE', ' D '],
            key: {
                P: 'botania:mana_pylon',
                D: 'botania:pixie_dust',
                E: '#forge:ingots/elementium'
            },
            id: 'mythicbotany:modified_gaia_pylon_with_alfsteel'
        },
        {
            output: 'botania:apothecary_default',
            pattern: ['CBC', ' A ', 'AAA'],
            key: {
                A: '#forge:cobblestone',
                B: '#botania:petals',
                C: '#forge:cobblestone_slabs'
            },
            id: 'botania:apothecary_default'
        }
    ];

    recipes.forEach((recipe) => {
        if (recipe.id) {
            event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
        } else {
            event.shaped(recipe.output, recipe.pattern, recipe.key);
        }
    });
});
