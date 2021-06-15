onEvent('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }

    materialsToUnify.forEach((material) => {
        var ingot = getPreferredItemInTag(Ingredient.of(`#forge:ingots/${material}`)).id;
        var gem = getPreferredItemInTag(Ingredient.of(`#forge:gems/${material}`)).id;

        var plate = getPreferredItemInTag(Ingredient.of(`#forge:plates/${material}`)).id;
        var gear = getPreferredItemInTag(Ingredient.of(`#forge:gears/${material}`)).id;
        var rod = getPreferredItemInTag(Ingredient.of(`#forge:rods/${material}`)).id;
        var wire = getPreferredItemInTag(Ingredient.of(`#forge:wires/${material}`)).id;

        var ore = getPreferredItemInTag(Ingredient.of(`#forge:ores/${material}`)).id;
        var mana_cluster = getPreferredItemInTag(Ingredient.of(`#enigmatica:mana_clusters/${material}`)).id;
        var fulminated_cluster = getPreferredItemInTag(Ingredient.of(`#enigmatica:fulminated_clusters/${material}`)).id;
        var levigated_material = getPreferredItemInTag(Ingredient.of(`#enigmatica:levigated_materials/${material}`)).id;
        var crystalline_sliver = getPreferredItemInTag(Ingredient.of(`#enigmatica:crystalline_slivers/${material}`)).id;

        gear_unification(event, material, ingot, gem, gear);
        rod_unification(event, material, ingot, gem, rod, plate);
        plate_unification(event, material, ingot, gem, plate);
        wire_unification(event, material, ingot, gem, wire, plate);

        magical_ore_processing(
            event,
            material,
            ore,
            ingot,
            mana_cluster,
            fulminated_cluster,
            levigated_material,
            crystalline_sliver
        );
    });

    function gear_unification(event, material, ingot, gem, gear) {
        if (gear == air) {
            return;
        }

        event.remove({ output: gear });

        var output = gear,
            input,
            mold = '#thermal:crafting/dies/gear';

        if (ingot != air) {
            input = `#forge:ingots/${material}`;
        } else if (gem != air) {
            input = `#forge:gems/${material}`;
        } else {
            return;
        }

        event.recipes.thermal
            .press(output, [Ingredient.of(input, 4), mold])
            .id(`thermal:machine/press/press_${material}_ingot_to_gear`);

        event.recipes.immersiveengineering
            .metal_press(output, Ingredient.of(input, 4), mold)
            .id(`kubejs:immersiveengineering_metal_press_${material}_gear`);

        event
            .shaped(output, ['CAC', 'ABA', 'CAC'], {
                A: input,
                B: '#forge:plates/iron_tin',
                C: '#forge:nuggets/aluminum'
            })
            .id(`kubejs:crafting_shaped_${material}_gear`);
    }

    function rod_unification(event, material, ingot, gem, rod) {
        if (rod == air) {
            return;
        }

        event.remove({ output: rod });

        let output = rod,
            input,
            mold = '#thermal:crafting/dies/rod';
        const hammer = ['immersiveengineering:hammer', 'emendatusenigmatica:enigmatic_hammer'];
        const plateTag = `#forge:plates/${material}`;
        if (ingot != air) {
            input = `#forge:ingots/${material}`;
        } else if (gem != air) {
            input = `#forge:gems/${material}`;
        } else {
            return;
        }

        event.recipes.thermal
            .press(rod, [input, mold])
            .energy(2400)
            .id(`kubejs:immersiveengineering_metal_press_${material}_rod`);

        event.recipes.immersiveengineering
            .metal_press(rod, input, mold)
            .id(`kubejs:immersiveengineering_metal_press_${material}_rod`);

        event.shapeless(output, [plateTag, hammer, plateTag]).id(`kubejs:shapeless_crafting_${material}_rod`);
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
            hammer = ['immersiveengineering:hammer', 'emendatusenigmatica:enigmatic_hammer'];

        if (ingot != air) {
            input = `#forge:ingots/${material}`;
        } else if (gem != air) {
            input = `#forge:gems/${material}`;
        } else {
            return;
        }
        event.shapeless(output, [input, hammer, input]).id(`kubejs:shapeless_crafting_${material}_plate`);

        event.recipes.immersiveengineering
            .metal_press(output, input, mold)
            .id(`kubejs:immersiveengineering_metal_press_${material}_plate`);

        event.recipes.create.pressing(output, input).id(`kubejs:create_pressing_${material}_plate`);

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

        const wireCutters = 'immersiveengineering:wirecutter';
        let output = wire,
            mold = '#thermal:crafting/dies/wire';

        if (ingot != air) {
            input = `#forge:ingots/${material}`;
        } else if (gem != air) {
            input = `#forge:gems/${material}`;
        } else {
            return;
        }

        event.recipes.thermal
            .press(Item.of(output, 4), [plate, mold])
            .energy(2400)
            .id(`kubejs:immersiveengineering_metal_press_${material}_wire`);

        event.recipes.immersiveengineering
            .metal_press(Item.of(output, 4), plate, mold)
            .id(`kubejs:immersiveengineering_metal_press_${material}_wire`);

        event.shapeless(Item.of(output, 2), [plate, plate, wireCutters]).id(`kubejs:shaped_crafting_${material}_wire`);
    }
    //Mock-up. Real process would use new assets to avoid mix ups with Mek processing.
    function magical_ore_processing(
        event,
        material,
        ore,
        ingot,
        mana_cluster,
        fulminated_cluster,
        levigated_material,
        crystalline_sliver
    ) {
        if (
            ore == air ||
            ingot == air ||
            mana_cluster == air ||
            fulminated_cluster == air ||
            levigated_material == air ||
            crystalline_sliver == air
        ) {
            return;
        }

        var secondary_fulminated_cluster,
            infusing_input = `#forge:ores/${material}`,
            zapping_input = `#enigmatica:mana_clusters/${material}`,
            crumbling_input = `#enigmatica:fulminated_clusters/${material}`,
            freezing_input = `#enigmatica:levigated_materials/${material}`,
            fusing_input = `#enigmatica:crystalline_slivers/${material}`;

        try {
            secondary_fulminated_cluster = getPreferredItemInTag(
                Ingredient.of(`#enigmatica:fulminated_clusters/${oreProcessingSecondaries[material].secondary}`)
            ).id;
        } catch (err) {
            secondary_fulminated_cluster = getPreferredItemInTag(
                Ingredient.of(`#mekanism:fulminated_clusters/${material}`)
            ).id;
        }

        // Step One: Infuse!
        event.custom({
            type: 'botania:mana_infusion',
            input: Ingredient.of(infusing_input).toJson(),
            output: { item: mana_cluster, count: 1 },
            catalyst: { type: 'block', block: 'naturesaura:generator_limit_remover' },
            mana: 25000
        });

        // Step Two: Zap!
        event.custom({
            type: 'interactio:item_lightning',
            inputs: [
                Ingredient.of(zapping_input).toJson(),
                { tag: 'botania:runes/asgard', count: 1, return_chance: 0.5 }
            ],
            output: {
                entries: [
                    { result: { item: fulminated_cluster, count: 1 }, weight: 10 },
                    { result: { item: secondary_fulminated_cluster, count: 1 }, weight: 5 },
                    { result: { item: 'thermal:slag', count: 1 }, weight: 85 } // would prefer something like tiny slag here
                ],
                empty_weight: 0,
                rolls: 20
            }
        });

        // Step Three: Crumble!
        event.custom({
            type: 'naturesaura:altar',
            input: Ingredient.of(crumbling_input).toJson(),
            output: Ingredient.of(levigated_material).toJson(),
            catalyst: Ingredient.of('naturesaura:crushing_catalyst').toJson(),
            aura_type: 'naturesaura:overworld',
            aura: 15000,
            time: 80
        });

        // Step Four: Freeze!
        event.custom({
            type: 'interactio:item_fluid_transform',
            inputs: [
                Ingredient.of(freezing_input).toJson(),
                { tag: 'botania:runes/winter', count: 1, return_chance: 0.95 }
            ],
            output: {
                entries: [
                    { result: Ingredient.of(crystalline_sliver).toJson(), weight: 75 },
                    { result: Ingredient.of('bloodmagic:corrupted_tinydust').toJson(), weight: 25 } //placeholder item. Could be a handy place to put a byproduct required for high tier crafts
                ],
                empty_weight: 0,
                rolls: 20
            },
            fluid: { fluid: 'astralsorcery:liquid_starlight' },
            consume_fluid: 0.75
        });

        // Step Five: Fuse!
        event.custom({
            type: 'botania:runic_altar',
            output: { item: ingot, count: 1 },
            mana: 25000,
            ingredients: [
                Ingredient.of(fusing_input).toJson(),
                Ingredient.of(fusing_input).toJson(),
                Ingredient.of(fusing_input).toJson(),
                Ingredient.of(fusing_input).toJson(),
                Ingredient.of(fusing_input).toJson(),
                Ingredient.of(fusing_input).toJson(),
                Ingredient.of(fusing_input).toJson(),
                Ingredient.of(fusing_input).toJson(),
                Ingredient.of(fusing_input).toJson(),
                Ingredient.of('eidolon:ender_calx').toJson(),
                Ingredient.of(`#botania:runes/muspelheim`).toJson()
            ]
        });
    }
});
