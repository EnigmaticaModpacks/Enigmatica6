onEvent('recipes', (event) => {
    const recipes = [
        { type: {}, toReplace: 'thermal:cinnabar', replaceWith: '#forge:gems/cinnabar' },
        { type: {}, toReplace: 'thermal:sulfur', replaceWith: '#forge:gems/sulfur' },
        { type: {}, toReplace: 'thermal:apatite', replaceWith: '#forge:gems/apatite' },
        { type: {}, toReplace: 'thermal:niter', replaceWith: '#forge:gems/niter' },
        { type: {}, toReplace: 'thermal:bitumen', replaceWith: '#forge:gems/bitumen' },
        { type: {}, toReplace: 'thermal:coal_coke', replaceWith: '#forge:gems/coal_coke' },
        { type: {}, toReplace: 'thermal:sawdust', replaceWith: 'emendatusenigmatica:wood_dust' },
        { type: {}, toReplace: 'refinedstorage:silicon', replaceWith: '#forge:gems/silicon' },
        { type: {}, toReplace: 'create:dough', replaceWith: 'farmersdelight:wheat_dough' },
        { type: {}, toReplace: 'simplefarming:chocolate', replaceWith: 'create:bar_of_chocolate' },
        { type: {}, toReplace: 'thermal:rubber', replaceWith: 'industrialforegoing:dryrubber' },
        { type: {}, toReplace: 'immersiveengineering:slag', replaceWith: 'thermal:slag' },
        {
            type: { mod: 'dustrial_decor' },
            toReplace: 'minecraft:iron_ingot',
            replaceWith: 'dustrial_decor:rusty_iron_ingot'
        },
        {
            type: { mod: 'dustrial_decor' },
            toReplace: 'minecraft:iron_nugget',
            replaceWith: 'dustrial_decor:rusty_iron_nugget'
        }
    ];

    recipes.forEach((recipe) => {
        event.replaceOutput(recipe.type, recipe.toReplace, recipe.replaceWith);
    });
    sharedDies.forEach((die) => {
        event.replaceOutput(
            {},
            `thermal:press_${die.thermalName}_die`,
            `immersiveengineering:mold_${die.immersiveEngineeringName}`
        );
    });
});
