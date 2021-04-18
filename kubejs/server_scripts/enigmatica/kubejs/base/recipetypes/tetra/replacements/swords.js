events.listen('server.datapack.low_priority', (event) => {
    var data = {
        tools: [
            {
                item: 'mekanismtools:bronze_sword',
                blade: 'bronze',
                guard: 'bronze',
                pommel: 'bronze',
                hilt: 'stick',
                improvements: {
                    'sword/blade:workable': 1,
                    'sword/pommel:workable': 1,
                    'sword/guard:workable': 1
                }
            },
            {
                item: 'mekanismtools:lapis_lazuli_sword',
                blade: 'lapis',
                guard: 'iron',
                pommel: 'iron',
                hilt: 'stick'
            },
            {
                item: 'mekanismtools:osmium_sword',
                blade: 'osmium',
                guard: 'iron',
                pommel: 'iron',
                hilt: 'stick'
            },
            {
                item: 'mekanismtools:refined_glowstone_sword',
                blade: 'refined_glowstone',
                guard: 'iron',
                pommel: 'iron',
                hilt: 'stick'
            },
            {
                item: 'mekanismtools:refined_obsidian_sword',
                blade: 'refined_obsidian',
                guard: 'iron',
                pommel: 'iron',
                hilt: 'stick'
            },
            {
                item: 'mekanismtools:refined_obsidian_sword',
                blade: 'refined_obsidian',
                guard: 'obsidian',
                pommel: 'obsidian',
                hilt: 'stick'
            },
            {
                item: 'mekanismtools:steel_sword',
                blade: 'steel',
                guard: 'steel',
                pommel: 'steel',
                hilt: 'stick'
            },
            {
                item: 'immersiveengineering:sword_steel',
                blade: 'steel',
                guard: 'steel',
                pommel: 'steel',
                hilt: 'treated_wood'
            },
            {
                item: 'naturesaura:infused_iron_sword',
                blade: 'infused_iron',
                guard: 'infused_iron',
                pommel: 'infused_iron',
                hilt: 'treated_wood'
            },
            {
                item: 'naturesaura:sky_sword',
                blade: 'sky',
                guard: 'sky',
                pommel: 'sky',
                hilt: 'treated_wood',
                improvements: {
                    'sword/blade:naturesaura_aura_mending_innate': 1,
                    'sword/pommel:naturesaura_aura_mending_innate': 1,
                    'sword/guard:naturesaura_aura_mending_innate': 1
                }
            },
            {
                item: 'naturesaura:sky_sword',
                blade: 'sky',
                guard: 'sky',
                pommel: 'sky',
                hilt: 'treated_wood',
                improvements: {
                    'sword/blade:naturesaura_aura_mending_innate': 1,
                    'sword/pommel:naturesaura_aura_mending_innate': 1,
                    'sword/guard:naturesaura_aura_mending_innate': 1
                }
            },
            {
                item: 'botania:manasteel_sword',
                blade: 'manasteel',
                guard: 'manasteel',
                pommel: 'manasteel',
                hilt: 'treated_wood'
            },
            {
                item: 'botania:elementium_sword',
                blade: 'elementium',
                guard: 'elementium',
                pommel: 'elementium',
                hilt: 'jacaranda'
            },
            {
                item: 'botania:terra_sword',
                blade: 'terrasteel',
                guard: 'terrasteel',
                pommel: 'terrasteel',
                hilt: 'terrasteel'
            },
            {
                item: 'aquaculture:neptunium_sword',
                blade: 'neptunium',
                guard: 'neptunium',
                pommel: 'neptunium',
                hilt: 'neptunium'
            },
            {
                item: 'mythicbotany:alfsteel_sword',
                blade: 'alfsteel',
                guard: 'alfsteel',
                pommel: 'alfsteel',
                hilt: 'alfsteel'
            }
        ]
    };
    var toolList = [];
    data.tools.forEach((tool) => {
        toolList.push({
            predicate: { item: tool.item },
            item: 'tetra:modular_sword',
            modules: {
                'sword/blade': ['sword/basic_blade', `basic_blade/${tool.blade}`],
                'sword/hilt': ['sword/basic_hilt', `basic_hilt/${tool.hilt}`],
                'sword/pommel': ['sword/decorative_pommel', `decorative_pommel/${tool.pommel}`],
                'sword/guard': ['sword/makeshift_guard', `makeshift_guard/${tool.guard}`]
            },
            improvements: tool.improvements
        });
    });
    event.addJson('tetra:replacements/swords.json', toolList);
});
