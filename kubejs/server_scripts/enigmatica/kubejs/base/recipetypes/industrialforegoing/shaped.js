onEvent('recipes', (event) => {
    const recipes = [
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
        },
        {
            output: 'industrialforegoing:common_black_hole_tank',
            pattern: ['AAA', 'BCB', 'DED'],
            key: {
                A: 'industrialforegoing:plastic',
                B: 'minecraft:ender_eye',
                C: 'minecraft:ender_pearl',
                D: 'minecraft:bucket',
                E: 'thermal:fluid_cell_frame'
            },
            id: 'industrialforegoing:common_black_hole_tank'
        },
        {
            output: 'industrialforegoing:common_black_hole_unit',
            pattern: ['AAA', 'BCB', 'DED'],
            key: {
                A: 'industrialforegoing:plastic',
                B: 'minecraft:ender_eye',
                C: 'minecraft:ender_pearl',
                D: '#forge:chests/wooden',
                E: 'thermal:machine_frame'
            },
            id: 'industrialforegoing:common_black_hole_unit'
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
