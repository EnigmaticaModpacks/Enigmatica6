onEvent('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/betterendforge/infusion/';
    var data = {
        recipes: [
            /*{
                input: 'betterendforge:eternal_crystal',
                output: 'botania:mana_pylon',
                catalysts: [
                    { index: 0, tag: 'forge:gems/mana_diamond' },
                    { index: 1, tag: 'forge:plates/electrum' },
                    { index: 2, tag: 'forge:ingots/manasteel' },
                    { index: 3, tag: 'forge:plates/electrum' },
                    { index: 4, tag: 'forge:gems/mana_diamond' },
                    { index: 5, tag: 'forge:plates/electrum' },
                    { index: 6, tag: 'forge:ingots/manasteel' },
                    { index: 7, tag: 'forge:plates/electrum' }
                ],
                time: 250,
                id: `${id_prefix}mana_pylon`
            }*/
        ]
    };
    data.recipes.forEach((recipe) => {
        event
            .custom({
                type: 'betterendforge:infusion',
                input: Ingredient.of(recipe.input).toJson(),
                output: recipe.output,
                time: recipe.time,
                catalysts: recipe.catalysts
            })
            .id(recipe.id);
    });
});
