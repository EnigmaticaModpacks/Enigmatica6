//priority: 900
events.listen('recipes', (event) => {
    soilRegistry.forEach((soil) => {
        soils_botany_pots(event, soil);
    });

    cropRegistry.forEach((cropCategories) => {
        var type = cropCategories.type;
        cropCategories.crops.forEach((crop) => {
            crops_botany_pots(event, type, crop);
            crops_thermal_insolator(event, type, crop);
            crops_immersiveengineering_cloche(event, type, crop);
        });
    });

    treeRegistry.forEach((treeCategories) => {
        var type = treeCategories.type;
        treeCategories.trees.forEach((tree) => {
            trees_botany_pots(event, type, tree);
            trees_thermal_insolator(event, tree);
            trees_immersiveengineering_cloche(event, tree);
        });
    });
});

function soils_botany_pots(event, soil) {
    var input = soil.block,
        display;

    //exceptions
    switch (input) {
        case 'minecraft:lava_bucket':
            display = { block: 'minecraft:lava' };
            break;
        case 'minecraft:water_bucket':
            display = { block: 'minecraft:water' };
            break;
        default:
            display = { block: soil.block };
    }

    if (soil.block.includes('farmland')) {
        display.properties = { moisture: 7 };
    }

    event.custom({
        type: 'botanypots:soil',
        input: { item: input },
        display: display,
        categories: soil.categories,
        growthModifier: soil.growthModifier
    });
}

function crops_botany_pots(event, type, crop) {
    // Ticks Per Day: 24000
    // Ticks Per Minute: 1200
    var baseGrowthTicks = 24000,
        growthModifier = 1.0;

    // chance, minRolls, maxRolls
    var primary = [1.0, 10, 20],
        growthTicks = baseGrowthTicks,
        plantSecondary;

    if (crop.plantSecondary) {
        plantSecondary = crop.plantSecondary;
    }
    /*
    types:  cactus, cane_like, coral, crop_fiber, crop_fruit, 
            crop_gourd, crop_grain, crop_leafy, crop_legume,  
            crop_melon, crop_root, crop_seed, crop_vine, flower, 
            grass_like, kelp_like, lily_like, shroom, shrub, vine
    */
    switch (type) {
        case 'coral':
            growthModifier = 2.0;
            break;
        case 'crop_gourd':
            growthModifier = 1.5;
            break;
        case 'crop_melon':
            growthModifier = 1.5;
            break;
        case 'crop_seed':
            primary = [1.0, 10, 30];
            break;
        case 'flower':
            growthModifier = 0.5;
            break;
        case 'grass_like':
            growthModifier = 0.25;
            break;
        case 'lily_like':
            growthModifier = 0.25;
            break;
        case 'shroom':
            primary = [1.0, 10, 30];
            plantSecondary = crop.plant;
            break;
        case 'vine':
            //disabled
            return;
        default:
        //default
    }

    var input = crop.seed,
        outputs = [
            {
                chance: primary[0],
                output: { item: crop.plant },
                minRolls: primary[1],
                maxRolls: primary[2]
            }
        ];
    if (type.includes('crop_')) {
        //add seeds to crop type output
        outputs.push({
            chance: 0.2,
            output: { item: crop.seed },
            minRolls: 1,
            maxRolls: 5
        });
    }

    if (plantSecondary) {
        //add any secondary
        outputs.push({
            chance: 0.05,
            output: { item: plantSecondary },
            minRolls: 1,
            maxRolls: 5
        });
    }

    event.custom({
        type: 'botanypots:crop',
        seed: { item: input },
        categories: [crop.substrate],
        growthTicks: growthTicks * growthModifier,
        display: { block: crop.render },
        results: outputs
    });
}

