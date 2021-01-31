//priority: 900
events.listen('recipes', function (event) {
    materialsToUnify.forEach(function (material) {
        var ore = getPreferredItemInTag(ingredient.of('#forge:ores/' + material)).id;
        var ingot = getPreferredItemInTag(ingredient.of('#forge:ingots/' + material)).id;
        var gem = getPreferredItemInTag(ingredient.of('#forge:gems/' + material)).id;

        var crushedOre = getPreferredItemInTag(ingredient.of('#create:crushed_ores/' + material)).id;
        var dust = getPreferredItemInTag(ingredient.of('#forge:dusts/' + material)).id;

        var plate = getPreferredItemInTag(ingredient.of('#forge:plates/' + material)).id;
        var gear = getPreferredItemInTag(ingredient.of('#forge:gears/' + material)).id;
        var rod = getPreferredItemInTag(ingredient.of('#forge:rods/' + material)).id;
        var wire = getPreferredItemInTag(ingredient.of('#forge:wires/' + material)).id;

        gear_unification(event, material, ingot, gem, gear);
        rod_unification(event, material, ingot, gem, rod);

        astralsorcery_ore_processing_infuser(event, material, ore, ingot, gem);

        bloodmagic_ore_processing_alchemy(event, material, ore, dust, gem);
        bloodmagic_ore_processing_arc(event, material, ore, dust, gem);

        create_ore_processing_with_secondary_outputs(event, material, crushedOre);
        create_gem_processing(event, material, ore, gem, dust);
        create_ingot_gem_milling(event, material, ingot, dust, gem);
        create_press_plates(event, material, gem, plate);

        emendatus_hammer_crushing(event, material, ore, dust);

        immersiveengineering_gem_crushing(event, material, dust, gem);
        immersiveengineering_ingot_crushing(event, material, dust, ingot);
        immersiveengineering_ore_processing(event, material, ore, gem);
        immersiveengineering_press_plates(event, material, ingot, gem, plate);

        occultism_ore_crushing(event, material, ore, dust, gem);
        occultism_ingot_gem_crushing(event, material, ingot, dust, gem);

        pedestals_ore_crushing(event, material, ore, dust, gem);
        pedestals_ingot_gem_crushing(event, material, ingot, dust, gem);

        thermal_press_wires(event, material, wire);
        thermal_press_plates(event, material, gem, plate);
    });

    dyeSources.forEach((recipe) => {
        botania_dye_pestle_mortar(event, recipe);
        create_dye_milling(event, recipe);
        immersiveengineering_dye_crusher(event, recipe);
        mekanism_dye_enriching(event, recipe);
        pedestals_dye_crushing(event, recipe);
        thermal_dye_centrifuge(event, recipe);
    });

    cropRegistry.forEach((cropCategories) => {
        botany_pots_crops(event, cropCategories);
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

//material unification functions
function gear_unification(event, material, ingot, gem, gear) {
    if (gear == air) {
        return;
    }

    var output = gear,
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

    event.recipes.immersiveengineering.metal_press(output, ingredient.of(input, 4), mold);
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
    if (ore == air || gem == air) {
        return;
    }

    var inputs = ['#forge:ores/' + material, '#bloodmagic:arc/cuttingfluid'],
        output = item.of(gem, 2);

    event.recipes.bloodmagic.alchemytable(output, inputs).syphon(400).ticks(200).upgradeLevel(1);
}

function bloodmagic_ore_processing_arc(event, material, ore, dust, gem) {
    var data = {
        recipes: []
    };

    if (ore != air && gem != air) {
        data.recipes.push({
            input: '#forge:ores/' + material,
            output: item.of(gem, 5),
            addedOutput: [],
            tool: '#bloodmagic:arc/cuttingfluid'
        });
    }

    if (gem != air && dust != air) {
        data.recipes.push({
            input: '#forge:gems/' + material,
            output: item.of(dust, 1),
            addedOutput: [],
            tool: '#bloodmagic:arc/explosive'
        });
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
        input = '#forge:ores/' + material,
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

    var outputs = [
        item.of(primaryOutput),
        item.of(primaryOutput, primaryCount).withChance(primaryChance),
        item.of(secondaryOutput, secondaryCount).withChance(secondaryChance)
    ];

    event.recipes.create.milling(outputs, input).processingTime(processingTime);

    primaryChance = 0.6;
    secondaryChance = 0.1;
    outputs = [
        item.of(primaryOutput),
        item.of(primaryOutput, primaryCount).withChance(primaryChance),
        item.of(secondaryOutput, secondaryCount).withChance(secondaryChance),
        Item.of(stoneOutput).withChance(0.125)
    ];
    event.recipes.create.crushing(outputs, input).processingTime(processingTime);
}

function create_gem_processing(event, material, ore, gem, dust) {
    if (ore == air) {
        return;
    }

    var stoneOutput = 'minecraft:cobblestone',
        processingTime = 300,
        output = gem,
        primaryCount,
        secondaryCount,
        input = '#forge:ores/' + material;

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
            primaryCount = 8;
            secondaryCount = 4;
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
            primaryCount = 8;
            secondaryCount = 4;
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
    var outputs = [
        item.of(output, primaryCount),
        item.of(output, secondaryCount).withChance(secondaryChance),
        Item.of(stoneOutput).withChance(0.125)
    ];

    event.recipes.create.crushing(outputs, input).processingTime(processingTime);
}

function create_ingot_gem_milling(event, material, ingot, dust, gem) {
    if (dust == air) {
        return;
    }

    var input,
        outputs = [item.of(dust, 1)],
        processingTime = 300;
    if (ingot != air) {
        input = '#forge:ingots/' + material;
    } else if (gem != air) {
        input = '#forge:gems/' + material;
    } else {
        return;
    }

    event.recipes.create.milling(outputs, input).processingTime(processingTime);
}

function create_press_plates(event, material, gem, plate) {
    if (plate == air || gem == air) {
        return;
    }

    var output = plate;
    var input = '#forge:gems/' + material;

    event.recipes.create.pressing(output, input);
}

function emendatus_hammer_crushing(event, material, ore, dust) {
    if (ore == air || dust == air) {
        return;
    }

    event.remove({ id: 'immersiveengineering:crafting/hammercrushing_' + material });
    event.replaceInput(
        { id: 'emendatusenigmatica:dust_from_chunk/' + material },
        'emendatusenigmatica:' + material + '_chunk',
        '#forge:ores/' + material
    );
}

function immersiveengineering_gem_crushing(event, material, dust, gem) {
    if (gem == air || dust == air) {
        return;
    }

    var output = dust,
        input = '#forge:gems/' + material;

    event.recipes.immersiveengineering.crusher(output, input).energy(2000);
}

function immersiveengineering_ingot_crushing(event, material, dust, ingot) {
    if (ingot == air || dust == air) {
        return;
    }

    if (material == 'signalum' || material == 'lumium' || material == 'enderium') {
        var output = dust,
            input = '#forge:ingots/' + material;

        event.recipes.immersiveengineering.crusher(output, input).energy(2000);
    }
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

    blacklistedMaterials = ['silver'];

    for (var i = 0; i < blacklistedMaterials.length; i++) {
        if (blacklistedMaterials[i] == material) {
            return;
        }
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

    blacklistedMaterials = ['silver'];

    for (var i = 0; i < blacklistedMaterials.length; i++) {
        if (blacklistedMaterials[i] == material) {
            return;
        }
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

function pedestals_ingot_gem_crushing(event, material, ingot, dust, gem) {
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
        type: 'pedestals:pedestal_crushing',
        ingredient: {
            tag: input
        },
        result: {
            item: output,
            count: 1
        }
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

    var output = item.of(wire, 2),
        input = '#forge:ingots/' + material,
        mold = 'immersiveengineering:mold_wire';
    event.recipes.thermal.press(output, [input, mold]).energy(2400);
}

//dye normalization functions
function botania_dye_pestle_mortar(event, recipe) {
    if (recipe.type == 'petal') {
        return;
    }

    var baseCount = 2,
        multiplier = 1;
    if (recipe.type == 'large') {
        multiplier = 2;
    }

    var count = baseCount * multiplier,
        output = Item.of(recipe.primary, count),
        inputs = [recipe.input, 'botania:pestle_and_mortar'];

    event.shapeless(output, inputs);
}

function create_dye_milling(event, recipe) {
    var baseCount = 2,
        multiplier = 1;
    if (recipe.type == 'large') {
        multiplier = 2;
    }

    var count = baseCount * multiplier,
        outputs = [
            Item.of(recipe.primary, count),
            Item.of(recipe.secondary).withCount(count).withChance(0.25),
            Item.of(recipe.tertiary).withCount(multiplier).withChance(0.05)
        ],
        input = recipe.input;

    event.recipes.create.milling(outputs, input);
}
function immersiveengineering_dye_crusher(event, recipe) {
    var baseCount = 2,
        multiplier = 1;
    if (recipe.type == 'large') {
        multiplier = 2;
    }
    var count = baseCount * multiplier,
        output = Item.of(recipe.primary, count),
        extras = [
            Item.of(recipe.secondary).withCount(count).withChance(0.25),
            Item.of(recipe.tertiary).withCount(multiplier).withChance(0.05)
        ],
        input = recipe.input;

    event.recipes.immersiveengineering.crusher(output, input, extras);
}
function mekanism_dye_enriching(event, recipe) {
    var baseCount = 3,
        multiplier = 1;
    if (recipe.type == 'large') {
        multiplier = 2;
    }

    var count = baseCount * multiplier,
        output = Item.of(recipe.primary, count),
        input = recipe.input;

    event.recipes.mekanism.enriching(output, input);
}
function pedestals_dye_crushing(event, recipe) {
    var baseCount = 2,
        multiplier = 1;
    if (recipe.type == 'large') {
        multiplier = 2;
    }

    var count = baseCount * multiplier,
        output = recipe.primary,
        input = recipe.input;

    event.custom({
        type: 'pedestals:pedestal_crushing',
        ingredient: {
            item: input
        },
        result: {
            item: output,
            count: count
        }
    });
}
function thermal_dye_centrifuge(event, recipe) {
    var baseCount = 2,
        multiplier = 1;
    if (recipe.type == 'large') {
        multiplier = 2;
    }

    var count = baseCount * multiplier,
        outputs = [
            Item.of(recipe.primary, count),
            Item.of(recipe.secondary).withCount(count).withChance(0.25),
            Item.of(recipe.tertiary).withCount(multiplier).withChance(0.05)
        ],
        input = recipe.input;

    event.recipes.thermal.centrifuge(outputs, input);
}

function botany_pots_crops(event, cropCategories) {
    var growthTicks = 1600;
    if (cropCategories.type == 'cactus') {
        growthTicks = 3200;
    }

    cropCategories.crops.forEach((crop) => {
        event.custom({
            type: 'botanypots:crop',
            seed: { item: crop.seed },
            categories: [crop.substrate],
            growthTicks: growthTicks,
            display: { block: crop.render },
            results: [
                {
                    chance: 0.75,
                    output: { item: crop.plant },
                    minRolls: 1,
                    maxRolls: 1
                },
                {
                    chance: 0.05,
                    output: { item: crop.plant },
                    minRolls: 1,
                    maxRolls: 2
                }
            ]
        });
    });
}
