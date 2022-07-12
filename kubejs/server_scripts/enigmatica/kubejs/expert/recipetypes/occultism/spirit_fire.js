onEvent('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }

    // not in the enigmatica namespace for some legacy reason?
    const id_prefix = `occultism:spirit_fire/`;

    const recipes = [
        {
            input: 'ars_nouveau:magic_clay',
            output: 'bloodmagic:arcaneashes',
            id: `${id_prefix}arcane_ashes`
        },
        {
            input: 'ars_nouveau:arcane_stone',
            output: 'occultism:otherstone',
            id: `${id_prefix}otherstone`
        },
        {
            input: '#forge:gems/mana',
            output: 'occultism:spirit_attuned_gem',
            id: `${id_prefix}spirit_attuned_gem`
        }
    ];

    recipes.forEach((recipe) => {
        event
            .custom({
                type: 'occultism:spirit_fire',
                ingredient: Ingredient.of(recipe.input).toJson(),
                result: Ingredient.of(recipe.output).toJson()
            })
            .id(recipe.id);
    });
});