function crops_thermal_insolator(event, type, crop) {
    var baseWater = 500,
        baseEnergy = 20000,
        waterModifier = 1.0,
        energyModifier = 1.0;

    var primaryChance = 2.0,
        secondaryChance = 1.1,
        plantSecondary;

    if (crop.plantSecondary) {
        plantSecondary = crop.plantSecondary;
    }

    if (crop.plantSecondaryRate == 'low') {
        secondaryChance = 0.01;
    }

    /*
    types:  cactus, cane_like, coral, crop_fiber, crop_fruit, 
            crop_gourd, crop_grain, crop_leafy, crop_legume,  
            crop_melon, crop_root, crop_seed, crop_vine, flower, 
            grass_like, kelp_like, lily_like, shroom, shrub, vine
    */
    switch (type) {
        case 'cactus':
            waterModifier = 0.1;
            energyModifier = 4.0;
            break;
        case 'cane_like':
            waterModifier = 3.0;
            energyModifier = 2.0;
            break;
        case 'coral':
            waterModifier = 2.0;
            energyModifier = 4.0;
            break;
        case 'crop_gourd':
            waterModifier = 2.0;
            energyModifier = 1.5;
            break;
        case 'crop_melon':
            waterModifier = 2.0;
            energyModifier = 1.5;
            primaryChance = 1.0;
            break;
        case 'crop_seed':
            primaryChance = 3.0;
            break;
        case 'flower':
            waterModifier = 1.5;
            energyModifier = 0.5;
            break;
        case 'grass_like':
            waterModifier = 1.5;
            energyModifier = 0.5;
            break;
        case 'lily_like':
            waterModifier = 3.0;
            energyModifier = 0.5;
            break;
        case 'shroom':
            waterModifier = 1.5;
            energyModifier = 0.5;
            plantSecondary = crop.plant;
            break;
        default:
        //default
    }

    var input = crop.seed,
        outputs = [Item.of(crop.plant).chance(primaryChance)];

    if (type.includes('crop_')) {
        //add seeds to crop type output
        outputs.push(Item.of(crop.seed).chance(secondaryChance));
    }

    if (plantSecondary) {
        //add any secondary
        outputs.push(Item.of(plantSecondary).chance(secondaryChance));
    }

    event.recipes.thermal
        .insolator(outputs, input)
        .water(baseWater * waterModifier)
        .energy(baseEnergy * energyModifier);
}

