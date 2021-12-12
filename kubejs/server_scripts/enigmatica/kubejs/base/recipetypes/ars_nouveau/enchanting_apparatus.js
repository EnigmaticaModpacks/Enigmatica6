onEvent('recipes', (event) => {
    const id_prefix = 'enigmatica:base/ars_nouveau/enchanting_apparatus/';
    const recipes = [
        {
            inputs: ['#forge:gems/mana', '#forge:gems/mana', '#forge:gems/mana', '#forge:gems/mana'],
            reagent: '#forge:seeds',
            output: 'ars_nouveau:mana_bloom_crop',
            id: 'ars_nouveau:mana_bloom_crop'
        },
        {
            inputs: [
                'ars_nouveau:blaze_fiber',
                'ars_nouveau:blaze_fiber',
                '#forge:storage_blocks/mana',
                '#forge:storage_blocks/gold_brass'
            ],
            reagent: 'minecraft:glass_bottle',
            output: 'ars_nouveau:potion_flask',
            id: 'ars_nouveau:potion_flask'
        },
        {
            inputs: [
                '#forge:storage_blocks/mana',
                'ars_nouveau:carbuncle_charm',
                '#forge:storage_blocks/mana',
                '#forge:storage_blocks/gold',
                '#forge:storage_blocks/gold',
                '#forge:storage_blocks/gold',
                'ars_nouveau:wilden_tribute',
                '#forge:storage_blocks/gold'
            ],
            reagent: Item.of('resourcefulbees:bee_jar', { Entity: 'resourcefulbees:gold_bee' }).weakNBT(),
            output: Item.of('resourcefulbees:bee_jar', { Entity: 'resourcefulbees:carbee_bee' }),
            id: `${id_prefix}carbee_jar`
        },
        {
            inputs: [
                'resourcefulbees:carbee_honeycomb_block',
                'resourcefulbees:carbee_honeycomb_block',
                'resourcefulbees:carbee_honeycomb_block'
            ],
            reagent: Item.of('minecraft:potion', '{Potion:"ars_nouveau:mana_regen_potion_long"}'),
            output: Item.of('resourcefulbees:mana_honey_bottle', 1),
            id: `${id_prefix}mana_honey_bottle`
        }
    ];
    recipes.forEach((recipe) => {
        event.recipes.ars_nouveau.enchanting_apparatus(recipe.output, recipe.reagent, recipe.inputs).id(recipe.id);
    });
});
