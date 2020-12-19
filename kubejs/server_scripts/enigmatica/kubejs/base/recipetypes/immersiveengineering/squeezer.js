events.listen('recipes', (event) => {
    var data = {
        recipes: [
            { input: 'simplefarming:cumin_seeds', fluid: 'immersiveengineering:plantoil', amount: 20, energy: 6400 },
            {
                input: 'simplefarming:cantaloupe_seeds',
                fluid: 'immersiveengineering:plantoil',
                amount: 20,
                energy: 6400
            },
            { input: 'simplefarming:honeydew_seeds', fluid: 'immersiveengineering:plantoil', amount: 20, energy: 6400 },
            { input: 'simplefarming:eggplant_seeds', fluid: 'immersiveengineering:plantoil', amount: 20, energy: 6400 },
            { input: 'simplefarming:cucumber_seeds', fluid: 'immersiveengineering:plantoil', amount: 20, energy: 6400 },
            { input: 'simplefarming:ginger_seeds', fluid: 'immersiveengineering:plantoil', amount: 20, energy: 6400 },
            { input: 'simplefarming:kenaf_seeds', fluid: 'immersiveengineering:plantoil', amount: 20, energy: 6400 },
            { input: 'simplefarming:cotton_seeds', fluid: 'immersiveengineering:plantoil', amount: 20, energy: 6400 },
            { input: 'simplefarming:lettuce_seeds', fluid: 'immersiveengineering:plantoil', amount: 20, energy: 6400 },
            { input: 'simplefarming:squash_seeds', fluid: 'immersiveengineering:plantoil', amount: 20, energy: 6400 },
            { input: 'simplefarming:spinach_seeds', fluid: 'immersiveengineering:plantoil', amount: 40, energy: 6400 },
            { input: 'simplefarming:soybean_seeds', fluid: 'immersiveengineering:plantoil', amount: 40, energy: 6400 },
            { input: 'simplefarming:pea_seeds', fluid: 'immersiveengineering:plantoil', amount: 40, energy: 6400 },
            { input: 'simplefarming:onion_seeds', fluid: 'immersiveengineering:plantoil', amount: 40, energy: 6400 },
            { input: 'simplefarming:broccoli_seeds', fluid: 'immersiveengineering:plantoil', amount: 40, energy: 6400 },
            { input: 'simplefarming:zucchini_seeds', fluid: 'immersiveengineering:plantoil', amount: 40, energy: 6400 },
            { input: 'simplefarming:radish_seeds', fluid: 'immersiveengineering:plantoil', amount: 60, energy: 6400 },
            { input: 'simplefarming:potato_seeds', fluid: 'immersiveengineering:plantoil', amount: 60, energy: 6400 },
            { input: 'simplefarming:pepper_seeds', fluid: 'immersiveengineering:plantoil', amount: 60, energy: 6400 },
            { input: 'simplefarming:yam_seeds', fluid: 'immersiveengineering:plantoil', amount: 60, energy: 6400 },
            { input: 'simplefarming:turnip_seeds', fluid: 'immersiveengineering:plantoil', amount: 60, energy: 6400 },
            { input: 'simplefarming:tomato_seeds', fluid: 'immersiveengineering:plantoil', amount: 60, energy: 6400 },
            {
                input: 'simplefarming:sweet_potato_seeds',
                fluid: 'immersiveengineering:plantoil',
                amount: 60,
                energy: 6400
            },
            { input: 'simplefarming:carrot_seeds', fluid: 'immersiveengineering:plantoil', amount: 60, energy: 6400 },
            { input: 'simplefarming:cassava_seeds', fluid: 'immersiveengineering:plantoil', amount: 60, energy: 6400 },
            { input: 'simplefarming:sorghum_seeds', fluid: 'immersiveengineering:plantoil', amount: 80, energy: 6400 },
            { input: 'simplefarming:rye_seeds', fluid: 'immersiveengineering:plantoil', amount: 80, energy: 6400 },
            { input: 'simplefarming:rice_seeds', fluid: 'immersiveengineering:plantoil', amount: 80, energy: 6400 },
            { input: 'simplefarming:barley_seeds', fluid: 'immersiveengineering:plantoil', amount: 80, energy: 6400 },
            {
                input: 'simplefarming:sunflower_seeds',
                fluid: 'immersiveengineering:plantoil',
                amount: 80,
                energy: 6400
            },
            { input: 'simplefarming:corn_seeds', fluid: 'immersiveengineering:plantoil', amount: 80, energy: 6400 },
            { input: 'simplefarming:oat_seeds', fluid: 'immersiveengineering:plantoil', amount: 80, energy: 6400 },
            { input: 'simplefarming:peanut_seeds', fluid: 'immersiveengineering:plantoil', amount: 80, energy: 6400 },
            { input: 'simplefarming:quinoa_seeds', fluid: 'immersiveengineering:plantoil', amount: 80, energy: 6400 },
            { input: 'simplefarming:grape_seeds', fluid: 'immersiveengineering:plantoil', amount: 120, energy: 6400 }
        ]
    };
    data.recipes.forEach((recipe) => {
        event.recipes.immersiveengineering.squeezer({
            type: 'immersiveengineering:squeezer',
            fluid: {
                fluid: recipe.fluid,
                amount: recipe.amount
            },
            input: {
                item: recipe.input
            },
            energy: recipe.energy
        });
    });
});
