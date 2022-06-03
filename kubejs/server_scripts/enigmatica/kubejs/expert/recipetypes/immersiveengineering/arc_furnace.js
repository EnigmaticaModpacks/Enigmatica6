onEvent('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/immersiveengineering/arc_furnace/';
    var data = {
        recipes: [
            {
                input1: Ingredient.of('3x #forge:ingots/cobalt'),
                secondaries: ['thermal:blizz_powder'],
                outputs: [Item.of('3x undergarden:froststeel_ingot')],
                id: `${id_prefix}froststeel_ingot`
            },
            {
                input1: Ingredient.of('3x #forge:ingots/aluminum'),
                secondaries: [Ingredient.of('4x #forge:dusts/lithium'), Ingredient.of('#forge:ingots/copper')],
                outputs: [Item.of('4x mekanism:alloy_reinforced')],
                id: `${id_prefix}alloy_reinforced`
            },
            {
                input1: Item.of('6x ars_nouveau:warding_stone'),
                secondaries: ['immersiveengineering:coil_mv', Item.of('3x fluxnetworks:flux_dust')],
                outputs: [Item.of('6x compactmachines:wall')],
                id: `${id_prefix}cm_wall`
            },
            {
                input1: Item.of('8x industrialforegoing:dryrubber'),
                secondaries: [['#forge:dusts/coal_petcoke', '#forge:dusts/coal_coke']],
                outputs: [Item.of('8x industrialforegoing:plastic'), Item.of('8x thermal:slag')],
                id: `${id_prefix}plastic`
            },
            {
                input1: Item.of('powah:energizing_rod_basic').ignoreNBT(),
                secondaries: ['mekanismgenerators:laser_focus_matrix', Item.of('4x modularrouters:blank_upgrade')],
                outputs: [Item.of('4x modularrouters:energy_upgrade')],
                time: 100 * 4,
                energy: 51200 * 4,
                id: `${id_prefix}energy_upgrade_from_energizing_rod_basic`
            },
            {
                input1: Item.of('powah:energizing_rod_hardened').ignoreNBT(),
                secondaries: ['mekanismgenerators:laser_focus_matrix', Item.of('10x modularrouters:blank_upgrade')],
                outputs: [Item.of('10x modularrouters:energy_upgrade')],
                time: 100 * 10,
                energy: 51200 * 10,
                id: `${id_prefix}energy_upgrade_from_energizing_rod_hardened`
            },
            {
                input1: Item.of('powah:energizing_rod_blazing').ignoreNBT(),
                secondaries: ['mekanismgenerators:laser_focus_matrix', Item.of('34x modularrouters:blank_upgrade')],
                outputs: [Item.of('34x modularrouters:energy_upgrade')],
                time: 100 * 34,
                energy: 51200 * 34,
                id: `${id_prefix}energy_upgrade_from_energizing_rod_blazing`
            },
            {
                input1: Item.of('powah:energizing_rod_niotic').ignoreNBT(),
                secondaries: ['mekanismgenerators:laser_focus_matrix', Item.of('64x modularrouters:blank_upgrade')],
                outputs: [Item.of('64x modularrouters:energy_upgrade')],
                time: 100 * 64,
                energy: 51200 * 64,
                id: `${id_prefix}energy_upgrade_from_energizing_rod_niotic`
            },
            {
                input1: Item.of('3x modularrouters:blank_module'),
                secondaries: [Item.of('3x prettypipes:high_retrieval_module')],
                outputs: [Item.of('3x modularrouters:puller_module_1')],
                id: `${id_prefix}puller_module_1`
            },
            {
                input1: Item.of('3x modularrouters:blank_module'),
                secondaries: [Item.of('3x prettypipes:high_extraction_module')],
                outputs: [Item.of('3x modularrouters:sender_module_1')],
                id: `${id_prefix}sender_module_1`
            },
            {
                input1: Item.of('3x modularrouters:blank_module'),
                secondaries: [Item.of('3x ppfluids:high_fluid_retrieval_module')],
                outputs: [Item.of('3x modularrouters:fluid_module')],
                id: `${id_prefix}fluid_module`
            },
            {
                input1: Item.of('3x modularrouters:blank_module'),
                secondaries: [Item.of('thermal:charge_bench')],
                outputs: [Item.of('3x modularrouters:energy_output_module')],
                id: `${id_prefix}energy_output_module`
            },
            {
                input1: Item.of('thermal:tar'),
                secondaries: [
                    'atum:ectoplasm',
                    Ingredient.of('2x #forge:dusts/quartz'),
                    Ingredient.of('5x #forge:dusts/lapis')
                ],
                outputs: ['kubejs:smoldering_lapis_lazuli_compound'],
                time: 400,
                energy: 204800,
                id: `${id_prefix}smoldering_lapis_lazuli_compound`
            },
            {
                input1: 'create:honeyed_apple',
                secondaries: [Ingredient.of('4x #forge:storage_blocks/arcane_gold')],
                outputs: ['minecraft:enchanted_golden_apple'],
                id: `${id_prefix}enchanted_golden_apple`
            },
            {
                input1: Item.of('mekanismtools:lapis_lazuli_helmet', '{Damage:0}').weakNBT(),
                secondaries: [Item.of('16x minecraft:book')],
                outputs: [Item.of('16x apotheosis:armor_head_book')],
                id: `${id_prefix}armor_head_book`
            },
            {
                input1: Item.of('mekanismtools:lapis_lazuli_chestplate', '{Damage:0}').weakNBT(),
                secondaries: [Item.of('16x minecraft:book')],
                outputs: [Item.of('16x apotheosis:armor_chest_book')],
                id: `${id_prefix}armor_chest_book`
            },
            {
                input1: Item.of('mekanismtools:lapis_lazuli_leggings', '{Damage:0}').weakNBT(),
                secondaries: [Item.of('16x minecraft:book')],
                outputs: [Item.of('16x apotheosis:armor_legs_book')],
                id: `${id_prefix}armor_legs_book`
            },
            {
                input1: Item.of('mekanismtools:lapis_lazuli_boots', '{Damage:0}').weakNBT(),
                secondaries: [Item.of('16x minecraft:book')],
                outputs: [Item.of('16x apotheosis:armor_feet_book')],
                id: `${id_prefix}armor_feet_book`
            },
            {
                input1: Item.of('botania:livingwood_bow', '{Damage:0}').weakNBT(),
                secondaries: [Item.of('16x minecraft:book')],
                outputs: [Item.of('16x apotheosis:bow_book')],
                id: `${id_prefix}bow_book`
            },
            {
                input1: Item.of('aquaculture:gold_fishing_rod', '{Damage:0}').weakNBT(),
                secondaries: [Item.of('16x minecraft:book')],
                outputs: [Item.of('16x apotheosis:fishing_rod_book')],
                id: `${id_prefix}fishing_rod_book`
            },
            {
                input1: Item.of('mekanismtools:lapis_lazuli_pickaxe', '{Damage:0}').weakNBT(),
                secondaries: [Item.of('16x minecraft:book')],
                outputs: [Item.of('16x apotheosis:digger_book')],
                id: `${id_prefix}digger_book`
            },
            {
                input1: Item.of('mekanismtools:lapis_lazuli_sword', '{Damage:0}').weakNBT(),
                secondaries: [Item.of('16x minecraft:book')],
                outputs: [Item.of('16x apotheosis:weapon_book')],
                id: `${id_prefix}weapon_book`
            },
            {
                input1: 'tconstruct:ender_slime_crystal',
                secondaries: [Item.of('16x minecraft:book')],
                outputs: [Item.of('16x apotheosis:scrap_tome')],
                id: `${id_prefix}scrap_tome`
            },
            {
                input1: 'tconstruct:sky_slime_crystal',
                secondaries: [Item.of('16x minecraft:book')],
                outputs: [Item.of('16x apotheosis:null_book')],
                id: `${id_prefix}null_book`
            },
            {
                input1: 'thermal:rf_coil',
                secondaries: [Item.of('8x minecraft:book')],
                outputs: [Item.of('8x pedestals:bookmagnet')],
                id: `${id_prefix}bookmagnet`
            },
            {
                input1: '#forge:ingots/invar',
                secondaries: [Item.of('8x minecraft:book')],
                outputs: [Item.of('8x pedestals:bookarea')],
                id: `${id_prefix}bookarea`
            },
            {
                input1: '#forge:ingots/lumium',
                secondaries: [Item.of('8x minecraft:book')],
                outputs: [Item.of('8x pedestals:bookrange')],
                id: `${id_prefix}bookrange`
            },
            {
                input1: '#forge:ingots/terminite',
                secondaries: [Item.of('8x minecraft:book')],
                outputs: [Item.of('8x pedestals:bookspeed')],
                id: `${id_prefix}bookspeed`
            },
            {
                input1: '#forge:ingots/infused_iron',
                secondaries: [Item.of('8x minecraft:book')],
                outputs: [Item.of('8x pedestals:bookcapacity')],
                id: `${id_prefix}bookcapacity`
            },
            {
                input1: '#forge:ingots/refined_radiance',
                secondaries: [Item.of('8x minecraft:book')],
                outputs: [Item.of('8x pedestals:bookadvanced')],
                id: `${id_prefix}bookadvanced`
            },
            {
                input1: 'quark:white_crystal_cluster',
                secondaries: [Item.of('4x glassential:glass_ghostly')],
                outputs: [Item.of('4x atum:crystal_glass')],
                id: `${id_prefix}crystal_glass`
            },
            {
                input1: 'quark:white_crystal',
                secondaries: [Item.of('3x glassential:glass_ghostly')],
                outputs: [Item.of('4x atum:crystal_glass')],
                id: `${id_prefix}crystal_glass_2`
            },
            {
                input1: Ingredient.of('12x #forge:ingots/refined_radiance'),
                secondaries: ['astralsorcery:shifting_star', 'botania:laputa_shard'],
                outputs: ['kubejs:laputian_ingot'],
                time: 100 * 64,
                energy: 51200 * 64,
                id: `${id_prefix}laputian_ingot`
            }
        ]
    };

    data.recipes.forEach((recipe) => {
        const re = event.recipes.immersiveengineering
            .arc_furnace(recipe.outputs, recipe.input1, recipe.secondaries)
            .id(recipe.id);

        if (recipe.time) {
            re.time(recipe.time);
        }

        if (recipe.energy) {
            re.energy(recipe.energy);
        }
    });
});
