events.listen('recipes', (event) => {
    var data = {
        recipes: [
            {
                outputs: ['buildinggadgets:construction_block_dense'],
                input: 'buildinggadgets:construction_block_powder'
            },
            {
                outputs: [
                    Item.of('emendatusenigmatica:silicon_gem').chance(0.5),
                    Item.of('emendatusenigmatica:silicon_gem').chance(0.25)
                ],
                input: 'create:limesand'
            },
            {
            outputs: ['embellishcraft:rusty_wall_ladder'],
                input: 'embellishcraft:steel_wall_ladder'
            },
            {
                outputs: ['embellishcraft:rusty_rungs'],
                input: 'embellishcraft:steel_rungs'
            },
            {
                outputs: ['embellishcraft:rusty_suspended_stairs'],
                input: 'embellishcraft:steel_suspended_stairs'
            },
            {
                outputs: ['embellishcraft:rusty_door'],
                input: 'embellishcraft:steel_door'
            },
            {
                outputs: ['embellishcraft:sturdy_rusty_door'],
                input: 'embellishcraft:sturdy_steel_door'
            },
            {
                outputs: ['embellishcraft:warning_rusty_door'],
                input: 'embellishcraft:warning_steel_door'
            },
            {
                outputs: ['dustrial_decor:rusty_iron_nugget'],
                input: '#forge:nuggets/iron'
            },
            {
                outputs: ['dustrial_decor:rusty_iron_ingot'],
                input: '#forge:ingots/iron'
            },
            {
                outputs: ['dustrial_decor:rusty_iron_block'],
                input: '#forge:storage_blocks/iron'
            },
            {
                outputs: ['dustrial_decor:rusty_iron_door'],
                input: 'minecraft:iron_door'
            },
            {
                outputs: ['dustrial_decor:rusty_iron_trapdoor'],
                input: 'minecraft:iron_trapdoor'
            },
            {
                outputs: [
                    Item.of('minecraft:quartz', 2),
                    Item.of('minecraft:quartz').chance(0.25)
                ],
                input: 'byg:quartzite_sand'
            }
        ]
    };
    data.recipes.forEach((recipe) => {
        event.recipes.create.splashing(recipe.outputs, recipe.input);
    });
});
