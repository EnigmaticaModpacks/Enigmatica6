onEvent('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }

    /* Usage Documentation: https://github.com/TeamPneumatic/pnc-repressurized/wiki/Amadron-and-Datapacks#1152 */
    const id_prefix = 'enigmatica:expert/pneumaticcraft/amadron/';

    const recipes = [];

    recipes.forEach((recipe) => {
        recipe.type = 'pneumaticcraft:amadron';
        event.custom(recipe).id(recipe.id);
    });
});

/**/
