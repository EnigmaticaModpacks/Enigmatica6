events.listen('recipes', (event) => {
    var count = 2;
    var data = {
        recipes: [
            {
                input: 'byg:tall_allium',
                multiplier: 2,
                output: 'minecraft:purple_dye'
            },
            {
                input: 'byg:azalea',
                multiplier: 2,
                output: 'minecraft:blue_dye'
            },
            {
                input: 'byg:delphinium',
                multiplier: 2,
                output: 'minecraft:blue_dye'
            },
            {
                input: 'byg:foxglove',
                multiplier: 2,
                output: 'minecraft:cyan_dye'
            },
            {
                input: 'byg:japanese_orchid',
                multiplier: 2,
                output: 'minecraft:pink_dye'
            },
            {
                input: 'byg:tall_pink_allium',
                multiplier: 2,
                output: 'minecraft:pink_dye'
            },
            {
                input: 'byg:thereal_bellflower',
                multiplier: 1,
                output: 'minecraft:light_blue_dye'
            },
            {
                input: 'byg:golden_spined_cactus',
                multiplier: 1,
                output: 'minecraft:green_dye'
            },
            {
                input: 'byg:allium_flower_bush',
                multiplier: 1,
                output: 'minecraft:purple_dye'
            },
            {
                input: 'byg:alpine_bellflower',
                multiplier: 1,
                output: 'minecraft:purple_dye'
            },
            {
                input: 'byg:amaranth',
                multiplier: 1,
                output: 'minecraft:red_dye'
            },
            {
                input: 'byg:angelica',
                multiplier: 1,
                output: 'minecraft:white_dye'
            },
            {
                input: 'byg:begonia',
                multiplier: 1,
                output: 'minecraft:red_dye'
            },
            {
                input: 'byg:bistort',
                multiplier: 1,
                output: 'minecraft:pink_dye'
            },
            {
                input: 'byg:black_rose',
                multiplier: 1,
                output: 'minecraft:black_dye'
            },
            {
                input: 'byg:blue_sage',
                multiplier: 1,
                output: 'minecraft:blue_dye'
            },
            {
                input: 'byg:california_poppy',
                multiplier: 1,
                output: 'minecraft:orange_dye'
            },
            {
                input: 'byg:crocus',
                multiplier: 1,
                output: 'minecraft:purple_dye'
            },
            {
                input: 'byg:cyan_amaranth',
                multiplier: 1,
                output: 'minecraft:cyan_dye'
            },
            {
                input: 'byg:cyan_rose',
                multiplier: 1,
                output: 'minecraft:cyan_dye'
            },
            {
                input: 'byg:cyan_tulip',
                multiplier: 1,
                output: 'minecraft:cyan_dye'
            },
            {
                input: 'byg:daffodil',
                multiplier: 1,
                output: 'minecraft:pink_dye'
            },
            {
                input: 'byg:fairy_slipper',
                multiplier: 1,
                output: 'minecraft:magenta_dye'
            },
            {
                input: 'byg:firecracker_flower_bush',
                multiplier: 1,
                output: 'minecraft:pink_dye'
            },
            {
                input: 'byg:green_tulip',
                multiplier: 1,
                output: 'minecraft:lime_dye'
            },
            {
                input: 'byg:guzmania',
                multiplier: 1,
                output: 'minecraft:orange_dye'
            },
            {
                input: 'byg:incan_lily',
                multiplier: 1,
                output: 'minecraft:orange_dye'
            },
            {
                input: 'byg:iris',
                multiplier: 1,
                output: 'minecraft:purple_dye'
            },
            {
                input: 'byg:kovan_flower',
                multiplier: 1,
                output: 'minecraft:red_dye'
            },
            {
                input: 'byg:lazarus_bellflower',
                multiplier: 1,
                output: 'minecraft:magenta_dye'
            },
            {
                input: 'byg:lolipop_flower',
                multiplier: 1,
                output: 'minecraft:yellow_dye'
            },
            {
                input: 'byg:magenta_amaranth',
                multiplier: 1,
                output: 'minecraft:magenta_dye'
            },
            {
                input: 'byg:magenta_tulip',
                multiplier: 1,
                output: 'minecraft:magenta_dye'
            },
            {
                input: 'byg:orange_amaranth',
                multiplier: 1,
                output: 'minecraft:orange_dye'
            },
            {
                input: 'byg:orange_daisy',
                multiplier: 1,
                output: 'minecraft:orange_dye'
            },
            {
                input: 'byg:osiria_rose',
                multiplier: 1,
                output: 'minecraft:pink_dye'
            },
            {
                input: 'byg:peach_leather_flower',
                multiplier: 1,
                output: 'minecraft:pink_dye'
            },
            {
                input: 'byg:pink_allium',
                multiplier: 1,
                output: 'minecraft:pink_dye'
            },
            {
                input: 'byg:pink_allium_flower_bush',
                multiplier: 1,
                output: 'minecraft:pink_dye'
            },
            {
                input: 'byg:pink_anemone',
                multiplier: 1,
                output: 'minecraft:pink_dye'
            },
            {
                input: 'byg:pink_daffodil',
                multiplier: 1,
                output: 'minecraft:pink_dye'
            },
            {
                input: 'byg:pink_orchid',
                multiplier: 1,
                output: 'minecraft:pink_dye'
            },
            {
                input: 'byg:protea_flower',
                multiplier: 1,
                output: 'minecraft:magenta_dye'
            },
            {
                input: 'byg:purple_amaranth',
                multiplier: 1,
                output: 'minecraft:purple_dye'
            },
            {
                input: 'byg:purple_orchid',
                multiplier: 1,
                output: 'minecraft:purple_dye'
            },
            {
                input: 'byg:purple_sage',
                multiplier: 1,
                output: 'minecraft:purple_dye'
            },
            {
                input: 'byg:purple_tulip',
                multiplier: 1,
                output: 'minecraft:purple_dye'
            },
            {
                input: 'byg:red_cornflower',
                multiplier: 1,
                output: 'minecraft:red_dye'
            },
            {
                input: 'byg:red_orchid',
                multiplier: 1,
                output: 'minecraft:red_dye'
            },
            {
                input: 'byg:richea',
                multiplier: 1,
                output: 'minecraft:light_gray_dye'
            },
            {
                input: 'byg:rose',
                multiplier: 1,
                output: 'minecraft:red_dye'
            },
            {
                input: 'byg:silver_vase_flower',
                multiplier: 1,
                output: 'minecraft:pink_dye'
            },
            {
                input: 'byg:snowdrops',
                multiplier: 1,
                output: 'minecraft:white_dye'
            },
            {
                input: 'byg:torch_ginger',
                multiplier: 1,
                output: 'minecraft:red_dye'
            },
            {
                input: 'byg:violet_leather_flower',
                multiplier: 1,
                output: 'minecraft:blue_dye'
            },
            {
                input: 'byg:white_anemone',
                multiplier: 1,
                output: 'minecraft:white_dye'
            },
            {
                input: 'byg:white_sage',
                multiplier: 1,
                output: 'minecraft:white_dye'
            },
            {
                input: 'byg:winter_cyclamen',
                multiplier: 1,
                output: 'minecraft:cyan_dye'
            },
            {
                input: 'byg:winter_rose',
                multiplier: 1,
                output: 'minecraft:white_dye'
            },
            {
                input: 'byg:winter_scilla',
                multiplier: 1,
                output: 'minecraft:light_blue_dye'
            },
            {
                input: 'byg:yellow_daffodil',
                multiplier: 1,
                output: 'minecraft:yellow_dye'
            },
            {
                input: 'byg:yellow_tulip',
                multiplier: 1,
                output: 'minecraft:yellow_dye'
            }
        ]
    };
    data.recipes.forEach((recipe) => {
        event.recipes.mekanism.enriching({
            input: {
	            ingredient: {
	                item: recipe.input
	            }
        	},
        	output: {
	            item: recipe.output,
	            count: count * recipe.multiplier
	        }
	    });
	});
});