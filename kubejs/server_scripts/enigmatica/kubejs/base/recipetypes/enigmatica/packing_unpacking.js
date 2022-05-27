onEvent('recipes', (event) => {
    const id_prefix = 'enigmatica:base/enigmatica/';
    const recipes = [
        {
            output: '9x aquaculture:neptunium_ingot',
            input: '#forge:storage_blocks/neptunium',
            mold: '#thermal:crafting/dies/unpacking',
            id_suffix: 'neptunium_block_to_ingots'
        },
        {
            output: '9x aquaculture:neptunium_nugget',
            input: '#forge:ingots/neptunium',
            mold: '#thermal:crafting/dies/unpacking',
            id_suffix: 'neptunium_ingot_to_nuggets'
        },
        {
            output: 'aquaculture:neptunium_ingot',
            input: '9x #forge:nuggets/neptunium',
            mold: '#thermal:crafting/dies/packing_3x3',
            id_suffix: 'neptunium_nuggets_to_ingots'
        },
        {
            output: 'aquaculture:neptunium_block',
            input: '9x #forge:ingots/neptunium',
            mold: '#thermal:crafting/dies/packing_3x3',
            id_suffix: 'neptunium_ingots_to_block'
        },

        {
            output: '9x tconstruct:pig_iron_ingot',
            input: '#forge:storage_blocks/pig_iron',
            mold: '#thermal:crafting/dies/unpacking',
            id_suffix: 'pig_iron_block_to_ingots'
        },
        {
            output: '9x tconstruct:pig_iron_nugget',
            input: '#forge:ingots/pig_iron',
            mold: '#thermal:crafting/dies/unpacking',
            id_suffix: 'pig_iron_ingot_to_nuggets'
        },
        {
            output: 'tconstruct:pig_iron_ingot',
            input: '9x #forge:nuggets/pig_iron',
            mold: '#thermal:crafting/dies/packing_3x3',
            id_suffix: 'pig_iron_nuggets_to_ingots'
        },
        {
            output: 'tconstruct:pig_iron_block',
            input: '9x #forge:ingots/pig_iron',
            mold: '#thermal:crafting/dies/packing_3x3',
            id_suffix: 'pig_iron_ingots_to_block'
        },

        {
            output: '9x materialis:fairy_ingot',
            input: '#forge:storage_blocks/fairy',
            mold: '#thermal:crafting/dies/unpacking',
            id_suffix: 'fairy_block_to_ingots'
        },
        {
            output: '9x materialis:fairy_nugget',
            input: '#forge:ingots/fairy',
            mold: '#thermal:crafting/dies/unpacking',
            id_suffix: 'fairy_ingot_to_nuggets'
        },
        {
            output: 'materialis:fairy_ingot',
            input: '9x #forge:nuggets/fairy',
            mold: '#thermal:crafting/dies/packing_3x3',
            id_suffix: 'fairy_nuggets_to_ingots'
        },
        {
            output: 'materialis:fairy_block',
            input: '9x #forge:ingots/fairy',
            mold: '#thermal:crafting/dies/packing_3x3',
            id_suffix: 'fairy_ingots_to_block'
        },

        {
            output: '9x eidolon:pewter_ingot',
            input: '#forge:storage_blocks/pewter',
            mold: '#thermal:crafting/dies/unpacking',
            id_suffix: 'pewter_block_to_ingots'
        },
        {
            output: '9x eidolon:pewter_nugget',
            input: '#forge:ingots/pewter',
            mold: '#thermal:crafting/dies/unpacking',
            id_suffix: 'pewter_ingot_to_nuggets'
        },
        {
            output: 'eidolon:pewter_ingot',
            input: '9x #forge:nuggets/pewter',
            mold: '#thermal:crafting/dies/packing_3x3',
            id_suffix: 'pewter_nuggets_to_ingots'
        },
        {
            output: 'eidolon:pewter_block',
            input: '9x #forge:ingots/pewter',
            mold: '#thermal:crafting/dies/packing_3x3',
            id_suffix: 'pewter_ingots_to_block'
        },

        {
            output: '9x eidolon:arcane_gold_ingot',
            input: '#forge:storage_blocks/arcane_gold',
            mold: '#thermal:crafting/dies/unpacking',
            id_suffix: 'arcane_gold_block_to_ingots'
        },
        {
            output: '9x eidolon:arcane_gold_nugget',
            input: '#forge:ingots/arcane_gold',
            mold: '#thermal:crafting/dies/unpacking',
            id_suffix: 'arcane_gold_ingot_to_nuggets'
        },
        {
            output: 'eidolon:arcane_gold_ingot',
            input: '9x #forge:nuggets/arcane_gold',
            mold: '#thermal:crafting/dies/packing_3x3',
            id_suffix: 'arcane_gold_nuggets_to_ingots'
        },
        {
            output: 'eidolon:arcane_gold_block',
            input: '9x #forge:ingots/arcane_gold',
            mold: '#thermal:crafting/dies/packing_3x3',
            id_suffix: 'arcane_gold_ingots_to_block'
        },

        {
            output: '9x resourcefulbees:wax',
            input: '#forge:storage_blocks/wax',
            mold: '#thermal:crafting/dies/unpacking',
            id_suffix: 'wax_block_to_wax'
        },
        {
            output: 'resourcefulbees:wax_block',
            input: '9x #forge:wax',
            mold: '#thermal:crafting/dies/packing_3x3',
            id_suffix: 'wax_to_wax_block'
        },

        {
            output: '9x architects_palette:sunmetal_brick',
            input: '#forge:storage_blocks/sunmetal',
            mold: '#thermal:crafting/dies/unpacking',
            id_suffix: 'sunmetal_block_to_ingots'
        },
        {
            output: 'architects_palette:sunmetal_block',
            input: '9x #forge:ingots/sunmetal',
            mold: '#thermal:crafting/dies/packing_3x3',
            id_suffix: 'sunmetal_ingots_to_block'
        },

        {
            output: '9x powah:uraninite',
            input: '#forge:storage_blocks/uraninite',
            mold: '#thermal:crafting/dies/unpacking',
            id_suffix: 'uraninite_block_to_ingots'
        },
        {
            output: 'powah:uraninite_block',
            input: '9x #forge:ingots/uraninite',
            mold: '#thermal:crafting/dies/packing_3x3',
            id_suffix: 'uraninite_ingots_to_block'
        },

        {
            output: '9x thermal:tar',
            input: '#forge:storage_blocks/tar',
            mold: '#thermal:crafting/dies/unpacking',
            id_suffix: 'tar_block_to_tar'
        },
        {
            output: 'thermal:tar_block',
            input: '9x #forge:tar',
            mold: '#thermal:crafting/dies/packing_3x3',
            id_suffix: 'tar_to_tar_block'
        },

        {
            output: '9x integrateddynamics:crystalized_chorus_chunk',
            input: 'integrateddynamics:crystalized_chorus_block',
            mold: '#thermal:crafting/dies/unpacking',
            id_suffix: 'crystalized_chorus_block_to_chunk'
        },
        {
            output: 'integrateddynamics:crystalized_chorus_block',
            input: '9x integrateddynamics:crystalized_chorus_chunk',
            mold: '#thermal:crafting/dies/packing_3x3',
            id_suffix: 'crystalized_chorus_chunk_to_block'
        },

        {
            output: '4x minecraft:quartz',
            input: 'minecraft:quartz_block',
            mold: '#thermal:crafting/dies/unpacking',
            id_suffix: 'quartz_block_to_gems'
        },
        {
            output: 'minecraft:quartz_block',
            input: '4x minecraft:quartz',
            mold: '#thermal:crafting/dies/packing_2x2',
            id_suffix: 'quartz_gems_to_block'
        },

        {
            output: '4x minecraft:ender_pearl',
            input: '#forge:storage_blocks/ender',
            mold: '#thermal:crafting/dies/unpacking',
            id_suffix: 'ender_pearl_block_to_gems'
        },
        {
            output: 'betterendforge:ender_block',
            input: '4x #forge:gems/ender',
            mold: '#thermal:crafting/dies/packing_2x2',
            id_suffix: 'ender_pearl_gems_to_block'
        },

        {
            output: '4x minecraft:glowstone_dust',
            input: '#forge:storage_blocks/glowstone',
            mold: '#thermal:crafting/dies/unpacking',
            id_suffix: 'glowstone_block_to_dust'
        },
        {
            output: 'minecraft:glowstone',
            input: '4x #forge:dusts/glowstone',
            mold: '#thermal:crafting/dies/packing_2x2',
            id_suffix: 'glowstone_dust_to_block'
        },

        {
            output: '4x minecraft:clay_ball',
            input: '#forge:storage_blocks/clay',
            mold: '#thermal:crafting/dies/unpacking',
            id_suffix: 'clay_block_to_dust'
        },
        {
            output: 'minecraft:clay',
            input: '4x #forge:clay',
            mold: '#thermal:crafting/dies/packing_2x2',
            id_suffix: 'clay_ball_to_block'
        },

        {
            output: '4x thermal:slag',
            input: '#forge:storage_blocks/slag',
            mold: '#thermal:crafting/dies/unpacking',
            id_suffix: 'slag_block_to_slag'
        },
        {
            output: 'thermal:slag_block',
            input: '4x #forge:slag',
            mold: '#thermal:crafting/dies/packing_2x2',
            id_suffix: 'slag_to_slag_block'
        },

        {
            output: '4x betterendforge:crystal_shards',
            input: '#forge:storage_blocks/aurora',
            mold: '#thermal:crafting/dies/unpacking',
            id_suffix: 'aurora_block_to_shards'
        },
        {
            output: 'betterendforge:aurora_crystal',
            input: '4x #forge:shards/aurora',
            mold: '#thermal:crafting/dies/packing_2x2',
            id_suffix: 'aurora_shards_to_block'
        },

        {
            output: '4x betterendforge:amber_gem',
            input: '#forge:storage_blocks/amber',
            mold: '#thermal:crafting/dies/unpacking',
            id_suffix: 'amber_block_to_gems'
        },
        {
            output: 'betterendforge:amber_block',
            input: '4x #forge:gems/amber',
            mold: '#thermal:crafting/dies/packing_2x2',
            id_suffix: 'amber_gems_to_block'
        }
    ];

    let botania_quartz_types = ['dark', 'mana', 'blaze', 'lavender', 'red', 'elven', 'sunny'];

    botania_quartz_types.forEach((type) => {
        recipes.push(
            {
                output: `4x botania:quartz_${type}`,
                input: `botania:${type == 'elven' ? 'elf' : type}_quartz`,
                mold: '#thermal:crafting/dies/unpacking',
                id_suffix: `${type}_quartz_block_to_gems`
            },
            {
                output: `botania:${type == 'elven' ? 'elf' : type}_quartz`,
                input: `4x botania:quartz_${type}`,
                mold: '#thermal:crafting/dies/packing_2x2',
                id_suffix: `${type}_quartz_gems_to_block`
            }
        );
    });

    recipetypes_packing_unpacking = (event, recipe) => {
        // Thermal
        event.recipes.thermal
            .press(recipe.output, [recipe.input, recipe.mold])
            .energy(2400)
            .id(`${id_prefix}thermal/press/${recipe.id_suffix}`);

        // Immersiveengineering
        event.recipes.immersiveengineering
            .metal_press(recipe.output, recipe.input, recipe.mold)
            .id(`${id_prefix}immersiveengineering/metal_press/${recipe.id_suffix}`);
    };

    recipes.forEach((recipe) => {
        recipetypes_packing_unpacking(event, recipe);
    });
});
