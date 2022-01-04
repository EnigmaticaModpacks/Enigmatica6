onEvent('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/kubejs/shapeless/';
    const recipes = [
        {
            output: 'kubejs:engineers_school_project',
            inputs: [
                'kubejs:construction_tools',
                'kubejs:engineering_student_meals',
                'kubejs:landscaping_materials',
                'kubejs:foundation_materials',
                'kubejs:building_materials',
                'kubejs:building_materials',
                'kubejs:building_materials',
                'kubejs:building_materials',
                'kubejs:building_materials'
            ],
            id: `${id_prefix}engineers_school_project`
        },
        {
            output: 'kubejs:engineers_school_upgrades',
            inputs: ['kubejs:computer_package', 'kubejs:fluid_drill_package'],
            id: `${id_prefix}engineers_school_upgrades`
        }
    ];

    recipes.forEach((recipe) => {
        event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
    });
});
