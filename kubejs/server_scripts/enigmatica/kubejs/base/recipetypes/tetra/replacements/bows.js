events.listen('server.datapack.low_priority', (event) => {
    var data = {
        tools: [
            {
                item: 'aquaculture:neptunium_bow',
                material: 'neptunium',
                string: 'string'
            },
            {
                item: 'botaniaadditions:terra_bow',
                material: 'terrasteel',
                string: 'string'
            }
        ]
    };
    var toolList = [];
    data.tools.forEach((tool) => {
        toolList.push({
            predicate: { item: tool.item },
            item: 'tetra:modular_bow',
            modules: {
                'bow/stave': ['bow/straight_stave', `straight_stave/${tool.material}`],
                'bow/string': ['bow/basic_string', `basic_string/${tool.string}`]
            },
            improvements: tool.improvements
        });
    });

    event.addJson('tetra:replacements/bows.json', toolList);
});
