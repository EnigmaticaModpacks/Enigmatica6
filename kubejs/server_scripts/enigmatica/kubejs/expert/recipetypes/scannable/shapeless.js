onEvent('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }

    const recipes = [
        {
            output: 'scannable:module_range',
            inputs: ['scannable:module_blank', 'astralsorcery:rock_crystal'],
            id: 'scannable:module_range'
        },
        {
            output: 'scannable:module_entity',
            inputs: ['scannable:module_blank', 'minecraft:golden_carrot'],
            id: 'scannable:module_entity'
        },
        {
            output: 'scannable:module_animal',
            inputs: ['scannable:module_blank', 'minecraft:carrot_on_a_stick'],
            id: 'scannable:module_animal'
        },
        {
            output: 'scannable:module_monster',
            inputs: ['scannable:module_blank', 'minecraft:spawner'],
            id: 'scannable:module_monster'
        },
        {
            output: 'scannable:module_block',
            inputs: ['scannable:module_blank', 'minecraft:lodestone'],
            id: 'scannable:module_block'
        },
        {
            output: 'scannable:module_ore_common',
            inputs: ['scannable:module_block', '#forge:gems/apatite'],
            id: 'scannable:module_ore_common'
        },
        {
            output: 'scannable:module_ore_rare',
            inputs: ['scannable:module_ore_common', 'atum:nebu_drop'],
            id: 'scannable:module_ore_rare'
        },
        {
            output: 'scannable:module_fluid',
            inputs: ['scannable:module_blank', 'ars_nouveau:bucket_of_mana'],
            id: 'scannable:module_fluid'
        }
    ];

    recipes.forEach((recipe) => {
        event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
    });
});
