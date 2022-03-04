onEvent('recipes', (event) => {
    if (global.isNormalMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:normal/create/compacting/';
    const recipes = [
        {
            inputs: [Fluid.of('industrialforegoing:latex', 900)],
            output: Item.of('industrialforegoing:dryrubber', 1),
            type: 'unheated',
            id: `${id_prefix}dryrubber`
        }
    ];

    recipes.forEach((recipe) => {
        const re = event.recipes.create.compacting(recipe.output, recipe.inputs).id(recipe.id);
        if (recipe.type == 'heated') {
            re.heated();
        }
        if (recipe.type == 'superheated') {
            re.superheated();
        }
    });
});
