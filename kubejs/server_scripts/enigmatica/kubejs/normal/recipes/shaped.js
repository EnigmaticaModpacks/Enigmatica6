events.listen('recipes', function (event) {
    if (global.packmode !== 'normal') {
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
        })
    ];
    recipes.forEach(function (recipe) {
        event.shaped(recipe.result, recipe.pattern, recipe.key);
    });
});