function crops_immersiveengineering_cloche(event, type, crop) {
    // Ticks Per Day: 24000
    // Ticks Per Minute: 1200
    var baseGrowthTicks = 800;

    var primaryCount = 2,
        secondaryCount = 1,
        plantSecondary,
        growthTicks = baseGrowthTicks,
        growthModifier = 1.0,
        renderBlock = crop.render,
        renderType = 'generic';

    if (crop.plantSecondary) {
        plantSecondary = crop.plantSecondary;
    }

    /*
    types:  cactus, cane_like, coral, crop_fiber, crop_fruit, 
            crop_gourd, crop_grain, crop_leafy, crop_legume,  
            crop_melon, crop_root, crop_seed, crop_vine, flower, 
            grass_like, kelp_like, lily_like, shroom, shrub, vine
    */
    switch (type) {
        case 'cactus':
            growthModifier = 1.5;
            renderType = 'stacking';
            break;
        case 'cane_like':
            renderType = 'stacking';
            break;
        case 'coral':
            //disabled
            return;
        case 'crop_fiber':
            primaryCount = 1;
            secondaryCount = 2;
            break;
        case 'crop_grain':
            growthModifier = 0.8;
            break;
        case 'crop_legume':
            growthModifier = 0.7;
            break;
        case 'crop_vine':
            growthModifier = 0.7;
            break;
        case 'crop_leafy':
            growthModifier = 0.6;
            break;
        case 'crop_melon':
            growthModifier = 1.5;
            break;
        case 'crop_gourd':
            growthModifier = 1.5;
            break;
        case 'flower':
            growthModifier = 0.5;
            break;
        case 'grass_like':
            growthModifier = 0.5;
            break;
        case 'shroom':
            growthModifier = 0.7;
            plantSecondary = crop.plant;
            break;
        case 'kelp_like':
            //disabled
            return;
        case 'lily_like':
            //disabled
            return;
        case 'vine':
            //disabled
            return;
        default:
        //default
    }
    var substrate = crop.substrate;
    switch (substrate) {
        case 'crimson_nylium':
            substrate = 'minecraft:crimson_nylium';
            break;
        case 'deepturf':
            substrate = 'undergarden:deepsoil';
            break;
        case 'end_stone':
            substrate = 'minecraft:end_stone';
            break;
        case 'glowcelium':
            substrate = 'byg:glowcelium_block';
            break;
        case 'grass':
            substrate = 'minecraft:grass_block';
            break;
        case 'mushroom':
            substrate = 'minecraft:mycelium';
            break;
        case 'nether':
            substrate = 'minecraft:netherrack';
            break;
        case 'sand':
            substrate = 'minecraft:sand';
            break;
        case 'soul_sand':
            substrate = 'minecraft:soul_sand';
            break;
        case 'warped_nylium':
            substrate = 'minecraft:warped_nylium';
            break;
        case 'shadow_grass':
            substrate = 'betterendforge:shadow_grass';
            break;
        case 'end_mycelium':
            substrate = 'betterendforge:end_mycelium';
            break;
        case 'end_moss':
            substrate = 'betterendforge:end_moss';
            break;
        case 'jungle_moss':
            substrate = 'betterendforge:jungle_moss';
            break;
        case 'crystal_moss':
            substrate = 'betterendforge:crystal_moss';
            break;
        case 'chorus_nylium':
            substrate = 'betterendforge:chorus_nylium';
            break;
        case 'pink_moss':
            substrate = 'betterendforge:pink_moss';
            break;
        case 'amber_moss':
            substrate = 'betterendforge:amber_moss';
            break;
        case 'water':
            //disabled
            return;
        default:
            substrate = 'minecraft:dirt';
    }

    var input = crop.seed,
        outputs = [Item.of(crop.plant, primaryCount)];

    if (type.includes('crop_')) {
        //add seeds to crop type output
        outputs.push(Item.of(crop.seed, secondaryCount));
        renderType = 'crop';
    }

    if (crop.plant.includes('kenaf') || crop.plant.includes('hemp')) {
        //override render type
        renderType = 'hemp';
    }

    if (type == 'crop_gourd' || crop.plant == 'minecraft:melon') {
        renderType = 'stem';
    }

    if (crop.plant == 'simplefarming:zucchini' || crop.plant == 'simplefarming:squash_block') {
        renderType = 'crop';
    }

    if (plantSecondary && crop.plantSecondaryRate != 'low') {
        //add any secondary
        outputs.push(Item.of(plantSecondary, secondaryCount));
    }
    event.recipes.immersiveengineering
        .cloche(outputs, input, substrate, {
            type: renderType,
            block: renderBlock
        })
        .time(growthTicks * growthModifier);
}

function trees_botany_pots(event, type, tree) {
    // Ticks Per Day: 24000
    // Ticks Per Minute: 1200
    var baseGrowthTicks = 24000,
        growthModifier = 1.0;

    // chance, minRolls, maxRolls
    var saplingRate = [1.0, 3, 6],
        trunkRate = [1.0, 15, 20],
        leafRate = [1.0, 15, 20],
        stickRate = [1.0, 5, 10],
        extraDecorationRate = [0.2, 5, 10],
        fruitRate = [0.5, 5, 10],
        growthTicks = baseGrowthTicks;

    var input = tree.sapling,
        outputs = [
            {
                chance: saplingRate[0],
                output: { item: tree.sapling },
                minRolls: saplingRate[1],
                maxRolls: saplingRate[2]
            }
        ];
    /*
    types:  tree, tree_shroom
    */
    if (type == 'tree') {
        outputs.push(
            {
                chance: trunkRate[0],
                output: { item: tree.trunk },
                minRolls: trunkRate[1],
                maxRolls: trunkRate[2]
            },
            {
                chance: leafRate[0],
                output: { item: tree.leaf },
                minRolls: leafRate[1],
                maxRolls: leafRate[2]
            }
        );
        if (tree.extraDecoration) {
            outputs.push({
                chance: extraDecorationRate[0],
                output: { item: tree.extraDecoration },
                minRolls: extraDecorationRate[1],
                maxRolls: extraDecorationRate[2]
            });
        }
        var stickType = 'minecraft:stick';
        if (type.includes('undergarden')) {
            //add sticks
            stickType = 'undergarden:twistytwig';
        }
        outputs.push({
            chance: stickRate[0],
            output: { item: stickType },
            minRolls: stickRate[1],
            maxRolls: stickRate[2]
        });
        if (tree.fruit) {
            //add any fruits
            outputs.push({
                chance: fruitRate[0],
                output: { item: tree.fruit },
                minRolls: fruitRate[1],
                maxRolls: fruitRate[2]
            });
        }
    }

    if (type == 'tree_shroom') {
        growthModifier = 0.5;
    }

    event.custom({
        type: 'botanypots:crop',
        seed: { item: input },
        categories: [tree.substrate],
        growthTicks: growthTicks * growthModifier,
        display: { block: input },
        results: outputs
    });
}

