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
