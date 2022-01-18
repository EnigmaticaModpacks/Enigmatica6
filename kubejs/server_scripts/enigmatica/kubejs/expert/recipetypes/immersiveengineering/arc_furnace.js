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
                input1: Item.of(Item.of('powah:energizing_rod_basic').ignoreNBT()),
                secondaries: ['mekanismgenerators:laser_focus_matrix', Item.of('4x modularrouters:blank_upgrade')],
                outputs: [Item.of('4x modularrouters:energy_upgrade')],
                time: 100 * 4,
                energy: 51200 * 4,
                id: `${id_prefix}energy_upgrade_from_energizing_rod_basic`
            },
            {
                input1: Item.of(Item.of('powah:energizing_rod_hardened').ignoreNBT()),
                secondaries: ['mekanismgenerators:laser_focus_matrix', Item.of('10x modularrouters:blank_upgrade')],
                outputs: [Item.of('10x modularrouters:energy_upgrade')],
                time: 100 * 10,
                energy: 51200 * 10,
                id: `${id_prefix}energy_upgrade_from_energizing_rod_hardened`
            },
            {
                input1: Item.of(Item.of('powah:energizing_rod_blazing').ignoreNBT()),
                secondaries: ['mekanismgenerators:laser_focus_matrix', Item.of('34x modularrouters:blank_upgrade')],
                outputs: [Item.of('34x modularrouters:energy_upgrade')],
                time: 100 * 34,
                energy: 51200 * 34,
                id: `${id_prefix}energy_upgrade_from_energizing_rod_blazing`
            },
            {
                input1: Item.of(Item.of('powah:energizing_rod_niotic').ignoreNBT()),
                secondaries: ['mekanismgenerators:laser_focus_matrix', Item.of('64x modularrouters:blank_upgrade')],
                outputs: [Item.of('64x modularrouters:energy_upgrade')],
                time: 100 * 64,
                energy: 51200 * 64,
                id: `${id_prefix}energy_upgrade_from_energizing_rod_niotic`
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
