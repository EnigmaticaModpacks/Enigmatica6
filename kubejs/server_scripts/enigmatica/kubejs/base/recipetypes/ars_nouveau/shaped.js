onEvent('recipes', (event) => {
    const recipes = [
        {
            output: 'ars_nouveau:source_berry_pie',
            pattern: [' C ', 'DED', 'BAB'],
            key: {
                A: 'farmersdelight:pie_crust',
                B: 'minecraft:sugar',
                C: 'farmersdelight:wheat_dough',
                D: '#forge:fruits/mana_berry',
                E: 'ars_nouveau:mana_bloom'
            },
            id: 'ars_nouveau:source_berry_pie'
        },
        {
            output: 'ars_nouveau:novice_spell_book',
            pattern: ['ABA', 'ACA', 'ABA'],
            key: {
                A: '#forge:nuggets/gold',
                B: 'minecraft:purple_carpet',
                C: 'minecraft:book'
            },
            id: 'ars_nouveau:novice_spell_book'
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
