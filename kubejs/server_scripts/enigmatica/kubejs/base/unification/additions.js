//priority: 900
events.listen('recipes', function (event) {
    materialsToUnify.forEach(function (material) {
        var ore = getPreferredItemInTag(ingredient.of('#forge:ores/' + material)).id;
        var ingot = getPreferredItemInTag(ingredient.of('#forge:ingots/' + material)).id;
        var gem = getPreferredItemInTag(ingredient.of('#forge:gems/' + material)).id;

        var crushedOre = getPreferredItemInTag(ingredient.of('#create:crushed_ores/' + material)).id;
        var clump = getPreferredItemInTag(ingredient.of('#mekanism:clumps/' + material)).id;
        var dirtyDust = getPreferredItemInTag(ingredient.of('#mekanism:dirty_dusts/' + material)).id;
        var dust = getPreferredItemInTag(ingredient.of('#forge:dusts/' + material)).id;

        var plate = getPreferredItemInTag(ingredient.of('#forge:plates/' + material)).id;
        var gear = getPreferredItemInTag(ingredient.of('#forge:gears/' + material)).id;
        var rod = getPreferredItemInTag(ingredient.of('#forge:rods/' + material)).id;
        var wire = getPreferredItemInTag(ingredient.of('#forge:wires/' + material)).id;

        immersiveengineering_gem_ore_processing(event, material, dust, gem);
        occultism_ore_ingot_crushing(event, material, ore, ingot, dust, gem);
        immersiveengineering_hammer_crafting_plates(event, material, ingot, gem, plate);
        bloodmagic_ore_processing_alchemy(event, material, ore, dust, gem);
        bloodmagic_ore_processing_arc(event, material, ore, ingot, clump, dirtyDust, dust, gem);
        astralsorcery_ore_processing_infuser(event, material, ore, ingot, gem);
        thermal_press_rods(event, material, ingot, gem, rod);
        thermal_press_wires(event, material, wire);
        gear_unification(event, material, ingot, gem, gear);
        create_ore_processing_with_secondary_outputs(event, material, crushedOre);
        create_gem_processing(event, material, ore, gem);
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

//No longer appears to be used, delete?
/*
function pedestals_dust_smelting(event) {
    var pedestal_dusts = ['pedestals:dustsilver', 'pedestals:dustaluminum', 'pedestals:dustnickel'];

    pedestal_dusts.forEach(function (dust) {
        var ingotTag = ingredient.of('#forge:ingots/' + dust.replace('pedestals:dust', ''));

        event.recipes.minecraft.smelting(ingotTag, pedestal_dusts).xp(0.1);
        event.recipes.minecraft.blasting(ingotTag, pedestal_dusts).xp(0.1);
    });
}*/

function immersiveengineering_gem_ore_processing(event, material, dust, gem) {
    if (gem == air || dust == air) {
        return;
    }

    event.recipes.immersiveengineering.crusher({
        type: 'immersiveengineering.crusher',
        secondaries: [],
        result: {
            item: dust
        },
        input: {
            tag: 'forge:gems/' + material
        },
        energy: 2000
    });
}

function bloodmagic_ore_processing_arc(event, material, ore, ingot, clump, dirtyDust, dust, gem) {
    if (ore == air || material == 'iron' || material == 'gold') {
        return;
    }
    var data = {
        recipes: []
    };

    if (gem != air) {
        data.recipes.push({
            input: '#forge:ores/' + material,
            output: item.of(gem, 5),
            addedOutput: [],
            tool: '#bloodmagic:arc/cuttingfluid'
        });
    } else if (dust != air) {
        data.recipes.push({
            input: '#forge:ores/' + material,
            output: item.of(dust, 2),
            addedOutput: [],
            tool: '#bloodmagic:arc/cuttingfluid'
        });
    } else {
        return;
    }

    if (ingot != air) {
        data.recipes.push({
            input: '#forge:ingots/' + material,
            output: item.of(dust, 1),
            addedOutput: [],
            tool: '#bloodmagic:arc/explosive'
        });
    }

    if (clump != air && dirtyDust != air) {
        data.recipes.push(
            {
                input: '#forge:ores/' + material,
                output: item.of(clump, 3),
                addedOutput: [],
                tool: '#bloodmagic:arc/explosive'
            },
            {
                input: '#mekanism:clumps/' + material,
                output: item.of(dirtyDust, 1),
                addedOutput: [
                    item.of('bloodmagic:corrupted_tinydust').chance(0.05),
                    item.of('bloodmagic:corrupted_tinydust').chance(0.01)
                ],
                tool: '#bloodmagic:arc/resonator'
            },
            {
                input: '#mekanism:dirty_dusts/' + material,
                output: item.of(dust, 1),
                addedOutput: [],
                tool: '#bloodmagic:arc/cuttingfluid'
            }
        );
    }

    data.recipes.forEach((recipe) => {
        event.recipes.bloodmagic
            .arc(recipe.output, recipe.input, recipe.tool, recipe.addedOutput)
            .consumeIngredient(false);
    });
}

function bloodmagic_ore_processing_alchemy(event, material, ore, dust, gem) {
    if (material == 'iron' || material == 'gold') {
        return;
    }

    if (ore == air) {
        return;
    }

    var inputs = ['#forge:ores/' + material, '#bloodmagic:arc/cuttingfluid'];
    var output;

    if (gem != air) {
        output = item.of(gem, 2);
    } else if (dust != air) {
        output = item.of(dust, 2);
    } else {
        return;
    }

    event.recipes.bloodmagic.alchemytable(output, inputs).syphon(400).ticks(200).upgradeLevel(1);
}

function astralsorcery_ore_processing_infuser(event, material, ore, ingot, gem) {
    if (ore == air) {
        return;
    }

    blacklistedMaterials = ['redstone', 'lapis', 'emerald', 'diamond', 'iron', 'gold'];
    for (var i = 0; i < blacklistedMaterials.length; i++) {
        if (blacklistedMaterials[i] == material) {
            return;
        }
    }

    var data;
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

function thermal_press_rods(event, material, ingot, gem, rod) {
    if (rod == air) {
        return;
    }

    var input;
    if (ingot != air) {
        input = 'forge:ingots/' + material;
    } else if (gem != air) {
        input = 'forge:gems/' + material;
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

function thermal_press_wires(event, material, wire) {
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

function gear_unification(event, material, ingot, gem, gear) {
    var gearInput;
    var gearInputTag;

    if (gear == air) {
        return;
    }

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
        type: 'immersiveengineering.metal_press',
        mold: { item: 'immersiveengineering:mold_gear' },
        result: { tag: 'forge:gears/' + material },
        conditions: [{ value: { tag: 'forge:gears/' + material, type: 'forge:tag_empty' }, type: 'forge:not' }],
        input: { count: 4, base_ingredient: { tag: gearInputTag } },
        energy: 2400
    });
}

function occultism_ore_ingot_crushing(event, material, ore, ingot, dust, gem) {
    if (dust == air) {
        return;
    }

    var output = dust;
    if (gem != air) {
        output = gem;
    }

    if (ore != air) {
        event.recipes.occultism.crushing({
            type: 'occultism.crushing',
            ingredient: {
                tag: 'forge:ores/' + material
            },

            result: {
                item: output,
                count: 2
            },
            crushing_time: 200
        });
    }

    if (ingot != air) {
        event.recipes.occultism.crushing({
            type: 'occultism.crushing',
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

    if (gem != air) {
        event.recipes.occultism.crushing({
            type: 'occultism.crushing',
            ingredient: {
                tag: 'forge:gems/' + material
            },

            result: {
                item: dust,
                count: 1
            },
            crushing_time: 200
        });
    }
}

function immersiveengineering_hammer_crafting_plates(event, material, ingot, gem, plate) {
    if (plate == air) {
        return;
    }

    var hammer = 'immersiveengineering:hammer';

    if (ingot != air) {
        event.shapeless(plate, [hammer, ingot]);
        event.remove({ id: 'immersiveengineering:crafting/plate_' + material + '_hammering' });
        event.recipes.immersiveengineering.metal_press({
            type: 'immersiveengineering.metal_press',
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
            type: 'immersiveengineering.metal_press',
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
            type: 'thermal.press',
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
            type: 'create.pressing',
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

function create_ore_processing_with_secondary_outputs(event, material, crushedOre) {
    if (crushedOre == air) {
        return;
    }

    var secondary;
    var processingTime;
    switch (material) {
        case 'iron':
            secondary = 'nickel';
            processingTime = 400;
            break;
        case 'nickel':
            secondary = 'iron';
            processingTime = 350;
            break;
        case 'gold':
            secondary = 'zinc';
            processingTime = 300;
            break;
        case 'copper':
            secondary = 'gold';
            processingTime = 350;
            break;
        case 'aluminum':
            secondary = 'iron';
            processingTime = 300;
            break;
        case 'lead':
            secondary = 'silver';
            processingTime = 300;
            break;
        case 'silver':
            secondary = 'lead';
            processingTime = 300;
            break;
        case 'uranium':
            secondary = 'lead';
            processingTime = 400;
            break;
        case 'osmium':
            secondary = 'tin';
            processingTime = 400;
            break;
        case 'tin':
            secondary = 'osmium';
            processingTime = 350;
            break;
        case 'zinc':
            secondary = 'gold';
            processingTime = 350;
            break;
        case 'iesnium':
            secondary = 'iesnium';
            processingTime = 350;
            break;
        case 'cloggrum':
            secondary = 'cloggrum';
            processingTime = 350;
            break;
        case 'froststeel':
            secondary = 'froststeel';
            processingTime = 350;
            break;
        case 'regalium':
            secondary = 'regalium';
            processingTime = 350;
            break;
        case 'utherium':
            secondary = 'utherium';
            processingTime = 350;
            break;
        default:
            return;
    }

    var secondaryCrushedOre = getPreferredItemInTag(ingredient.of('#create:crushed_ores/' + secondary)).id;
    event.recipes.create.milling({
        type: 'create:milling',
        ingredients: [
            {
                tag: 'forge:ores/' + material
            }
        ],
        results: [
            {
                item: crushedOre
            },
            {
                item: crushedOre,
                chance: 0.25,
                count: 2
            },
            {
                item: secondaryCrushedOre,
                chance: 0.05,
                count: 2
            }
        ],
        processingTime: processingTime
    });

    event.recipes.create.crushing({
        type: 'create:crushing',
        ingredients: [
            {
                tag: 'forge:ores/' + material
            }
        ],
        results: [
            {
                item: crushedOre
            },
            {
                item: crushedOre,
                chance: 0.6,
                count: 2
            },
            {
                item: secondaryCrushedOre,
                chance: 0.1,
                count: 2
            },
            {
                item: 'minecraft:cobblestone',
                chance: 0.125
            }
        ],
        processingTime: processingTime
    });
}

function create_gem_processing(event, material, ore, gem) {
    if (gem == air || ore == air) {
        return;
    }

    var processingTime = 500;

    event.recipes.create.crushing({
        type: 'create:crushing',
        ingredients: [
            {
                tag: 'forge:ores/' + material
            }
        ],
        results: [
            {
                item: gem,
                count: 2
            },
            {
                item: gem,
                chance: 0.25,
                count: 2
            },
            {
                item: 'minecraft:cobblestone',
                chance: 0.125
            }
        ],
        processingTime: processingTime
    });
}
