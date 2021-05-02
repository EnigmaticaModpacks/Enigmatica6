events.listen('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }

    const recipes = [
        {
            input: 'ars_nouveau:magic_clay',
            output: 'bloodmagic:arcaneashes'
        }
    ];

    recipes.forEach((recipe) => {
        let input = recipe.input.charAt(0) == '#' ? { tag: recipe.input.slice(1) } : { item: recipe.input };

        let re = event.custom({
            type: 'occultism:spirit_fire',
            ingredient: input,
            result: { item: recipe.output }
        });
        if (recipe.id) {
            re.id(recipe.id);
        }
    });
});
