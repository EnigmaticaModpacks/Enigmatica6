onEvent('recipes', (event) => {
    const id_prefix = 'enigmatica:base/immersiveengineering/squeezer/';

    const recipes = [
        {
            inputs: [
                'simplefarming:cantaloupe_seeds',
                'simplefarming:cotton_seeds',
                'simplefarming:cucumber_seeds',
                'simplefarming:cumin_seeds',
                'simplefarming:eggplant_seeds',
                'simplefarming:ginger_seeds',
                'simplefarming:honeydew_seeds',
                'simplefarming:kenaf_seeds',
                'simplefarming:lettuce_seeds',
                'simplefarming:squash_seeds',
                'supplementaries:flax_seeds',
                'atum:flax_seeds',
                'undergarden:gloomgourd_seeds',
                'sushigocrafting:rice_seeds',
                'sushigocrafting:cucumber_seeds',
                'sushigocrafting:soy_seeds',
                'sushigocrafting:wasabi_seeds',
                'sushigocrafting:sesame_seeds',
                'environmental:cattail_seeds'
            ],
            value: 20
        },

        {
            inputs: [
                'simplefarming:broccoli_seeds',
                'simplefarming:onion_seeds',
                'simplefarming:pea_seeds',
                'simplefarming:soybean_seeds',
                'simplefarming:spinach_seeds',
                'simplefarming:zucchini_seeds',
                'betterendforge:glowing_pillar_seed',
                'betterendforge:lumecorn_seed',
                'betterendforge:lanceleaf_seed',
                'betterendforge:end_lotus_seed',
                'betterendforge:end_lily_seed',
                'betterendforge:blue_vine_seed',
                'betterendforge:amber_root_seed',
                'betterendforge:bulb_vine_seed',
                'betterendforge:blossom_berry_seed',
                'betterendforge:shadow_berry'
            ],
            value: 40
        },

        {
            inputs: [
                'simplefarming:carrot_seeds',
                'simplefarming:cassava_seeds',
                'simplefarming:pepper_seeds',
                'simplefarming:potato_seeds',
                'simplefarming:radish_seeds',
                'simplefarming:sweet_potato_seeds',
                'simplefarming:tomato_seeds',
                'simplefarming:turnip_seeds',
                'simplefarming:yam_seeds',
                'occultism:datura_seeds'
            ],
            value: 60
        },

        {
            inputs: [
                'simplefarming:barley_seeds',
                'simplefarming:corn_seeds',
                'simplefarming:oat_seeds',
                'simplefarming:peanut_seeds',
                'simplefarming:quinoa_seeds',
                'simplefarming:rice_seeds',
                'simplefarming:rye_seeds',
                'simplefarming:sorghum_seeds',
                'simplefarming:sunflower_seeds',
                'atum:emmer_seeds'
            ],
            value: 80
        },

        { inputs: ['simplefarming:grape_seeds'], value: 120 }
    ];

    recipes.forEach((input) => {
        input.inputs.forEach((seed) => {
            fallback_id(
                event.custom({
                    type: 'immersiveengineering:squeezer',
                    fluid: {
                        fluid: 'immersiveengineering:plantoil',
                        amount: input.value
                    },
                    input: {
                        item: seed
                    },
                    energy: 6400
                }),
                id_prefix
            );
        });
    });
});
