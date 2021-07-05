//priority: 1000

const treeRegistry = [
    {
        type: 'tree',
        trees: [
            {
                sapling: 'ars_nouveau:blue_archwood_sapling',
                trunk: 'ars_nouveau:blue_archwood_log',
                leaf: 'ars_nouveau:blue_archwood_leaves',
                fruit: 'minecraft:apple',
                substrate: 'dirt',
                sap: 'thermal:resin',
                rate: { living: 75, dead: 8 }
            },
            {
                sapling: 'ars_nouveau:green_archwood_sapling',
                trunk: 'ars_nouveau:green_archwood_log',
                leaf: 'ars_nouveau:green_archwood_leaves',
                fruit: 'minecraft:apple',
                substrate: 'dirt',
                sap: 'thermal:resin',
                rate: { living: 75, dead: 8 }
            },
            {
                sapling: 'ars_nouveau:purple_archwood_sapling',
                trunk: 'ars_nouveau:purple_archwood_log',
                leaf: 'ars_nouveau:purple_archwood_leaves',
                fruit: 'minecraft:apple',
                substrate: 'dirt',
                sap: 'thermal:resin',
                rate: { living: 75, dead: 8 }
            },
            {
                sapling: 'ars_nouveau:red_archwood_sapling',
                trunk: 'ars_nouveau:red_archwood_log',
                leaf: 'ars_nouveau:red_archwood_leaves',
                fruit: 'minecraft:apple',
                substrate: 'dirt',
                sap: 'thermal:resin',
                rate: { living: 75, dead: 8 }
            },
            {
                sapling: 'byg:araucaria_sapling',
                trunk: 'byg:pine_log',
                leaf: 'byg:araucaria_leaves',
                substrate: 'dirt',
                sap: 'thermal:resin',
                rate: { living: 50, dead: 6 }
            },
            {
                sapling: 'byg:aspen_sapling',
                trunk: 'byg:aspen_log',
                leaf: 'byg:aspen_leaves',
                substrate: 'dirt',
                sap: 'thermal:resin',
                rate: { living: 75, dead: 8 }
            },
            {
                sapling: 'byg:baobab_sapling',
                trunk: 'byg:baobab_log',
                leaf: 'byg:baobab_leaves',
                fruit: 'byg:baobab_fruit',
                substrate: 'dirt',
                sap: 'industrialforegoing:latex',
                rate: { living: 50, dead: 6 }
            },
            {
                sapling: 'byg:blue_enchanted_sapling',
                trunk: 'byg:blue_enchanted_log',
                leaf: 'byg:blue_enchanted_leaves',
                substrate: 'dirt',
                sap: 'thermal:resin',
                rate: { living: 50, dead: 6 }
            },
            {
                sapling: 'byg:blue_spruce_sapling',
                trunk: 'minecraft:spruce_log',
                leaf: 'byg:blue_spruce_leaves',
                substrate: 'dirt',
                sap: 'thermal:resin',
                rate: { living: 50, dead: 6 }
            },
            {
                sapling: 'byg:brown_birch_sapling',
                trunk: 'minecraft:birch_log',
                leaf: 'byg:brown_birch_leaves',
                substrate: 'dirt',
                sap: 'thermal:resin',
                rate: { living: 50, dead: 6 }
            },
            {
                sapling: 'byg:brown_oak_sapling',
                trunk: 'minecraft:oak_log',
                leaf: 'byg:brown_oak_leaves',
                fruit: 'minecraft:apple',
                substrate: 'dirt',
                sap: 'thermal:resin',
                rate: { living: 25, dead: 4 }
            },
            {
                sapling: 'byg:brown_zelkova_sapling',
                trunk: 'byg:zelkova_log',
                leaf: 'byg:brown_zelkova_leaves',
                substrate: 'dirt',
                sap: 'thermal:resin',
                rate: { living: 50, dead: 6 }
            },
            {
                sapling: 'byg:cika_sapling',
                trunk: 'byg:cika_log',
                leaf: 'byg:cika_leaves',
                substrate: 'dirt',
                sap: 'thermal:resin',
                rate: { living: 50, dead: 6 }
            },
            {
                sapling: 'byg:cypress_sapling',
                trunk: 'byg:cypress_log',
                leaf: 'byg:cypress_leaves',
                substrate: 'dirt',
                sap: 'thermal:resin',
                rate: { living: 25, dead: 4 }
            },
            {
                sapling: 'byg:ebony_sapling',
                trunk: 'byg:ebony_log',
                leaf: 'byg:ebony_leaves',
                substrate: 'dirt',
                sap: 'thermal:resin',
                rate: { living: 25, dead: 4 }
            },
            {
                sapling: 'byg:ether_sapling',
                trunk: 'byg:ether_log',
                leaf: 'byg:ether_leaves',
                fruit: 'byg:ether_bulbs',
                substrate: 'dirt',
                sap: 'integrateddynamics:liquid_chorus',
                rate: { living: 50, dead: 6 }
            },
            {
                sapling: 'byg:fir_sapling',
                trunk: 'byg:fir_log',
                leaf: 'byg:fir_leaves',
                substrate: 'dirt',
                sap: 'thermal:resin',
                rate: { living: 50, dead: 6 }
            },
            {
                sapling: 'byg:green_enchanted_sapling',
                trunk: 'byg:green_enchanted_log',
                leaf: 'byg:green_enchanted_leaves',
                substrate: 'dirt',
                sap: 'thermal:resin',
                rate: { living: 50, dead: 6 }
            },
            {
                sapling: 'byg:holly_sapling',
                trunk: 'byg:holly_log',
                leaf: 'byg:holly_leaves',
                fruit: 'byg:holly_berries',
                substrate: 'dirt',
                sap: 'thermal:resin',
                rate: { living: 25, dead: 4 }
            },
            {
                sapling: 'byg:indigo_jacaranda_sapling',
                trunk: 'byg:jacaranda_log',
                leaf: 'byg:indigo_jacaranda_leaves',
                substrate: 'dirt',
                sap: 'thermal:resin',
                rate: { living: 25, dead: 4 }
            },
            {
                sapling: 'byg:jacaranda_sapling',
                trunk: 'byg:jacaranda_log',
                leaf: 'byg:jacaranda_leaves',
                substrate: 'dirt',
                sap: 'thermal:resin',
                rate: { living: 25, dead: 4 }
            },
            {
                sapling: 'byg:joshua_sapling',
                trunk: 'minecraft:oak_log',
                leaf: 'byg:joshua_leaves',
                fruit: 'byg:joshua_fruit',
                substrate: 'dirt',
                sap: 'thermal:resin',
                rate: { living: 25, dead: 4 }
            },
            {
                sapling: 'byg:lament_sapling',
                trunk: 'byg:lament_log',
                leaf: 'byg:lament_leaves',
                extraDecoration: 'minecraft:shroomlight',
                substrate: 'dirt',
                sap: 'thermal:resin',
                rate: { living: 25, dead: 4 }
            },
            {
                sapling: 'byg:mahogany_sapling',
                trunk: 'byg:mahogany_log',
                leaf: 'byg:mahogany_leaves',
                substrate: 'dirt',
                sap: 'industrialforegoing:latex',
                rate: { living: 50, dead: 6 }
            },
            {
                sapling: 'byg:mangrove_sapling',
                trunk: 'byg:mangrove_log',
                leaf: 'byg:mangrove_leaves',
                substrate: 'dirt',
                sap: 'thermal:resin',
                rate: { living: 25, dead: 4 }
            },
            {
                sapling: 'byg:maple_sapling',
                trunk: 'byg:maple_log',
                leaf: 'byg:maple_leaves',
                substrate: 'dirt',
                sap: 'thermal:sap',
                rate: { living: 25, dead: 4 }
            },
            {
                sapling: 'byg:nightshade_sapling',
                trunk: 'byg:nightshade_log',
                leaf: 'byg:nightshade_leaves',
                extraDecoration: 'byg:flowering_nightshade_leaves',
                substrate: 'dirt',
                sap: 'thermal:resin',
                rate: { living: 25, dead: 4 }
            },
            {
                sapling: 'byg:orange_birch_sapling',
                trunk: 'minecraft:birch_log',
                leaf: 'byg:orange_birch_leaves',
                substrate: 'dirt',
                sap: 'thermal:resin',
                rate: { living: 25, dead: 4 }
            },
            {
                sapling: 'byg:orange_oak_sapling',
                trunk: 'minecraft:oak_log',
                leaf: 'byg:orange_oak_leaves',
                fruit: 'minecraft:apple',
                substrate: 'dirt',
                sap: 'thermal:resin',
                rate: { living: 25, dead: 4 }
            },
            {
                sapling: 'byg:orange_spruce_sapling',
                trunk: 'minecraft:spruce_log',
                leaf: 'byg:orange_spruce_leaves',
                substrate: 'dirt',
                sap: 'thermal:resin',
                rate: { living: 50, dead: 6 }
            },
            {
                sapling: 'byg:orchard_sapling',
                trunk: 'minecraft:oak_log',
                leaf: 'byg:orchard_leaves',
                extraDecoration: 'byg:flowering_orchard_leaves',
                substrate: 'dirt',
                sap: 'thermal:resin',
                rate: { living: 25, dead: 4 }
            },
            {
                sapling: 'byg:palm_sapling',
                trunk: 'byg:palm_log',
                leaf: 'byg:palm_leaves',
                substrate: 'dirt',
                sap: 'thermal:resin',
                rate: { living: 25, dead: 4 }
            },
            {
                sapling: 'byg:palo_verde_sapling',
                trunk: 'byg:palo_verde_log',
                leaf: 'byg:palo_verde_leaves',
                extraDecoration: 'byg:flowering_palo_verde_leaves',
                substrate: 'dirt',
                sap: 'thermal:resin',
                rate: { living: 25, dead: 4 }
            },
            {
                sapling: 'byg:pine_sapling',
                trunk: 'byg:pine_log',
                leaf: 'byg:pine_leaves',
                substrate: 'dirt',
                sap: 'thermal:resin',
                rate: { living: 50, dead: 6 }
            },
            {
                sapling: 'byg:pink_cherry_sapling',
                trunk: 'byg:cherry_log',
                leaf: 'byg:pink_cherry_leaves',
                substrate: 'dirt',
                sap: 'thermal:resin',
                rate: { living: 25, dead: 4 }
            },
            {
                sapling: 'byg:rainbow_eucalyptus_sapling',
                trunk: 'byg:rainbow_eucalyptus_log',
                leaf: 'byg:rainbow_eucalyptus_leaves',
                substrate: 'dirt',
                sap: 'industrialforegoing:latex',
                rate: { living: 50, dead: 6 }
            },
            {
                sapling: 'byg:red_birch_sapling',
                trunk: 'minecraft:birch_log',
                leaf: 'byg:red_birch_leaves',
                substrate: 'dirt',
                sap: 'thermal:resin',
                rate: { living: 25, dead: 4 }
            },
            {
                sapling: 'byg:red_maple_sapling',
                trunk: 'byg:maple_log',
                leaf: 'byg:maple_leaves',
                substrate: 'dirt',
                sap: 'thermal:sap',
                rate: { living: 25, dead: 4 }
            },
            {
                sapling: 'byg:red_oak_sapling',
                trunk: 'minecraft:oak_log',
                leaf: 'byg:red_oak_leaves',
                substrate: 'dirt',
                sap: 'thermal:resin',
                rate: { living: 25, dead: 4 }
            },
            {
                sapling: 'byg:red_spruce_sapling',
                trunk: 'minecraft:spruce_log',
                leaf: 'byg:red_spruce_leaves',
                substrate: 'dirt',
                sap: 'thermal:resin',
                rate: { living: 50, dead: 6 }
            },
            {
                sapling: 'byg:redwood_sapling',
                trunk: 'byg:redwood_log',
                leaf: 'byg:redwood_leaves',
                substrate: 'dirt',
                sap: 'thermal:resin',
                rate: { living: 75, dead: 8 }
            },
            {
                sapling: 'byg:silver_maple_sapling',
                trunk: 'byg:maple_log',
                leaf: 'byg:silver_maple_leaves',
                substrate: 'dirt',
                sap: 'thermal:sap',
                rate: { living: 25, dead: 4 }
            },
            {
                sapling: 'byg:skyris_sapling',
                trunk: 'byg:skyris_log',
                leaf: 'byg:skyris_leaves',
                fruit: 'byg:green_apple',
                substrate: 'dirt',
                sap: 'thermal:resin',
                rate: { living: 50, dead: 6 }
            },
            {
                sapling: 'byg:white_cherry_sapling',
                trunk: 'byg:cherry_log',
                leaf: 'byg:white_cherry_leaves',
                substrate: 'dirt',
                sap: 'thermal:resin',
                rate: { living: 25, dead: 4 }
            },
            {
                sapling: 'byg:willow_sapling',
                trunk: 'byg:willow_log',
                leaf: 'byg:willow_leaves',
                substrate: 'dirt',
                sap: 'thermal:resin',
                rate: { living: 25, dead: 4 }
            },
            {
                sapling: 'byg:witch_hazel_sapling',
                trunk: 'byg:witch_hazel_log',
                leaf: 'byg:witch_hazel_leaves',
                extraDecoration: 'byg:blooming_witch_hazel_leaves',
                substrate: 'dirt',
                sap: 'thermal:resin',
                rate: { living: 25, dead: 4 }
            },
            {
                sapling: 'byg:withering_oak_sapling',
                trunk: 'byg:withering_oak_log',
                leaf: 'byg:withering_oak_leaves',
                substrate: 'dirt',
                sap: 'thermal:resin',
                rate: { living: 25, dead: 4 }
            },
            {
                sapling: 'byg:yellow_birch_sapling',
                trunk: 'minecraft:birch_log',
                leaf: 'byg:yellow_birch_leaves',
                substrate: 'dirt',
                sap: 'thermal:resin',
                rate: { living: 25, dead: 4 }
            },
            {
                sapling: 'byg:yellow_spruce_sapling',
                trunk: 'minecraft:spruce_log',
                leaf: 'byg:yellow_spruce_leaves',
                substrate: 'dirt',
                sap: 'thermal:resin',
                rate: { living: 50, dead: 6 }
            },
            {
                sapling: 'byg:zelkova_sapling',
                trunk: 'byg:zelkova_log',
                leaf: 'byg:zelkova_leaves',
                substrate: 'dirt',
                sap: 'thermal:resin',
                rate: { living: 50, dead: 6 }
            },
            {
                sapling: 'minecraft:acacia_sapling',
                trunk: 'minecraft:acacia_log',
                leaf: 'minecraft:acacia_leaves',
                fruit: 'alexsmobs:acacia_blossom',
                substrate: 'dirt',
                sap: 'industrialforegoing:latex',
                rate: { living: 75, dead: 8 }
            },
            {
                sapling: 'minecraft:birch_sapling',
                trunk: 'minecraft:birch_log',
                leaf: 'minecraft:birch_leaves',
                substrate: 'dirt',
                sap: 'thermal:resin',
                rate: { living: 25, dead: 4 }
            },
            {
                sapling: 'minecraft:dark_oak_sapling',
                trunk: 'minecraft:dark_oak_log',
                leaf: 'minecraft:dark_oak_leaves',
                fruit: 'minecraft:apple',
                substrate: 'dirt',
                sap: 'thermal:resin',
                rate: { living: 50, dead: 6 }
            },
            {
                sapling: 'minecraft:jungle_sapling',
                trunk: 'minecraft:jungle_log',
                leaf: 'minecraft:jungle_leaves',
                fruit: 'alexsmobs:banana',
                substrate: 'dirt',
                sap: 'industrialforegoing:latex',
                rate: { living: 50, dead: 6 }
            },
            {
                sapling: 'minecraft:oak_sapling',
                trunk: 'minecraft:oak_log',
                leaf: 'minecraft:oak_leaves',
                fruit: 'minecraft:apple',
                substrate: 'dirt',
                sap: 'thermal:resin',
                rate: { living: 25, dead: 4 }
            },
            {
                sapling: 'minecraft:spruce_sapling',
                trunk: 'minecraft:spruce_log',
                leaf: 'minecraft:spruce_leaves',
                substrate: 'dirt',
                sap: 'thermal:resin',
                rate: { living: 50, dead: 6 }
            },
            {
                sapling: 'quark:blue_blossom_sapling',
                trunk: 'minecraft:spruce_log',
                leaf: 'quark:blue_blossom_leaves',
                substrate: 'dirt',
                sap: 'thermal:resin',
                rate: { living: 50, dead: 6 }
            },
            {
                sapling: 'quark:lavender_blossom_sapling',
                trunk: 'minecraft:spruce_log',
                leaf: 'quark:lavender_blossom_leaves',
                substrate: 'dirt',
                sap: 'thermal:resin',
                rate: { living: 50, dead: 6 }
            },
            {
                sapling: 'quark:orange_blossom_sapling',
                trunk: 'minecraft:spruce_log',
                leaf: 'quark:orange_blossom_leaves',
                substrate: 'dirt',
                sap: 'thermal:resin',
                rate: { living: 50, dead: 6 }
            },
            {
                sapling: 'quark:pink_blossom_sapling',
                trunk: 'minecraft:spruce_log',
                leaf: 'quark:pink_blossom_leaves',
                substrate: 'dirt',
                sap: 'thermal:resin',
                rate: { living: 50, dead: 6 }
            },
            {
                sapling: 'quark:red_blossom_sapling',
                trunk: 'minecraft:spruce_log',
                leaf: 'quark:red_blossom_leaves',
                substrate: 'dirt',
                sap: 'thermal:resin',
                rate: { living: 50, dead: 6 }
            },
            {
                sapling: 'quark:yellow_blossom_sapling',
                trunk: 'minecraft:spruce_log',
                leaf: 'quark:yellow_blossom_leaves',
                substrate: 'dirt',
                sap: 'thermal:resin',
                rate: { living: 50, dead: 6 }
            },
            {
                sapling: 'simplefarming:apple_sapling',
                trunk: 'simplefarming:fruit_log',
                leaf: 'minecraft:oak_leaves',
                fruit: 'minecraft:apple',
                substrate: 'dirt',
                sap: 'thermal:resin',
                rate: { living: 25, dead: 4 }
            },
            {
                sapling: 'simplefarming:apricot_sapling',
                trunk: 'simplefarming:fruit_log',
                leaf: 'minecraft:birch_leaves',
                fruit: 'simplefarming:apricot',
                substrate: 'dirt',
                sap: 'thermal:resin',
                rate: { living: 25, dead: 4 }
            },
            {
                sapling: 'simplefarming:banana_sapling',
                trunk: 'simplefarming:fruit_log',
                leaf: 'minecraft:jungle_leaves',
                fruit: 'simplefarming:banana',
                substrate: 'dirt',
                sap: 'thermal:resin',
                rate: { living: 25, dead: 4 }
            },
            {
                sapling: 'simplefarming:cherry_sapling',
                trunk: 'simplefarming:fruit_log',
                leaf: 'minecraft:jungle_leaves',
                fruit: 'simplefarming:cherries',
                substrate: 'dirt',
                sap: 'thermal:resin',
                rate: { living: 25, dead: 4 }
            },
            {
                sapling: 'simplefarming:mango_sapling',
                trunk: 'simplefarming:fruit_log',
                leaf: 'minecraft:jungle_leaves',
                fruit: 'simplefarming:mango',
                substrate: 'dirt',
                sap: 'thermal:resin',
                rate: { living: 25, dead: 4 }
            },
            {
                sapling: 'simplefarming:olive_sapling',
                trunk: 'simplefarming:fruit_log',
                leaf: 'minecraft:birch_leaves',
                fruit: 'simplefarming:olives',
                substrate: 'dirt',
                sap: 'thermal:resin',
                rate: { living: 25, dead: 4 }
            },
            {
                sapling: 'simplefarming:orange_sapling',
                trunk: 'simplefarming:fruit_log',
                leaf: 'minecraft:jungle_leaves',
                fruit: 'simplefarming:orange',
                substrate: 'dirt',
                sap: 'thermal:resin',
                rate: { living: 25, dead: 4 }
            },
            {
                sapling: 'simplefarming:pear_sapling',
                trunk: 'simplefarming:fruit_log',
                leaf: 'minecraft:oak_leaves',
                fruit: 'simplefarming:pear',
                substrate: 'dirt',
                sap: 'thermal:resin',
                rate: { living: 25, dead: 4 }
            },
            {
                sapling: 'simplefarming:plum_sapling',
                trunk: 'simplefarming:fruit_log',
                leaf: 'minecraft:birch_leaves',
                fruit: 'simplefarming:plum',
                substrate: 'dirt',
                sap: 'thermal:resin',
                rate: { living: 25, dead: 4 }
            },
            {
                sapling: 'undergarden:smogstem_sapling',
                trunk: 'undergarden:smogstem_log',
                leaf: 'undergarden:smogstem_leaves',
                substrate: 'dirt',
                sap: 'thermal:resin',
                rate: { living: 25, dead: 4 }
            },
            {
                sapling: 'undergarden:wigglewood_sapling',
                trunk: 'undergarden:wigglewood_log',
                leaf: 'undergarden:wigglewood_leaves',
                substrate: 'dirt',
                sap: 'thermal:resin',
                rate: { living: 25, dead: 4 }
            },
            {
                sapling: 'betterendforge:helix_tree_sapling',
                trunk: 'betterendforge:helix_tree_log',
                leaf: 'betterendforge:helix_tree_leaves',
                substrate: 'amber_moss',
                sap: 'thermal:resin',
                rate: { living: 25, dead: 4 }
            },
            {
                sapling: 'betterendforge:tenanea_sapling',
                trunk: 'betterendforge:tenanea_log',
                leaf: 'betterendforge:tenanea_leaves',
                substrate: 'pink_moss',
                sap: 'integrateddynamics:liquid_chorus',
                rate: { living: 25, dead: 4 }
            },
            {
                sapling: 'betterendforge:pythadendron_sapling',
                trunk: 'betterendforge:pythadendron_log',
                leaf: 'betterendforge:pythadendron_leaves',
                substrate: 'chorus_nylium',
                sap: 'integrateddynamics:liquid_chorus',
                rate: { living: 25, dead: 4 }
            },
            {
                sapling: 'betterendforge:lacugrove_sapling',
                trunk: 'betterendforge:lacugrove_log',
                leaf: 'betterendforge:lacugrove_leaves',
                substrate: 'end_moss',
                sap: 'thermal:resin',
                rate: { living: 25, dead: 4 }
            },
            {
                sapling: 'betterendforge:dragon_tree_sapling',
                trunk: 'betterendforge:dragon_tree_log',
                leaf: 'betterendforge:dragon_tree_leaves',
                substrate: 'shadow_grass',
                sap: 'integrateddynamics:liquid_chorus',
                rate: { living: 25, dead: 4 }
            },
            {
                sapling: 'integrateddynamics:menril_sapling',
                trunk: 'integrateddynamics:menril_log',
                leaf: 'integrateddynamics:menril_leaves',
                fruit: 'integrateddynamics:menril_berries',
                substrate: 'dirt',
                sap: 'integrateddynamics:menril_resin',
                rate: { living: 25, dead: 4 }
            },
            {
                sapling: 'atmospheric:rosewood_sapling',
                trunk: 'atmospheric:rosewood_log',
                leaf: 'atmospheric:rosewood_leaves',
                substrate: 'dirt',
                sap: 'thermal:resin',
                rate: { living: 25, dead: 4 }
            },
            {
                sapling: 'atmospheric:morado_sapling',
                trunk: 'atmospheric:morado_log',
                leaf: 'atmospheric:morado_leaves',
                extraDecoration: 'atmospheric:flowering_morado_leaves',
                substrate: 'dirt',
                sap: 'thermal:resin',
                rate: { living: 25, dead: 4 }
            },
            {
                sapling: 'atmospheric:yucca_sapling',
                trunk: 'atmospheric:yucca_log',
                leaf: 'atmospheric:yucca_leaves',
                fruit: 'atmospheric:yucca_bundle',
                substrate: 'dirt',
                sap: 'thermal:resin',
                rate: { living: 25, dead: 4 }
            },
            {
                sapling: 'atmospheric:kousa_sapling',
                trunk: 'atmospheric:kousa_log',
                leaf: 'atmospheric:kousa_leaves',
                substrate: 'dirt',
                sap: 'thermal:resin',
                rate: { living: 25, dead: 4 }
            },
            {
                sapling: 'atmospheric:aspen_sapling',
                trunk: 'atmospheric:aspen_log',
                leaf: 'atmospheric:aspen_leaves',
                substrate: 'dirt',
                sap: 'thermal:resin',
                rate: { living: 50, dead: 6 }
            },
            {
                sapling: 'atmospheric:grimwood_sapling',
                trunk: 'atmospheric:grimwood_log',
                leaf: 'atmospheric:grimwood_leaves',
                substrate: 'dirt',
                sap: 'thermal:resin',
                rate: { living: 25, dead: 4 }
            },
            {
                sapling: 'upgrade_aquatic:river_sapling',
                trunk: 'upgrade_aquatic:river_log',
                leaf: 'upgrade_aquatic:river_leaves',
                fruit: 'upgrade_aquatic:mulberry',
                substrate: 'dirt',
                sap: 'thermal:resin',
                rate: { living: 25, dead: 4 }
            },
            {
                sapling: 'sushigocrafting:avocado_sapling',
                trunk: 'sushigocrafting:avocado_log',
                leaf: 'sushigocrafting:avocado_leaves',
                fruit: 'sushigocrafting:avocado',
                substrate: 'dirt',
                sap: 'thermal:resin',
                rate: { living: 25, dead: 4 }
            },
            {
                sapling: 'architects_palette:twisted_sapling',
                trunk: 'architects_palette:twisted_log',
                leaf: 'architects_palette:twisted_leaves',
                substrate: 'dirt',
                sap: 'thermal:resin',
                rate: { living: 25, dead: 4 }
            },
            {
                sapling: 'environmental:white_wisteria_sapling',
                trunk: 'environmental:wisteria_log',
                leaf: 'environmental:white_wisteria_leaves',
                substrate: 'dirt',
                sap: 'thermal:resin',
                rate: { living: 25, dead: 4 }
            },
            {
                sapling: 'environmental:purple_wisteria_sapling',
                trunk: 'environmental:wisteria_log',
                leaf: 'environmental:purple_wisteria_leaves',
                substrate: 'dirt',
                sap: 'thermal:resin',
                rate: { living: 25, dead: 4 }
            },
            {
                sapling: 'environmental:blue_wisteria_sapling',
                trunk: 'environmental:wisteria_log',
                leaf: 'environmental:blue_wisteria_leaves',
                substrate: 'dirt',
                sap: 'thermal:resin',
                rate: { living: 25, dead: 4 }
            },
            {
                sapling: 'environmental:pink_wisteria_sapling',
                trunk: 'environmental:wisteria_log',
                leaf: 'environmental:pink_wisteria_leaves',
                substrate: 'dirt',
                sap: 'thermal:resin',
                rate: { living: 25, dead: 4 }
            },
            {
                sapling: 'environmental:cherry_sapling',
                trunk: 'environmental:cherry_log',
                leaf: 'environmental:cherry_leaves',
                fruit: 'environmental:cherries',
                substrate: 'dirt',
                sap: 'thermal:resin',
                rate: { living: 25, dead: 4 }
            },
            {
                sapling: 'environmental:willow_sapling',
                trunk: 'environmental:willow_log',
                leaf: 'environmental:willow_leaves',
                substrate: 'dirt',
                sap: 'thermal:resin',
                rate: { living: 25, dead: 4 }
            },
            {
                sapling: 'atum:palm_sapling',
                trunk: 'atum:palm_log',
                leaf: 'atum:palm_leaves',
                substrate: 'dirt',
                sap: 'thermal:resin',
                rate: { living: 25, dead: 4 }
            },
            {
                sapling: 'undergarden:grongle_sapling',
                trunk: 'undergarden:grongle_log',
                leaf: 'undergarden:grongle_leaves',
                substrate: 'deepturf',
                sap: 'thermal:resin',
                rate: { living: 25, dead: 4 }
            },
            {
                sapling: 'tconstruct:earth_slime_sapling',
                trunk: 'tconstruct:greenheart_log',
                leaf: 'tconstruct:earth_slime_leaves',
                fruit: 'minecraft:slime_ball',
                substrate: 'slimy_dirt',
                sap: 'tconstruct:earth_slime',
                rate: { living: 25, dead: 4 }
            },
            {
                sapling: 'tconstruct:sky_slime_sapling',
                trunk: 'tconstruct:skyroot_log',
                leaf: 'tconstruct:sky_slime_leaves',
                fruit: 'tconstruct:sky_slime_ball',
                substrate: 'slimy_dirt',
                sap: 'tconstruct:sky_slime',
                rate: { living: 25, dead: 4 }
            },
            {
                sapling: 'tconstruct:ender_slime_sapling',
                trunk: 'tconstruct:greenheart_log',
                leaf: 'tconstruct:ender_slime_leaves',
                fruit: 'tconstruct:ender_slime_ball',
                substrate: 'slimy_dirt',
                sap: 'tconstruct:ender_slime',
                rate: { living: 25, dead: 4 }
            }
        ]
    },
    {
        type: 'tree_shroom',
        trees: [
            {
                sapling: 'byg:black_puff',
                trunk: 'byg:brown_mushroom_stem',
                leaf: 'byg:black_puff_mushroom_block',
                substrate: 'mushroom'
            },
            {
                sapling: 'byg:blue_glowshroom',
                trunk: 'byg:yellow_glowshroom_stem',
                leaf: 'byg:blue_glowshroom_block',
                substrate: 'mushroom'
            },
            {
                sapling: 'byg:bulbis_oddity',
                trunk: 'byg:bulbis_wood',
                leaf: 'byg:bulbis_shell',
                extraDecoration: 'byg:purple_shroomlight',
                substrate: 'end_stone'
            },
            {
                sapling: 'byg:death_cap',
                trunk: 'minecraft:mushroom_stem',
                leaf: 'byg:death_cap_mushroom_block',
                substrate: 'mushroom'
            },
            {
                sapling: 'byg:embur_wart',
                trunk: 'byg:embur_pedu',
                leaf: 'byg:embur_gel_block',
                extraDecoration: 'minecraft:shroomlight',
                substrate: 'mushroom'
            },
            {
                sapling: 'byg:green_mushroom',
                trunk: 'byg:white_mushroom_stem',
                leaf: 'byg:green_mushroom_block',
                substrate: 'mushroom'
            },
            {
                sapling: 'byg:purple_bulbis_oddity',
                trunk: 'byg:bulbis_wood',
                leaf: 'byg:purple_bulbis_shell',
                extraDecoration: 'byg:purple_shroomlight',
                substrate: 'end_stone'
            },
            {
                sapling: 'byg:purple_glowshroom',
                trunk: 'byg:red_glowshroom_stem',
                leaf: 'byg:purple_glowshroom_block',
                substrate: 'mushroom'
            },
            {
                sapling: 'byg:shulkren_fungus',
                trunk: 'byg:white_mushroom_stem',
                leaf: 'byg:shulkren_wart_block',
                extraDecoration: 'byg:purple_shroomlight',
                substrate: 'end_stone'
            },
            {
                sapling: 'byg:soul_shroom',
                trunk: 'byg:soul_shroom_stem',
                leaf: 'byg:soul_shroom_block',
                substrate: 'netherrack'
            },
            {
                sapling: 'byg:sythian_fungus',
                trunk: 'byg:sythian_stem',
                leaf: 'byg:sythian_wart_block',
                substrate: 'netherrack'
            },
            {
                sapling: 'byg:weeping_milkcap',
                trunk: 'minecraft:mushroom_stem',
                leaf: 'byg:weeping_milkcap_mushroom_block',
                substrate: 'mushroom'
            },
            {
                sapling: 'byg:wood_blewit',
                trunk: 'byg:brown_mushroom_stem',
                leaf: 'byg:wood_blewit_mushroom_block',
                substrate: 'mushroom'
            },
            {
                sapling: 'minecraft:brown_mushroom',
                trunk: 'minecraft:mushroom_stem',
                leaf: 'minecraft:brown_mushroom_block',
                substrate: 'mushroom'
            },
            {
                sapling: 'minecraft:crimson_fungus',
                trunk: 'minecraft:crimson_stem',
                leaf: 'minecraft:nether_wart_block',
                substrate: 'crimson_nylium'
            },
            {
                sapling: 'minecraft:red_mushroom',
                trunk: 'minecraft:mushroom_stem',
                leaf: 'minecraft:red_mushroom_block',
                substrate: 'mushroom'
            },
            {
                sapling: 'minecraft:warped_fungus',
                trunk: 'minecraft:warped_stem',
                leaf: 'minecraft:warped_wart_block',
                substrate: 'warped_nylium'
            },
            {
                sapling: 'quark:glowshroom',
                trunk: 'quark:glowshroom_stem',
                leaf: 'quark:glowshroom_block',
                substrate: 'glowcelium'
            },
            {
                sapling: 'undergarden:blood_mushroom',
                trunk: 'undergarden:blood_mushroom_stalk',
                leaf: 'undergarden:blood_mushroom_cap',
                extraDecoration: 'undergarden:blood_mushroom_globule',
                substrate: 'deepturf',
                sap: 'tconstruct:blood',
                rate: { living: 25, dead: 4 }
            },

            {
                sapling: 'undergarden:indigo_mushroom',
                trunk: 'undergarden:indigo_mushroom_stalk',
                leaf: 'undergarden:indigo_mushroom_cap',
                substrate: 'deepturf'
            },
            {
                sapling: 'undergarden:ink_mushroom',
                trunk: 'minecraft:mushroom_stem',
                leaf: 'undergarden:ink_mushroom_cap',
                substrate: 'deepturf'
            },
            {
                sapling: 'undergarden:veil_mushroom',
                trunk: 'undergarden:veil_mushroom_stalk',
                leaf: 'undergarden:veil_mushroom_cap',
                substrate: 'deepturf'
            },
            {
                sapling: 'betterendforge:umbrella_tree_sapling',
                trunk: 'betterendforge:umbrella_tree_log',
                leaf: 'betterendforge:umbrella_tree_membrane',
                extraDecoration: 'betterendforge:umbrella_tree_cluster',
                substrate: 'jungle_moss'
            },
            {
                sapling: 'betterendforge:mossy_glowshroom_sapling',
                trunk: 'betterendforge:mossy_glowshroom_log',
                leaf: 'betterendforge:mossy_glowshroom_cap',
                extraDecoration: 'betterendforge:mossy_glowshroom_hymenophore',
                substrate: 'end_moss'
            },
            {
                sapling: 'betterendforge:small_jellyshroom',
                trunk: 'betterendforge:jellyshroom_log',
                leaf: 'betterendforge:jellyshroom_cap_purple',
                substrate: 'jungle_moss'
            },
            {
                sapling: 'byg:imparius_mushroom',
                trunk: 'byg:imparius_stem',
                leaf: 'byg:imparius_mushroom_block',
                extraDecoration: 'byg:imparius_mushroom_branch',
                substrate: 'mushroom'
            },
            {
                sapling: 'byg:fungal_imparius',
                trunk: 'byg:fungal_imparius_stem',
                leaf: 'byg:fungal_imparius_block',
                extraDecoration: 'byg:fungal_imparius_filament_block',
                substrate: 'mushroom'
            },
            {
                sapling: 'tconstruct:blood_slime_sapling',
                trunk: 'tconstruct:bloodshroom_log',
                leaf: 'tconstruct:blood_slime_leaves',
                fruit: 'tconstruct:ichor_slime_ball',
                substrate: 'slimy_dirt',
                sap: 'tconstruct:blood',
                rate: { living: 25, dead: 4 }
            }
        ]
    }
];
