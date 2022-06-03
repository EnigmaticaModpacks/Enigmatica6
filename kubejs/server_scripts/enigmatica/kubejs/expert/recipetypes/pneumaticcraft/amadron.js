onEvent('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }

    /* Usage Documentation: https://github.com/TeamPneumatic/pnc-repressurized/wiki/Amadron-and-Datapacks#1152 */
    const id_prefix = 'enigmatica:expert/pneumaticcraft/amadron/';

    const recipes = [
        {
            static: true,
            input: { type: 'ITEM', id: 'kubejs:engineers_school_project', amount: 1 },
            output: { type: 'ITEM', id: 'kubejs:medium_machinery_schematics', amount: 1 },
            level: 0,
            maxStock: 5,
            id: `${id_prefix}medium_machinery_schematics`
        },
        {
            static: true,
            input: { type: 'ITEM', id: 'kubejs:engineers_school_upgrades', amount: 1 },
            output: { type: 'ITEM', id: 'kubejs:heavy_machinery_schematics', amount: 1 },
            level: 0,
            maxStock: 5,
            id: `${id_prefix}heavy_machinery_schematics`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'pneumaticcraft:amadron';
        event.custom(recipe).id(recipe.id);
    });
});
