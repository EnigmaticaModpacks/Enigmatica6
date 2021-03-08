events.listen('recipes', (event) => {
    var data = {
        recipes: [
            {
                ingredient: Ingredient.of('aquaculture:frog'),
                tool: Ingredient.of('#forge:tools/knives'),
                result: [Item.of('aquaculture:frog_legs_raw', 1)]
            },
            {
                ingredient: Ingredient.of('aquaculture:goldfish'),
                tool: Ingredient.of('#forge:tools/pickaxes'),
                result: [Item.of('emendatusenigmatica:gold_chunk', 1)]
            },
            {
                ingredient: Ingredient.of('aquaculture:atlantic_cod'),
                tool: Ingredient.of('#forge:tools/knives'),
                result: [Item.of('farmersdelight:cod_slice', 6), Item.of('minecraft:bone_meal', 3)]
            },
            {
                ingredient: Ingredient.of('aquaculture:pink_salmon'),
                tool: Ingredient.of('#forge:tools/knives'),
                result: [Item.of('farmersdelight:salmon_slice', 2), Item.of('minecraft:bone_meal', 1)]
            },
            {
                ingredient: Ingredient.of('minecraft:pufferfish'),
                tool: Ingredient.of('#forge:tools/knives'),
                result: [Item.of('aquaculture:fish_fillet_raw', 1), Item.of('minecraft:bone_meal', 3)]
            },
            {
                ingredient: Ingredient.of('aquaculture:boulti'),
                tool: Ingredient.of('#forge:tools/knives'),
                result: [Item.of('aquaculture:fish_fillet_raw', 1), Item.of('minecraft:bone_meal', 1)]
            },
            {
                ingredient: Ingredient.of('aquaculture:smallmouth_bass'),
                tool: Ingredient.of('#forge:tools/knives'),
                result: [Item.of('aquaculture:fish_fillet_raw', 2), Item.of('minecraft:bone_meal', 1)]
            },
            {
                ingredient: Ingredient.of('aquaculture:atlantic_halibut'),
                tool: Ingredient.of('#forge:tools/knives'),
                result: [Item.of('aquaculture:fish_fillet_raw', 14), Item.of('minecraft:bone_meal', 5)]
            },
            {
                ingredient: Ingredient.of('aquaculture:pollock'),
                tool: Ingredient.of('#forge:tools/knives'),
                result: [Item.of('aquaculture:fish_fillet_raw', 2), Item.of('minecraft:bone_meal', 1)]
            },
            {
                ingredient: Ingredient.of('aquaculture:bayad'),
                tool: Ingredient.of('#forge:tools/knives'),
                result: [Item.of('aquaculture:fish_fillet_raw', 4), Item.of('minecraft:bone_meal', 2)]
            },
            {
                ingredient: Ingredient.of('aquaculture:atlantic_herring'),
                tool: Ingredient.of('#forge:tools/knives'),
                result: [Item.of('aquaculture:fish_fillet_raw', 1), Item.of('minecraft:bone_meal', 1)]
            },
            {
                ingredient: Ingredient.of('aquaculture:synodontis'),
                tool: Ingredient.of('#forge:tools/knives'),
                result: [Item.of('aquaculture:fish_fillet_raw', 1), Item.of('minecraft:bone_meal', 1)]
            },
            {
                ingredient: Ingredient.of('aquaculture:piranha'),
                tool: Ingredient.of('#forge:tools/knives'),
                result: [Item.of('aquaculture:fish_fillet_raw', 1), Item.of('minecraft:bone_meal', 1)]
            },
            {
                ingredient: Ingredient.of('aquaculture:red_grouper'),
                tool: Ingredient.of('#forge:tools/knives'),
                result: [Item.of('aquaculture:fish_fillet_raw', 3), Item.of('minecraft:bone_meal', 1)]
            },
            {
                ingredient: Ingredient.of('aquaculture:pacific_halibut'),
                tool: Ingredient.of('#forge:tools/knives'),
                result: [Item.of('aquaculture:fish_fillet_raw', 12), Item.of('minecraft:bone_meal', 4)]
            },
            {
                ingredient: Ingredient.of('aquaculture:perch'),
                tool: Ingredient.of('#forge:tools/knives'),
                result: [Item.of('aquaculture:fish_fillet_raw', 1), Item.of('minecraft:bone_meal', 1)]
            },
            {
                ingredient: Ingredient.of('aquaculture:rainbow_trout'),
                tool: Ingredient.of('#forge:tools/knives'),
                result: [Item.of('aquaculture:fish_fillet_raw', 2), Item.of('minecraft:bone_meal', 1)]
            },
            {
                ingredient: Ingredient.of('aquaculture:catfish'),
                tool: Ingredient.of('#forge:tools/knives'),
                result: [Item.of('aquaculture:fish_fillet_raw', 6), Item.of('minecraft:bone_meal', 2)]
            },
            {
                ingredient: Ingredient.of('aquaculture:muskellunge'),
                tool: Ingredient.of('#forge:tools/knives'),
                result: [Item.of('aquaculture:fish_fillet_raw', 3), Item.of('minecraft:bone_meal', 1)]
            },
            {
                ingredient: Ingredient.of('aquaculture:tambaqui'),
                tool: Ingredient.of('#forge:tools/knives'),
                result: [Item.of('aquaculture:fish_fillet_raw', 3), Item.of('minecraft:bone_meal', 1)]
            },
            {
                ingredient: Ingredient.of('aquaculture:carp'),
                tool: Ingredient.of('#forge:tools/knives'),
                result: [Item.of('aquaculture:fish_fillet_raw', 2), Item.of('minecraft:bone_meal', 1)]
            },
            {
                ingredient: Ingredient.of('aquaculture:blackfish'),
                tool: Ingredient.of('#forge:tools/knives'),
                result: [Item.of('aquaculture:fish_fillet_raw', 2), Item.of('minecraft:bone_meal', 1)]
            },
            {
                ingredient: Ingredient.of('aquaculture:capitaine'),
                tool: Ingredient.of('#forge:tools/knives'),
                result: [Item.of('aquaculture:fish_fillet_raw', 10), Item.of('minecraft:bone_meal', 4)]
            },
            {
                ingredient: Ingredient.of('aquaculture:brown_trout'),
                tool: Ingredient.of('#forge:tools/knives'),
                result: [Item.of('aquaculture:fish_fillet_raw', 2), Item.of('minecraft:bone_meal', 1)]
            },
            {
                ingredient: Ingredient.of('aquaculture:arapaima'),
                tool: Ingredient.of('#forge:tools/knives'),
                result: [Item.of('aquaculture:fish_fillet_raw', 10), Item.of('minecraft:bone_meal', 4)]
            },
            {
                ingredient: Ingredient.of('aquaculture:tuna'),
                tool: Ingredient.of('#forge:tools/knives'),
                result: [Item.of('aquaculture:fish_fillet_raw', 10), Item.of('minecraft:bone_meal', 4)]
            },
            {
                ingredient: Ingredient.of('aquaculture:bluegill'),
                tool: Ingredient.of('#forge:tools/knives'),
                result: [Item.of('aquaculture:fish_fillet_raw', 1), Item.of('minecraft:bone_meal', 1)]
            },
            {
                ingredient: Ingredient.of('aquaculture:gar'),
                tool: Ingredient.of('#forge:tools/knives'),
                result: [Item.of('aquaculture:fish_fillet_raw', 4), Item.of('minecraft:bone_meal', 2)]
            }
        ]
    };

    data.recipes.forEach((recipe) => {
        event.custom({
            type: 'farmersdelight:cutting',
            ingredients: [recipe.ingredient],
            tool: recipe.tool,
            result: recipe.result
        });
    });
});
