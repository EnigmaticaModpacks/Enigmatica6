events.listen('recipes', function (event) {
    var blockNames = ['stained_glass', 'stained_glass_pane', 'terracotta', 'concrete_powder', 'wool', 'carpet'];
    for (var i = 0; i < colors.length; i++) {
        var dyeTag = '#forge:dyes/' + colors[i];
        for (var j = 0; j < blockNames.length; j++) {
            var itemTag = '#forge:' + blockNames[j];
            var block = 'minecraft:' + colors[i] + '_' + blockNames[j];
            if (blockNames[j] === 'stained_glass_pane') {
                event.remove({ id: block + '_from_glass_pane' });
            } else {
                event.remove({ id: block });
            }

            event.shaped({ item: block, count: 8 }, ['SSS', 'SDS', 'SSS'], {
                S: itemTag,
                D: dyeTag
            });
            event.shapeless({ item: block, count: 1 }, [dyeTag, itemTag]);
        }

        var itemTag = '#forge:' + 'concrete_powder';
        var sand = '#forge:sand';
        var gravel = '#forge:gravel';

        event.shapeless({ item: 'minecraft:' + colors[i] + '_concrete_powder', count: 8 }, [
            dyeTag,
            sand,
            sand,
            sand,
            sand,
            gravel,
            gravel,
            gravel,
            gravel
        ]);

        var wool = 'minecraft:' + colors[i] + '_wool';
        event.remove({ id: 'minecraft:' + colors[i] + '_carpet_from_white_carpet' });
        event.shaped({ item: 'minecraft:' + colors[i] + '_carpet', count: 3 }, ['WW'], {
            W: wool
        });

        var glass_pane = 'minecraft:glass_pane';
        event.shaped({ item: 'minecraft:' + colors[i] + '_stained_glass_pane', count: 8 }, ['GGG', 'GDG', 'GGG'], {
            G: glass_pane,
            D: dyeTag
        });

        var glass = 'minecraft:glass';
        event.shaped({ item: 'minecraft:' + colors[i] + '_stained_glass', count: 8 }, ['GGG', 'GDG', 'GGG'], {
            G: glass,
            D: dyeTag
        });
    }

    // Replaces recipes not using forge:dyes tag for inputs
    colors.forEach(function (color) {
        event.replaceInput({}, 'minecraft:' + color + '_dye', '#forge:dyes/' + color);
    });

    event.replaceInput({ type: 'minecraft:crafting_shaped' }, 'powah:uraninite', '#forge:ingots/radioactive');

    event.replaceInput({}, 'refinedstorage:silicon', '#forge:silicon');

    event.replaceInput({}, 'astralsorcery:marble_raw', '#forge:stones/marble');

    event.replaceInput({}, 'thermal:cinnabar', '#forge:gems/cinnabar');
    event.replaceInput({}, 'thermal:sulfur', '#forge:gems/sulfur');
    event.replaceInput({}, 'thermal:apatite', '#forge:gems/apatite');
    event.replaceInput({}, 'thermal:niter', '#forge:gems/niter');

    event.replaceInput({}, 'mapperbase:raw_bitumen', '#forge:gems/bitumen');

    event.replaceInput({}, '#forge:fillet_knife', '#forge:tools/knife');
    event.replaceInput({}, '#farmersdelight:tools/knife', '#forge:tools/knife');

    event.replaceInput(
        { type: 'minecraft:crafting_shaped', output: 'minecraft:piston' },
        '#forge:cobblestone',
        '#quark:stone_tool_materials'
    );

    event.replaceInput({}, 'immersivepetroleum:bitumen', '#forge:gems/bitumen');
    event.replaceInput({}, 'ars_nouveau:mana_gem', '#forge:gems/mana');
    event.replaceInput({}, 'immersiveengineering:slag', '#forge:slag');
    event.replaceInput({}, 'thermal:slag', '#forge:slag');
    event.replaceInput({}, 'simplefarming:cooked_egg', '#forge:cooked_eggs');
    event.replaceInput({}, 'farmersdelight:fried_egg', '#forge:cooked_eggs');

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
                    'pneumaticcraft:gun_ammo'
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
                    'xnet:antenna_dish',
                    'xnet:antenna_base',
                    'xnet:antenna',
                    'transport:fluid_loader',
                    'resourcefulbees:centrifuge_casing'
                ]
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

    event.replaceInput({ mod: 'buildinggadgets' }, '#forge:ingots/iron', '#forge:ingots/iron_aluminum');
    event.replaceInput({ mod: 'powah' }, '#forge:ingots/iron', '#forge:ingots/iron_copper');
    event.replaceInput({ mod: 'powah' }, '#forge:nuggets/iron', '#forge:nuggets/iron_copper');
});
