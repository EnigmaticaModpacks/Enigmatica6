//todo remove in 0.6.0
/* onEvent('recipes', (event) => {
    if (global.isNormalMode == false) {
        return;
    }

    const recipes = [
        {
            output: 'torchmaster:megatorch',
            pattern: ['AAA', 'BCB', 'DCD'],
            key: {
                A: 'torchmaster:feral_flare_lantern',
                B: '#enigmatica:crafting_materials/diamond',
                C: '#minecraft:logs',
                D: '#forge:storage_blocks/gold'
            }
        },
        {
            output: 'torchmaster:feral_flare_lantern',
            pattern: [' A ', 'BCB', ' A '],
            key: {
                A: '#forge:ingots/gold',
                B: '#forge:glass',
                C: '#forge:storage_blocks/glowstone'
            }
        },
        {
            output: Item.of('compactmachines:tunnel', { definition: { id: 'compactmachines:item' } }),
            pattern: ['ABA', 'BCB', 'DBD'],
            key: {
                A: 'minecraft:hopper',
                B: '#forge:gems/dimensional',
                C: 'occultism:wormhole_frame',
                D: '#forge:chests'
            },
            id: 'compactmachines:tunnel/item'
        },
        {
            output: Item.of('compactmachines:tunnel', { definition: { id: 'compactmachines:redstone_in' } }),
            pattern: ['ABA', 'BCB', 'DBD'],
            key: {
                A: 'glassential:glass_redstone',
                B: '#forge:gems/dimensional',
                C: 'occultism:wormhole_frame',
                D: 'minecraft:redstone_torch'
            },
            id: 'compactmachines:tunnel/redstone'
        },
        {
            output: 'minecraft:furnace',
            pattern: ['LLL', 'L L', 'LLL'],
            key: {
                L: '#forge:stone'
            }
        },
        {
            output: Item.of('minecraft:stick', 16),
            pattern: ['A', 'A'],
            key: {
                A: '#minecraft:logs'
            }
        },
        {
            output: Item.of('occultism:candle_white'),
            pattern: [' B ', 'AAA', 'AAA'],
            key: {
                A: '#forge:wax',
                B: '#forge:string'
            }
        },
        {
            output: Item.of('eidolon:candle', 4),
            pattern: ['B', 'A'],
            key: {
                A: '#forge:wax',
                B: '#forge:string'
            }
        },
        {
            output: Item.of('quark:white_candle', 2),
            pattern: ['B', 'A', 'A'],
            key: {
                A: '#forge:wax',
                B: '#forge:string'
            }
        },
        {
            output: Item.of('prettypipes:pipe', 12),
            pattern: ['ABA'],
            key: {
                A: '#forge:ingots/tin',
                B: '#forge:glass/colorless'
            }
        },
        {
            output: Item.of('ppfluids:fluid_pipe', 12),
            pattern: [' C ', 'ABA', ' C '],
            key: {
                A: '#forge:ingots/tin',
                B: '#forge:glass/colorless',
                C: 'thermal:cured_rubber'
            }
        },
        {
            output: 'mythicbotany:alfsteel_pylon',
            pattern: [' n ', 'npn', ' g '],
            key: {
                n: 'mythicbotany:alfsteel_nugget',
                g: 'minecraft:ghast_tear',
                p: 'botania:gaia_pylon'
            },
            id: 'mythicbotany:alfsteel_pylon'
        },
        {
            output: 'botania:gaia_pylon',
            pattern: [' D ', 'EPE', ' D '],
            key: {
                P: 'botania:mana_pylon',
                D: 'botania:pixie_dust',
                E: '#forge:ingots/elementium'
            },
            id: 'mythicbotany:modified_gaia_pylon_with_alfsteel'
        }
    ];

    recipes.forEach((recipe) => {
        if (recipe.id) {
            event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
        } else {
            event.shaped(recipe.output, recipe.pattern, recipe.key);
        }
    });
});
*/