events.listen('recipes', function (event) {
    var data = {
        recipes: [
            {
                input: '#forge:ores/netherite',
                experience: 0.2,
                outputs: [item.of('minecraft:netherite_scrap', 2)]
            },
            {
                input: '#forge:ores/nickel',
                experience: 0.2,
                outputs: [
                    item.of('emendatusenigmatica:nickel_dust', 2),
                    item.of('emendatusenigmatica:iron_dust').chance(0.1),
                    item.of('minecraft:gravel').chance(0.2)
                ]
            },
            {
                input: '#forge:ores/aluminum',
                experience: 0.2,
                outputs: [
                    item.of('emendatusenigmatica:aluminum_dust', 2),
                    item.of('emendatusenigmatica:iron_dust').chance(0.1),
                    item.of('minecraft:gravel').chance(0.2)
                ]
            },
            {
                input: '#forge:ores/uranium',
                experience: 0.2,
                outputs: [
                    item.of('emendatusenigmatica:uranium_dust', 2),
                    item.of('emendatusenigmatica:lead_dust').chance(0.1),
                    item.of('minecraft:gravel').chance(0.2)
                ]
            },
            {
                input: '#forge:ores/osmium',
                experience: 0.2,
                outputs: [
                    item.of('emendatusenigmatica:osmium_dust', 2),
                    item.of('emendatusenigmatica:tin_dust').chance(0.1),
                    item.of('minecraft:gravel').chance(0.2)
                ]
            },
            {
                input: '#forge:ores/zinc',
                experience: 0.2,
                outputs: [
                    item.of('emendatusenigmatica:zinc_dust', 2),
                    item.of('emendatusenigmatica:gold_dust').chance(0.1),
                    item.of('minecraft:gravel').chance(0.2)
                ]
            },
            {
                input: '#forge:ores/bitumen',
                experience: 0.2,
                outputs: [item.of('emendatusenigmatica:bitumen_gem', 2), item.of('minecraft:gravel').chance(0.2)]
            },
            {
                input: '#forge:ores/dimensional',
                experience: 0.2,
                outputs: [item.of('emendatusenigmatica:dimensional_gem', 8)]
            },
            {
                input: '#forge:ores/mana',
                experience: 0.2,
                outputs: [item.of('emendatusenigmatica:arcane_gem', 2)]
            },
            {
                input: 'byg:pink_sandstone',
                outputs: [
                    item.of('byg:pink_sand', 2),
                    item.of('emendatusenigmatica:potassium_nitrate_gem').chance(0.3)
                ],
                experience: 0.2
            },
            {
                input: 'byg:purple_sandstone',
                outputs: [
                    item.of('byg:purple_sand', 2),
                    item.of('emendatusenigmatica:potassium_nitrate_gem').chance(0.3)
                ],
                experience: 0.2
            },
            {
                input: 'byg:blue_sandstone',
                outputs: [
                    item.of('byg:blue_sand', 2),
                    item.of('emendatusenigmatica:potassium_nitrate_gem').chance(0.3)
                ],
                experience: 0.2
            },
            {
                input: 'byg:white_sandstone',
                outputs: [
                    item.of('byg:white_sand', 2),
                    item.of('emendatusenigmatica:potassium_nitrate_gem').chance(0.3)
                ],
                experience: 0.2
            },
            {
                input: 'byg:black_sandstone',
                outputs: [
                    item.of('byg:black_sand', 2),
                    item.of('emendatusenigmatica:potassium_nitrate_gem').chance(0.3)
                ],
                experience: 0.2
            },
            {
                input: 'biomesoplenty:black_sandstone',
                outputs: [
                    item.of('biomesoplenty:black_sand', 2),
                    item.of('emendatusenigmatica:potassium_nitrate_gem').chance(0.3)
                ],
                experience: 0.2
            },
            {
                input: 'biomesoplenty:orange_sandstone',
                outputs: [
                    item.of('biomesoplenty:orange_sand', 2),
                    item.of('emendatusenigmatica:potassium_nitrate_gem').chance(0.3)
                ],
                experience: 0.2
            },
            {
                input: 'biomesoplenty:white_sandstone',
                outputs: [
                    item.of('biomesoplenty:white_sand', 2),
                    item.of('emendatusenigmatica:potassium_nitrate_gem').chance(0.3)
                ],
                experience: 0.2
            },
            {
                input: 'buildinggadgets:construction_block_dense',
                outputs: [
                    item.of('buildinggadgets:construction_paste', 3),
                    item.of('buildinggadgets:construction_paste', 2).chance(0.5)
                ],
                experience: 0.2
            }
        ]
    };

    data.recipes.forEach((recipe) => {
        event.remove({
            input: recipe.input,
            mod: 'thermal',
            type: 'thermal:pulverizer'
        });
        event.recipes.thermal.pulverizer(recipe.outputs, recipe.input).experience(recipe.experience);
    });
});
