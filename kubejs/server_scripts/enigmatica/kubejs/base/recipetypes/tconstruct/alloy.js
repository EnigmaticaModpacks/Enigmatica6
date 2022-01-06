onEvent('recipes', (event) => {
    const id_prefix = 'enigmatica:base/tconstruct/alloy/';
    const recipes = [
        {
            inputs: [
                { name: 'kubejs:molten_aluminum_bee', amount: 500 },
                { name: 'resourcefulbees:lapis_honey', amount: 500 }
            ],
            result: { fluid: 'kubejs:molten_cobalt_bee', amount: 500 },
            temperature: 1400,
            id: `${id_prefix}molten_cobalt_bee`
        },
        {
            inputs: [
                { name: 'kubejs:liquid_slimy_bee', amount: 500 },
                { name: 'tconstruct:sky_slime', amount: 500 }
            ],
            result: { fluid: 'kubejs:liquid_skyslime_bee', amount: 500 },
            temperature: 500,
            id: `${id_prefix}liquid_skyslime_bee`
        },
        {
            inputs: [
                { name: 'kubejs:liquid_slimy_bee', amount: 500 },
                { name: 'tconstruct:blood', amount: 500 }
            ],
            result: { fluid: 'kubejs:liquid_ichor_bee', amount: 500 },
            temperature: 500,
            id: `${id_prefix}liquid_ichor_bee`
        },
        {
            inputs: [
                { name: 'kubejs:liquid_slimy_bee', amount: 500 },
                { name: 'tconstruct:ender_slime', amount: 500 }
            ],
            result: { fluid: 'kubejs:liquid_enderslime_bee', amount: 500 },
            temperature: 500,
            id: `${id_prefix}liquid_enderslime_bee`
        },
        {
            inputs: [
                { name: 'tconstruct:molten_glass', amount: 1000 },
                { name: 'tconstruct:molten_obsidian', amount: 1000 },
                { name: 'tconstruct:molten_quartz', amount: 144 }
            ],
            result: { fluid: 'kubejs:molten_hardened_glass', amount: 1000 },
            temperature: 1400,
            id: `${id_prefix}molten_hardened_glass`
        },
        {
            inputs: [
                { name: 'kubejs:molten_hardened_glass', amount: 1000 },
                { name: 'tconstruct:molten_signalum', amount: 72 }
            ],
            result: { fluid: 'kubejs:molten_signalum_glass', amount: 1000 },
            temperature: 1400,
            id: `${id_prefix}molten_signalum_glass`
        },
        {
            inputs: [
                { name: 'kubejs:molten_hardened_glass', amount: 1000 },
                { name: 'tconstruct:molten_lumium', amount: 72 }
            ],
            result: { fluid: 'kubejs:molten_lumium_glass', amount: 1000 },
            temperature: 1400,
            id: `${id_prefix}molten_lumium_glass`
        },
        {
            inputs: [
                { name: 'kubejs:molten_hardened_glass', amount: 1000 },
                { name: 'tconstruct:molten_enderium', amount: 72 }
            ],
            result: { fluid: 'kubejs:molten_enderium_glass', amount: 1000 },
            temperature: 1400,
            id: `${id_prefix}molten_enderium_glass`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'tconstruct:alloy';
        event.custom(recipe).id(recipe.id);
    });
});
