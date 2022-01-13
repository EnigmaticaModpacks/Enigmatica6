onEvent('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/masterful_machinery/advanced_assembly_table/';
    const recipes = [
        {
            outputs: [
                {
                    type: 'masterfulmachinery:pncr_pressure',
                    perTick: true,
                    data: { air: 100 }
                }
            ],

            inputs: [
                {
                    type: 'masterfulmachinery:items',
                    data: { tag: 'forge:cobblestone', count: 1 }
                }
            ],
            ticks: 200,
            id: `${id_prefix}test`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'masterfulmachinery:machine_process';
        recipe.structureId = 'advanced_assembly_table_structure';
        recipe.controllerId = 'advanced_assembly_table';
        event.custom(recipe).id(recipe.id);
    });
});
