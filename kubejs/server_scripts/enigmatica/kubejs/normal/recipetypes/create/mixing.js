onEvent('recipes', (event) => {
    if (global.isNormalMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:normal/create/mixing/';
    const recipes = [
        {
            inputs: ['#forge:storage_blocks/coal'],
            output: Item.of('emendatusenigmatica:coke_gem', 9),
            heated: true,
            id: `${id_prefix}coal_coke`
        },
        {
            inputs: ['#forge:clay', '#forge:gravel', '#forge:sand', '#forge:sand', Fluid.of('minecraft:water', 500)],
            output: Fluid.of('immersiveengineering:concrete', 500),
            id: `${id_prefix}concrete`
        },
        {
            inputs: ['#minecraft:coals', '#minecraft:coals', '#forge:clay', Fluid.of('minecraft:lava', 500)],
            output: Item.of('powah:dielectric_paste', 16),
            id: `${id_prefix}dielectric_paste`
        },
        {
            inputs: ['industrialforegoing:dryrubber', Fluid.of('emendatusenigmatica:molten_sulfur', 72)],
            output: 'thermal:cured_rubber',
            superheated: true,
            id: `${id_prefix}cured_rubber`
        }
    ];

    recipes.forEach((recipe) => {
        if (recipe.heated) {
            event.recipes.create.mixing(recipe.output, recipe.inputs).id(recipe.id).heated();
        } else if (recipe.superheated) {
            event.recipes.create.mixing(recipe.output, recipe.inputs).id(recipe.id).superheated();
        } else {
            event.recipes.create.mixing(recipe.output, recipe.inputs).id(recipe.id);
        }
    });
});
