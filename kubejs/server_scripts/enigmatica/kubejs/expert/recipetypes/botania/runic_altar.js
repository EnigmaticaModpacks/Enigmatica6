events.listen('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }

    const recipes = [
        {
            inputs: [
                '#forge:dusts/mana',
                '#forge:ingots/manasteel',
                '#forge:dusts/lapis',
                '#upgrade_aquatic:coralstone/infused',
                'minecraft:kelp',
                'aquaculture:diamond_hook'
            ],
            mana: 10400,
            output: 'botania:rune_water',
            count: 2,
            id: 'botania:runic_altar/water'
        },
        {
            inputs: [
                '#forge:dusts/mana',
                '#forge:ingots/manasteel',
                '#forge:dusts/sulfur',
                'quark:magma_bricks',
                'undergarden:ditchbulb',
                'buildersaddition:large_soul_candle'
            ],
            mana: 10400,
            output: 'botania:rune_fire',
            count: 2,
            id: 'botania:runic_altar/fire'
        },
        {
            inputs: [
                '#forge:dusts/mana',
                '#forge:ingots/manasteel',
                '#forge:dusts/apatite',
                'undergarden:tremblecrust',
                '#quark:runes',
                'aquaculture:worm'
            ],
            mana: 10400,
            output: 'botania:rune_earth',
            count: 2,
            id: 'botania:runic_altar/earth'
        },
        {
            inputs: [
                '#forge:dusts/mana',
                '#forge:ingots/manasteel',
                '#forge:dusts/fluorite',
                'betterendforge:silk_fiber',
                'quark:bottled_cloud',
                'alexsmobs:guster_eye'
            ],
            mana: 10400,
            output: 'botania:rune_air',
            count: 2,
            id: 'botania:runic_altar/air'
        }
    ];

    recipes.forEach((recipe) => {
        let ingredients = [];

        recipe.inputs.forEach((input) => {
            ingredients.push(Ingredient.of(input).toJson());
        });
        console.log(ingredients);

        const re = event.custom({
            type: 'botania:runic_altar',
            output: { item: recipe.output, count: recipe.count },
            mana: recipe.mana,
            ingredients: ingredients
        });
        if (recipe.id) {
            re.id(recipe.id);
        }
    });
});
