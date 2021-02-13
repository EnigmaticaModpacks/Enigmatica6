events.listen('recipes', (event) => {
    var data = {
        recipes: [
            {
                input1: '#forge:ingots/copper',
                input2: '#forge:ingots/zinc',
                output: Item.of('emendatusenigmatica:brass_ingot', 2)
            },
            {
                input1: '#forge:ingots/iron',
                input2: '#forge:ingots/lead',
                output: Item.of('eidolon:pewter_ingot', 2)
            },
            {
                input1: '#forge:ingots/iron',
                input2: '#forge:dusts/ender',
                output: Item.of('betterendforge:terminite_ingot')
            },
            {
                input1: '#forge:ingots/netherite',
                input2: 'betterendforge:terminite_ingot',
                output: Item.of('betterendforge:aeternium_ingot')
            }
        ]
    };
    event.remove({ id: 'immersiveengineering:alloysmelter/brass' });
    data.recipes.forEach((recipe) => {
        event.recipes.immersiveengineering.alloy(recipe.output, recipe.input1, recipe.input2);
    });
});
