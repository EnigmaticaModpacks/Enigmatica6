onEvent('recipes', (event) => {
    const id_prefix = 'enigmatica:base/thermal/crucible/';
    const recipes = [
        {
            output: Fluid.of('materialis:molten_shadow_steel', 144),
            input: '#forge:ingots/shadow_steel',
            energy: 5000,
            id: `${id_prefix}shadow_steel`
        },
        {
            output: Fluid.of('materialis:molten_refined_radiance', 144),
            input: '#forge:ingots/refined_radiance',
            energy: 5000,
            id: `${id_prefix}refined_radiance`
        },
        {
            output: Fluid.of('materialis:molten_forgotten_metal', 1296),
            input: '#forge:storage_blocks/forgotten_metal',
            energy: 40000,
            id: `${id_prefix}forgotten_block`
        },
        {
            output: Fluid.of('materialis:molten_forgotten_metal', 144),
            input: '#forge:ingots/forgotten_metal',
            energy: 5000,
            id: `${id_prefix}forgotten_ingot`
        },
        {
            output: Fluid.of('materialis:molten_forgotten_metal', 16),
            input: '#forge:nuggets/forgotten_metal',
            energy: 555,
            id: `${id_prefix}forgotten_nugget`
        },
        {
            output: Fluid.of('materialis:molten_fairy', 1296),
            input: '#forge:storage_blocks/fairy',
            energy: 40000,
            id: `${id_prefix}fairy_block`
        },
        {
            output: Fluid.of('materialis:molten_fairy', 144),
            input: '#forge:ingots/fairy',
            energy: 5000,
            id: `${id_prefix}fairy_ingot`
        },
        {
            output: Fluid.of('materialis:molten_fairy', 16),
            input: '#forge:nuggets/fairy',
            energy: 555,
            id: `${id_prefix}fairy_nugget`
        },
        {
            output: Fluid.of('materialis:molten_arcane_gold', 1296),
            input: '#forge:storage_blocks/arcane_gold',
            energy: 40000,
            id: `${id_prefix}arcane_gold_block`
        },
        {
            output: Fluid.of('materialis:molten_arcane_gold', 144),
            input: '#forge:ingots/arcane_gold',
            energy: 5000,
            id: `${id_prefix}arcane_gold_ingot`
        },
        {
            output: Fluid.of('materialis:molten_arcane_gold', 16),
            input: '#forge:nuggets/arcane_gold',
            energy: 555,
            id: `${id_prefix}arcane_gold_nugget`
        },
        {
            output: Fluid.of('materialis:molten_refined_obsidian', 1296),
            input: '#forge:storage_blocks/refined_obsidian',
            energy: 40000,
            id: `${id_prefix}refined_obsidian_block`
        },
        {
            output: Fluid.of('materialis:molten_refined_obsidian', 144),
            input: '#forge:ingots/refined_obsidian',
            energy: 5000,
            id: `${id_prefix}ingot_refined_obsidian`
        },
        {
            output: Fluid.of('materialis:molten_refined_obsidian', 16),
            input: '#forge:nuggets/refined_obsidian',
            energy: 555,
            id: `${id_prefix}nugget_refined_obsidian`
        },
        {
            output: Fluid.of('materialis:molten_refined_glowstone', 1296),
            input: '#forge:storage_blocks/refined_glowstone',
            energy: 40000,
            id: `${id_prefix}refined_glowstone_block`
        },
        {
            output: Fluid.of('materialis:molten_refined_glowstone', 144),
            input: '#forge:ingots/refined_glowstone',
            energy: 5000,
            id: `${id_prefix}ingot_refined_glowstone`
        },
        {
            output: Fluid.of('materialis:molten_refined_glowstone', 16),
            input: '#forge:nuggets/refined_glowstone',
            energy: 555,
            id: `${id_prefix}nugget_refined_glowstone`
        },
        {
            output: Fluid.of('materialis:molten_pink_slime', 144),
            input: '#forge:ingots/pink_slime',
            energy: 5000,
            id: `${id_prefix}pink_slime_ingot`
        },
        {
            output: Fluid.of('materialis:molten_neptunium', 1296),
            input: '#forge:storage_blocks/neptunium',
            energy: 40000,
            id: `${id_prefix}neptunium_block`
        },
        {
            output: Fluid.of('materialis:molten_neptunium', 144),
            input: '#forge:ingots/neptunium',
            energy: 5000,
            id: `${id_prefix}neptunium_ingot`
        },
        {
            output: Fluid.of('materialis:molten_neptunium', 16),
            input: '#forge:nuggets/neptunium',
            energy: 555,
            id: `${id_prefix}neptunium_nugget`
        }
    ];

    honeyVarieties.forEach((honeyVariety) => {
        let honey = honeyVariety.split(':')[1];
        recipes.push({
            output: Fluid.of(honeyVariety, 1000),
            input: Item.of(honeyVariety == 'resourcefulbees:honey' ? 'minecraft:honey_block' : `${honeyVariety}_block`),
            energy: 2000,
            id: `thermal:machine/crucible/crucible_${honey}_block_to_${honey}`
        });
    });

    recipes.forEach((recipe) => {
        event.recipes.thermal.crucible(recipe.output, recipe.input).energy(recipe.energy).id(recipe.id);
    });
});
