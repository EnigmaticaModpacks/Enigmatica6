events.listen('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }

    var data = {
        recipes: [
            {
                inputs: ['#forge:dusts/silver', '#forge:dusts/silver', '#forge:dusts/silver', '#forge:dusts/silver'],
                reagent: '#forge:dusts/sulfur',
                output: 'architects_palette:sunmetal_blend',
                count: 4,
                id: 'architects_palette:sunmetal_blend'
            },
            {
                inputs: [
                    'aquaculture:worm',
                    'quark:bottled_cloud',
                    'minecraft:string',
                    'thermal:phytogro',
                    'thermal:phytogro',
                    'minecraft:string',
                    'quark:bottled_cloud',
                    'aquaculture:worm'
                ],
                reagent: '#minecraft:beehives',
                output: 'betterendforge:silk_moth_nest',
                count: 1
            },
            {
                inputs: [
                    'architects_palette:sunmetal_blend',
                    'architects_palette:sunmetal_blend',
                    'architects_palette:sunmetal_blend',
                    'architects_palette:sunmetal_blend'
                ],
                reagent: 'betterendforge:silk_fiber',
                output: 'naturesaura:gold_fiber',
                count: 4,
                id: 'naturesaura:gold_fiber'
            },
            {
                inputs: [
                    'eidolon:pewter_inlay',
                    'betterendforge:andesite_pedestal',
                    'eidolon:pewter_inlay',
                    'thermal:phytogro'
                ],
                reagent: 'eidolon:crucible',
                output: 'botania:apothecary_default',
                count: 1,
                id: 'botania:apothecary_default'
            },
            {
                inputs: [
                    'occultism:otherstone',
                    '#forge:dusts/mana',
                    'occultism:otherstone',
                    'eidolon:pewter_inlay',
                    'eidolon:pewter_inlay',
                    'occultism:otherstone',
                    'occultism:otherstone',
                    'occultism:otherstone'
                ],
                reagent: 'minecraft:bowl',
                output: 'occultism:sacrificial_bowl',
                count: 1,
                id: 'occultism:crafting/sacrificial_bowl'
            },
            {
                inputs: [
                    'eidolon:gold_inlay',
                    '#forge:dusts/mana',
                    'eidolon:gold_inlay',
                    'eidolon:gold_inlay',
                    'eidolon:gold_inlay'
                ],
                reagent: 'occultism:sacrificial_bowl',
                output: 'occultism:golden_sacrificial_bowl',
                count: 1,
                id: 'occultism:crafting/golden_sacrificial_bowl'
            },
            {
                inputs: [
                    'eidolon:pewter_inlay',
                    'occultism:stable_wormhole',
                    'eidolon:pewter_inlay',
                    'occultism:otherstone',
                    'occultism:otherstone',
                    'eidolon:pewter_inlay',
                    'occultism:otherstone_pedestal',
                    'eidolon:pewter_inlay'
                ],
                reagent: 'eidolon:crucible',
                output: 'bloodmagic:soulforge',
                count: 1,
                id: 'bloodmagic:soul_forge'
            },
            {
                inputs: [
                    'eidolon:gold_inlay',
                    '#forge:ingots/silver',
                    'eidolon:gold_inlay',
                    '#forge:ingots/silver',
                    '#forge:ingots/silver',
                    'eidolon:gold_inlay',
                    '#forge:ingots/silver',
                    'eidolon:gold_inlay'
                ],
                reagent: 'astralsorcery:aquamarine',
                output: 'undergarden:catalyst',
                count: 1,
                id: 'undergarden:catalyst'
            },
            {
                inputs: [
                    'buildersaddition:large_soul_candle',
                    'buildersaddition:large_soul_candle',
                    'buildersaddition:large_soul_candle',
                    'buildersaddition:large_soul_candle',
                    'buildersaddition:large_soul_candle',
                    'buildersaddition:large_soul_candle',
                    'buildersaddition:large_soul_candle',
                    'buildersaddition:large_soul_candle'
                ],
                reagent: 'bloodmagic:holy_water_anointment',
                output: 'eidolon:candle',
                count: 8,
                id: 'eidolon:candle'
            }
        ]
    };
    data.recipes.forEach((recipe) => {
        let constructed_recipe = {
            type: 'ars_nouveau:enchanting_apparatus',
            reagent: recipe.reagent.charAt(0) == '#' ? [{ tag: recipe.reagent.slice(1) }] : [{ item: recipe.reagent }],
            output: { item: recipe.output, count: recipe.count }
        };

        recipe.inputs.forEach((input, index) => {
            let i = index + 1;
            constructed_recipe[`item_${i}`] = input.charAt(0) == '#' ? [{ tag: input.slice(1) }] : [{ item: input }];
        });

        if (recipe.mana) {
            constructed_recipe['mana'] = recipe.mana;
        }

        const re = event.custom(constructed_recipe);
        if (recipe.id) {
            re.id(recipe.id);
        }
    });
});
