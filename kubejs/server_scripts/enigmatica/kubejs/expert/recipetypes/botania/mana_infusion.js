onEvent('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }

    const recipes = [
        {
            input: '#forge:ingots/froststeel',
            output: 'botania:manasteel_ingot',
            count: 1,
            mana: 3000,
            catalyst: 'architects_palette:sunstone',
            id: 'botania:mana_infusion/manasteel'
        },
        {
            input: '#forge:storage_blocks/froststeel',
            output: 'botania:manasteel_block',
            count: 1,
            mana: 27000,
            catalyst: 'architects_palette:sunstone',
            id: 'botania:mana_infusion/manasteel_block'
        },
        {
            input: 'resourcefulbees:mana_honeycomb',
            output: 'botania:manasteel_ingot',
            count: 1,
            mana: 2000,
            catalyst: 'architects_palette:sunstone'
        },
        {
            input: 'resourcefulbees:mana_honeycomb_block',
            output: 'botania:manasteel_block',
            count: 1,
            mana: 19000,
            catalyst: 'architects_palette:sunstone'
        },
        {
            input: 'betterendforge:silk_fiber',
            output: 'botania:mana_string',
            count: 6,
            mana: 5000,
            catalyst: 'architects_palette:sunstone',
            id: 'botania:mana_infusion/mana_string'
        },
        {
            input: '#forge:gems/aquamarine',
            output: 'astralsorcery:resonating_gem',
            count: 1,
            mana: 50000,
            catalyst: 'architects_palette:moonstone',
            id: 'astralsorcery:infuser/aquamarine'
        },
        {
            input: 'rftoolsbase:infused_diamond',
            output: 'botania:mana_diamond',
            count: 1,
            mana: 50000,
            catalyst: 'architects_palette:sunstone',
            id: 'botania:mana_infusion/mana_diamond'
        },
        {
            input: 'rftoolsbase:infused_enderpearl',
            output: 'botania:mana_pearl',
            count: 1,
            mana: 35000,
            catalyst: 'architects_palette:moonstone',
            id: 'botania:mana_infusion/mana_pearl'
        }
    ];

    recipes.forEach((recipe) => {
        let constructed_recipe = {
            type: 'botania:mana_infusion',
            input: Ingredient.of(recipe.input).toJson(),
            output: { item: recipe.output, count: recipe.count },
            mana: recipe.mana
        };
        if (recipe.catalyst) {
            constructed_recipe.catalyst = {
                type: 'block',
                block: recipe.catalyst
            };
        }
        const re = event.custom(constructed_recipe);
        if (recipe.id) {
            re.id(recipe.id);
        }
    });
});
