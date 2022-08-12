onEvent('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }
    /*
        ,
        {
            output: '',
            pattern: ['', '', ''],
            key: {
                A: ''
            },
            id: ''
        }
    */

    const recipes = [
        {
            output: 'advancedperipherals:peripheral_casing',
            pattern: ['CDC', 'BAB', 'CEC'],
            key: {
                A: 'rftoolsbase:machine_frame',
                B: 'create:redstone_link',
                C: '#forge:sheetmetals/iron',
                D: 'integrateddynamics:part_world_reader',
                E: 'integratedtunnels:part_player_simulator'
            },
            id: 'advancedperipherals:peripheral_casing'
        },
        {
            output: 'advancedperipherals:chunk_controller',
            pattern: ['BCB', 'DAE', 'BCB'],
            key: {
                A: 'advancedperipherals:peripheral_casing',
                B: 'dustrial_decor:anchor',
                C: '#forge:storage_blocks/redstone',
                D: 'minecraft:respawn_anchor',
                E: 'mekanism:upgrade_anchor'
            },
            id: 'advancedperipherals:chunk_controller'
        },
        {
            output: 'advancedperipherals:weak_automata_core',
            pattern: ['ABA', 'CDC', 'AEA'],
            key: {
                A: '#forge:gears/gold',
                B: 'advancedperipherals:peripheral_casing',
                C: 'tconstruct:soul_glass',
                D: 'quark:soul_bead',
                E: 'modularrouters:player_module'
            },
            id: 'advancedperipherals:weak_automata_core'
        },
        {
            output: 'advancedperipherals:end_automata_core',
            pattern: ['B B', ' A ', 'B B'],
            key: {
                A: 'advancedperipherals:weak_automata_core',
                B: Item.of(
                    'pneumaticcraft:spawner_core',
                    '{"pneumaticcraft:SpawnerCoreStats":{"minecraft:enderman":100}}'
                )
            },
            id: 'advancedperipherals:end_automata_core'
        },
        {
            output: 'advancedperipherals:husbandry_automata_core',
            pattern: ['B C', ' A ', 'D E'],
            key: {
                A: 'advancedperipherals:weak_automata_core',
                B: Item.of('pneumaticcraft:spawner_core', '{"pneumaticcraft:SpawnerCoreStats":{"minecraft:cow":100}}'),
                C: Item.of(
                    'pneumaticcraft:spawner_core',
                    '{"pneumaticcraft:SpawnerCoreStats":{"minecraft:sheep":100}}'
                ),
                D: Item.of('pneumaticcraft:spawner_core', '{"pneumaticcraft:SpawnerCoreStats":{"minecraft:pig":100}}'),
                E: Item.of(
                    'pneumaticcraft:spawner_core',
                    '{"pneumaticcraft:SpawnerCoreStats":{"minecraft:chicken":100}}'
                )
            },
            id: 'advancedperipherals:husbandry_automata_core'
        },
        {
            output: 'advancedperipherals:overpowered_weak_automata_core',
            pattern: [' B ', 'CAD', ' E '],
            key: {
                A: 'advancedperipherals:weak_automata_core',
                B: 'bloodmagic:weakbloodshard',
                C: 'eidolon:shadow_gem',
                D: 'botania:dragonstone',
                E: 'minecraft:nether_star'
            },
            id: 'advancedperipherals:overpowered_weak_automata_core'
        },
        {
            output: 'advancedperipherals:overpowered_husbandry_automata_core',
            pattern: [' B ', 'CAD', ' E '],
            key: {
                A: 'advancedperipherals:husbandry_automata_core',
                B: 'bloodmagic:weakbloodshard',
                C: 'eidolon:shadow_gem',
                D: 'botania:dragonstone',
                E: 'minecraft:nether_star'
            },
            id: 'advancedperipherals:overpowered_husbandry_automata_core'
        },
        {
            output: 'advancedperipherals:overpowered_end_automata_core',
            pattern: [' B ', 'CAD', ' E '],
            key: {
                A: 'advancedperipherals:end_automata_core',
                B: 'bloodmagic:weakbloodshard',
                C: 'eidolon:shadow_gem',
                D: 'botania:dragonstone',
                E: 'minecraft:nether_star'
            },
            id: 'advancedperipherals:overpowered_end_automata_core'
        }
    ];
    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
