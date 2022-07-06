onEvent('recipes', (event) => {
    const recipes = [
        {
            output: 'alexsmobs:hemolymph_blaster',
            pattern: ['AAA', 'BCD'],
            key: {
                A: 'alexsmobs:hemolymph_sac',
                B: 'alexsmobs:warped_muscle',
                C: 'alexsmobs:blood_sprayer',
                D: 'alexsmobs:mosquito_proboscis'
            },
            id: 'alexsmobs:hemolymph_blaster'
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
