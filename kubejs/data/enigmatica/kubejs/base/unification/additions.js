//priority: 975
events.listen('recipes', function (event) {
    appliedenergistics2_gem_processing(event);
    pedestals_dust_smelting(event);

    materialsToUnify.forEach(function (material) {
        console.log('Unifying ' + material + '...');
        enigmatica_ore_deposit_processing(event, material);
        appliedenergistics2_ore_ingot_gem_crushing(event, material);
        immersiveengineering_gem_ore_processing(event, material);
        //occultism_ore_ingot_crushing(event, material);
    });
});

function pedestals_dust_smelting(event) {
    var pedestal_dusts = ['pedestals:dustsilver', 'pedestals:dustaluminum', 'pedestals:dustnickel'];

    pedestal_dusts.forEach(function (dust) {
        var ingotTag = ingredient.of('#forge:ingots/' + dust.replace('pedestals:dust', ''));

        event.recipes.minecraft.smelting(ingotTag, pedestal_dusts).xp(0.1);
        event.recipes.minecraft.blasting(ingotTag, pedestal_dusts).xp(0.1);
    });
}

function appliedenergistics2_gem_processing(event) {
    var certus_quartz = 'certus_quartz';
    var charged_certus_quartz = 'charged_certus_quartz';

    event.recipes.immersiveengineering.crusher({
        secondaries: [],
        result: {
            base_ingredient: {
                tag: 'forge:gems/' + certus_quartz
            },
            count: 2
        },
        input: {
            tag: 'forge:ores/' + certus_quartz
        },
        energy: 2000
    });

    event.recipes.immersiveengineering.crusher({
        secondaries: [],
        result: {
            base_ingredient: {
                tag: 'forge:gems/' + charged_certus_quartz
            },
            count: 2
        },
        input: {
            tag: 'forge:ores/' + charged_certus_quartz
        },
        energy: 2000
    });

    event.recipes.immersiveengineering.crusher({
        secondaries: [],
        result: {
            tag: 'forge:dusts/' + certus_quartz
        },
        input: {
            tag: 'forge:gems/' + charged_certus_quartz
        },
        energy: 2000
    });

    event.recipes.mekanism.crushing({
        input: {
            ingredient: { tag: 'forge:gems/' + charged_certus_quartz }
        },
        output: { item: getPreferredItemInTag(ingredient.of('#forge:dusts/' + certus_quartz)).id, count: 1 }
    });
}

function immersiveengineering_gem_ore_processing(event, material) {
    var gemTag = ingredient.of('#forge:gems/' + material);
    var gem = getPreferredItemInTag(gemTag).id;

    var oreTag = ingredient.of('#forge:ores/' + material);
    var ore = getPreferredItemInTag(oreTag).id;

    var dustTag = ingredient.of('#forge:dusts/' + material);
    var dust = getPreferredItemInTag(dustTag).id;

    if (gem == air || dust == air) {
        return;
    }

    event.recipes.immersiveengineering.crusher({
        secondaries: [],
        result: {
            item: dust
        },
        input: {
            tag: 'forge:gems/' + material
        },
        energy: 2000
    });

    if (ore == air) {
        return;
    }
}

