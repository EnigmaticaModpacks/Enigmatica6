onEvent('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }

    const recipes = [
        {
            input: 'ars_nouveau:magic_clay',
            output: 'bloodmagic:arcaneashes'
        },
        {
            input: 'ars_nouveau:arcane_stone',
            output: 'occultism:otherstone',
            id: 'otherstone'
        },
        {
            input: 'eidolon:shadow_gem',
            output: 'occultism:spirit_attuned_gem',
            id: 'spirit_attuned_gem'
        }
    ];

    recipes.forEach((recipe) => {
        let re = event.custom({
            type: 'occultism:spirit_fire',
            ingredient: Ingredient.of(recipe.input).toJson(),
            result: Ingredient.of(recipe.output).toJson()
        });
        if (recipe.id) {
            re.id(`occultism:spirit_fire/${recipe.id}`);
        }
    });
});
