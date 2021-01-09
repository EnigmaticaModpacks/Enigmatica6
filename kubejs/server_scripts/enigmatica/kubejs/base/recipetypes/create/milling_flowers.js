events.listen('recipes', (event) => {
    var data = {
        recipes: [
            { input: 'byg:yellow_tulip', color: 'yellow', multiplier: '2' },
            { input: 'byg:yellow_daffodil', color: 'yellow', multiplier: '2' },
            { input: 'byg:winter_scilla', color: 'light_blue', multiplier: '2' },
            { input: 'byg:winter_rose', color: 'white', multiplier: '2' },
            { input: 'byg:winter_cyclamen', color: 'cyan', multiplier: '2' },
            { input: 'byg:white_sage', color: 'white', multiplier: '2' },
            { input: 'byg:white_anemone', color: 'white', multiplier: '2' },
            { input: 'byg:violet_leather_flower', color: 'blue', multiplier: '2' },
            { input: 'byg:torch_ginger', color: 'red', multiplier: '2' },
            { input: 'byg:snowdrops', color: 'white', multiplier: '2' },
            { input: 'byg:silver_vase_flower', color: 'pink', multiplier: '2' },
            { input: 'byg:rose', color: 'red', multiplier: '2' },
            { input: 'byg:richea', color: 'light_gray', multiplier: '2' },
            { input: 'byg:red_orchid', color: 'red', multiplier: '2' },
            { input: 'byg:red_cornflower', color: 'red', multiplier: '2' },
            { input: 'byg:purple_tulip', color: 'purple', multiplier: '2' },
            { input: 'byg:purple_sage', color: 'purple', multiplier: '2' },
            { input: 'byg:purple_orchid', color: 'purple', multiplier: '2' },
            { input: 'byg:purple_amaranth', color: 'purple', multiplier: '2' },
            { input: 'byg:protea_flower', color: 'magenta', multiplier: '2' },
            { input: 'byg:pink_orchid', color: 'pink', multiplier: '2' },
            { input: 'byg:pink_daffodil', color: 'pink', multiplier: '2' },
            { input: 'byg:pink_anemone', color: 'pink', multiplier: '2' },
            { input: 'byg:pink_allium_flower_bush', color: 'pink', multiplier: '2' },
            { input: 'byg:pink_allium', color: 'pink', multiplier: '2' },
            { input: 'byg:peach_leather_flower', color: 'pink', multiplier: '2' },
            { input: 'byg:osiria_rose', color: 'pink', multiplier: '2' },
            { input: 'byg:orange_daisy', color: 'orange', multiplier: '2' },
            { input: 'byg:orange_amaranth', color: 'orange', multiplier: '2' },
            { input: 'byg:magenta_tulip', color: 'magenta', multiplier: '2' },
            { input: 'byg:magenta_amaranth', color: 'magenta', multiplier: '2' },
            { input: 'byg:lolipop_flower', color: 'yellow', multiplier: '2' },
            { input: 'byg:lazarus_bellflower', color: 'magenta', multiplier: '2' },
            { input: 'byg:kovan_flower', color: 'red', multiplier: '2' },
            { input: 'byg:iris', color: 'purple', multiplier: '2' },
            { input: 'byg:incan_lily', color: 'orange', multiplier: '2' },
            { input: 'byg:guzmania', color: 'orange', multiplier: '2' },
            { input: 'byg:green_tulip', color: 'lime', multiplier: '2' },
            { input: 'byg:firecracker_flower_bush', color: 'pink', multiplier: '2' },
            { input: 'byg:fairy_slipper', color: 'magenta', multiplier: '2' },
            { input: 'byg:daffodil', color: 'pink', multiplier: '2' },
            { input: 'byg:cyan_rose', color: 'cyan', multiplier: '2' },
            { input: 'byg:cyan_tulip', color: 'cyan', multiplier: '2' },
            { input: 'byg:cyan_amaranth', color: 'cyan', multiplier: '2' },
            { input: 'byg:crocus', color: 'purple', multiplier: '2' },
            { input: 'byg:california_poppy', color: 'orange', multiplier: '2' },
            { input: 'byg:blue_sage', color: 'blue', multiplier: '2' },
            { input: 'byg:black_rose', color: 'black', multiplier: '2' },
            { input: 'byg:bistort', color: 'pink', multiplier: '2' },
            { input: 'byg:begonia', color: 'red', multiplier: '2' },
            { input: 'byg:angelica', color: 'white', multiplier: '2' },
            { input: 'byg:amaranth', color: 'red', multiplier: '2' },
            { input: 'byg:alpine_bellflower', color: 'purple', multiplier: '2' },
            { input: 'byg:allium_flower_bush', color: 'purple', multiplier: '2' },
            { input: 'byg:reeds', color: 'brown', multiplier: '2' },
            { input: 'byg:prickly_pear_cactus', color: 'green', multiplier: '2' },
            { input: 'byg:mini_cactus', color: 'green', multiplier: '2' },
            { input: 'byg:horseweed', color: 'green', multiplier: '2' },
            { input: 'byg:golden_spined_cactus', color: 'green', multiplier: '2' },
            { input: 'byg:blueberries', color: 'blue', multiplier: '2' },
            { input: 'byg:thereal_bellflower', color: 'light_blue', multiplier: '2' },
            { input: 'byg:tall_pink_allium', color: 'pink', multiplier: '3' },
            { input: 'byg:japanese_orchid', color: 'pink', multiplier: '3' },
            { input: 'byg:foxglove', color: 'cyan', multiplier: '3' },
            { input: 'byg:delphinium', color: 'blue', multiplier: '3' },
            { input: 'byg:azalea', color: 'blue', multiplier: '3' },
            { input: 'byg:tall_allium', color: 'purple', multiplier: '3' }
        ]
    };
    data.recipes.forEach((recipe) => {
        event.recipes.create.milling(
            [
                Item.of('minecraft:' + recipe.color + '_dye').count(recipe.multiplier),
                Item.of('minecraft:' + recipe.color + '_dye')
                    .count(2)
                    .withChance(0.25)
            ],
            recipe.input
        );
    });
});