function trees_thermal_insolator(event, tree) {
    var baseWater = 500,
        baseEnergy = 20000,
        waterModifier = 3.0,
        energyModifier = 4.0;

    var saplingRate = 1.1,
        trunkRate = 3.1,
        leafRate = 4.5,
        extraDecorationRate = 0.5,
        fruitRate = 0.5;

    var input = tree.sapling,
        outputs = [
            Item.of(tree.sapling).chance(saplingRate),
            Item.of(tree.trunk).chance(trunkRate),
            Item.of(tree.leaf).chance(leafRate)
        ];

    if (tree.fruit) {
        //add any fruits
        outputs.push(Item.of(tree.fruit).chance(fruitRate));
    }

    if (tree.extraDecoration) {
        //add any extra decorations
        outputs.push(Item.of(tree.extraDecoration).chance(extraDecorationRate));
    }

    event.recipes.thermal
        .insolator(outputs, input)
        .water(baseWater * waterModifier)
        .energy(baseEnergy * energyModifier);
}

function trees_immersiveengineering_cloche(event, tree) {
    // Ticks Per Day: 24000
    // Ticks Per Minute: 1200
    var baseGrowthTicks = 800,
        growthModifier = 6;

    var saplingRate = 1,
        trunkRate = 3,
        leafRate = 4,
        extraDecorationRate = 1,
        fruitRate = 1,
        renderBlock = tree.sapling,
        renderType = 'generic';

    var input = tree.sapling,
        outputs = [Item.of(tree.sapling, saplingRate), Item.of(tree.trunk, trunkRate), Item.of(tree.leaf, leafRate)];

    var substrate = tree.substrate;
    switch (substrate) {
        case 'crimson_nylium':
            substrate = 'minecraft:crimson_nylium';
            break;
        case 'deepturf':
            substrate = 'undergarden:deepsoil';
            break;
        case 'end_stone':
            substrate = 'minecraft:end_stone';
            break;
        case 'glowcelium':
            substrate = 'byg:glowcelium_block';
            break;
        case 'mushroom':
            substrate = 'minecraft:mycelium';
            break;
        case 'nether':
            substrate = 'minecraft:netherrack';
            break;
        case 'warped_nylium':
            substrate = 'minecraft:warped_nylium';
            break;
        case 'jungle_moss':
            substrate = 'betterendforge:jungle_moss';
            break;
        case 'end_moss':
            substrate = 'betterendforge:end_moss';
            break;
        case 'amber_moss':
            substrate = 'betterendforge:amber_moss';
            break;
        case 'pink_moss':
            substrate = 'betterendforge:pink_moss';
            break;
        case 'chorus_nylium':
            substrate = 'betterendforge:chorus_nylium';
            break;
        case 'end_moss':
            substrate = 'betterendforge:end_moss';
            break;
        case 'shadow_grass':
            substrate = 'betterendforge:shadow_grass';
            break;
        default:
            substrate = 'minecraft:dirt';
    }

    if (tree.fruit) {
        //add any fruits
        outputs.push(Item.of(tree.fruit, fruitRate));
    }

    if (tree.extraDecoration) {
        //add any extra decorations
        outputs.push(Item.of(tree.extraDecoration, extraDecorationRate));
    }
    event.recipes.immersiveengineering
        .cloche(outputs, input, substrate, {
            type: renderType,
            block: renderBlock
        })
        .time(baseGrowthTicks * growthModifier);
}
