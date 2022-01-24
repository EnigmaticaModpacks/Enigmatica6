onEvent('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }

    const recipes = [
        ,
        {
            output: Item.of('bloodmagic:woodbrickpath', 4),
            inputs: [
                'eidolon:polished_planks',
                'eidolon:polished_planks',
                'eidolon:polished_planks',
                'eidolon:polished_planks',
                { type: 'bloodmagic:bloodorb', orb_tier: 2 }
            ],
            id: 'bloodmagic:path/path_wood'
        },
        {
            output: Item.of('bloodmagic:largebloodstonebrick', 4),
            inputs: [
                'naturesaura:infused_stone',
                'naturesaura:infused_stone',
                'naturesaura:infused_stone',
                'naturesaura:infused_stone',
                'bloodmagic:weakbloodshard'
            ],
            id: 'bloodmagic:largebloodstonebrick'
        }
    ];

    recipes.forEach((recipe) => {
        event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
    });
});
