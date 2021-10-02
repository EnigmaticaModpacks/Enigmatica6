onEvent('recipes', (event) => {
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
            input: 'bloodmagic:reagentwater',
            output: 'ars_nouveau:glyph_conjure_water',
            tier: 'TWO',
            id: 'ars_nouveau:glyph_conjure_water'
        },
        {
            input: 'emendatusenigmatica:enigmatic_hammer',
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
        },
        {
            input: 'create:adjustable_chain_gearshift',
            output: 'ars_nouveau:glyph_accelerate',
            tier: 'TWO',
            id: 'ars_nouveau:glyph_accelerate'
        },
        {
            input: 'bloodmagic:reagentlava',
            output: 'ars_nouveau:glyph_ignite',
            tier: 'ONE',
            id: 'ars_nouveau:glyph_ignite'
        },
        {
            input: 'bloodmagic:reagentvoid',
            output: 'ars_nouveau:glyph_dispel',
            tier: 'ONE',
            id: 'ars_nouveau:glyph_dispel'
        },
        {
            input: 'bloodmagic:reagentgrowth',
            output: 'ars_nouveau:glyph_grow',
            tier: 'TWO',
            id: 'ars_nouveau:glyph_grow'
        },
        {
            input: 'bloodmagic:reagentfastminer',
            output: 'ars_nouveau:glyph_haste',
            tier: 'ONE',
            id: 'ars_nouveau:glyph_haste'
        },
        {
            input: 'bloodmagic:reagentmagnetism',
            output: 'ars_nouveau:glyph_pull',
            tier: 'ONE',
            id: 'ars_nouveau:glyph_pull'
        },
        {
            input: 'bloodmagic:reagentair',
            output: 'ars_nouveau:glyph_launch',
            tier: 'ONE',
            id: 'ars_nouveau:glyph_launch'
        },
        {
            input: 'eidolon:tattered_cloth',
            output: 'ars_nouveau:glyph_phantom_block',
            tier: 'ONE',
            id: 'ars_nouveau:glyph_phantom_block'
        },
        {
            input: 'create:adjustable_repeater',
            output: 'ars_nouveau:glyph_delay',
            tier: 'ONE',
            id: 'ars_nouveau:glyph_delay'
        },
        {
            input: 'botania:tiny_planet_block',
            output: 'ars_nouveau:glyph_gravity',
            tier: 'TWO',
            id: 'ars_nouveau:glyph_gravity'
        },
        {
            input: 'naturesaura:infused_iron_hoe',
            output: 'ars_nouveau:glyph_harvest',
            tier: 'ONE',
            id: 'ars_nouveau:glyph_harvest'
        },
        {
            input: 'naturesaura:hopper_upgrade',
            output: 'ars_nouveau:glyph_pickup',
            tier: 'ONE',
            id: 'ars_nouveau:glyph_pickup'
        },
        {
            input: 'naturesaura:furnace_heater',
            output: 'ars_nouveau:glyph_smelt',
            tier: 'TWO',
            id: 'ars_nouveau:glyph_smelt'
        },
        {
            input: 'bloodmagic:reagentair',
            output: 'ars_nouveau:glyph_glide',
            tier: 'THREE',
            id: 'ars_nouveau:glyph_glide'
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
