events.listen('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const recipes = [
        {
            input: 'alexsmobs:guster_eye',
            output: 'ars_nouveau:glyph_gust',
            tier: 'ONE',
            id: 'ars_nouveau:glyph_gust'
        },
        {
            input: 'minecraft:pufferfish',
            output: 'ars_nouveau:glyph_aoe',
            tier: 'TWO',
            id: 'ars_nouveau:glyph_aoe'
        },
        {
            input: 'undergarden:droopvine_item',
            output: 'ars_nouveau:glyph_fortune',
            tier: 'TWO',
            id: 'ars_nouveau:glyph_fortune'
        },
        {
            input: 'thermal:earth_charge',
            output: 'ars_nouveau:glyph_amplify',
            tier: 'ONE',
            id: 'ars_nouveau:glyph_amplify'
        },
        {
            input: 'thermal:ice_charge',
            output: 'ars_nouveau:glyph_conjure_water',
            tier: 'TWO',
            id: 'ars_nouveau:glyph_conjure_water'
        },
        {
            input: 'vanillahammers:iron_hammer',
            output: 'ars_nouveau:glyph_crush',
            tier: 'TWO',
            id: 'ars_nouveau:glyph_crush'
        },
        {
            input: 'thermal:lightning_charge',
            output: 'ars_nouveau:glyph_split',
            tier: 'THREE',
            id: 'ars_nouveau:glyph_split'
        },
        {
            input: 'alexsmobs:bear_fur',
            output: 'ars_nouveau:glyph_strength',
            tier: 'THREE',
            id: 'ars_nouveau:glyph_strength'
        }
    ];

    recipes.forEach((recipe) => {
        const re = event.custom({
            type: 'ars_nouveau:glyph_recipe',
            tier: recipe.tier,
            input: recipe.input,
            output: recipe.output
        });
        if (recipe.id) {
            re.id(recipe.id);
        }
    });
});
