events.listen('recipes', (event) => {
    if (global.isNormalMode == false) {
        return;
    }
    const recipes = [
        {
            inputs: [
                '#forge:gems/mana',
                '#forge:gems/mana',
                '#forge:ingots/gold_brass',
                '#forge:ingots/gold_brass',
                'ars_nouveau:spell_parchment',
                'ars_nouveau:glyph_projectile',
                'ars_nouveau:glyph_accelerate'
            ],
            reagent: 'ars_nouveau:archwood_planks',
            output: 'ars_nouveau:wand',
            count: 1,
            id: 'ars_nouveau:wand'
        }
    ];
    recipes.forEach((recipe) => {
        let constructed_recipe = {
            type: 'ars_nouveau:enchanting_apparatus',
            reagent: recipe.reagent.charAt(0) == '#' ? [{ tag: recipe.reagent.slice(1) }] : [{ item: recipe.reagent }],
            output: { item: recipe.output, count: recipe.count }
        };

        recipe.inputs.forEach((input, index) => {
            let i = index + 1;
            constructed_recipe[`item_${i}`] = input.charAt(0) == '#' ? [{ tag: input.slice(1) }] : [{ item: input }];
        });

        const re = event.custom(constructed_recipe);
        if (recipe.id) {
            re.id(recipe.id);
        }
    });
});
