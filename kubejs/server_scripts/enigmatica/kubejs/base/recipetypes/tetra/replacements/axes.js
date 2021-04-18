events.listen('server.datapack.low_priority', (event) => {
    var data = {
        tools: [
            {
                item: 'mekanismtools:bronze_axe',
                material: 'bronze',
                handle: 'stick',
                improvements: {
                    'double/head_left:workable': 1,
                    'double/head_right:workable': 1
                }
            },
            {
                item: 'mekanismtools:lapis_lazuli_axe',
                material: 'lapis',
                handle: 'stick'
            },
            {
                item: 'mekanismtools:osmium_axe',
                material: 'osmium',
                handle: 'stick'
            },
            {
                item: 'mekanismtools:refined_glowstone_axe',
                material: 'refined_glowstone',
                handle: 'stick'
            },
            {
                item: 'mekanismtools:refined_obsidian_axe',
                material: 'refined_obsidian',
                handle: 'stick'
            },
            {
                item: 'mekanismtools:steel_axe',
                material: 'steel',
                handle: 'stick'
            },
            {
                item: 'immersiveengineering:axe_steel',
                material: 'steel',
                handle: 'treated_wood'
            },
            {
                item: 'naturesaura:infused_iron_axe',
                material: 'infused_iron',
                handle: 'treated_wood',
                improvements: {
                    'double/head_left:naturesaura_aura_mending_innate': 1,
                    'double/head_right:naturesaura_aura_mending_innate': 1
                }
            },
            {
                item: 'naturesaura:sky_axe',
                material: 'sky',
                handle: 'treated_wood',
                improvements: {
                    'double/head_left:naturesaura_aura_mending_innate': 1,
                    'double/head_right:naturesaura_aura_mending_innate': 1
                }
            },
            {
                item: 'botania:manasteel_axe',
                material: 'manasteel',
                handle: 'treated_wood'
            },
            {
                item: 'botania:elementium_axe',
                material: 'elementium',
                handle: 'jacaranda'
            },
            {
                item: 'botania:terra_axe',
                material: 'terrasteel',
                handle: 'terrasteel'
            },
            {
                item: 'aquaculture:neptunium_axe',
                material: 'neptunium',
                handle: 'neptunium'
            },
            {
                item: 'aquaculture:alfsteel_axe',
                material: 'alfsteel',
                handle: 'alfsteel'
            }
        ]
    };
    var toolList = [];
    data.tools.forEach((tool) => {
        toolList.push({
            predicate: { item: tool.item },
            item: 'tetra:modular_double',
            modules: {
                'double/head_left': ['double/basic_axe_left', `basic_axe/${tool.material}`],
                'double/head_right': ['double/butt_right', `butt/${tool.material}`],
                'double/handle': ['double/basic_handle', `basic_handle/${tool.handle}`]
            },
            improvements: tool.improvements
        });
    });

    event.addJson('tetra:replacements/axes.json', toolList);
});
