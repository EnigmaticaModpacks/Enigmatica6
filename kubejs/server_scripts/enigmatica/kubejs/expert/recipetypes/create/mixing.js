onEvent('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/create/mixing/';

    const recipes = [
        {
            heated: true,
            inputs: ['#forge:ingots/cobalt', '#forge:ingots/cobalt', '#forge:ingots/cobalt', 'thermal:blizz_powder'],
            output: Item.of('undergarden:froststeel_ingot', 3),
            id: `${id_prefix}froststeel_ingot`
        },
        {
            superheated: true,
            inputs: ['#forge:stones/marble', '#forge:stones/marble', '#forge:stones/marble', '#forge:stones/marble'],
            output: Item.of('astralsorcery:black_marble_raw', 4),
            id: `${id_prefix}black_marble_raw`
        },
        {
            heated: true,
            inputs: [
                '#forge:dusts/lapis',
                '#forge:dusts/lapis',
                '#forge:dusts/lapis',
                '#forge:dusts/lapis',
                '#forge:dusts/lapis',
                '#forge:dusts/quartz',
                '#forge:dusts/quartz',
                'atum:ectoplasm',
                '#forge:tar'
            ],
            output: 'kubejs:coarse_lapis_lazuli_compound',
            id: `${id_prefix}coarse_lapis_lazuli_compound`
        },
        {
            inputs: [
                'ars_nouveau:mana_fiber',
                'ars_nouveau:mana_fiber',
                'undergarden:ditchbulb',
                Fluid.of('tconstruct:blazing_blood', 500)
            ],
            output: Item.of('ars_nouveau:blaze_fiber', 2),
            id: 'ars_nouveau:blaze_fiber'
        },
        {
            inputs: [
                'ars_nouveau:blaze_fiber',
                'ars_nouveau:blaze_fiber',
                '#forge:fruits/shadow_berry',
                Fluid.of('integrateddynamics:liquid_chorus', 500)
            ],
            output: Item.of('ars_nouveau:end_fiber', 2),
            id: 'ars_nouveau:end_fiber'
        },
        {
            superheated: true,
            inputs: [
                'astralsorcery:illumination_powder',
                'astralsorcery:illumination_powder',
                'astralsorcery:illumination_powder',
                '#forge:ingots/infused_iron',
                'create:polished_rose_quartz',
                'astralsorcery:nocturnal_powder',
                'astralsorcery:nocturnal_powder',
                'astralsorcery:nocturnal_powder',
                '#forge:ingots/manasteel'
            ],
            output: Item.of('create:chromatic_compound', 2),
            id: 'create:mixing/chromatic_compound'
        },
        {
            superheated: true,
            inputs: [
                '#forge:sand/colorless',
                '#forge:sand/colorless',
                '#forge:gems/silicon',
                '#forge:gems/silicon',
                '#forge:gems/silicon',
                'thermal:tar',
                'thermal:tar'
            ],
            output: Item.of('powah:dielectric_paste', 24),
            id: 'powah:crafting/dielectric_paste'
        },
        {
            inputs: [
                'minecraft:clay_ball',
                'minecraft:clay_ball',
                'create:cinder_flour',
                'kubejs:basalt_powder',
                'kubejs:basalt_powder',
                Fluid.of('minecraft:water', 100)
            ],
            output: Item.of('kubejs:coke_brick_blend', 4),
            id: `${id_prefix}coke_brick_blend`
        },
        {
            inputs: [
                'atum:marl',
                '#forge:dusts/coal_coke',
                '#forge:dusts/coal_coke',
                '#forge:dusts/coal_coke',
                'minecraft:blaze_powder',
                'minecraft:gunpowder',
                'minecraft:gunpowder',
                Fluid.of('minecraft:water', 100)
            ],
            output: Item.of('kubejs:blast_brick_blend', 4),
            id: `${id_prefix}blast_brick_blend`
        },
        {
            inputs: [
                'farmersdelight:wheat_dough',
                'farmersdelight:wheat_dough',
                'farmersdelight:wheat_dough',
                'ars_nouveau:mana_berry'
            ],
            output: Item.of('ars_nouveau:source_berry_roll', 3),
            id: `${id_prefix}source_berry_roll`
        },
        {
            heated: true,
            inputs: [
                'minecraft:spider_eye',
                'minecraft:spider_eye',
                'minecraft:rotten_flesh',
                'minecraft:rotten_flesh',
                'minecraft:gunpowder',
                'minecraft:gunpowder'
            ],
            output: Item.of('kubejs:monster_mash', 2),
            id: `${id_prefix}monster_mash`
        }
    ];

    recipes.forEach((recipe) => {
        const re = event.recipes.create.mixing(recipe.output, recipe.inputs).id(recipe.id);

        if (recipe.heated) {
            re.heated();
        } else if (recipe.superheated) {
            re.superheated();
        } else {
            //unheated
        }
    });
});
