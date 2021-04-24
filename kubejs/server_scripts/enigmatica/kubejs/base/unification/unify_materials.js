//priority: 900
events.listen('recipes', (event) => {
    materialsToUnify.forEach((material) => {
        var ore = getPreferredItemInTag(Ingredient.of('#forge:ores/' + material)).id;
        var ingot = getPreferredItemInTag(Ingredient.of('#forge:ingots/' + material)).id;
        var gem = getPreferredItemInTag(Ingredient.of('#forge:gems/' + material)).id;
        var chunk = getPreferredItemInTag(Ingredient.of('#forge:chunks/' + material)).id;

        var crushedOre = getPreferredItemInTag(Ingredient.of('#create:crushed_ores/' + material)).id;
        var dust = getPreferredItemInTag(Ingredient.of('#forge:dusts/' + material)).id;
        var shard = getPreferredItemInTag(Ingredient.of('#forge:shards/' + material)).id;

        astralsorcery_ore_processing_infuser(event, material, ore, ingot, gem, shard);

        betterend_alloys(event, material, ore, ingot);

        bloodmagic_ore_processing_alchemy(event, material, ore, gem, shard);
        bloodmagic_ore_processing_arc(event, material, ore, dust, gem, shard);

        create_ore_processing_with_secondary_outputs(event, material, crushedOre);
        create_gem_processing(event, material, ore, gem, dust, shard);
        create_ingot_gem_milling(event, material, ingot, dust, gem);

        emendatus_hammer_crushing(event, material, ore, dust);
        emendatus_shapeless_transform(event, material, ore, chunk);

        immersiveengineering_ingot_crushing(event, material, dust, ingot);
        immersiveengineering_ore_processing(event, material, ore, gem, shard);
        immersiveengineering_ore_processing_with_secondary_outputs(event, material, ore, dust);
        immersiveengineering_hammer_crushing(event, material, ore, dust);
        immersiveengineering_gem_crushing(event, material, dust, gem);

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

        thermal_ore_pulverizing(event, material, ore, dust, gem, shard);
    });

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

        var secondaryOutput = getPreferredItemInTag(Ingredient.of('#create:crushed_ores/' + secondaryMaterial)).id;
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

    function create_gem_processing(event, material, ore, gem, dust, shard) {
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
                secondaryCount = 2;
                secondaryChance = 0.25;
                processingTime = 500;
                break;
            case 'emerald':
                primaryCount = 2;
                secondaryCount = 2;
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
            case 'ender':
                primaryCount = 2;
                secondaryCount = 2;
                secondaryChance = 0.25;
                output = shard;
                break;
            case 'amber':
                primaryCount = 2;
                secondaryCount = 2;
                secondaryChance = 0.25;
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

        event.recipes.create.crushing(outputs, input).processingTime(processingTime);
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

    function immersiveengineering_ore_processing_with_secondary_outputs(event, material, ore, dust) {
        if (ore == air) {
            return;
        }

        var primaryOutput = Item.of(dust, 2),
            secondaryMaterial,
            secondaryChance = 0.1,
            input = '#forge:ores/' + material;

        switch (material) {
            case 'iron':
                secondaryMaterial = 'nickel';
                break;
            case 'nickel':
                secondaryMaterial = 'iron';
                break;
            case 'gold':
                secondaryMaterial = 'zinc';
                break;
            case 'copper':
                secondaryMaterial = 'gold';
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
                break;
            case 'osmium':
                secondaryMaterial = 'tin';
                break;
            case 'tin':
                secondaryMaterial = 'osmium';
                break;
            case 'zinc':
                secondaryMaterial = 'gold';
                break;
            case 'iesnium':
                secondaryMaterial = 'iesnium';
                break;
            case 'cloggrum':
                secondaryMaterial = 'cloggrum';
                break;
            case 'froststeel':
                secondaryMaterial = 'froststeel';
                break;
            case 'regalium':
                secondaryMaterial = 'regalium';
                break;
            case 'utherium':
                secondaryMaterial = 'utherium';
                break;
            default:
                return;
        }

        var secondaryOutput = getPreferredItemInTag(Ingredient.of('#forge:dusts/' + secondaryMaterial)).id;

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

        blacklistedMaterials = ['amber'];

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
            secondaryMaterial,
            input = 'forge:ores/' + material,
            processingTime = 80;

        switch (material) {
            case 'iron':
                secondaryMaterial = 'nickel';
                break;
            case 'nickel':
                secondaryMaterial = 'iron';
                break;
            case 'gold':
                secondaryMaterial = 'zinc';
                break;
            case 'copper':
                secondaryMaterial = 'gold';
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
                break;
            case 'osmium':
                secondaryMaterial = 'tin';
                break;
            case 'tin':
                secondaryMaterial = 'osmium';
                break;
            case 'zinc':
                secondaryMaterial = 'gold';
                break;
            case 'iesnium':
                secondaryMaterial = 'iesnium';
                break;
            case 'cloggrum':
                secondaryMaterial = 'cloggrum';
                break;
            case 'froststeel':
                secondaryMaterial = 'froststeel';
                break;
            case 'regalium':
                secondaryMaterial = 'regalium';
                break;
            case 'utherium':
                secondaryMaterial = 'utherium';
                break;
            default:
                return;
        }

        var secondaryOutput = getPreferredItemInTag(Ingredient.of('#forge:dusts/' + secondaryMaterial)).id;

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

    function thermal_ore_pulverizing(event, material, ore, dust, gem, shard) {
        if (ore == air) {
            return;
        }

        var primaryOutput = dust,
            stoneOutput = 'minecraft:gravel',
            primaryCount = 2,
            secondaryMaterial,
            input = '#forge:ores/' + material,
            experience = 0.2;

        /*experience: 0.2,
    outputs: [
        Item.of('emendatusenigmatica:aluminum_dust', 2),
        Item.of('emendatusenigmatica:iron_dust').chance(0.1),
        Item.of('minecraft:gravel').chance(0.2)
    ]*/

        switch (material) {
            case 'nickel':
                secondaryMaterial = 'iron';
                break;
            case 'aluminum':
                secondaryMaterial = 'iron';
                break;
            case 'uranium':
                secondaryMaterial = 'lead';
                break;
            case 'osmium':
                secondaryMaterial = 'tin';
                break;
            case 'zinc':
                secondaryMaterial = 'gold';
                break;
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

        var secondaryOutput = getPreferredItemInTag(Ingredient.of('#forge:' + secondaryType + '/' + secondaryMaterial))
            .id;

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
});
