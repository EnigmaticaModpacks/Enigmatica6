onEvent('recipes', (event) => {
    const id_prefix = 'enigmatica:base/naturesaura/offering/';

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
                id: `${id_prefix}`
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
                },
                id: `${id_prefix}sky_ingot_from_honeycomb`
            }
        ]
    };

    data.recipes.forEach((recipe) => {
        event
            .custom({
                type: 'naturesaura:offering',
                input: recipe.input,
                start_item: recipe.start_item,
                output: recipe.output
            })
            .id(recipe.id);
    });
});
