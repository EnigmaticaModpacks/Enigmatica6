onEvent('recipes', (event) => {
    const data = {
        recipes: [
            /*{
                input: {
                    item: 'resourcefulbees:infused_honeycomb',
                },
                start_item: {
                    item: 'naturesaura:calling_spirit',
                },
                output: {
                    item: 'naturesaura:infused_iron',
                    count: 3,
                },
                id: ''
            }*/
            {
                input: {
                    item: 'resourcefulbees:sky_honeycomb'
                },
                start_item: {
                    item: 'naturesaura:calling_spirit'
                },
                output: {
                    item: 'naturesaura:sky_ingot',
                    count: 3
                }
            }
        ]
    };

    data.recipes.forEach((recipe) => {
        const re = event.custom({
            type: 'naturesaura:offering',
            input: recipe.input,
            start_item: recipe.start_item,
            output: recipe.output
        });
        if (recipe.id) {
            re.id(recipe.id);
        }
    });
});
