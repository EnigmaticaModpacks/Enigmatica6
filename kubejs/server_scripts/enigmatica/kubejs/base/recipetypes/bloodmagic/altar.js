onEvent('recipes', (event) => {
    data = {
        recipes: [
            /*{
                input: 'input item here',
                output: 'output item here',
                syphon: 1000,                       //Recipe LP Cost
                altarLevel: 0,                      //Altar Level is zero idexed
                consumptionRate: 5,                 //How much LP is infused per operation
                drainRate: 5,                       //How much LP is lost per operation when the altar is empty
                id: 'input item here'
            }*/
            
            {
                input: Item.of('resourcefulbees:bee_jar', {Entity: "resourcefulbees:bronze_bee", BeeType: "bronze", Color: "#d38c53"}).weakNBT(),
                output: Item.of('resourcefulbees:bee_jar', {Entity: "resourcefulbees:bloody_bee", BeeType: "bloody", Color: "#80251f"}),
                syphon: 50000,
                altarLevel: 3,
                consumptionRate: 50,
                drainRate: 50
            }
            
        ]
    };

    data.recipes.forEach((recipe) => {
        const re = event.recipes.bloodmagic
            .altar(recipe.output, recipe.input)
            .upgradeLevel(recipe.altarLevel)
            .altarSyphon(recipe.syphon)
            .consumptionRate(recipe.consumptionRate)
            .drainRate(recipe.drainRate);
        if (recipe.id) {
            re.id(recipe.id);
        }
    });
});
