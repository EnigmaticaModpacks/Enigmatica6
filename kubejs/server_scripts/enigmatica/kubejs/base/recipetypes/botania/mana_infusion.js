events.listen('recipes', (event) => {
    const recipes = [
        {
            input: {
                item: 'resourcefulbees:iron_bee_spawn_egg'
            },
            output: {
                item: 'resourcefulbees:mana_bee_spawn_egg'
            },
            mana: 99999
        },
        {
            input: {
                item: 'resourcefulbees:mana_honeycomb'
            },
            output: {
                item: 'botania:manasteel_ingot'
            },
            mana: 2000
        },
        {
            input: {
                item: 'resourcefulbees:mana_honeycomb_block'
            },
            output: {
                item: 'botania:manasteel_block'
            },
            mana: 19000
        }
     /* Leaving this as a full template - this has both multiple outputs & a catalyst requirement
        {
            input: {
                item: 'resourcefulbees:mana_honeycomb_block'
            },
            output: {
                item: 'resourcefulbees:mana_honeycomb_block',
                count: 2
            },
            mana: 2000, //Max Mana Cost for mana infusion seems to be 99999, for reference
            catalyst: {
                type: "block",
                block: "botania:manasteel_block"
              }
        }
    */
    ];

    recipes.forEach((recipe) => {
        const re = event.custom({
            type: 'botania:mana_infusion',
            input: recipe.input,
            output: recipe.output,
            catalyst:recipe.catalyst,
            mana: recipe.mana
        });
        if (recipe.id) {
            re.id(recipe.id);
        }
    });
});
