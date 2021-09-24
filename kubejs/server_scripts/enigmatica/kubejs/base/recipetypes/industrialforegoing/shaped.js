onEvent('recipes', (event) => {
    const recipes = [
        {
            output: 'industrialforegoing:animal_baby_separator',
            pattern: ['PAP', 'CMC', 'DGD'],
            key: {
                P: '#forge:plastic',
                A: 'minecraft:golden_carrot',
                C: 'minecraft:wheat',
                G: '#forge:gears/gold_bronze',
                D: '#forge:dyes/purple',
                M: '#industrialforegoing:machine_frame/pity'
            },
            id: 'industrialforegoing:animal_baby_separator'
        },
        {
            output: 'industrialforegoing:animal_feeder',
            pattern: ['PAP', 'CMC', 'DGD'],
            key: {
                P: '#forge:plastic',
                A: 'minecraft:golden_apple',
                C: 'minecraft:golden_carrot',
                G: '#forge:gears/iron_invar',
                D: '#forge:dyes/purple',
                M: '#industrialforegoing:machine_frame/pity'
            },
            id: 'industrialforegoing:animal_feeder'
        },
        {
            output: 'industrialforegoing:animal_rancher',
            pattern: ['PPP', 'SBS', 'GMG'],
            key: {
                P: '#forge:plastic',
                G: '#forge:gears/gold_bronze',
                S: 'minecraft:shears',
                B: 'minecraft:bucket',
                M: '#industrialforegoing:machine_frame/pity'
            },
            id: 'industrialforegoing:animal_rancher'
        },
        {
            output: 'industrialforegoing:biofuel_generator',
            pattern: ['PDP', 'SMS', 'ASA'],
            key: {
                P: '#forge:plastic',
                D: 'minecraft:furnace',
                S: 'minecraft:piston',
                A: '#forge:gears/gold_bronze',
                M: '#industrialforegoing:machine_frame/pity'
            },
            id: 'industrialforegoing:biofuel_generator'
        },
        {
            output: 'industrialforegoing:block_breaker',
            pattern: ['PGP', 'IMD', 'SRS'],
            key: {
                P: '#forge:plastic',
                I: 'minecraft:iron_pickaxe',
                D: 'minecraft:iron_shovel',
                M: '#industrialforegoing:machine_frame/pity',
                R: 'minecraft:redstone',
                G: '#forge:gears/gold_bronze',
                S: '#forge:gears/iron_invar'
            },
            id: 'industrialforegoing:block_breaker'
        },
        {
            output: Item.of('industrialforegoing:conveyor', 6),
            pattern: ['ppp', 'iri', 'ppp'],
            key: {
                p: '#forge:plastic',
                i: '#forge:ingots/iron_aluminum',
                r: 'minecraft:redstone'
            },
            id: 'industrialforegoing:conveyor'
        },
        {
            output: 'industrialforegoing:conveyor_blinking_upgrade',
            pattern: ['IPI', 'IDI', 'ICI'],
            key: {
                I: '#forge:ingots/iron_aluminum',
                P: 'minecraft:chorus_fruit',
                D: 'minecraft:piston',
                C: 'industrialforegoing:conveyor'
            },
            id: 'industrialforegoing:conveyor_blinking_upgrade'
        },
        {
            output: 'industrialforegoing:conveyor_bouncing_upgrade',
            pattern: ['IPI', 'IDI', 'ICI'],
            key: {
                I: '#forge:ingots/iron_aluminum',
                P: 'minecraft:slime_block',
                D: 'minecraft:piston',
                C: 'industrialforegoing:conveyor'
            },
            id: 'industrialforegoing:conveyor_bouncing_upgrade'
        },
        {
            output: 'industrialforegoing:conveyor_detection_upgrade',
            pattern: ['IPI', 'IDI', 'ICI'],
            key: {
                I: '#forge:ingots/iron_aluminum',
                P: 'minecraft:stone_pressure_plate',
                D: 'minecraft:comparator',
                C: 'industrialforegoing:conveyor'
            },
            id: 'industrialforegoing:conveyor_detection_upgrade'
        },
        {
            output: 'industrialforegoing:conveyor_dropping_upgrade',
            pattern: ['IPI', 'IDI', 'ICI'],
            key: {
                I: '#forge:ingots/iron_aluminum',
                P: 'minecraft:iron_bars',
                D: 'minecraft:dropper',
                C: 'industrialforegoing:conveyor'
            },
            id: 'industrialforegoing:conveyor_dropping_upgrade'
        },
        {
            output: 'industrialforegoing:conveyor_extraction_upgrade',
            pattern: ['IPI', 'IDI', 'ICI'],
            key: {
                I: '#forge:ingots/iron_aluminum',
                P: '#forge:plastic',
                D: 'minecraft:dispenser',
                C: 'industrialforegoing:conveyor'
            },
            id: 'industrialforegoing:conveyor_extraction_upgrade'
        },
        {
            output: 'industrialforegoing:conveyor_insertion_upgrade',
            pattern: ['IPI', 'IDI', 'ICI'],
            key: {
                I: '#forge:ingots/iron_aluminum',
                P: '#forge:plastic',
                D: 'minecraft:hopper',
                C: 'industrialforegoing:conveyor'
            },
            id: 'industrialforegoing:conveyor_insertion_upgrade'
        },
        {
            output: 'industrialforegoing:conveyor_splitting_upgrade',
            pattern: ['IPI', 'IDI', 'ICI'],
            key: {
                I: '#forge:ingots/iron_aluminum',
                P: 'industrialforegoing:conveyor',
                D: 'minecraft:hopper',
                C: 'industrialforegoing:conveyor'
            },
            id: 'industrialforegoing:conveyor_splitting_upgrade'
        },
        {
            output: 'industrialforegoing:dissolution_chamber',
            pattern: ['PCP', 'BMB', 'GDG'],
            key: {
                P: '#forge:plastic',
                C: '#forge:chests',
                B: 'minecraft:bucket',
                M: '#industrialforegoing:machine_frame/pity',
                G: '#forge:ingots/gold_tin',
                D: '#forge:gears/diamond'
            },
            id: 'industrialforegoing:dissolution_chamber'
        },
        {
            output: 'industrialforegoing:dye_mixer',
            pattern: ['PDP', 'DMD', 'PRP'],
            key: {
                P: '#forge:plastic',
                D: '#forge:dyes',
                M: '#industrialforegoing:machine_frame/pity',
                R: '#forge:gears/gold_copper'
            },
            id: 'industrialforegoing:dye_mixer'
        },
        {
            output: 'industrialforegoing:fluid_collector',
            pattern: ['PBP', 'BMB', 'SRS'],
            key: {
                P: '#forge:plastic',
                B: 'minecraft:bucket',
                M: '#industrialforegoing:machine_frame/pity',
                R: 'minecraft:redstone',
                S: '#forge:gears/iron_invar'
            },
            id: 'industrialforegoing:fluid_collector'
        },
        {
            output: 'industrialforegoing:fluid_extractor',
            pattern: ['IGI', 'CMC', 'IPI'],
            key: {
                I: '#forge:ingots/iron_aluminum',
                G: 'minecraft:light_weighted_pressure_plate',
                C: '#forge:cobblestone',
                M: '#industrialforegoing:machine_frame/pity',
                P: 'minecraft:piston'
            },
            id: 'industrialforegoing:fluid_extractor'
        },
        {
            output: 'industrialforegoing:fluid_placer',
            pattern: ['PBP', 'BMB', 'SRS'],
            key: {
                P: '#forge:plastic',
                B: 'minecraft:water_bucket',
                M: '#industrialforegoing:machine_frame/pity',
                R: 'minecraft:redstone',
                S: '#forge:gears/iron_invar'
            },
            id: 'industrialforegoing:fluid_placer'
        },
        {
            output: 'industrialforegoing:laser_drill',
            pattern: ['pfp', 'bmb', 'grg'],
            key: {
                p: '#forge:plastic',
                f: '#forge:gears/diamond',
                b: 'minecraft:piston',
                m: '#industrialforegoing:machine_frame/simple',
                g: '#forge:gears/diamond',
                r: 'minecraft:redstone'
            },
            id: 'industrialforegoing:laser_drill'
        },
        {
            output: 'industrialforegoing:latex_processing_unit',
            pattern: ['IGI', 'BML', 'IFI'],
            key: {
                I: '#forge:ingots/iron_aluminum',
                G: '#forge:storage_blocks/redstone',
                B: 'minecraft:water_bucket',
                L: 'industrialforegoing:latex_bucket',
                M: '#industrialforegoing:machine_frame/pity',
                F: 'minecraft:furnace'
            },
            id: 'industrialforegoing:latex_processing_unit'
        },
        {
            output: 'industrialforegoing:machine_frame_pity',
            pattern: ['WIW', 'IRI', 'WIW'],
            key: {
                W: '#minecraft:logs',
                I: '#forge:ingots/iron_aluminum',
                R: '#forge:storage_blocks/redstone'
            },
            id: 'industrialforegoing:machine_frame_pity'
        },
        {
            output: 'industrialforegoing:marine_fisher',
            pattern: ['pfp', 'bmb', 'grg'],
            key: {
                p: '#forge:plastic',
                f: 'minecraft:fishing_rod',
                b: 'minecraft:bucket',
                m: '#industrialforegoing:machine_frame/simple',
                g: '#forge:gears/iron_invar',
                r: 'minecraft:redstone'
            },
            id: 'industrialforegoing:marine_fisher'
        },
        {
            output: 'industrialforegoing:material_stonework_factory',
            pattern: ['pcp', 'gmf', 'aba'],
            key: {
                p: '#forge:plastic',
                c: '#forge:workbenches',
                g: 'minecraft:diamond_pickaxe',
                m: '#industrialforegoing:machine_frame/advanced',
                f: 'minecraft:furnace',
                a: '#forge:gears/gold_bronze',
                b: 'industrialforegoing:pink_slime'
            },
            id: 'industrialforegoing:material_stonework_factory'
        },
        {
            output: 'industrialforegoing:meat_feeder',
            pattern: ['pip', 'gig', ' i '],
            key: {
                p: 'industrialforegoing:plastic',
                i: '#forge:ingots/iron_aluminum',
                g: 'minecraft:glass_bottle'
            },
            id: 'industrialforegoing:meat_feeder'
        },
        {
            output: 'industrialforegoing:mob_crusher',
            pattern: ['PSP', 'BMB', 'GRG'],
            key: {
                P: '#forge:plastic',
                S: 'minecraft:iron_sword',
                B: 'minecraft:book',
                M: '#industrialforegoing:machine_frame/advanced',
                R: 'minecraft:redstone',
                G: '#forge:gears/gold_invar'
            },
            id: 'industrialforegoing:mob_crusher'
        },
        {
            output: 'industrialforegoing:mob_slaughter_factory',
            pattern: ['PDP', 'SMS', 'ARA'],
            key: {
                P: '#forge:plastic',
                D: '#forge:gears/gold_bronze',
                S: 'minecraft:iron_sword',
                A: 'minecraft:iron_axe',
                M: '#industrialforegoing:machine_frame/pity',
                R: 'minecraft:redstone'
            },
            id: 'industrialforegoing:mob_slaughter_factory'
        },
        {
            output: 'industrialforegoing:plant_fertilizer',
            pattern: ['PBP', 'LML', 'GRG'],
            key: {
                P: '#forge:plastic',
                B: 'minecraft:glass_bottle',
                L: 'minecraft:leather',
                M: '#industrialforegoing:machine_frame/simple',
                R: 'minecraft:redstone',
                G: '#forge:gears/iron_invar'
            },
            id: 'industrialforegoing:plant_fertilizer'
        },
        {
            output: 'industrialforegoing:plant_gatherer',
            pattern: ['PHP', 'AMA', 'GRG'],
            key: {
                P: '#forge:plastic',
                H: 'minecraft:iron_hoe',
                A: 'minecraft:iron_axe',
                M: '#industrialforegoing:machine_frame/pity',
                G: '#forge:gears/gold_bronze',
                R: 'minecraft:redstone'
            },
            id: 'industrialforegoing:plant_gatherer'
        },
        {
            output: 'industrialforegoing:plant_sower',
            pattern: ['PBP', 'LML', 'GRG'],
            key: {
                P: '#forge:plastic',
                B: 'minecraft:flower_pot',
                L: 'minecraft:piston',
                M: '#industrialforegoing:machine_frame/pity',
                R: 'minecraft:redstone',
                G: '#forge:gears/iron_invar'
            },
            id: 'industrialforegoing:plant_sower'
        },
        {
            output: 'industrialforegoing:resourceful_furnace',
            pattern: ['PBP', 'LML', 'PRP'],
            key: {
                P: '#forge:plastic',
                B: 'minecraft:bucket',
                L: 'minecraft:furnace',
                M: '#industrialforegoing:machine_frame/pity',
                R: '#forge:gears/gold_copper'
            },
            id: 'industrialforegoing:resourceful_furnace'
        },
        {
            output: 'industrialforegoing:sewage_composter',
            pattern: ['PFP', 'DMD', 'BGB'],
            key: {
                P: '#forge:plastic',
                F: 'minecraft:furnace',
                D: 'minecraft:piston',
                B: 'minecraft:brick',
                M: '#industrialforegoing:machine_frame/pity',
                G: '#forge:gears/iron_invar'
            },
            id: 'industrialforegoing:sewage_composter'
        },
        {
            output: 'industrialforegoing:sewer',
            pattern: ['PEP', 'BMB', 'BGB'],
            key: {
                P: '#forge:plastic',
                E: 'minecraft:bucket',
                B: 'minecraft:brick',
                M: '#industrialforegoing:machine_frame/pity',
                G: '#forge:gears/iron_invar'
            },
            id: 'industrialforegoing:sewer'
        },
        {
            output: 'industrialforegoing:sludge_refiner',
            pattern: ['PBP', 'LML', 'GRG'],
            key: {
                P: '#forge:plastic',
                B: 'minecraft:bucket',
                L: 'minecraft:furnace',
                M: '#industrialforegoing:machine_frame/pity',
                R: '#forge:gears/gold_copper',
                G: '#forge:gears/iron_invar'
            },
            id: 'industrialforegoing:sludge_refiner'
        },
        {
            output: 'industrialforegoing:spores_recreator',
            pattern: ['PSP', 'IMI', 'PSP'],
            key: {
                P: '#forge:plastic',
                I: '#forge:mushrooms',
                M: '#industrialforegoing:machine_frame/pity',
                S: '#forge:gears/iron_invar'
            },
            id: 'industrialforegoing:spores_recreator'
        },
        {
            output: 'industrialforegoing:stasis_chamber',
            pattern: ['sss', 'gmg', 'ipi'],
            key: {
                s: 'minecraft:soul_sand',
                g: 'minecraft:ghast_tear',
                m: '#industrialforegoing:machine_frame/advanced',
                i: '#forge:gears/gold_invar',
                p: 'minecraft:piston'
            },
            id: 'industrialforegoing:stasis_chamber'
        },
        {
            output: 'industrialforegoing:water_condensator',
            pattern: ['PBP', 'LML', 'GRG'],
            key: {
                P: '#forge:plastic',
                B: 'minecraft:water_bucket',
                L: 'minecraft:piston',
                M: '#industrialforegoing:machine_frame/pity',
                R: 'minecraft:redstone',
                G: '#forge:gears/iron_invar'
            },
            id: 'industrialforegoing:water_condensator'
        },
        {
            output: Item.of('industrialforegoing:tinydryrubber', 3),
            pattern: ['AAA', 'ABA', 'AAA'],
            key: {
                A: 'minecraft:vine',
                B: 'minecraft:water_bucket'
            },
            id: 'thermal:rubber_from_vine'
        },
        {
            output: Item.of('industrialforegoing:tinydryrubber', 3),
            pattern: ['AAA', 'ABA', 'AAA'],
            key: {
                A: 'minecraft:dandelion',
                B: 'minecraft:water_bucket'
            },
            id: 'thermal:rubber_from_dandelion'
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