function enigmatica_ore_deposit_processing(event, material) {
    var oreDepositTag = ingredient.of('#forge:ore_deposits/' + material);
    var oreDeposit = oreDepositTag.first.id;

    var nuggetTag = ingredient.of('#forge:nuggets/' + material);
    var nugget = getPreferredItemInTag(nuggetTag).id;

    var dustTag = ingredient.of('#forge:dusts/' + material);
    var dust = getPreferredItemInTag(dustTag).id;

    if (oreDeposit == air || dust == air) {
        return;
    }

    if (nuggetTag.first.id == air) {
        event.recipes.minecraft.smelting(dust, oreDepositTag).xp(1.0);
        event.recipes.minecraft.blasting(dust, oreDepositTag).xp(1.0);
    } else {
        event.recipes.minecraft.smelting(nugget, oreDepositTag).xp(1.0);
        event.recipes.minecraft.blasting(nugget, oreDepositTag).xp(1.0);
    }

    event.recipes.mekanism.enriching({
        input: {
            ingredient: { tag: 'forge:ore_deposits/' + material }
        },
        output: { item: dust, count: 1 }
    });

    // event.recipes.create.crushing({
    //     ingredients: [
    //         {
    //             tag: 'forge:ore_deposits/' + material,
    //             count: 1
    //         }
    //     ],
    //     results: [
    //         {
    //             item: dust,
    //             count: 1
    //         },
    //         {
    //             item: dust,
    //             chance: 0.1,
    //             count: 1
    //         },
    //         {
    //             item: 'minecraft:dirt',
    //             chance: 0.5,
    //             count: 1
    //         }
    //     ],
    //     processingTime: 500
    // });

    event.recipes.immersiveengineering.crusher({
        secondaries: [],
        result: {
            item: dust
        },
        input: {
            tag: 'forge:ore_deposits/' + material
        },
        energy: 2000
    });

    // event.recipes.occultism.crushing({
    //     ingredient: {
    //         tag: 'forge:ore_deposits/' + material
    //     },

    //     result: {
    //         item: dust,
    //         count: 1
    //     },
    //     crushing_time: 200
    // });
}

function appliedenergistics2_ore_ingot_gem_crushing(event, material) {
    var oreDepositTag = ingredient.of('#forge:ore_deposits/' + material);
    var oreDeposit = getPreferredItemInTag(oreDepositTag).id;

    var dustTag = ingredient.of('#forge:dusts/' + material);
    var dust = getPreferredItemInTag(dustTag).id;

    var ingotTag = ingredient.of('#forge:ingots/' + material);
    var ingot = getPreferredItemInTag(ingotTag).id;

    var gemTag = ingredient.of('#forge:gems/' + material);
    var gem = getPreferredItemInTag(gemTag).id;
    console.log('gem: ' + gem);

    if (oreDeposit == air || dust == air) {
        return;
    }

    event.recipes.appliedenergistics2.grinder({
        input: {
            tag: 'forge:ores/' + material
        },
        result: {
            primary: {
                item: dust
            },
            optional: [
                {
                    item: dust
                }
            ]
        },
        turns: 8
    });

    if (ingot == air) {
        return;
    }

    event.recipes.appliedenergistics2.grinder({
        input: {
            tag: 'forge:ingots/' + material
        },
        result: {
            primary: {
                item: dust
            }
        },
        turns: 4
    });

    if (gem == air) {
        return;
    }

    event.recipes.appliedenergistics2.grinder({
        input: {
            tag: 'forge:gems/' + material
        },
        result: {
            primary: {
                item: dust
            }
        },
        turns: 4
    });
}

function occultism_ore_ingot_crushing(event, material, blacklistedMaterials) {
    if (!blacklistedMaterials) {
        blacklistedMaterials = ['redstone', 'lapis', 'emerald', 'diamond', 'quartz', 'coal'];
    }

    for (var i = 0; i < blacklistedMaterials.length; i++) {
        if (blacklistedMaterials[i] == material) {
            return;
        }
    }

    var oreDepositTag = ingredient.of('#forge:ore_deposits/' + material);
    var oreDeposit = getPreferredItemInTag(oreDepositTag).id;

    var dustTag = ingredient.of('#forge:dusts/' + material);
    var dust = getPreferredItemInTag(dustTag).id;

    var ingotTag = ingredient.of('#forge:ingots/' + material);
    var ingot = getPreferredItemInTag(ingotTag).id;

    if (oreDeposit == air || dust == air) {
        return;
    }

    event.recipes.occultism.crushing({
        ingredient: {
            tag: 'forge:ores/' + material
        },

        result: {
            item: dust,
            count: 2
        },
        crushing_time: 200
    });

    if (ingot == air) {
        return;
    }

    event.recipes.occultism.crushing({
        ingredient: {
            tag: 'forge:ingots/' + material
        },

        result: {
            item: dust,
            count: 1
        },
        crushing_time: 200
    });
}
