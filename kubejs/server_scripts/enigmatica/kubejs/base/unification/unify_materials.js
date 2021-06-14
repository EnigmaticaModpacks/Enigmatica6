//priority: 900
onEvent('recipes', (event) => {
    materialsToUnify.forEach((material) => {
        let ore = getPreferredItemInTag(Ingredient.of(`#forge:ores/${material}`)).id;
        let block = getPreferredItemInTag(Ingredient.of(`#forge:storage_blocks/${material}`)).id;
        let ingot = getPreferredItemInTag(Ingredient.of(`#forge:ingots/${material}`)).id;
        let nugget = getPreferredItemInTag(Ingredient.of(`#forge:nuggets/${material}`)).id;

        let gem = getPreferredItemInTag(Ingredient.of(`#forge:gems/${material}`)).id;
        let chunk = getPreferredItemInTag(Ingredient.of(`#forge:chunks/${material}`)).id;

        let crushed_ore = getPreferredItemInTag(Ingredient.of(`#create:crushed_ores/${material}`)).id;
        let dust = getPreferredItemInTag(Ingredient.of(`#forge:dusts/${material}`)).id;
        let shard = getPreferredItemInTag(Ingredient.of(`#forge:shards/${material}`)).id;

        let mek_crystal = getPreferredItemInTag(Ingredient.of(`#mekanism:crystals/${material}`)).id;
        let mek_shard = getPreferredItemInTag(Ingredient.of(`#mekanism:shards/${material}`)).id;
        let mek_clump = getPreferredItemInTag(Ingredient.of(`#mekanism:clumps/${material}`)).id;
        let mek_dirty_dust = getPreferredItemInTag(Ingredient.of(`#mekanism:dirty_dusts/${material}`)).id;

        let fragment = getPreferredItemInTag(Ingredient.of(`#bloodmagic:fragments/${material}`)).id;
        let gravel = getPreferredItemInTag(Ingredient.of(`#bloodmagic:gravels/${material}`)).id;

        let gear = getPreferredItemInTag(Ingredient.of(`#forge:gears/${material}`)).id;
        let rod = getPreferredItemInTag(Ingredient.of(`#forge:rods/${material}`)).id;
        let plate = getPreferredItemInTag(Ingredient.of(`#forge:plates/${material}`)).id;

        let liquid = Fluid.of(`emendatusenigmatica:molten_${material}`);

        astralsorcery_ore_processing_infuser(event, material, ore, ingot, gem, shard);

        betterend_alloys(event, material, ore, ingot);

        bloodmagic_metal_ore_processing(event, material, ore, fragment, gravel, dust, ingot);
        bloodmagic_gem_ore_processing(event, material, ore, gem, shard, dust);
        bloodmagic_ingot_gem_crushing(event, material, ingot, dust, gem);

        create_metal_ore_processing(event, material, ore, crushed_ore, ingot, nugget);
        create_gem_ore_processing(event, material, ore, gem, dust, shard);
        create_ingot_gem_milling(event, material, ingot, dust, gem);

        //TODO
        emendatus_liquid_casting(event, material, ore, gem, liquid);
        emendatus_hammer_crushing(event, material, ore, dust);
        emendatus_shapeless_transform(event, material, ore, chunk);

        immersiveengineering_ingot_crushing(event, material, dust, ingot);
        immersiveengineering_gem_ore_processing(event, material, ore, dust, gem, shard);
        immersiveengineering_ore_processing_with_secondary_outputs(event, material, ore, dust, ingot);
        immersiveengineering_hammer_crushing(event, material, ore, dust);
        immersiveengineering_gem_crushing(event, material, dust, gem);

        mekanism_metal_ore_processing(
            event,
            material,
            ore,
            mek_crystal,
            mek_shard,
            mek_clump,
            mek_dirty_dust,
            dust,
            ingot
        );

        minecraft_ore_ingot_smelting(event, material, ore, ingot);
        minecraft_gem_ore_smelting(event, material, ore, gem);
        minecraft_dust_smelting(event, material, dust, ingot);

        occultism_gem_ore_crushing(event, material, ore, dust, gem, shard);
        occultism_metal_ore_crushing(event, material, ore, dust, ingot);
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
    function emendatus_liquid_casting(event, material, ore, gem, liquid) {}

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

        var input = `forge:ores/${material}`,
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
        var tag = `forge:ores/${material}`;
        event.custom({
            type: 'betterendforge:alloying',
            ingredients: [{ tag: tag }, { tag: tag }],
            result: Ingredient.of(ingot, 3),
            experience: 2,
            smelttime: 300
        });
    }

    function bloodmagic_metal_ore_processing(event, material, ore, fragment, gravel, dust, ingot) {
        if (ore == air || ingot == air || fragment == air) {
            return;
        }

        var secondaryOutput, materialProperties;

        try {
            materialProperties = oreProcessingSecondaries[material];
        } catch (err) {
            return;
        }

        try {
            secondaryOutput = getPreferredItemInTag(
                Ingredient.of(`#bloodmagic:fragments/${materialProperties.secondary}`)
            ).id;
        } catch (err) {
            secondaryOutput = fragment;
        }
        console.log(`BM Processing Fragment: ${fragment}`);
        console.log(`BM Processing Fragment: ${secondaryOutput}`);
        // Ore to Fragment in ARC
        event.recipes.bloodmagic
            .arc(Item.of(fragment, 3), `#forge:ores/${material}`, '#bloodmagic:arc/explosive', [
                Item.of(fragment, 2).chance(0.25),
                Item.of(secondaryOutput, 2).chance(0.25)
            ])
            .consumeIngredient(false)
            .id(`bloodmagic:arc/fragments${material}`);

        // Fragment to Gravel in ARC
        event.recipes.bloodmagic
            .arc(gravel, `#bloodmagic:fragments/${material}`, '#bloodmagic:arc/resonator', [
                Item.of('bloodmagic:corrupted_tinydust', 1).chance(0.05),
                Item.of('bloodmagic:corrupted_tinydust', 1).chance(0.01)
            ])
            .consumeIngredient(false)
            .id(`bloodmagic:arc/gravels${material}`);

        // Gravel to Dust in ARC
        event.recipes.bloodmagic
            .arc(dust, `#bloodmagic:gravels/${material}`, '#bloodmagic:arc/cuttingfluid', [])
            .consumeIngredient(false)
            .id(`bloodmagic:arc/dustsfrom_gravel_${material}`);

        // Ore to Dust in Alchemy
        event.recipes.bloodmagic
            .alchemytable(Item.of(dust, 3), ['#bloodmagic:arc/cuttingfluid', `#forge:ores/${material}`])
            .syphon(400)
            .ticks(200)
            .upgradeLevel(1)
            .id(`bloodmagic:alchemytable/sand_${material}`);
    }
    function bloodmagic_gem_ore_processing(event, material, ore, gem, shard, dust) {
        if (ore == air) {
            return;
        }
        var materialProperties;

        try {
            materialProperties = gemProcessingProperties[material].bloodmagic;
        } catch (err) {
            return;
        }

        var count = materialProperties.count,
            inputs = ['#bloodmagic:arc/cuttingfluid', `#forge:ores/${material}`];

        switch (gemProcessingProperties[material].output) {
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

        // Alchemy Table Processing
        event.recipes.bloodmagic.alchemytable(Item.of(output, count), inputs).syphon(400).ticks(200).upgradeLevel(1);
    }
    function bloodmagic_ingot_gem_crushing(event, material, ingot, dust, gem) {
        if (dust == air) {
            return;
        }

        var input,
            output = Item.of(dust, 1);
        if (ingot != air) {
            type = 'ingot';
            input = `#forge:ingots/${material}`;
        } else if (gem != air) {
            input = `#forge:gems/${material}`;
            type = 'gem';
        } else {
            return;
        }

        // Ingots and Gems to Dust in ARC
        event.recipes.bloodmagic
            .arc(output, input, '#bloodmagic:arc/explosive', [])
            .consumeIngredient(false)
            .id(`bloodmagic:arc/dustsfrom_${type}_${material}`);
    }

    function create_metal_ore_processing(event, material, ore, crushed_ore, ingot, nugget) {
        if (ore == air || crushed_ore == air || ingot == air) {
            return;
        }

        var primaryOutput = crushed_ore,
            secondaryOutput,
            processingTime,
            stoneOutput = 'minecraft:cobblestone',
            primaryCount = 2,
            secondaryCount = 2,
            input = `#forge:ores/${material}`,
            materialProperties;

        try {
            materialProperties = oreProcessingSecondaries[material];
        } catch (err) {
            return;
        }

        try {
            secondaryOutput = getPreferredItemInTag(
                Ingredient.of(`#create:crushed_ores/${materialProperties.secondary}`)
            ).id;
            processingTime = materialProperties.createProcessingTime;
        } catch (err) {
            secondaryOutput = crushed_ore;
            processingTime = 400;
        }
        // Milling - Lower rates
        var primaryChance = 0.25,
            secondaryChance = 0.05;
        var outputs = [
            Item.of(primaryOutput),
            Item.of(primaryOutput, primaryCount).withChance(primaryChance),
            Item.of(secondaryOutput, secondaryCount).withChance(secondaryChance)
        ];
        event.recipes.create
            .milling(outputs, input)
            .processingTime(processingTime)
            .id(`create:milling/${material}_ore`);

        // Crushing - Higher Rates
        primaryChance = 0.6;
        secondaryChance = 0.1;
        outputs = [
            Item.of(primaryOutput),
            Item.of(primaryOutput, primaryCount).withChance(primaryChance),
            Item.of(secondaryOutput, secondaryCount).withChance(secondaryChance),
            Item.of(stoneOutput).withChance(0.125)
        ];
        event.recipes.create
            .crushing(outputs, input)
            .processingTime(processingTime)
            .id(`create:crushing/${material}_ore`);

        // Washing
        (outputs = [Item.of(nugget, 10), Item.of(nugget, 5).withChance(0.5)]), (input = crushed_ore);

        event.recipes.create.splashing(outputs, input).id(`create:splashing/crushed_${material}_ore`);

        // Smelting and Blasting
        outputs = ingot;

        event.blasting(outputs, input).xp(0.1).id(`create:blasting/${material}_ingot_from_crushed`);
        event.smelting(outputs, input).xp(0.1).id(`create:smelting/${material}_ingot_from_crushed`);
    }

    function create_gem_ore_processing(event, material, ore, gem, dust, shard) {
        if (ore == air) {
            return;
        }
        var materialProperties;

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
            input = `#forge:ores/${material}`;

        switch (gemProcessingProperties[material].output) {
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
            input = `#forge:ingots/${material}`;
        } else if (gem != air) {
            input = `#forge:gems/${material}`;
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
            { id: `emendatusenigmatica:dust_from_chunk/${material}` },
            `emendatusenigmatica:${material}_chunk`,
            `#forge:ores/${material}`
        );
    }

    function emendatus_shapeless_transform(event, material, ore, chunk) {
        if (ore == air || chunk == air) {
            return;
        }
        if (material == 'mana') {
            material = 'arcane';
        }

        event.shapeless(`emendatusenigmatica:${material}_ore`, [`emendatusenigmatica:${material}_chunk`]);
    }

    function immersiveengineering_hammer_crushing(event, material, ore, dust) {
        if (ore == air || dust == air) {
            return;
        }

        let output = dust,
            input = `#forge:ores/${material}`,
            hammer = 'immersiveengineering:hammer';

        event.remove({ id: `immersiveengineering:crafting/hammercrushing${material}` });
        event.shapeless(output, [input, hammer]).id(`kubejs:immersiveengineering_hammer_crushing/${material}`);
    }

    function immersiveengineering_gem_crushing(event, material, dust, gem) {
        if (gem == air || dust == air) {
            return;
        }

        var output = dust,
            input = `#forge:gems/${material}`;

        event.recipes.immersiveengineering.crusher(output, input).energy(2000);
    }

    function immersiveengineering_ingot_crushing(event, material, dust, ingot) {
        if (ingot == air || dust == air) {
            return;
        }

        if (material == 'signalum' || material == 'lumium' || material == 'enderium') {
            var output = dust,
                input = `#forge:ingots/${material}`;

            event.recipes.immersiveengineering.crusher(output, input).energy(2000);
        }
    }

    function immersiveengineering_gem_ore_processing(event, material, ore, dust, gem, shard) {
        if (ore == air) {
            return;
        }

        var materialProperties;
        try {
            materialProperties = gemProcessingProperties[material].immersiveengineering;
        } catch (err) {
            return;
        }

        var input = `#forge:ores/${material}`,
            output;

        switch (gemProcessingProperties[material].output) {
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

        if (materialProperties.secondary) {
            event.recipes.immersiveengineering
                .crusher(Item.of(output, materialProperties.count), input, [
                    Item.of(materialProperties.secondary).chance(materialProperties.secondaryChance)
                ])
                .energy(2000)
                .id(`immersiveengineering:crusher/ore_${material}`);
        } else {
            event.recipes.immersiveengineering
                .crusher(Item.of(output, materialProperties.count), input)
                .energy(2000)
                .id(`immersiveengineering:crusher/ore_${material}`);
        }
    }

    function immersiveengineering_ore_processing_with_secondary_outputs(event, material, ore, dust, ingot) {
        if (ore == air || dust == air || ingot == air) {
            return;
        }

        var primaryOutput = Item.of(dust, 2),
            secondaryChance = 0.1,
            input = `#forge:ores/${material}`,
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

        event.recipes.immersiveengineering
            .crusher(primaryOutput, input, [Item.of(secondaryOutput).chance(secondaryChance)])
            .id(`immersiveengineering:crusher/ore_${material}`);
    }

    function mekanism_metal_ore_processing(
        event,
        material,
        ore,
        mek_crystal,
        mek_shard,
        mek_clump,
        mek_dirty_dust,
        dust,
        ingot
    ) {
        if (ore == air || ingot == air || mek_crystal == air) {
            return;
        }

        blacklistedMaterials = ['copper', 'gold', 'iron', 'lead', 'osmium', 'tin', 'uranium'];
        for (var i = 0; i < blacklistedMaterials.length; i++) {
            if (blacklistedMaterials[i] == material) {
                return;
            }
        }

        let mek_dirty_slurry = `emendatusenigmatica:dirty_${material}`,
            mek_clean_slurry = `emendatusenigmatica:clean_${material}`;

        // Dissolution
        event
            .custom({
                type: 'mekanism:dissolution',
                itemInput: { ingredient: { tag: `forge:ores/${material}` } },
                gasInput: { amount: 1, gas: 'mekanism:sulfuric_acid' },
                output: {
                    slurry: mek_dirty_slurry,
                    amount: 1000,
                    chemicalType: 'slurry'
                }
            })
            .id(`mekanism:processing/${material}/slurry/dirty`);

        // Washing
        event
            .custom({
                type: 'mekanism:washing',
                fluidInput: { amount: 5, tag: 'minecraft:water' },
                slurryInput: { amount: 1, slurry: mek_dirty_slurry },
                output: { slurry: mek_clean_slurry, amount: 1 }
            })
            .id(`mekanism:processing/${material}/slurry/clean`);

        // Crystallizing
        event
            .custom({
                type: 'mekanism:crystallizing',
                chemicalType: 'slurry',
                input: { amount: 200, slurry: mek_clean_slurry },
                output: { item: mek_crystal }
            })
            .id(`mekanism:processing/${material}/crystal/from_slurry`);

        // Injecting
        event
            .custom({
                type: 'mekanism:injecting',
                itemInput: { ingredient: { tag: `mekanism:crystals/${material}` } },
                gasInput: { amount: 1, gas: 'mekanism:hydrogen_chloride' },
                output: { item: mek_shard }
            })
            .id(`mekanism:processing/${material}/shard/from_crystal`);
        event
            .custom({
                type: 'mekanism:injecting',
                itemInput: { ingredient: { tag: `forge:ores/${material}` } },
                gasInput: { amount: 1, gas: 'mekanism:hydrogen_chloride' },
                output: { item: mek_shard, count: 4 }
            })
            .id(`mekanism:processing/${material}/shard/from_ore`);

        // Purifying
        event.recipes.mekanism
            .purifying(Item.of(mek_clump), `#mekanism:shards/${material}`, { amount: 1, gas: 'mekanism:oxygen' })
            .id(`mekanism:processing/${material}/clump/from_shard`);
        event.recipes.mekanism
            .purifying(Item.of(mek_clump, 3), `#forge:ores/${material}`, { amount: 1, gas: 'mekanism:oxygen' })
            .id(`mekanism:processing/${material}/clump/from_ore`);

        // Crushing
        event.recipes.mekanism
            .crushing(Item.of(mek_dirty_dust), `#mekanism:clumps/${material}`)
            .id(`mekanism:processing/${material}/dirty_dust/from_clump`);

        // Enriching
        console.log(`Mekanism Enriching: ${material}`);
        console.log(`Mekanism Enriching: ${dust}`);
        event.recipes.mekanism
            .enriching(Item.of(dust), `#mekanism:dirty_dusts/${material}`)
            .id(`mekanism:processing/${material}/dust/from_dirty_dust`);
        event.recipes.mekanism
            .enriching(Item.of(dust, 2), `#forge:ores/${material}`)
            .id(`mekanism:processing/${material}/dust/from_ore`);
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
            input = `#forge:ores/${material}`;

        event.smelting(output, input).xp(0.7);
        event.blasting(output, input).xp(0.7);
    }

    function minecraft_gem_ore_smelting(event, material, ore, gem) {
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
            input = `#forge:ores/${material}`;

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
            input = `#forge:dusts/${material}`;

        event.smelting(output, input).xp(0.7);
        event.blasting(output, input).xp(0.7);
    }

    function occultism_gem_ore_crushing(event, material, ore, dust, gem, shard) {
        if (ore == air) {
            return;
        }

        var materialProperties;
        try {
            materialProperties = gemProcessingProperties[material].occultism;
        } catch (err) {
            return;
        }

        var input = `forge:ores/${material}`,
            output,
            count = materialProperties.count;

        switch (gemProcessingProperties[material].output) {
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

        event.custom({
            type: 'occultism:crushing',
            ingredient: { tag: input },
            result: { item: output, count: count },
            crushing_time: 100
        });
    }

    function occultism_metal_ore_crushing(event, material, ore, dust, ingot) {
        if (ore == air || ingot == air) {
            return;
        }
        var output,
            input = `forge:ores/${material}`,
            output = dust,
            count = 2;

        event
            .custom({
                type: 'occultism:crushing',
                ingredient: { tag: input },
                result: { item: output, count: count },
                crushing_time: 100
            })
            .id(`occultism:crushing/${material}_dust`);
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
            input = `forge:ingots/${material}`;
        } else if (gem != air) {
            input = `forge:gems/${material}`;
        } else {
            return;
        }

        event.custom({
            type: 'occultism:crushing',
            ingredient: { tag: input },
            result: { item: output, count: 1 },
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
            input = `forge:ores/${material}`,
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
            id: `pedestals:pedestal_crushing/dust${material}`
        });
    }

    function pedestals_ingot_gem_crushing(event, material, ingot, dust, gem) {
        if (dust == air) {
            return;
        }

        var input,
            output = dust;
        if (ingot != air) {
            input = `forge:ingots/${material}`;
        } else if (gem != air) {
            input = `forge:gems/${material}`;
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
            input = `#forge:ores/${material}`,
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

        var secondaryOutput = getPreferredItemInTag(Ingredient.of(`#forge:${secondaryType}/${secondaryMaterial}`)).id;

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
                        fluid: { name: `tconstruct:molten_${material}`, amount: recipe.amount },
                        result: recipe.output,
                        cooling_time: recipe.cooling
                    })
                    .id(`tconstruct:smeltery/casting/${material}/${recipe.type}_${cast}_cast`);
            });
        });
        event
            .custom({
                type: 'tconstruct:casting_basin',
                fluid: { name: `tconstruct:molten_${material}`, amount: 1296 },
                result: block,
                cooling_time: 193
            })
            .id(`tconstruct:smeltery/casting/${material}/block`);
    }
});
