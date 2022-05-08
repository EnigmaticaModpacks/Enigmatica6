onEvent('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }

    const id_prefix = 'enigmatica:expert/mekanism/enriching/';
    const recipes = [
        {
            input: '#forge:slimeball/earth',
            output: 'tconstruct:earth_slime_crystal',
            id: `${id_prefix}earth_slime_crystal`
        },
        {
            input: '#forge:slimeball/sky',
            output: 'tconstruct:sky_slime_crystal',
            id: `${id_prefix}sky_slime_crystal`
        },
        {
            input: '#forge:slimeball/ender',
            output: 'tconstruct:ender_slime_crystal',
            id: `${id_prefix}ender_slime_crystal`
        },
        {
            input: '#forge:slimeball/ichor',
            output: 'tconstruct:ichor_slime_crystal',
            id: `${id_prefix}ichor_slime_crystal`
        },
        {
            input: 'industrialforegoing:pink_slime',
            output: 'materialis:pink_slime_crystal',
            id: `${id_prefix}pink_slime_crystal`
        },
        {
            input: '4x #forge:dusts/coal_coke',
            output: 'immersiveengineering:dust_hop_graphite',
            id: `${id_prefix}hop_graphite_from_coke`
        },
        {
            input: '4x #forge:dusts/coal_petcoke',
            output: 'immersiveengineering:dust_hop_graphite',
            id: `${id_prefix}hop_graphite_from_petcoke`
        }
    ];
    recipes.forEach((recipe) => {
        event.recipes.mekanism.enriching(recipe.output, recipe.input).id(recipe.id);
    });
});
