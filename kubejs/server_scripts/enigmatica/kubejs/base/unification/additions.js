//priority: 975
events.listen('recipes', function (event) {
    // pedestals_dust_smelting(event);

    materialsToUnify.forEach(function (material) {
        enigmatica_ore_deposit_processing(event, material);
        immersiveengineering_gem_ore_processing(event, material);
        //occultism_ore_ingot_crushing(event, material);
        immersiveengineering_hammer_crafting_plates(event, material);
        bloodmagic_ore_processing_alchemy(event, material);
        bloodmagic_ore_processing_arc(event, material);
        astralsorcery_ore_processing_infuser(event, material);
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

    var gemTag = ingredient.of('#forge:gems/' + material);
    var gem = getPreferredItemInTag(gemTag).id;

    var clumpTag = ingredient.of('#mekanism:clumps/' + material);
    var clump = getPreferredItemInTag(clumpTag).id;

    var dirtyDustTag = ingredient.of('#mekanism:dirty_dusts/' + material);
    var dirtyDust = getPreferredItemInTag(dirtyDustTag).id;

    var dustTag = ingredient.of('#forge:dusts/' + material);
    var dust = getPreferredItemInTag(dustTag).id;    

    var ingotTag = ingredient.of('#forge:ingots/' + material);
    var ingot = getPreferredItemInTag(ingotTag).id;

    if (gem != air) {
        data = {
            recipes : [
                {
                    input: 'forge:ores/' + material,
                    output: gem,
                    count: 5,
                    bonus: [],
                    tool: 'bloodmagic:arc/cuttingfluid'
                }
            ]
        };
    } else if (ingot != air) {
        data = {
            recipes : [
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
                    bonus: [{chance: 0.05, type: {item: 'bloodmagic:corrupted_tinydust'}}, {chance: 0.01, type: {item: 'bloodmagic:corrupted_tinydust'}}],
                    tool: 'bloodmagic:arc/resonator'
                },
                {
                    input: 'mekanism:dirty_dust/' + material,
                    output: dust,
                    count: 1,
                    bonus: [],
                    tool: 'bloodmagic:arc/cuttingfluid'
                }, 
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

    var oreTag = ingredient.of('#forge:ores/' + material);
    var ore = getPreferredItemInTag(oreTag).id; 

    var dustTag = ingredient.of('#forge:dusts/' + material);
    var dust = getPreferredItemInTag(dustTag).id;    

    var ingotTag = ingredient.of('#forge:ingots/' + material);
    var ingot = getPreferredItemInTag(ingotTag).id;

    if (ingot != air && ore != air) {
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
        type: "bloodmagic:alchemytable",
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
    var hammer = 'immersiveengineering:hammer';
    var ingotTag = ingredient.of('#forge:ingots/' + material);
    var ingot = getPreferredItemInTag(ingotTag).id;

    var gemTag = ingredient.of('#forge:gems/' + material);
    var gem = getPreferredItemInTag(gemTag).id;

    var plateTag = ingredient.of('#forge:plates/' + material);
    var plate = getPreferredItemInTag(plateTag).id;

    if (plate == air) {
        return;
    }

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
        // JAOPCA added thermal press ingot compat
        // event.recipes.thermal.press({
        //     type: 'thermal:press',
        //     ingredient: {
        //         tag: 'forge:ingots/' + material
        //     },
        //     result: [
        //         {
        //             item: plate
        //         }
        //     ]
        // });
    }

    if (gem != air) {
        var storageBlockTag = ingredient.of('#forge:storage_blocks/' + material);
        var storageBlock = getPreferredItemInTag(storageBlockTag).id;
        var input = gem;
        var inputTag = 'forge:gems/' + material;
        if (storageBlock != null) {
            input = storageBlock;
            inputTag = 'forge:storage_blocks/' + material;
        }

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
    }
}
