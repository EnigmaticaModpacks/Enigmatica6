onEvent('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/modularrouters/shapeless/';
    const recipes = [
        {
            output: Item.of('2x modularrouters:sender_module_3'),
            inputs: [
                Item.of('modularrouters:sender_module_2').ignoreNBT(),
                Item.of('modularrouters:sender_module_2').ignoreNBT(),
                Item.of('occultism:satchel').ignoreNBT()
            ],
            id: 'modularrouters:sender_module_3'
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
        }
    ];

    recipes.forEach((recipe) => {
        event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
    });
});
