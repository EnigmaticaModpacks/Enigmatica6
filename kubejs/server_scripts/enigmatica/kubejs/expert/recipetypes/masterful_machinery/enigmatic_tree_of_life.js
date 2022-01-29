onEvent('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/masterful_machinery/enigmatica_tree_of_life/';
    const recipes = [];

    recipes.forEach((recipe) => {
        recipe.type = 'masterfulmachinery:machine_process';
        recipe.structureId = 'enigmatica_tree_of_life_structure';
        recipe.controllerId = 'enigmatica_tree_of_life';
        event.custom(recipe).id(recipe.id);
    });
});
