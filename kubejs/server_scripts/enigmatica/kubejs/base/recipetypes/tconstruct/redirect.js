onEvent('server.datapack.low_priority', (event) => {
    var data = [
        {
            identifier: 'livingwood'
        },
        {
            identifier: 'manasteel'
        },
        {
            identifier: 'elementium'
        },
        {
            identifier: 'terrasteel'
        },
        {
            identifier: 'alfsteel'
        }
    ];

    data.forEach((recipeType) => {
        event.addJson(`enigmatica:materials/definition/${recipeType.identifier}.json`, {
            redirect: [
                {
                    id: `materialis:${recipeType.identifier}`
                }
            ]
        });
    });
});
