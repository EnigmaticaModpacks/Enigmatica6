events.listen('server.datapack.low_priority', (event) => {
    var data = {
        tools: [
            {
                item: 'mekanismtools:bronze_shield',
                material: 'bronze',
                grip: 'bronze'
            },
            {
                item: 'mekanismtools:lapis_lazuli_shield',
                material: 'lapis',
                grip: 'lapis'
            },
            {
                item: 'mekanismtools:osmium_shield',
                material: 'osmium',
                grip: 'osmium'
            },
            {
                item: 'mekanismtools:refined_glowstone_shield',
                material: 'refined_glowstone',
                grip: 'refined_glowstone'
            },
            {
                item: 'mekanismtools:refined_obsidian_shield',
                material: 'refined_obsidian',
                grip: 'refined_obsidian'
            },
            {
                item: 'mekanismtools:steel_shield',
                material: 'steel',
                grip: 'steel'
            },
            {
                item: 'immersiveengineering:shield',
                material: 'steel',
                grip: 'steel'
            }
        ]
    };
    var toolList = [];
    data.tools.forEach((tool) => {
        toolList.push({
            predicate: { item: tool.item },
            item: 'tetra:modular_shield',
            modules: {
                'shield/plate': ['shield/tower', `tower/${tool.material}`],
                'shield/grip': ['shield/basic_grip', `basic_grip/${tool.grip}`]
            },
            improvements: tool.improvements
        });
    });

    event.addJson('tetra:replacements/shields.json', toolList);
});
