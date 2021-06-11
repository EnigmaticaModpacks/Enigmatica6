onEvent('recipes', (event) => {
    const recipes = [
        {
            inputs: [
                {
                    name: "kubejs:molten_aluminum_bee",
                    amount: 500
                },
                {
                    name: "resourcefulbees:lapis_honey",
                    amount: 500
                }
            ],
            result: {
                fluid: "kubejs:molten_cobalt_bee",
                amount: 500
            },
            temperature: 1400
        },
        {
            inputs: [
                {
                    name: "kubejs:liquid_slimy_bee",
                    amount: 500
                },
                {
                    name: "tconstruct:sky_slime",
                    amount: 500
                }
            ],
            result: {
                fluid: "kubejs:liquid_skyslime_bee",
                amount: 500
            },
            temperature: 500
        },
        {
            inputs: [
                {
                    name: "kubejs:liquid_slimy_bee",
                    amount: 500
                },
                {
                    name: "tconstruct:blood",
                    amount: 500
                }
            ],
            result: {
                fluid: "kubejs:liquid_ichor_bee",
                amount: 500
            },
            temperature: 500
        },
        {
            inputs: [
                {
                    name: "kubejs:liquid_slimy_bee",
                    amount: 500
                },
                {
                    name: "tconstruct:ender_slime",
                    amount: 500
                }
            ],
            result: {
                fluid: "kubejs:liquid_enderslime_bee",
                amount: 500
            },
            temperature: 500
        }
    ];

    recipes.forEach((recipe) => {
        const re = event.custom({
            type: 'tconstruct:alloy',
            inputs: recipe.inputs,
            result: recipe.result,
            temperature: recipe.temperature
        });
        if (recipe.id) {
            re.id(recipe.id);
        }
    });
});
