onEvent('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/modularrouters/shapeless/';
    const recipes = [
        {
            output: Item.of('modularrouters:sender_module_3'),
            inputs: [Item.of('modularrouters:sender_module_2').ignoreNBT(), 'integrateddynamics:logic_director'],
            id: 'modularrouters:sender_module_3'
        },
        {
            output: Item.of('4x modularrouters:sender_module_3'),
            inputs: [
                Item.of('modularrouters:sender_module_2').ignoreNBT(),
                Item.of('modularrouters:sender_module_2').ignoreNBT(),
                Item.of('modularrouters:sender_module_2').ignoreNBT(),
                Item.of('modularrouters:sender_module_2').ignoreNBT(),
                'integrateddynamics:logic_director'
            ],
            id: `${id_prefix}sender_module_3_alt`
        },
        {
            output: Item.of('modularrouters:stack_upgrade'),
            inputs: [
                'modularrouters:blank_upgrade',
                'tconstruct:sky_slime_crystal',
                'tconstruct:sky_slime_crystal',
                'tconstruct:sky_slime_crystal',
                'tconstruct:sky_slime_crystal'
            ],
            id: 'modularrouters:stack_upgrade'
        },
        {
            output: 'modularrouters:flinger_module',
            inputs: ['modularrouters:dropper_module', 'create:weighted_ejector'],
            id: 'modularrouters:flinger_module'
        },
        {
            output: 'modularrouters:vacuum_module',
            inputs: ['modularrouters:blank_module', 'minecraft:lodestone', 'pneumaticcraft:omnidirectional_hopper'],
            id: 'modularrouters:vacuum_module'
        },
        {
            output: 'modularrouters:xp_vacuum_augment',
            inputs: ['modularrouters:augment_core', 'thermal:xp_crystal'],
            id: 'modularrouters:xp_vacuum_augment'
        }
    ];

    recipes.forEach((recipe) => {
        event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
    });
});
