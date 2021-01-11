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

        gear_unification(event, material, ingot, gem, gear);
        rod_unification(event, material, ingot, gem, rod);

        astralsorcery_ore_processing_infuser(event, material, ore, ingot, gem);

        bloodmagic_ore_processing_alchemy(event, material, ore, dust, gem);
        bloodmagic_ore_processing_arc(event, material, ore, ingot, clump, dirtyDust, dust, gem);

        create_ore_processing_with_secondary_outputs(event, material, crushedOre);
        create_gem_processing(event, material, ore, gem, dust);
        create_press_plates(event, material, gem, plate);

        immersiveengineering_gem_processing(event, material, dust, gem);
        immersiveengineering_ore_processing(event, material, ore, gem);
        immersiveengineering_press_plates(event, material, ingot, gem, plate);

        occultism_ore_crushing(event, material, ore, dust, gem);
        occultism_ingot_gem_crushing(event, material, ingot, dust, gem);

        pedestals_ore_crushing(event, material, ore, dust, gem);

        thermal_press_wires(event, material, wire);
        thermal_press_plates(event, material, gem, plate);
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

function gear_unification(event, material, ingot, gem, gear) {
    if (gear == air) {
        return;
    }

    var output = item.of(gear, 4),
        input,
        mold = 'immersiveengineering:mold_gear';

    if (ingot != air) {
        input = '#forge:ingots/' + material;
    } else if (gem != air) {
        input = '#forge:gems/' + material;
    } else {
        return;
    }

    // Implemented by Thermal
    // event.recipes.thermal.press(gear, [item.of(gearInput, 4), 'thermal:press_gear_die']);

    event.recipes.immersiveengineering.metal_press(output, input, mold);
    event.shaped(gear, [' B ', 'BAB', ' B '], {
        A: '#forge:nuggets/iron',
        B: input
    });
}

function rod_unification(event, material, ingot, gem, rod) {
    if (rod == air) {
        return;
    }

    event.remove({ type: 'minecraft:crafting_shaped', output: rod });

    var output = item.of(rod, 2),
        input,
        mold = 'immersiveengineering:mold_rod';

    if (ingot != air) {
        input = '#forge:ingots/' + material;
    } else if (gem != air) {
        input = '#forge:gems/' + material;
    } else {
        return;
    }

    event.recipes.thermal.press(output, [input, mold]).energy(2400);
    event.recipes.immersiveengineering.metal_press(output, input, mold);
    event.shaped(output, [' A ', ' A ', '   '], {
        A: input
    });
}

function astralsorcery_ore_processing_infuser(event, material, ore, ingot, gem) {
    if (ore == air) {
        return;
    }

    blacklistedMaterials = ['redstone', 'lapis', 'emerald', 'diamond', 'iron'];
    for (var i = 0; i < blacklistedMaterials.length; i++) {
        if (blacklistedMaterials[i] == material) {
            return;
        }
    }

    var input = 'forge:ores/' + material,
        output,
        count;
    if (gem != air) {
        output = gem;
        count = 5;
    } else if (ingot != air) {
        output = ingot;
        count = 3;
    } else {
        return;
    }

    event.custom({
        type: 'astralsorcery:infuser',
        fluidInput: 'astralsorcery:liquid_starlight',
        input: {
            tag: input
        },
        output: {
            item: output,
            count: count
        },
        consumptionChance: 0.1,
        duration: 100,
        consumeMultipleFluids: false,
        acceptChaliceInput: true,
        copyNBTToOutputs: false
    });
}

