onEvent('recipes', (event) => {
    if (global.isNormalMode == false) {
        return;
    }

    const id_prefix = 'enigmatica:normal/torchmaster/shaped/';

    const recipes = [
        {
            output: 'torchmaster:megatorch',
            pattern: ['AAA', 'BCB', 'DCD'],
            key: {
                A: 'torchmaster:feral_flare_lantern',
                B: '#enigmatica:crafting_materials/diamond',
                C: '#minecraft:logs',
                D: '#forge:storage_blocks/gold'
            },
            id: `${id_prefix}megatorch`
        },
        {
            output: 'torchmaster:feral_flare_lantern',
            pattern: [' A ', 'BCB', ' A '],
            key: {
                A: '#forge:ingots/gold',
                B: '#forge:glass',
                C: '#forge:storage_blocks/glowstone'
            },
            id: `${id_prefix}feral_flare_lantern`
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
