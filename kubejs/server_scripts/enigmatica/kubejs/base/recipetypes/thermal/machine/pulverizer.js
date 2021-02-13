events.listen('recipes', (event) => {
    var data = {
        recipes: [
            {
                input: '#forge:ores/netherite',
                experience: 0.2,
                outputs: [Item.of('minecraft:netherite_scrap', 2)]
            },
            {
                input: '#forge:ores/nickel',
                experience: 0.2,
                outputs: [
                    Item.of('emendatusenigmatica:nickel_dust', 2),
                    Item.of('emendatusenigmatica:iron_dust').chance(0.1),
                    Item.of('minecraft:gravel').chance(0.2)
                ]
            },
            {
                input: '#forge:ores/aluminum',
                experience: 0.2,
                outputs: [
                    Item.of('emendatusenigmatica:aluminum_dust', 2),
                    Item.of('emendatusenigmatica:iron_dust').chance(0.1),
                    Item.of('minecraft:gravel').chance(0.2)
                ]
            },
            {
                input: '#forge:ores/uranium',
                experience: 0.2,
                outputs: [
                    Item.of('emendatusenigmatica:uranium_dust', 2),
                    Item.of('emendatusenigmatica:lead_dust').chance(0.1),
                    Item.of('minecraft:gravel').chance(0.2)
                ]
            },
            {
                input: '#forge:ores/osmium',
                experience: 0.2,
                outputs: [
                    Item.of('emendatusenigmatica:osmium_dust', 2),
                    Item.of('emendatusenigmatica:tin_dust').chance(0.1),
                    Item.of('minecraft:gravel').chance(0.2)
                ]
            },
            {
                input: '#forge:ores/zinc',
                experience: 0.2,
                outputs: [
                    Item.of('emendatusenigmatica:zinc_dust', 2),
                    Item.of('emendatusenigmatica:gold_dust').chance(0.1),
                    Item.of('minecraft:gravel').chance(0.2)
                ]
            },
            {
                input: '#forge:ores/bitumen',
                experience: 0.2,
                outputs: [Item.of('emendatusenigmatica:bitumen_gem', 2), Item.of('minecraft:gravel').chance(0.2)]
            },
            {
                input: '#forge:ores/dimensional',
                experience: 0.2,
                outputs: [Item.of('emendatusenigmatica:dimensional_gem', 8)]
            },
            {
                input: '#forge:ores/mana',
                experience: 0.2,
                outputs: [Item.of('emendatusenigmatica:arcane_gem', 2)]
            },
            {
                input: 'byg:pink_sandstone',
                outputs: [
                    Item.of('byg:pink_sand', 2),
                    Item.of('emendatusenigmatica:potassium_nitrate_dust').chance(0.3)
                ],
                experience: 0.2
            },
            {
                input: 'byg:purple_sandstone',
                outputs: [
                    Item.of('byg:purple_sand', 2),
                    Item.of('emendatusenigmatica:potassium_nitrate_dust').chance(0.3)
                ],
                experience: 0.2
            },
            {
                input: 'byg:blue_sandstone',
                outputs: [
                    Item.of('byg:blue_sand', 2),
                    Item.of('emendatusenigmatica:potassium_nitrate_dust').chance(0.3)
                ],
                experience: 0.2
            },
            {
                input: 'byg:white_sandstone',
                outputs: [
                    Item.of('byg:white_sand', 2),
                    Item.of('emendatusenigmatica:potassium_nitrate_dust').chance(0.3)
                ],
                experience: 0.2
            },
            {
                input: 'byg:black_sandstone',
                outputs: [
                    Item.of('byg:black_sand', 2),
                    Item.of('emendatusenigmatica:potassium_nitrate_dust').chance(0.3)
                ],
                experience: 0.2
            },
            {
                input: 'atmospheric:arid_sandstone',
                outputs: [
                    Item.of('atmospheric:arid_sand', 2),
                    Item.of('emendatusenigmatica:potassium_nitrate_dust').chance(0.3)
                ],
                experience: 0.2
            },
            {
                input: 'atmospheric:red_arid_sandstone',
                outputs: [
                    Item.of('atmospheric:red_arid_sand', 2),
                    Item.of('emendatusenigmatica:potassium_nitrate_dust').chance(0.3)
                ],
                experience: 0.2
            },
            {
                input: 'buildinggadgets:construction_block_dense',
                outputs: [
                    Item.of('buildinggadgets:construction_paste', 3),
                    Item.of('buildinggadgets:construction_paste', 2).chance(0.5)
                ],
                experience: 0.2
            },
            {
                input: 'create:limesand',
                outputs: [
                    Item.of('emendatusenigmatica:silicon_gem').chance(0.5),
                    Item.of('emendatusenigmatica:silicon_gem').chance(0.25)
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