function bloodmagic_ore_processing_alchemy(event, material, ore, dust, gem) {
    if (ore == air || material == 'iron' || material == 'gold') {
        return;
    }

    var inputs = ['#forge:ores/' + material, '#bloodmagic:arc/cuttingfluid'],
        output,
        count = 2;

    if (gem != air) {
        output = item.of(gem, count);
    } else if (dust != air) {
        output = item.of(dust, count);
    } else {
        return;
    }

    event.recipes.bloodmagic.alchemytable(output, inputs).syphon(400).ticks(200).upgradeLevel(1);
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

function create_ore_processing_with_secondary_outputs(event, material, crushedOre) {
    if (crushedOre == air) {
        return;
    }

    var primaryOutput = crushedOre,
        stoneOutput = 'minecraft:cobblestone',
        primaryCount = 2,
        secondaryCount = 2,
        secondaryMaterial,
        processingTime = 300;

    switch (material) {
        case 'iron':
            secondaryMaterial = 'nickel';
            processingTime = 400;
            break;
        case 'nickel':
            secondaryMaterial = 'iron';
            processingTime = 350;
            break;
        case 'gold':
            secondaryMaterial = 'zinc';
            break;
        case 'copper':
            secondaryMaterial = 'gold';
            processingTime = 350;
            break;
        case 'aluminum':
            secondaryMaterial = 'iron';
            break;
        case 'lead':
            secondaryMaterial = 'silver';
            break;
        case 'silver':
            secondaryMaterial = 'lead';
            break;
        case 'uranium':
            secondaryMaterial = 'lead';
            processingTime = 400;
            break;
        case 'osmium':
            secondaryMaterial = 'tin';
            processingTime = 400;
            break;
        case 'tin':
            secondaryMaterial = 'osmium';
            processingTime = 350;
            break;
        case 'zinc':
            secondaryMaterial = 'gold';
            processingTime = 350;
            break;
        case 'iesnium':
            secondaryMaterial = 'iesnium';
            processingTime = 350;
            break;
        case 'cloggrum':
            secondaryMaterial = 'cloggrum';
            processingTime = 350;
            break;
        case 'froststeel':
            secondaryMaterial = 'froststeel';
            processingTime = 350;
            break;
        case 'regalium':
            secondaryMaterial = 'regalium';
            processingTime = 350;
            break;
        case 'utherium':
            secondaryMaterial = 'utherium';
            processingTime = 350;
            break;
        default:
            return;
    }

    var secondaryOutput = getPreferredItemInTag(ingredient.of('#create:crushed_ores/' + secondaryMaterial)).id;
    var primaryChance = 0.25,
        secondaryChance = 0.05;

    event.recipes.create
        .milling(
            [
                item.of(primaryOutput),
                item.of(primaryOutput, primaryCount).withChance(primaryChance),
                item.of(secondaryOutput, secondaryCount).withChance(secondaryChance)
            ],
            '#forge:ores/' + material
        )
        .processingTime(processingTime);

    primaryChance = 0.6;
    secondaryChance = 0.1;
    event.recipes.create
        .crushing(
            [
                item.of(primaryOutput),
                item.of(primaryOutput, primaryCount).withChance(primaryChance),
                item.of(secondaryOutput, secondaryCount).withChance(secondaryChance),
                Item.of(stoneOutput).withChance(0.125)
            ],
            '#forge:ores/' + material
        )
        .processingTime(processingTime);
}

function create_gem_processing(event, material, ore, gem, dust) {
    if (ore == air) {
        return;
    }

    var stoneOutput = 'minecraft:cobblestone',
        processingTime = 300,
        output = gem,
        primaryCount,
        secondaryCount;

    switch (material) {
        case 'redstone':
            primaryCount = 8;
            secondaryCount = 6;
            secondaryChance = 0.25;
            output = dust;
            break;
        case 'coal':
            primaryCount = 2;
            secondaryCount = 2;
            secondaryChance = 0.5;
            break;
        case 'diamond':
            primaryCount = 2;
            secondaryCount = 1;
            secondaryChance = 0.25;
            processingTime = 500;
            break;
        case 'emerald':
            primaryCount = 2;
            secondaryCount = 1;
            secondaryChance = 0.25;
            processingTime = 500;
            break;
        case 'lapis':
            primaryCount = 12;
            secondaryCount = 8;
            secondaryChance = 0.25;
            break;
        case 'quartz':
            primaryCount = 2;
            secondaryCount = 4;
            secondaryChance = 0.5;
            processingTime = 350;
            stoneOutput = 'minecraft:netherrack';
            break;
        case 'sulfur':
            primaryCount = 6;
            secondaryCount = 2;
            secondaryChance = 0.25;
            break;
        case 'apatite':
            primaryCount = 12;
            secondaryCount = 8;
            secondaryChance = 0.25;
            break;
        case 'fluorite':
            primaryCount = 6;
            secondaryCount = 3;
            secondaryChance = 0.25;
            break;
        case 'dimensional':
            primaryCount = 6;
            secondaryCount = 3;
            secondaryChance = 0.25;
            break;
        default:
            return;
    }

    event.recipes.create
        .crushing(
            [
                item.of(output, primaryCount),
                item.of(output, secondaryCount).withChance(secondaryChance),
                Item.of(stoneOutput).withChance(0.125)
            ],
            '#forge:ores/' + material
        )
        .processingTime(processingTime);
}

function create_press_plates(event, material, gem, plate) {
    if (plate == air || gem == air) {
        return;
    }

    var output = plate;
    var input = '#forge:gems/' + material;

    event.recipes.create.pressing(output, input);
}

function immersiveengineering_gem_processing(event, material, dust, gem) {
    if (gem == air || dust == air) {
        return;
    }

    var output = dust,
        input = '#forge:gems/' + material;

    event.recipes.immersiveengineering.crusher(output, input).energy(2000);
}

function immersiveengineering_ore_processing(event, material, ore, gem) {
    if (ore == air || gem == air) {
        return;
    }
    var count,
        input = '#forge:ores/' + material;

    switch (material) {
        case 'sulfur':
            count = 6;
            break;
        case 'apatite':
            count = 12;
            break;
        case 'dimensional':
            count = 8;
            break;
        case 'mana':
            count = 2;
            break;
        case 'cinnabar':
            count = 2;
            break;
        case 'potassium_nitrate':
            count = 2;
            break;
        case 'bitumen':
            count = 2;
            break;
        default:
            return;
    }
    var output = item.of(gem, count);

    event.recipes.immersiveengineering.crusher(output, input).energy(2000);
}

function immersiveengineering_press_plates(event, material, ingot, gem, plate) {
    if (plate == air) {
        return;
    }

    //var hammer = 'immersiveengineering:hammer';
    //event.shapeless(plate, [hammer, ingot]);
    event.remove({ id: 'immersiveengineering:crafting/plate_' + material + '_hammering' });

    blacklistedMaterials = [
        'iron',
        'gold',
        'copper',
        'aluminum',
        'silver',
        'lead',
        'nickel',
        'uranium',
        'osmium',
        'tin',
        'zinc',
        'bronze',
        'brass',
        'constantan',
        'electrum',
        'steel',
        'invar'
    ];

    for (var i = 0; i < blacklistedMaterials.length; i++) {
        if (blacklistedMaterials[i] == material) {
            return;
        }
    }

    var output = plate,
        mold = 'immersiveengineering:mold_plate';
    if (ingot != air) {
        input = '#forge:ingots/' + material;
    } else if (gem != air) {
        input = '#forge:gems/' + material;
    } else {
        return;
    }

    event.recipes.immersiveengineering.metal_press(output, input, mold).energy(2400);
}

function occultism_ore_crushing(event, material, ore, dust, gem) {
    if (ore == air) {
        return;
    }
    var count;
    switch (material) {
        case 'redstone':
            count = 6;
            break;
        case 'coal':
            count = 4;
            break;
        case 'lapis':
            count = 9;
            break;
        case 'quartz':
            count = 3;
            break;
        case 'sulfur':
            count = 6;
            break;
        case 'apatite':
            count = 12;
            break;
        case 'fluorite':
            count = 6;
            break;
        case 'dimensional':
            count = 8;
            break;
        default:
            count = 2;
    }

    var output,
        input = 'forge:ores/' + material,
        output = dust;
    if (gem != air) {
        output = gem;
    }

    event.custom({
        type: 'occultism:crushing',
        ingredient: {
            tag: input
        },
        result: {
            item: output,
            count: count
        },
        crushing_time: 100
    });
}

function occultism_ingot_gem_crushing(event, material, ingot, dust, gem) {
    if (dust == air) {
        return;
    }

    var input,
        output = dust;
    if (ingot != air) {
        input = 'forge:ingots/' + material;
    } else if (gem != air) {
        input = 'forge:gems/' + material;
    } else {
        return;
    }

    event.custom({
        type: 'occultism:crushing',
        ingredient: {
            tag: input
        },
        result: {
            item: output,
            count: 1
        },
        crushing_time: 100
    });
}
function pedestals_ore_crushing(event, material, ore, dust, gem) {
    if (ore == air) {
        return;
    }
    var count;
    switch (material) {
        case 'redstone':
            count = 6;
            break;
        case 'coal':
            count = 4;
            break;
        case 'lapis':
            count = 9;
            break;
        case 'quartz':
            count = 3;
            break;
        case 'sulfur':
            count = 6;
            break;
        case 'apatite':
            count = 12;
            break;
        case 'fluorite':
            count = 6;
            break;
        case 'dimensional':
            count = 8;
            break;
        default:
            count = 2;
    }

    var output,
        input = 'forge:ores/' + material,
        output = dust;
    if (gem != air) {
        output = gem;
    }

    event.custom({
        type: 'pedestals:pedestal_crushing',
        ingredient: {
            tag: input
        },
        result: {
            item: output,
            count: count
        }
    });
    event.remove({
        id: 'pedestals:pedestal_crushing/dust' + material
    });
}

function thermal_press_plates(event, material, gem, plate) {
    if (plate == air || gem == air) {
        return;
    }

    var output = plate;
    var input = '#forge:gems/' + material;

    event.recipes.thermal.press(item.of(output), input);
}

function thermal_press_wires(event, material, wire) {
    if (wire == air) {
        return;
    }

    var output = wire,
        input = item.of('#forge:ingots/' + material, 2),
        mold = 'immersiveengineering:mold_wire';
    event.recipes.thermal.press(output, [input, mold]).energy(2400);
}
