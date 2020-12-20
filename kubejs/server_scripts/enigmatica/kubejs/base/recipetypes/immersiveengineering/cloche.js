events.listen('recipes', (event) => {
    var data = {
        recipes: [
            {
                input: 'simplefarming:yam',
                results: [{ item: 'simplefarming:yam', count: 2 }],
                time: 800,
                soils: [{ item: 'minecraft:dirt' }],
                render: { type: 'crop', block: 'simplefarming:yam_crop' }
            },
            {
                input: 'simplefarming:ginger',
                results: [{ item: 'simplefarming:ginger', count: 2 }],
                time: 800,
                soils: [{ item: 'minecraft:dirt' }],
                render: { type: 'crop', block: 'simplefarming:ginger_crop' }
            },
            {
                input: 'simplefarming:onion',
                results: [{ item: 'simplefarming:onion', count: 2 }],
                time: 800,
                soils: [{ item: 'minecraft:dirt' }],
                render: { type: 'crop', block: 'simplefarming:onion_crop' }
            },
            {
                input: 'simplefarming:sweet_potato',
                results: [{ item: 'simplefarming:sweet_potato', count: 2 }],
                time: 800,
                soils: [{ item: 'minecraft:dirt' }],
                render: { type: 'crop', block: 'simplefarming:sweet_potato_crop' }
            },
            {
                input: 'simplefarming:radish',
                results: [{ item: 'simplefarming:radish', count: 2 }],
                time: 800,
                soils: [{ item: 'minecraft:dirt' }],
                render: { type: 'crop', block: 'simplefarming:radish_crop' }
            },
            {
                input: 'simplefarming:cassava',
                results: [{ item: 'simplefarming:cassava', count: 2 }],
                time: 800,
                soils: [{ item: 'minecraft:dirt' }],
                render: { type: 'crop', block: 'simplefarming:cassava_crop' }
            },
            {
                input: 'simplefarming:turnip',
                results: [{ item: 'simplefarming:turnip', count: 2 }],
                time: 800,
                soils: [{ item: 'minecraft:dirt' }],
                render: { type: 'crop', block: 'simplefarming:turnip_crop' }
            },
            {
                input: 'simplefarming:cumin_seeds',
                results: [{ item: 'simplefarming:cumin_seeds', count: 2 }],
                time: 640,
                soils: [{ item: 'minecraft:dirt' }],
                render: { type: 'crop', block: 'simplefarming:cumin' }
            },
            {
                input: 'simplefarming:quinoa_seeds',
                results: [{ item: 'simplefarming:quinoa_seeds', count: 2 }],
                time: 640,
                soils: [{ item: 'minecraft:dirt' }],
                render: { type: 'crop', block: 'simplefarming:quinoa' }
            },
            {
                input: 'simplefarming:peanut',
                results: [{ item: 'simplefarming:peanut', count: 2 }],
                time: 640,
                soils: [{ item: 'minecraft:dirt' }],
                render: { type: 'crop', block: 'simplefarming:peanut_crop' }
            },
            {
                input: 'simplefarming:rice_seeds',
                results: [{ item: 'simplefarming:rice', count: 2 }, { item: 'simplefarming:rice_seeds' }],
                time: 640,
                soils: [{ item: 'minecraft:dirt' }],
                render: { type: 'crop', block: 'simplefarming:rice_crop' }
            },
            {
                input: 'simplefarming:barley_seeds',
                results: [{ item: 'simplefarming:barley', count: 2 }, { item: 'simplefarming:barley_seeds' }],
                time: 640,
                soils: [{ item: 'minecraft:dirt' }],
                render: { type: 'crop', block: 'simplefarming:barley_crop' }
            },
            {
                input: 'simplefarming:oat_seeds',
                results: [{ item: 'simplefarming:oat', count: 2 }, { item: 'simplefarming:oat_seeds' }],
                time: 640,
                soils: [{ item: 'minecraft:dirt' }],
                render: { type: 'crop', block: 'simplefarming:oat_crop' }
            },
            {
                input: 'simplefarming:rye_seeds',
                results: [{ item: 'simplefarming:rye', count: 2 }, { item: 'simplefarming:rye_seeds' }],
                time: 640,
                soils: [{ item: 'minecraft:dirt' }],
                render: { type: 'crop', block: 'simplefarming:rye_crop' }
            },
            {
                input: 'simplefarming:sorghum_seeds',
                results: [{ item: 'simplefarming:sorghum', count: 2 }, { item: 'simplefarming:sorghum_seeds' }],
                time: 640,
                soils: [{ item: 'minecraft:dirt' }],
                render: { type: 'crop', block: 'simplefarming:sorghum_crop' }
            },
            {
                input: 'simplefarming:corn_seeds',
                results: [{ item: 'simplefarming:corn', count: 2 }, { item: 'simplefarming:corn_seeds' }],
                time: 800,
                soils: [{ item: 'minecraft:dirt' }],
                render: { type: 'crop', block: 'simplefarming:corn_crop' }
            },
            {
                input: 'simplefarming:tomato_seeds',
                results: [{ item: 'simplefarming:tomato', count: 2 }, { item: 'simplefarming:tomato_seeds' }],
                time: 560,
                soils: [{ item: 'minecraft:dirt' }],
                render: { type: 'crop', block: 'simplefarming:tomato_crop' }
            },
            {
                input: 'simplefarming:soybean_seeds',
                results: [{ item: 'simplefarming:soybean', count: 2 }, { item: 'simplefarming:soybean_seeds' }],
                time: 560,
                soils: [{ item: 'minecraft:dirt' }],
                render: { type: 'crop', block: 'simplefarming:soybean_crop' }
            },
            {
                input: 'simplefarming:pepper_seeds',
                results: [{ item: 'simplefarming:pepper', count: 2 }, { item: 'simplefarming:pepper_seeds' }],
                time: 560,
                soils: [{ item: 'minecraft:dirt' }],
                render: { type: 'crop', block: 'simplefarming:pepper_crop' }
            },
            {
                input: 'simplefarming:pepper_seeds',
                results: [{ item: 'simplefarming:habanero' }, { item: 'simplefarming:pepper_seeds' }],
                time: 1680,
                soils: [{ item: 'minecraft:netherrack' }],
                render: { type: 'crop', block: 'simplefarming:pepper_crop' }
            },
            {
                input: 'simplefarming:zucchini_seeds',
                results: [{ item: 'simplefarming:zucchini', count: 2 }, { item: 'simplefarming:zucchini_seeds' }],
                time: 560,
                soils: [{ item: 'minecraft:dirt' }],
                render: { type: 'crop', block: 'simplefarming:zucchini_crop' }
            },
            {
                input: 'simplefarming:cucumber_seeds',
                results: [{ item: 'simplefarming:cucumber', count: 2 }, { item: 'simplefarming:cucumber_seeds' }],
                time: 560,
                soils: [{ item: 'minecraft:dirt' }],
                render: { type: 'crop', block: 'simplefarming:cucumber_crop' }
            },
            {
                input: 'simplefarming:pea_seeds',
                results: [{ item: 'simplefarming:pea_pod', count: 2 }, { item: 'simplefarming:pea_seeds' }],
                time: 560,
                soils: [{ item: 'minecraft:dirt' }],
                render: { type: 'crop', block: 'simplefarming:pea_crop' }
            },
            {
                input: 'simplefarming:eggplant_seeds',
                results: [{ item: 'simplefarming:eggplant', count: 2 }, { item: 'simplefarming:eggplant_seeds' }],
                time: 560,
                soils: [{ item: 'minecraft:dirt' }],
                render: { type: 'crop', block: 'simplefarming:eggplant_crop' }
            },
            {
                input: 'simplefarming:spinach_seeds',
                results: [{ item: 'simplefarming:spinach', count: 2 }, { item: 'simplefarming:spinach_seeds' }],
                time: 480,
                soils: [{ item: 'minecraft:dirt' }],
                render: { type: 'crop', block: 'simplefarming:spinach_crop' }
            },
            {
                input: 'simplefarming:broccoli_seeds',
                results: [{ item: 'simplefarming:broccoli', count: 2 }, { item: 'simplefarming:broccoli_seeds' }],
                time: 480,
                soils: [{ item: 'minecraft:dirt' }],
                render: { type: 'crop', block: 'simplefarming:broccoli_crop' }
            },
            {
                input: 'simplefarming:lettuce_seeds',
                results: [{ item: 'simplefarming:lettuce', count: 2 }, { item: 'simplefarming:lettuce_seeds' }],
                time: 480,
                soils: [{ item: 'minecraft:dirt' }],
                render: { type: 'crop', block: 'simplefarming:lettuce_crop' }
            },
            {
                input: 'simplefarming:cantaloupe_seeds',
                results: [{ item: 'simplefarming:cantaloupe_block' }],
                time: 800,
                soils: [{ item: 'minecraft:dirt' }],
                render: { type: 'crop', block: 'simplefarming:cantaloupe_crop' }
            },
            {
                input: 'simplefarming:honeydew_seeds',
                results: [{ item: 'simplefarming:honeydew_block' }],
                time: 800,
                soils: [{ item: 'minecraft:dirt' }],
                render: { type: 'crop', block: 'simplefarming:honeydew_crop' }
            },
            {
                input: 'simplefarming:squash_seeds',
                results: [{ item: 'simplefarming:squash_block' }],
                time: 800,
                soils: [{ item: 'minecraft:dirt' }],
                render: { type: 'crop', block: 'simplefarming:squash_crop' }
            },
            {
                input: 'simplefarming:cotton_seeds',
                results: [{ item: 'simplefarming:cotton' }, { item: 'simplefarming:cotton_seeds', count: 2 }],
                time: 800,
                soils: [{ item: 'minecraft:dirt' }],
                render: { type: 'crop', block: 'simplefarming:cotton_crop' }
            },
            {
                input: 'simplefarming:kenaf_seeds',
                results: [{ item: 'simplefarming:kenaf_fiber' }, { item: 'simplefarming:kenaf_seeds', count: 2 }],
                time: 800,
                soils: [{ item: 'minecraft:dirt' }],
                render: { type: 'hemp', block: 'simplefarming:kenaf_crop' }
            },
            {
                input: 'quark:glowshroom',
                results: [{ item: 'quark:glowshroom' }],
                time: 480,
                soils: [{ item: 'minecraft:mycelium' }, { item: 'minecraft:podzol' }],
                render: { type: 'generic', block: 'quark:glowshroom' }
            },
            {
                input: 'byg:sythian_fungus',
                results: [{ item: 'byg:sythian_fungus' }],
                time: 480,
                soils: [{ item: 'minecraft:mycelium' }, { item: 'minecraft:podzol' }],
                render: { type: 'generic', block: 'byg:sythian_fungus' }
            },
            {
                input: 'byg:green_mushroom',
                results: [{ item: 'byg:green_mushroom' }],
                time: 480,
                soils: [{ item: 'minecraft:mycelium' }, { item: 'minecraft:podzol' }],
                render: { type: 'generic', block: 'minecraft:mycelium' }
            },
            {
                input: 'byg:weeping_milkcap',
                results: [{ item: 'byg:weeping_milkcap' }],
                time: 480,
                soils: [{ item: 'minecraft:mycelium' }, { item: 'minecraft:podzol' }],
                render: { type: 'generic', block: 'byg:weeping_milkcap' }
            },
            {
                input: 'byg:wood_blewit',
                results: [{ item: 'byg:wood_blewit' }],
                time: 480,
                soils: [{ item: 'minecraft:mycelium' }, { item: 'minecraft:podzol' }],
                render: { type: 'generic', block: 'byg:wood_blewit' }
            },
            {
                input: 'byg:black_puff',
                results: [{ item: 'byg:black_puff' }],
                time: 480,
                soils: [{ item: 'minecraft:mycelium' }, { item: 'minecraft:podzol' }],
                render: { type: 'generic', block: 'byg:black_puff' }
            },
            // No longer exists?
            // {
            //     input: 'byg:toadstool',
            // 	results: [{item: 'byg:toadstool'}],
            //     time: 480,
            //     soils: [{item: 'minecraft:mycelium'},{item: 'minecraft:podzol'}],
            // 	render: {type: 'generic', block: 'byg:toadstool'}
            // },
            {
                input: 'byg:death_cap',
                results: [{ item: 'byg:death_cap' }],
                time: 480,
                soils: [{ item: 'minecraft:mycelium' }, { item: 'minecraft:podzol' }],
                render: { type: 'generic', block: 'byg:death_cap' }
            },
            {
                input: 'byg:blue_glowshroom',
                results: [{ item: 'byg:blue_glowshroom' }],
                time: 480,
                soils: [{ item: 'minecraft:mycelium' }, { item: 'minecraft:podzol' }],
                render: { type: 'generic', block: 'byg:blue_glowshroom' }
            },
            {
                input: 'byg:purple_glowshroom',
                results: [{ item: 'byg:purple_glowshroom' }],
                time: 480,
                soils: [{ item: 'minecraft:mycelium' }, { item: 'minecraft:podzol' }],
                render: { type: 'generic', block: 'byg:purple_glowshroom' }
            },
            {
                input: 'minecraft:crimson_fungus',
                results: [{ item: 'minecraft:crimson_fungus' }],
                time: 480,
                soils: [{ item: 'minecraft:crimson_nylium' }, { item: 'minecraft:warped_nylium' }],
                render: { type: 'generic', block: 'minecraft:crimson_fungus' }
            },
            {
                input: 'minecraft:warped_fungus',
                results: [{ item: 'minecraft:warped_fungus' }],
                time: 480,
                soils: [{ item: 'minecraft:crimson_nylium' }, { item: 'minecraft:warped_nylium' }],
                render: { type: 'generic', block: 'minecraft:warped_fungus' }
            },
            {
                input: 'byg:shulkren_fungus',
                results: [{ item: 'byg:shulkren_fungus' }],
                time: 480,
                soils: [{ item: 'byg:shulkren_phylium' }],
                render: { type: 'generic', block: 'byg:shulkren_fungus' }
            },
            {
                input: 'byg:soul_shroom',
                results: [{ item: 'byg:soul_shroom' }],
                time: 480,
                soils: [{ item: 'byg:nylium_soul_sand' }],
                render: { type: 'generic', block: 'byg:soul_shroom' }
            }
        ]
    };
    data.recipes.forEach((recipe) => {
        event.recipes.immersiveengineering.cloche({
            type: 'immersiveengineering:cloche',
            results: recipe.results,
            input: { item: recipe.input },
            soil: recipe.soils,
            time: recipe.time,
            render: recipe.render
        });
    });
});
