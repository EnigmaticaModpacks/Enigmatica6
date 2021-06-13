//priority: 900
onEvent('recipes', (event) => {
    materialsToUnify.forEach((material) => {
        let ore = getPreferredItemInTag(Ingredient.of('#forge:ores/' + material)).id;
        let block = getPreferredItemInTag(Ingredient.of('#forge:storage_blocks/' + material)).id;
        let ingot = getPreferredItemInTag(Ingredient.of('#forge:ingots/' + material)).id;
        let nugget = getPreferredItemInTag(Ingredient.of('#forge:nuggets/' + material)).id;

        let gem = getPreferredItemInTag(Ingredient.of('#forge:gems/' + material)).id;
        let chunk = getPreferredItemInTag(Ingredient.of('#forge:chunks/' + material)).id;

        let crushedOre = getPreferredItemInTag(Ingredient.of('#create:crushed_ores/' + material)).id;
        let dust = getPreferredItemInTag(Ingredient.of('#forge:dusts/' + material)).id;
        let shard = getPreferredItemInTag(Ingredient.of('#forge:shards/' + material)).id;

        let gear = getPreferredItemInTag(Ingredient.of('#forge:gears/' + material)).id;
        let rod = getPreferredItemInTag(Ingredient.of('#forge:rods/' + material)).id;
        let plate = getPreferredItemInTag(Ingredient.of('#forge:plates/' + material)).id;

        let liquid = Fluid.of(`emendatusenigmatica:molten_${material}`);

        astralsorcery_ore_processing_infuser(event, material, ore, ingot, gem, shard);

        betterend_alloys(event, material, ore, ingot);

        bloodmagic_ore_processing_alchemy(event, material, ore, gem, shard);
        bloodmagic_ore_processing_arc(event, material, ore, dust, gem, shard);

        create_ore_metal_processing(event, material, crushedOre);
        create_ore_gem_processing(event, material, ore, gem, dust, shard);
        create_ingot_gem_milling(event, material, ingot, dust, gem);
        //TODO
        create_crushed_ore_washing(event, material, crushedOre, nugget);
        //TODO
        emendatus_liquid_casting(event, material, ore, gem, liquid);
        emendatus_hammer_crushing(event, material, ore, dust);
        emendatus_shapeless_transform(event, material, ore, chunk);

        immersiveengineering_ingot_crushing(event, material, dust, ingot);
        immersiveengineering_ore_processing(event, material, ore, gem, shard);
        immersiveengineering_ore_processing_with_secondary_outputs(event, material, ore, dust, ingot);
        immersiveengineering_hammer_crushing(event, material, ore, dust);
        immersiveengineering_gem_crushing(event, material, dust, gem);

        // TODO: Implement
        mekanism_5x(event, material); // dirty_dust, clump, shard, crystal, clean_slurry, dirty_slurry

        minecraft_ore_ingot_smelting(event, material, ore, ingot);
        minecraft_ore_gem_smelting(event, material, ore, gem);
        minecraft_dust_smelting(event, material, dust, ingot);

        //integrated_dynamics_gem_squeezing(event, material, ore, gem, dust, shard);
        //integrated_dynamics_ore_squeezing_with_secondary_outputs(event, material, ore, dust);
        //integrated_dynamics_ingot_gem_crushing(event, material, ingot, dust, gem);

        occultism_ore_crushing(event, material, ore, dust, gem, shard);
        occultism_ingot_gem_crushing(event, material, ingot, dust, gem);

        pedestals_ore_crushing(event, material, ore, dust, shard, gem);
        pedestals_ingot_gem_crushing(event, material, ingot, dust, gem);

        thermal_metal_ore_pulverizing(event, material, ore, dust, ingot);
        thermal_gem_ore_pulverizing(event, material, ore, dust, gem, shard);
        thermal_metal_casting(event, material, ingot, nugget, gear, rod, plate);
        thermal_gem_casting(event, material, gem, gear, rod, plate);

        tconstruct_metal_casting(event, material, block, ingot, nugget, gear, rod, plate);
        tconstruct_gem_casting(event, material, block, gem, gear, rod, plate);
    });
    //TODO
    function create_crushed_ore_washing(event, material, crushedOre, nugget) {}
    function emendatus_liquid_casting(event, material, ore, gem, liquid) {}
    function mekanism_5x(event, material) {}

    function astralsorcery_ore_processing_infuser(event, material, ore, ingot, gem, shard) {
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
        if (shard != air) {
            output = shard;
            count = 3;
        } else if (gem != air) {
            output = gem;
            count = 5;
        } else if (ingot != air) {
            output = ingot;
            count = 3;
        } else {
            return;
        }

        switch (material) {
            case 'dimensional':
                count = 9;
                break;
            case 'fluorite':
                count = 7;
                break;
            default:
                break;
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

    function betterend_alloys(event, material, ore, ingot) {
        if (ore == air || ingot == air) {
            return;
        }
        var tag = 'forge:ores/' + material;
        event.custom({
            type: 'betterendforge:alloying',
            ingredients: [{ tag: tag }, { tag: tag }],
            result: Ingredient.of(ingot, 3),
            experience: 2,
            smelttime: 300
        });
    }

    function bloodmagic_ore_processing_alchemy(event, material, ore, gem, shard) {
        if (ore == air || gem == air) {
            return;
        }

        var inputs = ['#forge:ores/' + material, '#bloodmagic:arc/cuttingfluid'],
            output = Item.of(gem, 2);
        if (shard != air) {
            output = Item.of(shard, 2);
        }

        event.recipes.bloodmagic.alchemytable(output, inputs).syphon(400).ticks(200).upgradeLevel(1);
    }

    function bloodmagic_ore_processing_arc(event, material, ore, dust, gem, shard) {
        var data = {
            recipes: []
        };
        var output;
        if (ore != air && gem != air) {
            output = Item.of(gem, 5);
            if (shard != air) {
                output = Item.of(shard, 3);
            }
            data.recipes.push({
                input: '#forge:ores/' + material,
                output: output,
                addedOutput: [],
                tool: '#bloodmagic:arc/cuttingfluid'
            });
        }

        if (gem != air && dust != air) {
            output = Item.of(dust, 1);
            data.recipes.push({
                input: '#forge:gems/' + material,
                output: output,
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

    function create_ore_metal_processing(event, material, crushedOre) {
        if (crushedOre == air) {
            return;
        }

        var primaryOutput = crushedOre,
            secondaryOutput,
            processingTime,
            stoneOutput = 'minecraft:cobblestone',
            primaryCount = 2,
            secondaryCount = 2,
            input = '#forge:ores/' + material,
            materialProperties;

        try {
            materialProperties = oreProcessingSecondaries[material];
        } catch (err) {
            return;
        }

        try {
            secondaryOutput = getPreferredItemInTag(
                Ingredient.of('#create:crushed_ores/' + materialProperties.secondary)
            ).id;
            processingTime = materialProperties.createProcessingTime;
        } catch (err) {
            secondaryOutput = crushedOre;
            processingTime = 400;
        }

        var primaryChance = 0.25,
            secondaryChance = 0.05;
        var outputs = [
            Item.of(primaryOutput),
            Item.of(primaryOutput, primaryCount).withChance(primaryChance),
            Item.of(secondaryOutput, secondaryCount).withChance(secondaryChance)
        ];
        event.recipes.create.milling(outputs, input).processingTime(processingTime);

        primaryChance = 0.6;
        secondaryChance = 0.1;
        outputs = [
            Item.of(primaryOutput),
            Item.of(primaryOutput, primaryCount).withChance(primaryChance),
            Item.of(secondaryOutput, secondaryCount).withChance(secondaryChance),
            Item.of(stoneOutput).withChance(0.125)
        ];
        event.recipes.create.crushing(outputs, input).processingTime(processingTime);
    }

    function create_ore_gem_processing(event, material, ore, gem, dust, shard) {
        if (ore == air) {
            return;
        }
        var materialProperties;
        //console.log('Create Ore Gem Processing: ' + material);

        try {
            materialProperties = gemProcessingProperties[material].create;
        } catch (err) {
            return;
        }

        var stoneOutput = materialProperties.stoneOutput,
            processingTime = materialProperties.processingTime,
            primaryCount = materialProperties.primaryCount,
            secondaryCount = materialProperties.secondaryCount,
            secondaryChance = materialProperties.secondaryChance,
            input = '#forge:ores/' + material;

        switch (materialProperties.output) {
            case 'dust':
                output = dust;
                break;
            case 'gem':
                output = gem;
                break;
            case 'shard':
                output = shard;
                break;
            default:
                return;
        }

        var outputs = [
            Item.of(output, primaryCount),
            Item.of(output, secondaryCount).withChance(secondaryChance),
            Item.of(stoneOutput).withChance(0.125)
        ];

        event.recipes.create
            .crushing(outputs, input)
            .processingTime(processingTime)
            .id(`create:crushing/${material}_ore`);
    }

    function create_ingot_gem_milling(event, material, ingot, dust, gem) {
        if (dust == air) {
            return;
        }

        var input,
            outputs = [Item.of(dust, 1)],
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

    function emendatus_hammer_crushing(event, material, ore, dust) {
        if (ore == air || dust == air) {
            return;
        }

        event.replaceInput(
            { id: 'emendatusenigmatica:dust_from_chunk/' + material },
            'emendatusenigmatica:' + material + '_chunk',
            '#forge:ores/' + material
        );
    }

    function emendatus_shapeless_transform(event, material, ore, chunk) {
        if (ore == air || chunk == air) {
            return;
        }
        if (material == 'mana') {
            material = 'arcane';
        }

        event.shapeless('emendatusenigmatica:' + material + '_ore', ['emendatusenigmatica:' + material + '_chunk']);
    }

    function immersiveengineering_hammer_crushing(event, material, ore, dust) {
        if (ore == air || dust == air) {
            return;
        }

        let output = dust,
            input = '#forge:ores/' + material,
            hammer = 'immersiveengineering:hammer';

        event.remove({ id: 'immersiveengineering:crafting/hammercrushing' + material });
        event.shapeless(output, [input, hammer]).id('kubejs:immersiveengineering_hammer_crushing/' + material);
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

    function immersiveengineering_ore_processing(event, material, ore, gem, shard) {
        if (ore == air || gem == air) {
            return;
        }
        var count,
            input = '#forge:ores/' + material,
            output = gem;

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
            case 'ender':
                count = 3;
                output = shard;
                break;
            case 'amber':
                count = 3;
                output = shard;
                break;
            default:
                return;
        }

        event.recipes.immersiveengineering.crusher(Item.of(output, count), input).energy(2000);
    }

    function immersiveengineering_ore_processing_with_secondary_outputs(event, material, ore, dust, ingot) {
        if (ore == air || dust == air || ingot == air) {
            return;
        }

        var primaryOutput = Item.of(dust, 2),
            secondaryChance = 0.1,
            input = '#forge:ores/' + material,
            materialProperties;

        try {
            materialProperties = oreProcessingSecondaries[material];
        } catch (err) {
            return;
        }

        try {
            secondaryOutput = getPreferredItemInTag(Ingredient.of('#forge:dusts/' + materialProperties.secondary)).id;
        } catch (err) {
            secondaryOutput = dust;
        }

        event.recipes.immersiveengineering
            .crusher(primaryOutput, input, [Item.of(secondaryOutput).chance(secondaryChance)])
            .id('immersiveengineering:crusher/ore_' + material);
    }

    function minecraft_ore_ingot_smelting(event, material, ore, ingot) {
        if (ore == air || ingot == air) {
            return;
        }

        blacklistedMaterials = ['ender'];

        for (var i = 0; i < blacklistedMaterials.length; i++) {
            if (blacklistedMaterials[i] == material) {
                return;
            }
        }

        var output = ingot,
            input = '#forge:ores/' + material;

        event.smelting(output, input).xp(0.7);
        event.blasting(output, input).xp(0.7);
    }

    function minecraft_ore_gem_smelting(event, material, ore, gem) {
        if (ore == air || gem == air) {
            return;
        }

        blacklistedMaterials = ['amber', 'ender'];

        for (var i = 0; i < blacklistedMaterials.length; i++) {
            if (blacklistedMaterials[i] == material) {
                return;
            }
        }

        var output = gem,
            input = '#forge:ores/' + material;

        event.smelting(output, input).xp(0.7);
        event.blasting(output, input).xp(0.7);
    }

    function minecraft_dust_smelting(event, material, dust, ingot) {
        if (ingot == air || dust == air) {
            return;
        }

        blacklistedMaterials = ['starmetal'];

        for (var i = 0; i < blacklistedMaterials.length; i++) {
            if (blacklistedMaterials[i] == material) {
                return;
            }
        }

        var output = ingot,
            input = '#forge:dusts/' + material;

        event.smelting(output, input).xp(0.7);
        event.blasting(output, input).xp(0.7);
    }

    function integrated_dynamics_gem_squeezing(event, material, ore, gem, dust, shard) {
        if (ore == air) {
            return;
        }
        var primaryCount,
            secondaryCount,
            secondaryChance = 0.25,
            output = gem,
            processingTime = 80,
            input = 'forge:ores/' + material;

        switch (material) {
            case 'redstone':
                primaryCount = 8;
                secondaryCount = 6;
                output = dust;
                break;
            case 'coal':
                primaryCount = 2;
                secondaryCount = 2;
                secondaryChance = 0.5;
                break;
            case 'diamond':
                primaryCount = 2;
                secondaryCount = 2;
                break;
            case 'emerald':
                primaryCount = 2;
                secondaryCount = 2;
                break;
            case 'lapis':
                primaryCount = 8;
                secondaryCount = 4;
                break;
            case 'quartz':
                primaryCount = 2;
                secondaryCount = 4;
                secondaryChance = 0.5;
                break;
            case 'apatite':
                primaryCount = 4;
                secondaryCount = 4;
                break;
            case 'fluorite':
                primaryCount = 6;
                secondaryCount = 3;
                break;
            case 'dimensional':
                primaryCount = 6;
                secondaryCount = 3;
                break;
            case 'arcane':
                primaryCount = 4;
                secondaryCount = 4;
                break;
            case 'ender':
                primaryCount = 2;
                secondaryCount = 2;
                output = shard;
                break;
            case 'amber':
                primaryCount = 2;
                secondaryCount = 2;
                output = shard;
                break;
            default:
                primaryCount = 2;
                secondaryCount = 1;
        }

        event.custom({
            type: 'integrateddynamics:squeezer',
            item: {
                tag: input
            },
            result: {
                items: [
                    {
                        item: {
                            item: output,
                            count: primaryCount
                        }
                    },
                    {
                        item: {
                            item: output,
                            count: secondaryCount
                        },
                        chance: secondaryChance
                    }
                ]
            }
        });

        event.custom({
            type: 'integrateddynamics:mechanical_squeezer',
            item: {
                tag: input
            },
            result: {
                items: [
                    {
                        item: {
                            item: output,
                            count: primaryCount
                        }
                    },
                    {
                        item: {
                            item: output,
                            count: secondaryCount
                        },
                        chance: secondaryChance
                    }
                ]
            },
            duration: processingTime
        });
    }

    function integrated_dynamics_ore_squeezing_with_secondary_outputs(event, material, ore, dust) {
        if (ore == air) {
            return;
        }

        var primaryOutput = dust,
            input = 'forge:ores/' + material,
            processingTime = 80,
            materialProperties;

        try {
            materialProperties = oreProcessingSecondaries[material];
        } catch (err) {
            return;
        }

        try {
            secondaryOutput = getPreferredItemInTag(Ingredient.of('#forge:dusts/' + materialProperties.secondary)).id;
        } catch (err) {
            secondaryOutput = dust;
        }

        event.custom({
            type: 'integrateddynamics:squeezer',
            item: {
                tag: input
            },
            result: {
                items: [
                    {
                        item: {
                            item: primaryOutput,
                            count: 1
                        }
                    },
                    {
                        item: {
                            item: secondaryOutput,
                            count: 1
                        },
                        chance: 0.05
                    }
                ]
            }
        });

        event.custom({
            type: 'integrateddynamics:mechanical_squeezer',
            item: {
                tag: input
            },
            result: {
                items: [
                    {
                        item: {
                            item: primaryOutput,
                            count: 1
                        }
                    },
                    {
                        item: {
                            item: primaryOutput,
                            count: 1
                        },
                        chance: 0.75
                    },
                    {
                        item: {
                            item: secondaryOutput,
                            count: 1
                        },
                        chance: 0.1
                    }
                ]
            },
            duration: processingTime
        });
    }

    function integrated_dynamics_ingot_gem_crushing(event, material, ingot, dust, gem) {
        if (dust == air) {
            return;
        }

        var input,
            output = dust,
            processingTime = 80;

        if (ingot != air) {
            input = 'forge:ingots/' + material;
        } else if (gem != air) {
            input = 'forge:gems/' + material;
        } else {
            return;
        }

        event.custom({
            type: 'integrateddynamics:squeezer',
            item: {
                tag: input
            },
            result: {
                items: [
                    {
                        item: {
                            item: output,
                            count: 1
                        }
                    }
                ]
            }
        });

        event.custom({
            type: 'integrateddynamics:mechanical_squeezer',
            item: {
                tag: input
            },
            result: {
                items: [
                    {
                        item: {
                            item: output,
                            count: 1
                        }
                    }
                ]
            },
            duration: processingTime
        });
    }

    function occultism_ore_crushing(event, material, ore, dust, gem, shard) {
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
        if (shard != air) {
            output = shard;
        } else if (gem != air) {
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

    function pedestals_ore_crushing(event, material, ore, dust, shard, gem) {
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

        if (shard != air) {
            output = shard;
        } else if (gem != air) {
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

    function thermal_metal_ore_pulverizing(event, material, ore, dust, ingot) {
        if (ore == air || dust == air || ingot == air) {
            return;
        }

        var primaryOutput = dust,
            stoneOutput = 'minecraft:gravel',
            primaryCount = 2,
            input = `#forge:ores/${material}`,
            experience = 0.2,
            materialProperties;

        try {
            materialProperties = oreProcessingSecondaries[material];
        } catch (err) {
            return;
        }

        try {
            secondaryOutput = getPreferredItemInTag(Ingredient.of(`#forge:dusts/${materialProperties.secondary}`)).id;
        } catch (err) {
            secondaryOutput = dust;
        }

        outputs = [
            Item.of(primaryOutput, primaryCount),
            Item.of(secondaryOutput).chance(0.1),
            Item.of(stoneOutput).chance(0.2)
        ];

        if (material == 'gold') {
            outputs.push(Item.of('emendatusenigmatica:cinnabar_gem').chance(0.05));
        }

        event.recipes.thermal
            .pulverizer(outputs, input)
            .experience(experience)
            .id(`thermal:machine/pulverizer/pulverizer_${material}_ore`);
    }

    function thermal_gem_ore_pulverizing(event, material, ore, dust, gem, shard) {
        if (ore == air) {
            return;
        }

        var primaryOutput = dust,
            stoneOutput = 'minecraft:gravel',
            primaryCount = 2,
            secondaryMaterial,
            input = '#forge:ores/' + material,
            experience = 0.2;

        switch (material) {
            case 'ender':
                secondaryMaterial = 'ender';
                stoneOutput = 'betterendforge:endstone_dust';
                primaryOutput = shard;
                break;
            case 'amber':
                secondaryMaterial = 'amber';
                stoneOutput = 'betterendforge:endstone_dust';
                primaryOutput = shard;
                break;
            case 'bitumen':
                secondaryMaterial = 'bitumen';
                primaryOutput = gem;
                break;
            case 'dimensional':
                secondaryMaterial = 'dimensional';
                primaryOutput = gem;
                primaryCount = 8;
                break;
            case 'mana':
                secondaryMaterial = 'mana';
                primaryOutput = gem;
                break;
            default:
                return;
        }

        var secondaryType = 'dusts';
        if (shard != air) {
            secondaryType = 'shards';
        } else if (gem != air) {
            secondaryType = 'gems';
        }

        var secondaryOutput = getPreferredItemInTag(
            Ingredient.of('#forge:' + secondaryType + '/' + secondaryMaterial)
        ).id;

        outputs = [
            Item.of(primaryOutput, primaryCount),
            Item.of(secondaryOutput).chance(0.1),
            Item.of(stoneOutput).chance(0.2)
        ];

        event.remove({
            input: input,
            mod: 'thermal',
            type: 'thermal:pulverizer'
        });
        event.recipes.thermal.pulverizer(outputs, input).experience(experience);
    }

    function thermal_metal_casting(event, material, ingot, nugget, gear, rod, plate) {
        if (!Fluid.exists(`tconstruct:molten_${material}`) || ingot == air) {
            return;
        }

        let recipes = [{ type: 'ingot', amount: 144, output: ingot, energy: 5000 }];
        if (nugget != air) {
            recipes.push({ type: 'nugget', amount: 16, output: nugget, energy: 555 });
        }
        if (gear != air) {
            recipes.push({ type: 'gear', amount: 576, output: gear, energy: 20000 });
        }
        if (rod != air) {
            recipes.push({ type: 'rod', amount: 72, output: rod, energy: 2500 });
        }
        if (plate != air) {
            recipes.push({ type: 'plate', amount: 144, output: plate, energy: 5000 });
        }

        recipes.forEach((recipe) => {
            event.recipes.thermal
                .chiller(recipe.output, [
                    Fluid.of(`tconstruct:molten_${material}`, recipe.amount),
                    `tconstruct:${recipe.type}_cast`
                ])
                .energy(recipe.energy)
                .id(`thermal:compat/tconstruct/chiller_tconstruct_${material}_${recipe.type}`);
        });
    }

    function thermal_gem_casting(event, material, gem, gear, rod, plate) {
        if (!Fluid.exists(`tconstruct:molten_${material}`) || gem == air) {
            return;
        }

        blacklistedMaterials = ['ender'];
        for (var i = 0; i < blacklistedMaterials.length; i++) {
            if (blacklistedMaterials[i] == material) {
                return;
            }
        }

        let recipes = [{ type: 'gem', amount: 144, output: gem, energy: 5000 }];

        if (gear != air) {
            recipes.push({ type: 'gear', amount: 576, output: gear, energy: 20000 });
        }
        if (rod != air) {
            recipes.push({ type: 'rod', amount: 72, output: rod, energy: 2500 });
        }
        if (plate != air) {
            recipes.push({ type: 'plate', amount: 144, output: plate, energy: 5000 });
        }

        recipes.forEach((recipe) => {
            event.recipes.thermal
                .chiller(recipe.output, [
                    Fluid.of(`tconstruct:molten_${material}`, recipe.amount),
                    `tconstruct:${recipe.type}_cast`
                ])
                .energy(recipe.energy)
                .id(`thermal:compat/tconstruct/chiller_tconstruct_${material}_${recipe.type}`);
        });
    }

    function tconstruct_metal_casting(event, material, block, ingot, nugget, gear, rod, plate) {
        if (!Fluid.exists(`tconstruct:molten_${material}`) || ingot == air) {
            return;
        }

        let recipes = [{ type: 'ingot', amount: 144, cooling: 57, output: ingot }];

        if (nugget != air) {
            recipes.push({ type: 'nugget', amount: 16, cooling: 19, output: nugget });
        }
        if (gear != air) {
            recipes.push({ type: 'gear', amount: 576, cooling: 114, output: gear });
        }
        if (rod != air) {
            recipes.push({ type: 'rod', amount: 72, cooling: 40, output: rod });
        }
        if (plate != air) {
            recipes.push({ type: 'plate', amount: 144, cooling: 57, output: plate });
        }

        let casts = ['gold', 'sand'];
        casts.forEach((cast) => {
            recipes.forEach((recipe) => {
                event
                    .custom({
                        type: 'tconstruct:casting_table',
                        cast: {
                            tag: `tconstruct:casts/${cast == 'sand' ? 'single_use' : 'multi_use'}/${recipe.type}`
                        },
                        cast_consumed: cast == 'sand' ? true : false,
                        fluid: {
                            name: `tconstruct:molten_${material}`,
                            amount: recipe.amount
                        },
                        result: recipe.output,
                        cooling_time: recipe.cooling
                    })
                    .id(`tconstruct:smeltery/casting/metal/${material}/${recipe.type}_${cast}_cast`);
            });
        });
        event
            .custom({
                type: 'tconstruct:casting_basin',
                fluid: {
                    name: `tconstruct:molten_${material}`,
                    amount: 1296
                },
                result: block,
                cooling_time: 171
            })
            .id(`tconstruct:smeltery/casting/metal/${material}/block`);
    }

    function tconstruct_gem_casting(event, material, block, gem, gear, rod, plate) {
        if (!Fluid.exists(`tconstruct:molten_${material}`) || gem == air) {
            return;
        }

        blacklistedMaterials = ['ender'];
        for (var i = 0; i < blacklistedMaterials.length; i++) {
            if (blacklistedMaterials[i] == material) {
                return;
            }
        }

        let recipes = [{ type: 'gem', amount: 144, cooling: 64, output: gem }];

        if (gear != air) {
            recipes.push({ type: 'gear', amount: 576, cooling: 256, output: gear });
        }
        if (rod != air) {
            recipes.push({ type: 'rod', amount: 72, cooling: 32, output: rod });
        }
        if (plate != air) {
            recipes.push({ type: 'plate', amount: 144, cooling: 64, output: plate });
        }

        let casts = ['gold', 'sand'];
        casts.forEach((cast) => {
            recipes.forEach((recipe) => {
                event
                    .custom({
                        type: 'tconstruct:casting_table',
                        cast: {
                            tag: `tconstruct:casts/${cast == 'sand' ? 'single_use' : 'multi_use'}/${recipe.type}`
                        },
                        cast_consumed: cast == 'sand' ? true : false,
                        fluid: {
                            name: `tconstruct:molten_${material}`,
                            amount: recipe.amount
                        },
                        result: recipe.output,
                        cooling_time: recipe.cooling
                    })
                    .id(`tconstruct:smeltery/casting/${material}/${recipe.type}_${cast}_cast`);
            });
        });
        event
            .custom({
                type: 'tconstruct:casting_basin',
                fluid: {
                    name: `tconstruct:molten_${material}`,
                    amount: 1296
                },
                result: block,
                cooling_time: 193
            })
            .id(`tconstruct:smeltery/casting/${material}/block`);
    }
});
