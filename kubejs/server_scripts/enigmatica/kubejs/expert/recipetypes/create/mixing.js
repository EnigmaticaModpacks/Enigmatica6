onEvent('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }

    const recipes = [
        {
            heated: true,
            inputs: ['#forge:ingots/cobalt', '#forge:ingots/cobalt', '#forge:ingots/cobalt', 'thermal:blizz_powder'],
            output: Item.of('undergarden:froststeel_ingot', 3)
        },
        {
            superheated: true,
            inputs: ['#forge:stones/marble', '#forge:stones/marble', '#forge:stones/marble', '#forge:stones/marble'],
            output: Item.of('astralsorcery:black_marble_raw', 4)
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
                '#forge:tar'
            ],
            output: 'kubejs:coarse_lapis_lazuli_compound'
        },
        {
            heated: true,
            inputs: [
                '#forge:gems/quartz',
                '#forge:gems/lapis',
                '#forge:gems/lapis',
                '#forge:dusts/redstone',
                '#forge:dusts/redstone',
                'eidolon:soul_shard',
                'eidolon:soul_shard',
                'eidolon:soul_shard',
                'eidolon:soul_shard',
                Fluid.of('bloodmagic:life_essence_fluid', 1000)
            ],
            output: 'eidolon:lesser_soul_gem'
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
        }
    ];

    recipes.forEach((recipe) => {
        const re = event.recipes.create.mixing(recipe.output, recipe.inputs);

        if (recipe.heated) {
            re.heated();
        } else if (recipe.superheated) {
            re.superheated();
        } else {
            //unheated
        }
        if (recipe.id) {
            re.id(recipe.id);
        }
    });
});
