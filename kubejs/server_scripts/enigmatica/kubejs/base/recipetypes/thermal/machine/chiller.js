onEvent('recipes', (event) => {
    const id_prefix = 'enigmatica:base/thermal/chiller/';

    const recipes = [
        {
            inputs: [Fluid.of('tconstruct:molten_clay', 144), 'tconstruct:ingot_cast'],
            output: Item.of('minecraft:brick', 1),
            energy: 5000,
            id: 'thermal:compat/tconstruct/chiller_tconstruct_clay_ingot'
        },
        {
            inputs: [Fluid.of('tconstruct:molten_netherite', 144), 'tconstruct:ingot_cast'],
            output: Item.of('minecraft:netherite_ingot', 1),
            energy: 5000,
            id: 'thermal:compat/tconstruct/chiller_tconstruct_netherite_ingot'
        },
        {
            inputs: [Fluid.of('tconstruct:molten_debris', 144), 'tconstruct:ingot_cast'],
            output: Item.of('minecraft:netherite_scrap', 1),
            energy: 5000,
            id: 'thermal:compat/tconstruct/chiller_tconstruct_molten_debris'
        },
        {
            inputs: [Fluid.of('tconstruct:molten_netherite', 16), 'tconstruct:nugget_cast'],
            output: Item.of('tconstruct:netherite_nugget', 1),
            energy: 555,
            id: 'thermal:compat/tconstruct/chiller_tconstruct_netherite_nugget'
        },
        {
            inputs: [Fluid.of('tconstruct:molten_debris', 16), 'tconstruct:nugget_cast'],
            output: Item.of('tconstruct:debris_nugget', 1),
            energy: 555,
            id: 'thermal:compat/tconstruct/chiller_tconstruct_debris_nugget'
        },
        {
            inputs: [Fluid.of('materialis:molten_shadow_steel', 144), 'tconstruct:ingot_cast'],
            output: Item.of('create:shadow_steel', 1),
            energy: 5000,
            id: `${id_prefix}shadow_steel`
        },
        {
            inputs: [Fluid.of('materialis:molten_refined_radiance', 144), 'tconstruct:ingot_cast'],
            output: Item.of('create:refined_radiance', 1),
            energy: 5000,
            id: `${id_prefix}refined_radiance`
        },
        {
            inputs: [Fluid.of('materialis:molten_forgotten_metal', 144), 'tconstruct:ingot_cast'],
            output: Item.of('undergarden:forgotten_ingot', 1),
            energy: 5000,
            id: `${id_prefix}forgotten_ingot`
        },
        {
            inputs: [Fluid.of('materialis:molten_forgotten_metal', 16), 'tconstruct:nugget_cast'],
            output: Item.of('undergarden:forgotten_nugget', 1),
            energy: 555,
            id: `${id_prefix}forgotten_nugget`
        },
        {
            inputs: [Fluid.of('materialis:molten_fairy', 144), 'tconstruct:ingot_cast'],
            output: Item.of('materialis:fairy_ingot', 1),
            energy: 5000,
            id: `${id_prefix}fairy_ingot`
        },
        {
            inputs: [Fluid.of('materialis:molten_fairy', 16), 'tconstruct:nugget_cast'],
            output: Item.of('materialis:fairy_nugget', 1),
            energy: 555,
            id: `${id_prefix}fairy_nugget`
        },
        {
            inputs: [Fluid.of('materialis:molten_arcane_gold', 144), 'tconstruct:ingot_cast'],
            output: Item.of('eidolon:arcane_gold_ingot', 1),
            energy: 5000,
            id: `${id_prefix}arcane_gold_ingot`
        },
        {
            inputs: [Fluid.of('materialis:molten_arcane_gold', 16), 'tconstruct:nugget_cast'],
            output: Item.of('eidolon:arcane_gold_nugget', 1),
            energy: 555,
            id: `${id_prefix}arcane_gold_nugget`
        },
        {
            inputs: [Fluid.of('tconstruct:molten_refined_obsidian', 144), 'tconstruct:ingot_cast'],
            output: Item.of('mekanism:ingot_refined_obsidian', 1),
            energy: 5000,
            id: `${id_prefix}ingot_refined_obsidian`
        },
        {
            inputs: [Fluid.of('tconstruct:molten_refined_obsidian', 16), 'tconstruct:nugget_cast'],
            output: Item.of('mekanism:nugget_refined_obsidian', 1),
            energy: 555,
            id: `${id_prefix}nugget_refined_obsidian`
        },
        {
            inputs: [Fluid.of('tconstruct:molten_refined_glowstone', 144), 'tconstruct:ingot_cast'],
            output: Item.of('mekanism:ingot_refined_glowstone', 1),
            energy: 5000,
            id: `${id_prefix}ingot_refined_glowstone`
        },
        {
            inputs: [Fluid.of('tconstruct:molten_refined_glowstone', 16), 'tconstruct:nugget_cast'],
            output: Item.of('mekanism:nugget_refined_glowstone', 1),
            energy: 555,
            id: `${id_prefix}nugget_refined_glowstone`
        },
        {
            inputs: [Fluid.of('materialis:molten_pink_slime', 144), 'tconstruct:ingot_cast'],
            output: Item.of('industrialforegoing:pink_slime_ingot', 1),
            energy: 5000,
            id: `${id_prefix}pink_slime_ingot`
        },
        {
            inputs: [Fluid.of('materialis:molten_neptunium', 144), 'tconstruct:ingot_cast'],
            output: Item.of('aquaculture:neptunium_ingot', 1),
            energy: 5000,
            id: `${id_prefix}neptunium_ingot`
        },
        {
            inputs: [Fluid.of('materialis:molten_neptunium', 16), 'tconstruct:nugget_cast'],
            output: Item.of('aquaculture:neptunium_nugget', 1),
            energy: 555,
            id: `${id_prefix}neptunium_nugget`
        },
        {
            inputs: [Fluid.of('tconstruct:blazing_blood', 100), 'tconstruct:rod_cast'],
            output: Item.of('minecraft:blaze_rod', 1),
            energy: 2000,
            id: `${id_prefix}blaze_rod_from_blazing_blood`
        },
        {
            inputs: [Fluid.of('tconstruct:blazing_blood', 50), '#forge:slimeballs'],
            output: Item.of('minecraft:magma_cream', 1),
            energy: 2000,
            id: `${id_prefix}magma_cream_from_blazing_blood`
        },
        {
            inputs: [Fluid.of('tconstruct:magma', 250), 'thermal:chiller_ball_cast'],
            output: Item.of('minecraft:magma_cream', 1),
            energy: 2000,
            id: `${id_prefix}magma_cream_from_magma`
        },
        {
            inputs: [Fluid.of('tconstruct:earth_slime', 250), 'thermal:chiller_ball_cast'],
            output: Item.of('minecraft:slime_ball', 1),
            energy: 2000,
            id: `${id_prefix}slime_ball_from_earth_slime`
        },
        {
            inputs: [Fluid.of('tconstruct:blood', 250), 'thermal:chiller_ball_cast'],
            output: Item.of('tconstruct:blood_slime_ball', 1),
            energy: 2000,
            id: `${id_prefix}blood_slime_ball_from_blood`
        },
        {
            inputs: [Fluid.of('tconstruct:ender_slime', 250), 'thermal:chiller_ball_cast'],
            output: Item.of('tconstruct:ender_slime_ball', 1),
            energy: 2000,
            id: `${id_prefix}ender_slime_ball_from_ender`
        },
        {
            inputs: [Fluid.of('tconstruct:sky_slime', 250), 'thermal:chiller_ball_cast'],
            output: Item.of('tconstruct:sky_slime_ball', 1),
            energy: 2000,
            id: `${id_prefix}sky_slime_ball_from_ender`
        }
    ];

    honeyVarieties.forEach((honeyVariety) => {
        let honey = honeyVariety.split(':')[1];
        recipes.push({
            inputs: [Fluid.of(honeyVariety, 1000)],
            output: Item.of(
                honeyVariety == 'resourcefulbees:honey' ? 'minecraft:honey_block' : `${honeyVariety}_block`
            ),
            energy: 4000,
            id: `thermal:machine/chiller/chiller_${honey}_to_${honey}_block`
        });
    });

    recipes.forEach((recipe) => {
        event.recipes.thermal.chiller(recipe.output, recipe.inputs).energy(recipe.energy).id(recipe.id);
    });
});
