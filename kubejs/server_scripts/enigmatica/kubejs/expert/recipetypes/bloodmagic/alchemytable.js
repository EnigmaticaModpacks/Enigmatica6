events.listen('recipes', (event) => {
    data = {
        recipes: [
            {
                inputs: ['ars_nouveau:magic_clay', 'minecraft:blaze_powder'],
                output: 'bloodmagic:arcaneashes',
                count: 1,
                syphon: 500,
                ticks: 200,
                orbLevel: 1,
                id: 'arcane_ash'
            }
        ]
    };

    data.recipes.forEach((recipe) => {
        const re = event.recipes.bloodmagic
            .alchemytable(Item.of(recipe.output, recipe.count), recipe.inputs)
            .syphon(recipe.syphon)
            .ticks(recipe.ticks)
            .upgradeLevel(recipe.orbLevel);
        if (recipe.id) {
            re.id(`bloodmagic:alchemytable/${recipe.id}`);
        }
    });
});
