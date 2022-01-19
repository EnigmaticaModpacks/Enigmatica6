onEvent('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/immersiveengineering/arc_furnace';
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
