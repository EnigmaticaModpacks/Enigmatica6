onEvent('jei.information', (event) => {
    const id_prefix = 'descriptions.enigmatica.base.';

    const recipes = [
        /*
        {
            items: ['modid:item'],
            text: ['description text accepts %s and %s', `${id_prefix}cheese_slice`, '%s'],
            with: [
                [Text.translate('language_key'), 'raw text'],
                ['language keys in `text` will be automatically converted to text defined in lang/xx_xx.json'],
                ['but note that `with` does not handle language key']
            ]
        },
        */
        {
            items: ['simplefarming:cheese_slice'],
            text: [`${id_prefix}cheese_slice`]
        },
        {
            items: ['farmersdelight:ham'],
            text: [`${id_prefix}ham`]
        },
        {
            items: ['astralsorcery:stardust'],
            text: [`${id_prefix}stardust`]
        },
        {
            items: ['buildinggadgets:construction_paste'],
            text: [`${id_prefix}construction_paste`]
        },
        {
            items: ['powah:uraninite', 'powah:uraninite_block'],
            text: [`${id_prefix}uraninite`]
        },
        {
            items: ['thermal:blizz_rod', 'thermal:blizz_spawn_egg'],
            text: [`${id_prefix}blizz`]
        },
        {
            items: ['thermal:blitz_rod', 'thermal:blitz_spawn_egg'],
            text: [`${id_prefix}blitz`]
        },
        {
            items: ['thermal:basalz_rod', 'thermal:basalz_spawn_egg'],
            text: [`${id_prefix}basalz`]
        },
        {
            items: ['betterendforge:emerald_ice'],
            text: [`${id_prefix}emerald_ice`]
        },
        {
            items: ['betterendforge:dense_emerald_ice'],
            text: [`${id_prefix}dense_emerald_ice`]
        },
        {
            items: ['betterendforge:ancient_emerald_ice'],
            text: [`${id_prefix}ancient_emerald_ice`]
        },
        {
            items: ['simplefarming:habanero'],
            text: [`${id_prefix}habanero`]
        },
        {
            items: ['mekanismgenerators:fusion_reactor_controller'],
            text: [`${id_prefix}fusion_reactor`]
        },
        {
            items: [
                'industrialforegoing:infinity_backpack',
                'industrialforegoing:infinity_saw',
                'industrialforegoing:infinity_drill',
                'industrialforegoing:infinity_hammer',
                'industrialforegoing:infinity_trident',
                'industrialforegoing:infinity_nuke',
                'industrialforegoing:infinity_launcher'
            ],
            text: [`${id_prefix}infinity_tools`]
        },
        {
            items: [
                'industrialforegoing:infinity_backpack',
                'industrialforegoing:infinity_saw',
                'industrialforegoing:infinity_drill',
                'industrialforegoing:infinity_hammer',
                'industrialforegoing:infinity_trident',
                'industrialforegoing:infinity_nuke',
                'industrialforegoing:infinity_launcher'
            ],
            text: [`${id_prefix}infinity_tools_2`]
        },
        {
            items: ['farmersdelight:brown_mushroom_colony', 'minecraft:brown_mushroom'],
            text: [`${id_prefix}brown_mushroom`]
        },
        {
            items: ['farmersdelight:red_mushroom_colony', 'minecraft:red_mushroom'],
            text: [`${id_prefix}red_mushroom`]
        },
        {
            items: [
                'integratedtunnels:part_interface_energy',
                'integratedtunnels:part_importer_energy',
                'integratedtunnels:part_exporter_energy'
            ],
            text: [`${id_prefix}integratedtunnels_energy`]
        },
        {
            items: [
                'integratedtunnels:part_interface_fluid',
                'integratedtunnels:part_importer_fluid',
                'integratedtunnels:part_exporter_fluid'
            ],
            text: [`${id_prefix}integratedtunnels_fluid`]
        },
        {
            items: ['minecraft:nautilus_shell'],
            text: [`${id_prefix}nautilus_shell`]
        },
        {
            items: ['architects_palette:twisted_sapling'],
            text: [`${id_prefix}twisted_sapling`]
        },
        {
            items: ['architects_palette:warpstone'],
            text: [`${id_prefix}warpstone`]
        },
        {
            items: ['byg:warped_cactus'],
            text: [`${id_prefix}warped_cactus`]
        },
        {
            items: ['byg:warped_coral', 'byg:warped_coral_fan'],
            text: [`${id_prefix}warped_coral`]
        },
        {
            items: ['architects_palette:chiseled_abyssaline_bricks'],
            text: [`${id_prefix}chiseled_abyssaline_bricks`]
        },
        {
            items: [
                'architects_palette:abyssaline_lamp',
                'architects_palette:abyssaline_tile_slab',
                'architects_palette:abyssaline_tiles',
                'architects_palette:abyssaline_brick_slab',
                'architects_palette:abyssaline_pillar',
                'architects_palette:abyssaline_bricks',
                'architects_palette:abyssaline'
            ],
            text: [`${id_prefix}abyssaline`]
        },
        {
            items: [
                'architects_palette:blank_acacia_totem',
                'architects_palette:shocked_acacia_totem',
                'architects_palette:placid_acacia_totem',
                'architects_palette:grinning_acacia_totem'
            ],
            text: [`${id_prefix}acacia_totem`]
        },
        {
            items: ['betterendforge:silk_fiber'],
            text: [`${id_prefix}silk_fiber`]
        },
        {
            items: [/upgrade_aquatic:(?!.*dead_coralstone|chiseled)(?=.*_coralstone$)/],
            text: [`${id_prefix}universal_coralstone`]
        },
        {
            items: ['upgrade_aquatic:coralstone'],
            text: [`${id_prefix}coralstone`]
        },
        {
            items: ['upgrade_aquatic:dead_coralstone'],
            text: [`${id_prefix}dead_coralstone`]
        },
        {
            items: [
                'quark:red_crystal',
                'quark:orange_crystal',
                'quark:yellow_crystal',
                'quark:green_crystal',
                'quark:blue_crystal',
                'quark:indigo_crystal',
                'quark:violet_crystal',
                'quark:white_crystal',
                'quark:black_crystal'
            ],
            text: [`${id_prefix}quark_crystal`]
        },
        {
            items: [/quark:\w+_crystal_cluster/],
            text: [`${id_prefix}quark_crystal_cluster`]
        },
        {
            items: ['quark:bottled_cloud'],
            text: [`${id_prefix}bottled_cloud`]
        },
        {
            items: [Item.of('naturesaura:aura_bottle', { stored_type: 'naturesaura:overworld' })],
            text: [`${id_prefix}overworld_aura_bottle`]
        },
        {
            items: [Item.of('naturesaura:aura_bottle', { stored_type: 'naturesaura:end' })],
            text: [`${id_prefix}end_aura_bottle`]
        },
        {
            items: [Item.of('naturesaura:aura_bottle', { stored_type: 'naturesaura:nether' })],
            text: [`${id_prefix}nether_aura_bottle`]
        },
        {
            items: ['quark:root_item'],
            text: [`${id_prefix}quark_root_item`]
        },
        {
            items: ['quark:root'],
            text: [`${id_prefix}quark_root`]
        },
        {
            items: ['meetyourfight:phantoplasm'],
            text: [`${id_prefix}phantoplasm`]
        },
        {
            items: ['meetyourfight:mossy_tooth'],
            text: [`${id_prefix}mossy_tooth`]
        },
        {
            items: ['meetyourfight:fortunes_favor'],
            text: [`${id_prefix}fortunes_favor`]
        },
        {
            items: ['atum:ectoplasm'],
            text: [`${id_prefix}ectoplasm`]
        },
        {
            items: ['minecraft:firework_rocket'],
            text: [`${id_prefix}firework_rocket`]
        },
        {
            items: ['minecraft:firework_rocket'],
            text: [`${id_prefix}firework_rocket_2`]
        },
        {
            items: ['minecraft:firework_star'],
            text: [`${id_prefix}firework_star`]
        },
        {
            items: ['minecraft:firework_star'],
            text: [`${id_prefix}firework_star_2`]
        },
        {
            items: ['minecraft:dragon_egg'],
            text: [`${id_prefix}dragon_egg`]
        },
        {
            items: ['byg:leaf_pile'],
            text: [`${id_prefix}leaf_pile`]
        },
        {
            items: ['eidolon:soul_shard'],
            text: [`${id_prefix}soul_shard`]
        },
        {
            items: ['atum:anputs_fingers_spores'],
            text: [`${id_prefix}anputs_fingers_spores`]
        },
        {
            items: ['immersiveengineering:furnace_heater', 'mekanism:fuelwood_heater', 'mekanism:resistive_heater'],
            text: [`${id_prefix}heater`]
        },
        {
            items: ['immersiveengineering:logic_circuit'],
            text: [`${id_prefix}logic_circuit`]
        },
        {
            items: ['alexsmobs:hemolymph_sac', 'alexsmobs:warped_muscle'],
            text: [`${id_prefix}hemolymph_sac`]
        },
        {
            items: ['alexsmobs:hemolymph_sac', 'alexsmobs:warped_muscle'],
            text: [`${id_prefix}hemolymph_sac_2`]
        },
        {
            items: ['astralsorcery:gem_crystal_cluster'],
            text: [`${id_prefix}gem_crystal_cluster`]
        },
        {
            items: ['astralsorcery:celestial_crystal_cluster'],
            text: [`${id_prefix}celestial_crystal_cluster`]
        },
        {
            items: ['astralsorcery:celestial_crystal_cluster'],
            text: [`${id_prefix}celestial_crystal_cluster_2`]
        },
        {
            items: ['bloodmagic:weak_tau'],
            text: [`${id_prefix}weak_tau`]
        },
        {
            items: ['bloodmagic:strong_tau'],
            text: [`${id_prefix}strong_tau`]
        },
        {
            items: ['eidolon:unholy_symbol'],
            text: [`${id_prefix}unholy_symbol`]
        },
        {
            items: [
                'resourcefulbees:t1_beehive',
                'resourcefulbees:t2_beehive',
                'resourcefulbees:t3_beehive',
                'resourcefulbees:t4_beehive'
            ],
            text: [`${id_prefix}beehive`]
        },
        {
            items: ['upgrade_aquatic:flare_spawn_egg'],
            text: [`${id_prefix}flare`]
        },
        {
            items: ['immersiveengineering:cloche'],
            text: [`${id_prefix}cloche`]
        },
        {
            items: ['quark:dragon_scale'],
            text: [`${id_prefix}dragon_scale`]
        },
        {
            items: [
                'dankstorage:1_to_2',
                'dankstorage:2_to_3',
                'dankstorage:3_to_4',
                'dankstorage:4_to_5',
                'dankstorage:5_to_6',
                'dankstorage:6_to_7'
            ],
            text: [`${id_prefix}dankstorage`]
        },
        {
            items: [Item.of('resourcefulbees:bee_jar', { Entity: 'resourcefulbees:dusty_mummbee_bee' })],
            text: [`${id_prefix}dusty_mummbee_bee`]
        },
        {
            items: ['quark:slime_in_a_bucket'],
            text: [`${id_prefix}slime_in_a_bucket`]
        },
        {
            items: ['alexsmobs:mysterious_worm'],
            text: [`${id_prefix}mysterious_worm`]
        },
        {
            items: ['alexsmobs:capsid'],
            text: [`${id_prefix}capsid`]
        },
        {
            items: ['eidolon:sanguine_amulet', 'eidolon:sapping_sword'],
            text: [`${id_prefix}sanguine_amulet`]
        },
        {
            items: ['atum:papyrus_plant'],
            text: [`${id_prefix}papyrus_plant`]
        },
        {
            items: ['astralsorcery:infused_wood'],
            text: [`${id_prefix}infused_wood`]
        },
        {
            items: ['environmental:thief_hood'],
            text: [`${id_prefix}thief_hood`]
        },
        {
            items: ['naturesaura:gold_leaf'],
            text: [`${id_prefix}gold_leaf`]
        },
        {
            items: ['naturesaura:golden_leaves'],
            text: [`${id_prefix}golden_leaves`]
        },
        {
            items: [/masterfulmachinery:\w+_controller/],
            text: [`${id_prefix}masterfulmachinery`]
        },
        {
            items: [/masterfulmachinery:\w+_controller/],
            text: [`${id_prefix}masterfulmachinery_2`]
        },

        {
            items: [/masterfulmachinery:\w+_controller/],
            text: [`${id_prefix}masterfulmachinery_3`]
        },
        {
            items: ['naturesaura:break_prevention'],
            text: [`${id_prefix}break_prevention`]
        },
        {
            items: ['ars_nouveau:belt_of_levitation'],
            text: [`${id_prefix}belt_of_levitation`]
        },
        {
            items: ['create:chromatic_compound', 'create:refined_radiance'],
            text: [`${id_prefix}refined_radiance`]
        },
        {
            items: ['create:chromatic_compound', 'create:shadow_steel'],
            text: [`${id_prefix}shadow_steel`]
        },
        {
            items: ['naturesaura:projectile_generator'],
            text: [`${id_prefix}projectile_generator`]
        },
        {
            items: ['naturesaura:projectile_generator'],
            text: [`${id_prefix}projectile_generator_2`]
        },
        {
            items: ['naturesaura:birth_spirit'],
            text: [`${id_prefix}birth_spirit`]
        },
        {
            items: ['create:hose_pulley'],
            text: [`${id_prefix}hose_pulley`]
        },
        {
            items: ['farmersdelight:honey_glazed_ham'],
            text: [`${id_prefix}honey_glazed_ham`]
        },
        {
            items: ['farmersdelight:stuffed_pumpkin'],
            text: [`${id_prefix}stuffed_pumpkin`]
        },
        {
            items: ['farmersdelight:roast_chicken'],
            text: [`${id_prefix}roast_chicken`]
        },
        {
            items: ['simplefarming:brewing_barrel'],
            text: [`${id_prefix}brewing_barrel`]
        },
        {
            items: ['simplefarming:brewing_barrel'],
            text: [`${id_prefix}brewing_barrel_2`]
        },
        {
            items: disabledItems,
            text: [`${id_prefix}disabled_please_report`]
        },
        {
            items: generatableCobblestone,
            text: [`${id_prefix}generatable_cobble`]
        },
        {
            items: generatableStone,
            text: [`${id_prefix}generatable_stone`]
        },
        {
            items: refinedStorageItems.map((item) => `refinedstorage:${item}`),
            text: [`${id_prefix}can_be_dyed`]
        },
        {
            items: [
                'compact_drawer',
                'drawer_controller',
                'slave',
                'trim',
                'full_one',
                'full_two',
                'full_four',
                'half_one',
                'half_two',
                'half_four'
            ].map((item) => 'framedcompactdrawers:framed_' + item),
            text: [`${id_prefix}framed_drawers`]
        }
    ];

    const simplefarming_beverages = ['beer', 'cauim', 'cider', 'mead', 'sake', 'tiswin', 'vodka', 'whiskey', 'wine'];

    simplefarming_beverages.forEach((beverage) => {
        recipes.push({
            items: [`simplefarming:${beverage}`],
            text: [`${id_prefix}beverages`],
            with: [
                [
                    Text.translate(`${id_prefix}beverages.${beverage}.ingredient`),
                    Text.translate(`${id_prefix}beverages.${beverage}.effect`)
                ]
            ]
        });
    });

    recipes.forEach((recipe) => {
        for (let i = 0; i < recipe.text.length; i++) {
            if (recipe.with && recipe.with.length > i) {
                recipe.text[i] = Text.translate(recipe.text[i], recipe.with[i]);
            } else {
                recipe.text[i] = Text.translate(recipe.text[i]);
            }
        }
        recipe.items.forEach((item) => {
            event.add(item, recipe.text);
        });
    });
});
