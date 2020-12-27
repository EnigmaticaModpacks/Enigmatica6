//priority: 900
events.listen('recipes', function (event) {
    materialsToUnify.forEach(function (material) {
        // enigmatica_ore_deposit_processing(event, material);
        immersiveengineering_gem_ore_processing(event, material);
        //occultism_ore_ingot_crushing(event, material);
        immersiveengineering_hammer_crafting_plates(event, material);
        bloodmagic_ore_processing_alchemy(event, material);
        bloodmagic_ore_processing_arc(event, material);
        astralsorcery_ore_processing_infuser(event, material);
        thermal_press_rods(event, material);
        thermal_press_wires(event, material);
        gear_unification(event, material);
    });
});

function getPreferredItemInTag(tag) {
    const pref = wrapArray(tag.stacks).sort(({ mod: a }, { mod: b }) => compareIndices(a, b, tag))[0] || item.of(air);
    // console.info('Preferred item: ' + tag + ' => ' + pref);
    return pref;
}
function tagIsEmpty(tag) {
    return getPreferredItemInTag(ingredient.of(tag)).id == air;
}

function pedestals_dust_smelting(event) {
    var pedestal_dusts = ['pedestals:dustsilver', 'pedestals:dustaluminum', 'pedestals:dustnickel'];

    pedestal_dusts.forEach(function (dust) {
        var ingotTag = ingredient.of('#forge:ingots/' + dust.replace('pedestals:dust', ''));

        event.recipes.minecraft.smelting(ingotTag, pedestal_dusts).xp(0.1);
        event.recipes.minecraft.blasting(ingotTag, pedestal_dusts).xp(0.1);
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

function bloodmagic_ore_processing_arc(event, material) {
    var data;
    if (tagIsEmpty('#forge:ores/' + material)) {
        return;
    }

    var gemTag = ingredient.of('#forge:gems/' + material);
    var gem = getPreferredItemInTag(gemTag).id;

    var clumpTag = ingredient.of('#mekanism:clumps/' + material);
    var clump = getPreferredItemInTag(clumpTag).id;

    var dirtyDustTag = ingredient.of('#mekanism:dirty_dusts/' + material);
    var dirtyDust = getPreferredItemInTag(dirtyDustTag).id;

    var dustTag = ingredient.of('#forge:dusts/' + material);
    var dust = getPreferredItemInTag(dustTag).id;

    if (gem != air) {
        data = {
            recipes: [
                {
                    input: 'forge:ores/' + material,
                    output: gem,
                    count: 5,
                    bonus: [],
                    tool: 'bloodmagic:arc/cuttingfluid'
                }
            ]
        };
    } else if (dust != air) {
        data = {
            recipes: [
                {
                    input: 'forge:ores/' + material,
                    output: dust,
                    count: 2,
                    bonus: [],
                    tool: 'bloodmagic:arc/cuttingfluid'
                },
                {
                    input: 'forge:ingots/' + material,
                    output: dust,
                    count: 1,
                    bonus: [],
                    tool: 'bloodmagic:arc/explosive'
                }
            ]
        };
    } else {
        return;
    }

    if (clump != air && dirtyDust != air) {
        data.recipes.push(
            {
                input: 'forge:ores/' + material,
                output: clump,
                count: 3,
                bonus: [],
                tool: 'bloodmagic:arc/explosive'
            },
            {
                input: 'mekanism:clumps/' + material,
                output: dirtyDust,
                count: 1,
                bonus: [
                    { chance: 0.05, type: { item: 'bloodmagic:corrupted_tinydust' } },
                    { chance: 0.01, type: { item: 'bloodmagic:corrupted_tinydust' } }
                ],
                tool: 'bloodmagic:arc/resonator'
            },
            {
                input: 'mekanism:dirty_dusts/' + material,
                output: dust,
                count: 1,
                bonus: [],
                tool: 'bloodmagic:arc/cuttingfluid'
            }
        );
    }

    data.recipes.forEach((recipe) => {
        event.recipes.bloodmagic.arc({
            type: 'bloodmagic:arc',
            input: {
                tag: recipe.input
            },
            tool: {
                tag: recipe.tool
            },
            addedoutput: recipe.bonus,
            output: {
                item: recipe.output,
                count: recipe.count
            },
            consumeingredient: false
        });
    });
}

function bloodmagic_ore_processing_alchemy(event, material) {
    var data;

    if (tagIsEmpty('#forge:ores/' + material)) {
        return;
    }

    var dustTag = ingredient.of('#forge:dusts/' + material);
    var dust = getPreferredItemInTag(dustTag).id;

    var gemTag = ingredient.of('#forge:gems/' + material);
    var gem = getPreferredItemInTag(gemTag).id;

    if (gem != air) {
        data = {
            input: 'forge:ores/' + material,
            output: gem,
            count: 2,
            tool: 'bloodmagic:arc/cuttingfluid'
        };
    } else if (dust != air) {
        data = {
            input: 'forge:ores/' + material,
            output: dust,
            count: 2,
            tool: 'bloodmagic:arc/cuttingfluid'
        };
    } else {
        return;
    }

    event.recipes.bloodmagic.alchemytable({
        type: 'bloodmagic:alchemytable',
        input: [
            {
                tag: data.input
            },
            {
                tag: data.tool
            }
        ],
        output: {
            item: data.output,
            count: data.count
        },
        syphon: 400,
        ticks: 200,
        upgradeLevel: 1
    });
}

function astralsorcery_ore_processing_infuser(event, material) {
    if (tagIsEmpty('#forge:ores/' + material)) {
        return;
    }
    blacklistedMaterials = ['redstone', 'lapis', 'emerald', 'diamond', 'iron', 'gold'];
    for (var i = 0; i < blacklistedMaterials.length; i++) {
        if (blacklistedMaterials[i] == material) {
            return;
        }
    }

    var data;
    var gemTag = ingredient.of('#forge:gems/' + material);
    var gem = getPreferredItemInTag(gemTag).id;

    var ingotTag = ingredient.of('#forge:ingots/' + material);
    var ingot = getPreferredItemInTag(ingotTag).id;

    if (gem != air) {
        data = {
            output: gem,
            count: 5
        };
    } else if (ingot != air) {
        data = {
            output: ingot,
            count: 3
        };
    } else {
        return;
    }

    event.recipes.astralsorcery.infuser({
        type: 'astralsorcery:infuser',
        fluidInput: 'astralsorcery:liquid_starlight',
        input: {
            tag: 'forge:ores/' + material
        },
        output: {
            item: data.output,
            count: data.count
        },
        consumptionChance: 0.1,
        duration: 100,
        consumeMultipleFluids: false,
        acceptChaliceInput: true,
        copyNBTToOutputs: false
    });
}

function thermal_press_rods(event, material) {
    var rodsTag = ingredient.of('#forge:rods/' + material);
    var rod = getPreferredItemInTag(rodsTag).id;

    if (rod == air) {
        return;
    }

    var input;
    var ingotTag = 'forge:ingots/' + material;
    var gemTag = 'forge:gems/' + material;
    if (!tagIsEmpty('#' + ingotTag)) {
        input = ingotTag;
    } else if (!tagIsEmpty('#' + gemTag)) {
        input = gemTag;
    } else {
        return;
    }
    event.recipes.thermal.press({
        type: 'thermal:press',
        input: [
            {
                tag: input
            },
            {
                item: 'immersiveengineering:mold_rod'
            }
        ],
        result: [
            {
                item: rod,
                count: 2.0
            }
        ],
        energy: 2400
    });
    event.recipes.immersiveengineering.metal_press(
        item.of(rod, 2),
        ingredient.of('#' + input),
        'immersiveengineering:mold_rod'
    );
}

function thermal_press_wires(event, material) {
    var wiresTag = ingredient.of('#forge:wires/' + material);
    var wire = getPreferredItemInTag(wiresTag).id;

    if (wire == air) {
        return;
    }

    event.recipes.thermal.press({
        type: 'thermal:press',
        input: [
            {
                tag: 'forge:ingots/' + material
            },
            {
                item: 'immersiveengineering:mold_wire'
            }
        ],
        result: [
            {
                item: wire,
                count: 2.0
            }
        ],
        energy: 2400
    });
}

function gear_unification(event, material) {
    var gearInput;
    var gearInputTag;
    var gearTag = ingredient.of('#forge:gears/' + material);
    var gear = getPreferredItemInTag(gearTag).id;

    if (gear == air) {
        return;
    }

    var ingotTag = ingredient.of('#forge:ingots/' + material);
    var ingot = getPreferredItemInTag(ingotTag).id;
    var gemTag = ingredient.of('#forge:gems/' + material);
    var gem = getPreferredItemInTag(gemTag).id;

    if (ingot == air && gem == air) {
        return;
    } else if (gem != air) {
        gearInput = gem;
        gearInputTag = 'forge:gems/' + material;
    } else {
        gearInput = ingot;
        gearInputTag = 'forge:ingots/' + material;
    }

    event.shaped(gear, [' B ', 'BAB', ' B '], {
        A: '#forge:nuggets/iron',
        B: gearInput
    });

    // Implemented by Thermal
    // event.recipes.thermal.press(gear, [item.of(gearInput, 4), 'thermal:press_gear_die']);

    event.recipes.immersiveengineering.metal_press({
        mold: { item: 'immersiveengineering:mold_gear' },
        result: { tag: 'forge:gears/' + material },
        conditions: [{ value: { tag: 'forge:gears/' + material, type: 'forge:tag_empty' }, type: 'forge:not' }],
        input: { count: 4, base_ingredient: { tag: gearInputTag } },
        energy: 2400
    });
}

// Currently unused
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

function immersiveengineering_hammer_crafting_plates(event, material) {
    var plate = getPreferredItemInTag(ingredient.of('#forge:plates/' + material)).id;
    if (plate == air) {
        return;
    }

    var hammer = 'immersiveengineering:hammer';
    var ingotTag = ingredient.of('#forge:ingots/' + material);
    var ingot = getPreferredItemInTag(ingotTag).id;

    var gemTag = ingredient.of('#forge:gems/' + material);
    var gem = getPreferredItemInTag(gemTag).id;

    if (ingot != air) {
        event.shapeless(plate, [hammer, ingot]);
        event.remove({ id: 'immersiveengineering:crafting/plate_' + material + '_hammering' });
        event.recipes.immersiveengineering.metal_press({
            mold: {
                item: 'immersiveengineering:mold_plate'
            },
            result: {
                tag: 'forge:plates/' + material
            },
            input: {
                tag: 'forge:ingots/' + material
            },
            energy: 2400
        });
    }

    if (gem != air) {
        var input = gem;
        var inputTag = 'forge:gems/' + material;

        event.shapeless(plate, [hammer, input]);
        event.recipes.immersiveengineering.metal_press({
            mold: {
                item: 'immersiveengineering:mold_plate'
            },
            result: {
                tag: 'forge:plates/' + material
            },
            input: {
                tag: inputTag
            },
            energy: 2400
        });
        event.recipes.thermal.press({
            ingredient: {
                tag: inputTag
            },
            result: [
                {
                    item: plate
                }
            ]
        });
        event.recipes.create.pressing({
            ingredients: [
                {
                    tag: inputTag
                }
            ],
            results: [
                {
                    item: plate
                }
            ]
        });
    }
}
