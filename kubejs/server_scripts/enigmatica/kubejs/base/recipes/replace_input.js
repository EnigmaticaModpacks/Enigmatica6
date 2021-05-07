events.listen('recipes', (event) => {
    const recipes = [{ replaceTarget: {}, toReplace: '', replaceWith: '' }];
    event.replaceInput({}, 'refinedstorage:silicon', '#forge:silicon');
    event.replaceInput({}, 'refinedstorage:crafter', '#refinedstorage:crafter');
    event.replaceInput({}, 'thermal:cinnabar', '#forge:gems/cinnabar');
    event.replaceInput({}, 'thermal:sulfur', '#forge:gems/sulfur');
    event.replaceInput({}, 'thermal:apatite', '#forge:gems/apatite');
    event.replaceInput({}, 'thermal:niter', '#forge:gems/niter');
    event.replaceInput({}, 'thermal:bitumen', '#forge:gems/bitumen', true);
    event.replaceInput({}, 'thermal:coal_coke', '#forge:gems/coal_coke');
    event.replaceInput({}, 'mapperbase:raw_bitumen', '#forge:gems/bitumen', true);
    event.replaceInput({}, 'mapperbase:bitumen_ore', '#forge:ores/bitumen', true);
    event.replaceInput({}, 'rftoolsbase:dimensionalshard', '#forge:gems/dimensional');
    event.replaceInput({}, 'immersivepetroleum:bitumen', '#forge:gems/bitumen', true);
    event.replaceInput({}, 'ars_nouveau:mana_gem', '#forge:gems/mana');
    event.replaceInput({}, 'immersiveengineering:slag', '#forge:slag');
    event.replaceInput({}, 'thermal:slag', '#forge:slag');
    event.replaceInput({}, 'simplefarming:cooked_egg', '#forge:cooked_eggs');
    event.replaceInput({}, 'farmersdelight:fried_egg', '#forge:cooked_eggs');
    event.replaceInput({}, 'farmersdelight:brown_mushroom_colony', '#forge:mushroom_colonies/brown');
    event.replaceInput({}, 'farmersdelight:red_mushroom_colony', '#forge:mushroom_colonies/red');
    event.replaceInput({}, 'betterendforge:ender_dust', '#forge:dusts/ender');
    event.replaceInput({}, 'minecraft:iron_ore', '#forge:ores/iron');
    event.replaceInput({}, 'minecraft:gold_ore', '#forge:ores/gold');
    event.replaceInput({}, 'upgrade_aquatic:beachgrass', '#enigmatica:crafting_materials/beach_grass');
    event.replaceInput({}, 'pneumaticcraft:wheat_flour', '#forge:dusts/flour');
    event.replaceInput({}, 'create:wheat_flour', '#forge:dusts/flour');
    event.replaceInput({}, 'pedestals:dustflour', '#forge:dusts/flour');
    event.replaceInput({}, 'create:dough', '#forge:doughs');
    event.replaceInput({}, 'farmersdelight:wheat_dough', '#forge:doughs');
    event.replaceInput({}, 'create:bar_of_chocolate', '#forge:chocolate_bars');
    event.replaceInput({}, 'simplefarming:chocolate', '#forge:chocolate_bars');
    event.replaceInput({}, 'simplefarming:noodles', '#forge:pasta/raw_pasta');
    event.replaceInput({}, 'simplefarming:jam', '#forge:jams');
    event.replaceInput({}, 'simplefarming:raw_bacon', '#forge:raw_bacon');
    event.replaceInput({}, 'simplefarming:cooked_bacon', '#forge:cooked_bacon');
    event.replaceInput({ mod: 'simplefarming' }, 'minecraft:cooked_chicken', '#forge:cooked_chicken');
    event.replaceInput({ id: '/simplefarming:\\w+burger/' }, 'minecraft:cooked_beef', 'farmersdelight:beef_patty');
    event.replaceInput(
        {
            not: [{ type: 'ars_nouveau:glyph_recipe' }]
        },
        'minecraft:nether_brick',
        '#forge:ingots/nether_brick'
    );
    event.replaceInput({}, 'minecraft:nether_bricks', '#forge:netherbricks');
    event.replaceInput({ type: 'minecraft:crafting_shaped' }, 'minecraft:stone', '#forge:stone', true);
    event.replaceInput({ type: 'minecraft:crafting_shapeless' }, 'minecraft:stone', '#forge:stone', true);
    event.replaceInput({ type: 'minecraft:crafting_shaped' }, 'powah:uraninite', '#forge:ingots/radioactive');
    event.replaceInput({ type: 'minecraft:crafting_shaped' }, 'minecraft:netherrack', '#forge:netherrack');
    event.replaceInput({ id: 'tetra:hammer/stone' }, 'minecraft:cobblestone', '#quark:stone_tool_materials');
    event.replaceInput({ id: 'dustrial_decor:sheet_metal' }, '#forge:ingots/iron', '#forge:plates/iron');
    event.replaceInput({ mod: 'buildinggadgets' }, '#forge:ingots/iron', '#forge:ingots/iron_aluminum');
    event.replaceInput({ id: 'tanknull:1' }, 'minecraft:coal_block', 'minecraft:sponge');

    event.replaceInput({ mod: 'powah' }, '#forge:ingots/iron', '#forge:ingots/iron_copper');
    event.replaceInput({ mod: 'powah' }, '#forge:nuggets/iron', '#forge:nuggets/iron_copper');

    powahTiers.forEach(function (tier) {
        var capacitor = 'powah:capacitor_' + tier;
        event.replaceInput({ id: 'powah:crafting/energy_cell_' + tier }, '#powah:energy_cell', capacitor);
        event.replaceInput(
            { id: 'powah:crafting/energizing_rod_' + tier },
            '#powah:energizing_rod',
            'powah:energy_cable_' + tier
        );
        if (tier == 'basic') {
            capacitor = 'powah:capacitor_' + tier + '_large';
        }
        event.replaceInput({ id: 'powah:crafting/battery_' + tier }, '#powah:battery', capacitor);
    });

    event.replaceInput({ mod: 'powah' }, '#powah:furnator', 'minecraft:blast_furnace');
    event.replaceInput({ mod: 'powah' }, '#powah:magmator', 'mekanism:dynamic_tank');
    event.replaceInput({ mod: 'powah' }, '#powah:thermo_generator', 'powah:thermoelectric_plate');
    event.replaceInput({ mod: 'powah' }, '#powah:solar_panel', 'powah:photoelectric_pane');

    event.replaceInput(
        { id: 'powah:crafting/solar_panel_basic' },
        'powah:solar_panel_starter',
        'powah:photoelectric_pane'
    );
    event.replaceInput({ mod: 'powah' }, '#powah:energy_hopper', 'minecraft:hopper');
    // no, that's not a typo in the ID
    event.replaceInput(
        { id: 'powah:crafting/player_tranmitter_basic' },
        'powah:player_transmitter_starter',
        'powah:player_aerial_pearl'
    );

    event.replaceInput({ mod: 'astralsorcery' }, 'astralsorcery:marble_raw', '#forge:stones/marble');

    event.replaceInput(
        { type: 'minecraft:crafting_shaped', output: 'minecraft:piston' },
        '#forge:cobblestone',
        '#quark:stone_tool_materials'
    );

    ['quark:tallow', 'eidolon:tallow', 'occultism:tallow'].forEach((tallow) => {
        event.replaceInput({}, tallow, '#forge:tallow');
    });

    event.replaceInput(
        { id: 'dustrial_decor:iron_bar_trapdoor' },
        'minecraft:iron_bars',
        'dustrial_decor:barbed_iron_bars'
    );

    event.replaceInput(
        { id: 'bloodmagic:alchemytable/basic_cutting_fluid' },
        'minecraft:potion',
        Item.of('minecraft:potion', { Potion: 'minecraft:water' })
    );

    event.replaceInput(
        { id: 'create:mixing/chromatic_compound' },
        'create:powdered_obsidian',
        Ingredient.of('#forge:dusts/obsidian')
    );

    event.replaceInput({ id: 'fluxnetworks:fluxconfigurator' }, 'minecraft:ender_eye', 'powah:ender_core');

    event.replaceInput({ id: 'fluxnetworks:fluxpoint' }, 'minecraft:redstone_block', 'powah:ender_gate_nitro');
    event.replaceInput({ id: 'pneumaticcraft:reinforced_stone' }, 'minecraft:stone', '#forge:stone');
    event.replaceInput({ id: 'cookingforblockheads:crafting_book' }, 'minecraft:crafting_table', '#forge:workbench');

    event.replaceInput({ id: 'minecraft:nether_bricks' }, '#forge:ingots/nether_brick', 'minecraft:nether_brick');
    event.replaceInput(
        { id: 'thermal:machine/press/packing2x2/press_nether_bricks_packing' },
        '#forge:ingots/nether_brick',
        'minecraft:nether_brick'
    );

    sharedDies.forEach((die) => {
        var dieTag = `#thermal:crafting/dies/${die.thermalName}`;
        event.replaceInput({}, `immersiveengineering:mold_${die.immersiveEngineeringName}`, dieTag);
        event.replaceInput({}, `thermal:press_${die.thermalName}_die`, dieTag);
    });
    thermalDies.forEach((dieName) => {
        event.replaceInput({}, `thermal:press_${dieName}_die`, `#thermal:crafting/dies/${dieName}`);
    });
    immersiveEngineeringDies.forEach((dieName) => {
        event.replaceInput({}, `immersiveengineering:mold_${dieName}`, `#thermal:crafting/dies/${dieName}`);
    });

    colors.forEach((color) => {
        var dyeTag = `#forge:dyes/${color}`;

        // Replaces recipes not using forge:dyes tag for inputs
        event.replaceInput({}, `minecraft:${color}_dye`, dyeTag, true);

        event.remove({
            id: `minecraft:${color}_carpet_from_white_carpet`
        });
        event.shaped(Item.of(`minecraft:${color}_carpet`, 3), ['WW'], {
            W: `minecraft:${color}_wool`
        });

        event.shaped(Item.of(`minecraft:${color}_stained_glass_pane`, 8), ['GGG', 'GDG', 'GGG'], {
            G: 'minecraft:glass_pane',
            D: dyeTag
        });

        event.shaped(Item.of(`minecraft:${color}_stained_glass`, 8), ['GGG', 'GDG', 'GGG'], {
            G: 'minecraft:glass',
            D: dyeTag
        });

        ['stained_glass', 'stained_glass_pane', 'terracotta', 'concrete_powder', 'wool', 'carpet'].forEach(
            (blockName) => {
                var itemTag = `#forge:${blockName}`;
                var block = `minecraft:${color}_${blockName}`;

                if (blockName == 'stained_glass_pane') {
                    event.remove({ id: `${block}_from_glass_pane` });
                } else {
                    event.remove({ id: block });
                }

                event.shaped(Item.of(block, 8), ['SSS', 'SDS', 'SSS'], {
                    S: itemTag,
                    D: dyeTag
                });
                event.shapeless(Item.of(block, 1), [dyeTag, itemTag]);
            }
        );
        event.shapeless(Item.of(`minecraft:${color}_concrete_powder`, 8), [
            dyeTag,
            '#forge:sand',
            '#forge:sand',
            '#forge:sand',
            '#forge:sand',
            '#forge:gravel',
            '#forge:gravel',
            '#forge:gravel',
            '#forge:gravel'
        ]);
    });
    var data = {
        recipes: [
            {
                type: 'storage_blocks',
                replace: 'iron',
                replaceWith: 'aluminum',
                items: [
                    'bloodmagic:soulforge',
                    'mininggadgets:upgrade_fortune_1',
                    'resourcefulbees:centrifuge_casing',
                    'xnet:antenna_base'
                ]
            },
            {
                type: 'storage_blocks',
                replace: 'iron',
                replaceWith: 'brass',
                items: ['ars_nouveau:glyph_press']
            },
            {
                type: 'storage_blocks',
                replace: 'iron',
                replaceWith: 'invar',
                items: ['resourcefulbees:centrifuge_controller']
            },
            {
                type: 'storage_blocks',
                replace: 'iron',
                replaceWith: 'lead',
                items: ['travel_anchors:travel_anchor', 'thermal:machine_press', 'bloodmagic:alchemicalreactionchamber']
            },
            {
                type: 'storage_blocks',
                replace: 'iron',
                replaceWith: 'tin',
                items: ['aquaculture:tackle_box']
            },
            {
                type: 'dusts',
                replace: 'gold',
                replaceWith: 'copper',
                items: ['mekanism:upgrade_energy']
            },
            {
                type: 'gears',
                replace: 'gold',
                replaceWith: 'bronze',
                items: ['thermal:upgrade_augment_1']
            },
            {
                type: 'gears',
                replace: 'gold',
                replaceWith: 'copper',
                items: ['thermal:flux_drill', 'thermal:flux_saw']
            },
            {
                type: 'gears',
                replace: 'gold',
                replaceWith: 'silver',
                items: ['thermal:dynamo_lapidary']
            },
            {
                type: 'ingots',
                replace: 'gold',
                replaceWith: 'brass',
                items: [
                    'ars_nouveau:arcane_core',
                    'ars_nouveau:crystallizer',
                    'ars_nouveau:volcanic_accumulator',
                    'pneumaticcraft:gun_ammo',
                    'ars_nouveau:marvelous_clay'
                ]
            },
            {
                type: 'ingots',
                replace: 'gold',
                replaceWith: 'bronze',
                items: [
                    'bloodmagic:alchemytable',
                    'bloodmagic:altar',
                    'bloodmagic:sacrificialdagger',
                    'bloodmagic:experiencebook',
                    'bloodmagic:soulforge',
                    'pneumaticcraft:medium_tank',
                    'pneumaticcraft:minigun',
                    'pneumaticcraft:pressure_gauge',
                    'thermal:diving_helmet',
                    'thermal:diving_chestplate',
                    'thermal:diving_leggings',
                    'thermal:diving_boots',
                    'minecraft:clock'
                ]
            },
            {
                type: 'ingots',
                replace: 'gold',
                replaceWith: 'copper',
                items: [
                    'mekanismgenerators:electromagnetic_coil',
                    'mekanism:energy_tablet',
                    'mininggadgets:upgrade_magnet',
                    'xnet:controller',
                    'thermal:rf_coil_xfer_augment',
                    'thermal:rf_coil_storage_augment',
                    'thermal:rf_coil_augment',
                    'thermal:rf_coil',
                    'rftoolsstorage:storage_scanner',
                    'rftoolsbuilder:shield_block1',
                    'pneumaticcraft:vortex_tube',
                    'pneumaticcraft:heat_sink',
                    'modularrouters:speed_upgrade',
                    'xnet:connector_blue',
                    'xnet:connector_red',
                    'xnet:connector_green'
                ]
            },
            {
                type: 'ingots',
                replace: 'gold',
                replaceWith: 'silver',
                items: ['torchmaster:feral_flare_lantern', 'mekanism:teleportation_core', 'botania:mana_spreader']
            },
            {
                type: 'ingots',
                replace: 'gold',
                replaceWith: 'tin',
                items: ['pneumaticcraft:memory_stick']
            },
            {
                type: 'ingots',
                replace: 'iron',
                replaceWith: 'aluminum',
                items: [
                    'immersiveengineering:conveyor_splitter',
                    'immersiveengineering:conveyor_vertical',
                    'immersiveengineering:conveyor_basic',
                    'immersiveengineering:current_transformer',
                    'immersiveengineering:transformer_hv',
                    'immersiveengineering:transformer',
                    'immersiveengineering:dynamo',
                    'immersiveengineering:furnace_heater',
                    'immersiveengineering:toolupgrade_drill_lube',
                    'endermail:locker',
                    'endermail:package_controller',
                    'cookingforblockheads:preservation_chamber',
                    'buildersaddition:arcade',
                    'minecraft:compass',
                    'minecraft:piston',
                    'xnet:antenna_dish',
                    'xnet:antenna_base',
                    'xnet:antenna',
                    'transport:fluid_loader',
                    'resourcefulbees:centrifuge_casing',
                    'engineersdecor:metal_bar'
                ]
            },
            {
                type: 'ingots',
                replace: 'iron',
                replaceWith: 'brass',
                items: ['ars_nouveau:mana_condenser', 'ars_nouveau:enchanting_apparatus']
            },
            {
                type: 'ingots',
                replace: 'iron',
                replaceWith: 'copper',
                items: [
                    'shrink:shrinking_device',
                    'immersiveengineering:charging_station',
                    'cookingforblockheads:heating_unit',
                    'aquaculture:tackle_box'
                ]
            },
            {
                type: 'ingots',
                replace: 'iron',
                replaceWith: 'lead',
                items: ['travel_anchors:travel_anchor', 'travel_anchors:travel_staff']
            },
            {
                type: 'ingots',
                replace: 'iron',
                replaceWith: 'tin',
                items: ['bloodmagic:soulsnare', 'modularrouters:bulk_item_filter']
            },
            {
                type: 'nuggets',
                replace: 'gold',
                replaceWith: 'bronze',
                items: ['rftoolsstorage:storage_module0']
            },
            {
                type: 'nuggets',
                replace: 'gold',
                replaceWith: 'copper',
                items: [
                    'xnet:connector_routing',
                    'xnet:netcable_routing',
                    'xnet:netcable_yellow',
                    'xnet:netcable_blue',
                    'xnet:netcable_green',
                    'xnet:netcable_red',
                    'rftoolsbase:machine_base',
                    'rftoolsbase:machine_frame',
                    'rftoolscontrol:card_base',
                    'modularrouters:speed_upgrade',
                    'modularrouters:blank_upgrade',
                    'modularrouters:blank_module'
                ]
            },
            {
                type: 'nuggets',
                replace: 'gold',
                replaceWith: 'silver',
                items: ['botania:spark']
            }
        ]
    };

    data.recipes.forEach((recipe) => {
        recipe.items.forEach((item) => {
            event.replaceInput(
                { output: item },
                '#forge:' + recipe.type + '/' + recipe.replace,
                '#forge:' + recipe.type + '/' + recipe.replace + '_' + recipe.replaceWith
            );
        });
    });
});
