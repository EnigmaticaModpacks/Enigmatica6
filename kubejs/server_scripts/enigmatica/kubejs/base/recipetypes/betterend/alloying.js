events.listen('recipes', (event) => {
    const data = {
        recipes: [
            {
                ingredients: [
                    {tag: 'forge:ingots/gold'},
                    {tag: 'forge:ingots/silver'}
                ],
                result: item.of('emendatusenigmatica:electrum_ingot', 2),
                experience: 2,
                smelttime: 300
            },
            {
                ingredients: [
                    {tag: 'forge:ingots/copper'},
                    {tag: 'forge:ingots/zinc'}
                ],
                result: item.of('emendatusenigmatica:brass_ingot', 2),
                experience: 2,
                smelttime: 300
            },
            {
                ingredients: [
                    {tag: 'forge:ingots/iron'},
                    {tag: 'forge:ingots/lead'}
                ],
                result: item.of('eidolon:pewter_ingot', 2),
                experience: 2,
                smelttime: 300
            },
            {
                ingredients: [
                    {tag: 'forge:ingots/copper'},
                    {tag: 'forge:ingots/nickel'}
                ],
                result: item.of('emendatusenigmatica:constantan_ingot', 2),
                experience: 2,
                smelttime: 300
            },
            {
                ingredients: [
                    {tag: 'forge:ores/copper'},
                    {tag: 'forge:ores/copper'}
                ],
                result: item.of('emendatusenigmatica:copper_ingot', 3),
                experience: 2,
                smelttime: 300
            },
            {
                ingredients: [
                    {tag: 'forge:ores/tin'},
                    {tag: 'forge:ores/tin'}
                ],
                result: item.of('emendatusenigmatica:tin_ingot', 3),
                experience: 2,
                smelttime: 300
            },
            {
                ingredients: [
                    {tag: 'forge:ores/aluminum'},
                    {tag: 'forge:ores/aluminum'}
                ],
                result: item.of('emendatusenigmatica:aluminum_ingot', 3),
                experience: 2,
                smelttime: 300
            },
            {
                ingredients: [
                    {tag: 'forge:ores/silver'},
                    {tag: 'forge:ores/silver'}
                ],
                result: item.of('emendatusenigmatica:silver_ingot', 3),
                experience: 2,
                smelttime: 300
            },
            {
                ingredients: [
                    {tag: 'forge:ores/lead'},
                    {tag: 'forge:ores/lead'}
                ],
                result: item.of('emendatusenigmatica:lead_ingot', 3),
                experience: 2,
                smelttime: 300
            },
            {
                ingredients: [
                    {tag: 'forge:ores/nickel'},
                    {tag: 'forge:ores/nickel'}
                ],
                result: item.of('emendatusenigmatica:nickel_ingot', 3),
                experience: 2,
                smelttime: 300
            },
            {
                ingredients: [
                    {tag: 'forge:ores/uranium'},
                    {tag: 'forge:ores/uranium'}
                ],
                result: item.of('emendatusenigmatica:uranium_ingot', 3),
                experience: 2,
                smelttime: 300
            },
            {
                ingredients: [
                    {tag: 'forge:ores/osmium'},
                    {tag: 'forge:ores/osmium'}
                ],
                result: item.of('emendatusenigmatica:osmium_ingot', 3),
                experience: 2,
                smelttime: 300
            },
            {
                ingredients: [
                    {tag: 'forge:ores/zinc'},
                    {tag: 'forge:ores/zinc'}
                ],
                result: item.of('emendatusenigmatica:zinc_ingot', 3),
                experience: 2,
                smelttime: 300
            }
        ]
    };
    data.recipes.forEach((recipe) => {
        event.custom({
                type: 'betterendforge:alloying',
                ingredients: recipe.ingredients,
                result: recipe.result,
                experience: recipe.experience,
                smelttime: recipe.smelttime
            })
    });
});