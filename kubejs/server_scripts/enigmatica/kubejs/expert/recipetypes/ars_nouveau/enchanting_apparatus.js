events.listen('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }

    var data = {
        recipes: [
            {
                inputs: ['#forge:dusts/silver', '#forge:dusts/silver', '#forge:dusts/silver', '#forge:dusts/silver'],
                reagent: '#forge:dusts/sulfur',
                output: 'architects_palette:sunmetal_blend',
                count: 4
            },
            {
                inputs: [
                    'aquaculture:worm',
                    'quark:bottled_cloud',
                    'minecraft:string',
                    'thermal:phytogro',
                    'thermal:phytogro',
                    'minecraft:string',
                    'quark:bottled_cloud',
                    'aquaculture:worm'
                ],
                reagent: '#minecraft:beehives',
                output: 'betterendforge:silk_moth_nest',
                count: 1
            },
            {
                inputs: [
                    'architects_palette:sunmetal_blend',
                    'architects_palette:sunmetal_blend',
                    'architects_palette:sunmetal_blend',
                    'architects_palette:sunmetal_blend'
                ],
                reagent: 'betterendforge:silk_fiber',
                output: 'naturesaura:gold_fiber',
                count: 4
            }
        ]
    };
    data.recipes.forEach((recipe) => {
        let constructed_recipe = {
            type: 'ars_nouveau:enchanting_apparatus',
            reagent: recipe.reagent.charAt(0) == '#' ? [{ tag: recipe.reagent.slice(1) }] : [{ item: recipe.reagent }],
            output: { item: recipe.output, count: recipe.count }
        };

        recipe.inputs.forEach((input, index) => {
            let i = index + 1;
            constructed_recipe[`item_${i}`] = input.charAt(0) == '#' ? [{ tag: input.slice(1) }] : [{ item: input }];
        });

        if (recipe.mana) {
            constructed_recipe['mana'] = recipe.mana;
        }

        const re = event.custom(constructed_recipe);
        if (recipe.id) {
            re.id(recipe.id);
        }
    });
});
