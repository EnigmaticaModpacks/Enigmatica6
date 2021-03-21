events.listen('recipes', (event) => {
    if (!normalMode) {
        return;
    }

    var recipes = [
        shapedRecipe('torchmaster:megatorch', ['AAA', 'BCB', 'DCD'], {
            A: 'torchmaster:feral_flare_lantern',
            B: '#enigmatica:crafting_materials/diamond',
            C: '#minecraft:logs',
            D: '#forge:storage_blocks/gold'
        }),
        shapedRecipe('torchmaster:feral_flare_lantern', [' A ', 'BCB', ' A '], {
            A: '#forge:ingots/gold',
            B: '#forge:glass',
            C: '#forge:storage_blocks/glowstone'
        }),
        shapedRecipe(
            Item.of('compactmachines:tunnel', { definition: { id: 'compactmachines:item' } }),
            ['ABA', 'BCB', 'DBD'],
            {
                A: 'minecraft:hopper',
                B: '#forge:gems/dimensional',
                C: 'occultism:wormhole_frame',
                D: '#forge:chests'
            }
        ),
        shapedRecipe(
            Item.of('compactmachines:tunnel', { definition: { id: 'compactmachines:redstone_in' } }),
            ['ABA', 'BCB', 'DBD'],
            {
                A: 'glassential:glass_redstone',
                B: '#forge:gems/dimensional',
                C: 'occultism:wormhole_frame',
                D: 'minecraft:redstone_torch'
            }
        )
    ];
    recipes.forEach(function (recipe) {
        event.shaped(recipe.result, recipe.pattern, recipe.key);
    });
});
