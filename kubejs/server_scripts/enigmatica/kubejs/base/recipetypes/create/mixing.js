events.listen('recipes', (event) => {
    var data = {
        recipes_heated: [
            {
                inputs: ['#forge:ingots/copper', '#forge:ingots/copper', '#forge:ingots/copper', '#forge:ingots/tin'],
                output: Item.of('emendatusenigmatica:bronze_ingot', 4)
            },
            {
                inputs: ['#forge:ingots/copper', '#forge:ingots/nickel'],
                output: Item.of('emendatusenigmatica:constantan_ingot', 2)
            },
            {
                inputs: ['#forge:ingots/gold', '#forge:ingots/silver'],
                output: Item.of('emendatusenigmatica:electrum_ingot', 2)
            },
            {
                inputs: ['#forge:ingots/iron', '#forge:ingots/iron', '#forge:ingots/nickel'],
                output: Item.of('emendatusenigmatica:invar_ingot', 3)
            },
            {
                inputs: ['#forge:storage_blocks/coal'],
                output: Item.of('emendatusenigmatica:coke_gem', 9)
            },
            {
                inputs: ['#forge:ingots/iron', '#forge:ingots/lead'],
                output: Item.of('eidolon:pewter_ingot', 2)
            }
        ],
        recipes_superheated: [
            {
                inputs: [
                    '#forge:dusts/coal_coke',
                    '#forge:ingots/iron',
                    '#forge:ingots/iron',
                    '#forge:ingots/iron',
                    '#forge:ingots/iron'
                ],
                output: Item.of('emendatusenigmatica:steel_ingot', 4)
            },
            {
                inputs: [
                    '#forge:ingots/copper',
                    '#forge:ingots/copper',
                    '#forge:ingots/copper',
                    '#forge:ingots/silver',
                    '#forge:dusts/redstone',
                    '#forge:dusts/redstone',
                    '#forge:dusts/redstone',
                    '#forge:dusts/redstone'
                ],
                output: Item.of('emendatusenigmatica:signalum_ingot', 4)
            },
            {
                inputs: [
                    '#forge:ingots/tin',
                    '#forge:ingots/tin',
                    '#forge:ingots/tin',
                    '#forge:ingots/silver',
                    '#forge:dusts/glowstone',
                    '#forge:dusts/glowstone'
                ],
                output: Item.of('emendatusenigmatica:lumium_ingot', 4)
            },
            {
                inputs: [
                    '#forge:ingots/lead',
                    '#forge:ingots/lead',
                    '#forge:ingots/lead',
                    '#forge:dusts/diamond',
                    '#forge:ender_pearls',
                    '#forge:ender_pearls'
                ],
                output: Item.of('emendatusenigmatica:enderium_ingot', 2)
            }
        ]
    };
    data.recipes_heated.forEach((recipe) => {
        event.recipes.create.mixing(recipe.output, recipe.inputs).heated();
    });
    data.recipes_superheated.forEach((recipe) => {
        event.recipes.create.mixing(recipe.output, recipe.inputs).superheated();
    });
});
