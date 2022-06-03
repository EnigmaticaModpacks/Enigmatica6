onEvent('recipes', (event) => {
    if (global.isNormalMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:normal/unification/';

    materialsToUnify.forEach((material) => {
        var ingot = getPreferredItemInTag(Ingredient.of('#forge:ingots/' + material)).id;
        var gem = getPreferredItemInTag(Ingredient.of('#forge:gems/' + material)).id;

        var plate = getPreferredItemInTag(Ingredient.of('#forge:plates/' + material)).id;
        var gear = getPreferredItemInTag(Ingredient.of('#forge:gears/' + material)).id;
        var rod = getPreferredItemInTag(Ingredient.of('#forge:rods/' + material)).id;
        var wire = getPreferredItemInTag(Ingredient.of('#forge:wires/' + material)).id;

        let ore = getPreferredItemInTag(Ingredient.of(`#forge:ores/${material}`)).id;
        let dust = getPreferredItemInTag(Ingredient.of(`#forge:dusts/${material}`)).id;

        gear_unification(event, material, ingot, gem, gear);
        rod_unification(event, material, ingot, gem, rod);
        plate_unification(event, material, ingot, gem, plate);
        wire_unification(event, material, ingot, gem, wire, plate);

        immersiveengineering_ore_processing_with_secondary_outputs(event, material, ore, dust, ingot);
    });

    function gear_unification(event, material, ingot, gem, gear) {
        if (gear == air) {
            return;
        }

        event.remove({ output: gear });

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

        event.recipes.thermal
            .press(output, [Ingredient.of(input, 4), mold])
            .id(`thermal:machine/press/press_${material}_ingot_to_gear`);

        event.recipes.immersiveengineering
            .metal_press(output, Ingredient.of(input, 4), mold)
            .id(`${id_prefix}immersiveengineering_metal_press_${material}_gear`);

        event
            .shaped(output, [' B ', 'BAB', ' B '], {
                A: '#forge:nuggets/iron',
                B: input
            })
            .id(`${id_prefix}crafting_shaped_${material}_gear`);
    }

    function rod_unification(event, material, ingot, gem, rod) {
        if (rod == air) {
            return;
        }

        event.remove({ output: rod });

        var output = rod,
            input,
            mold = '#thermal:crafting/dies/rod';

        if (ingot != air) {
            input = '#forge:ingots/' + material;
        } else if (gem != air) {
            input = '#forge:gems/' + material;
        } else {
            return;
        }

        event.recipes.thermal
            .press(Item.of(rod, 1), [input, mold])
            .energy(2400)
            .id(`${id_prefix}immersiveengineering_metal_press_${material}_rod`);

        event.recipes.immersiveengineering
            .metal_press(Item.of(rod, 1), input, mold)
            .id(`${id_prefix}immersiveengineering_metal_press_${material}_rod`);

        event
            .shaped(output, ['A', 'A'], {
                A: input
            })
            .id(`${id_prefix}shaped_crafting_${material}_rod`);
    }

    function plate_unification(event, material, ingot, gem, plate) {
        if (plate == air) {
            return;
        }

        event.remove({ output: plate });
        event.remove({ id: /immersiveengineering:crafting\/plate_/ });
        event.remove({ id: /create:pressing\/\w*_ingot/ });

        const output = plate,
            mold = '#thermal:crafting/dies/plate',
            hammer = '#forge:tools/crafting_hammer';

        if (ingot != air) {
            input = '#forge:ingots/' + material;
        } else if (gem != air) {
            input = '#forge:gems/' + material;
        } else {
            return;
        }
        event.shapeless(output, [input, hammer]).id(`${id_prefix}shapeless_crafting_${material}_plate`);

        event.recipes.immersiveengineering
            .metal_press(output, input, mold)
            .id(`${id_prefix}immersiveengineering_metal_press_${material}_plate`);

        event.recipes.create.pressing(output, input).id(`${id_prefix}create_pressing_${material}_plate`);

        event.recipes.thermal
            .press(Item.of(output), input)
            .energy(2400)
            .id(`thermal:machine/press/press_${material}_ingot_to_plate`);
    }

    function wire_unification(event, material, ingot, gem, wire, plate) {
        if (wire == air) {
            return;
        }

        event.remove({ output: wire });

        const wireCutters = '#forge:tools/wirecutter';
        let output = wire,
            input,
            mold = '#thermal:crafting/dies/wire';

        if (ingot != air) {
            input = '#forge:ingots/' + material;
        } else if (gem != air) {
            input = '#forge:gems/' + material;
        } else {
            return;
        }

        event.recipes.thermal
            .press(Item.of(output, 2), [input, mold])
            .energy(2400)
            .id(`thermal:machine/press/press_${material}_ingot_to_wire`);

        event.recipes.immersiveengineering
            .metal_press(Item.of(output, 2), input, mold)
            .id(`${id_prefix}immersiveengineering_metal_press_${material}_wire`);

        event.shapeless(output, [plate, wireCutters]).id(`${id_prefix}shaped_crafting_${material}_wire`);
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
});
