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
            output: 'sophisticatedbackpacks:upgrade_base',
            pattern: ['AAA', 'ABA', 'AAA'],
            key: {
                A: 'kubejs:scented_stick',
                B: 'farmersdelight:canvas'
            },
            id: 'sophisticatedbackpacks:upgrade_base'
        },
        {
            output: 'sophisticatedbackpacks:backpack',
            pattern: ['ABA', 'ACA', 'BBB'],
            key: {
                A: 'betterendforge:leather_stripe',
                B: 'farmersdelight:canvas',
                C: 'farmersdelight:basket'
            },
            id: 'sophisticatedbackpacks:backpack'
        },
        {
            output: 'sophisticatedbackpacks:stack_upgrade_tier_1',
            pattern: ['ABA', 'BCB', 'ABA'],
            key: {
                A: '#forge:ingots/pig_iron',
                B: 'immersiveengineering:hemp_fabric',
                C: '#sophisticatedbackpacks:upgrades/base'
            },
            id: 'sophisticatedbackpacks:stack_upgrade_tier_1'
        },
        {
            output: 'sophisticatedbackpacks:stack_upgrade_tier_2',
            pattern: ['ADA', 'B B', 'ADA'],
            key: {
                A: '#forge:storage_blocks/rose_gold',
                B: 'thermal:hazmat_fabric',
                D: '#sophisticatedbackpacks:upgrades/stack_tier_1'
            },
            id: 'sophisticatedbackpacks:stack_upgrade_tier_2'
        },
        {
            output: 'sophisticatedbackpacks:stack_upgrade_tier_3',
            pattern: ['ADA', 'B B', 'ADA'],
            key: {
                A: '#forge:storage_blocks/enderium',
                B: 'thermal:diving_fabric',
                D: '#sophisticatedbackpacks:upgrades/stack_tier_2'
            },
            id: 'sophisticatedbackpacks:stack_upgrade_tier_3'
        },
        {
            output: 'sophisticatedbackpacks:stack_upgrade_tier_4',
            pattern: ['ADA', 'B B', 'ADA'],
            key: {
                A: '#forge:storage_blocks/aeternium',
                B: 'botania:manaweave_cloth',
                D: '#sophisticatedbackpacks:upgrades/stack_tier_3'
            },
            id: 'sophisticatedbackpacks:stack_upgrade_tier_4'
        },
        {
            output: 'sophisticatedbackpacks:crafting_upgrade',
            pattern: ['A A', 'BDB', 'C C'],
            key: {
                A: 'create:precision_mechanism',
                B: 'create:crafting_blueprint',
                C: 'minecraft:barrel',
                D: '#sophisticatedbackpacks:upgrades/base'
            },
            id: 'sophisticatedbackpacks:crafting_upgrade'
        },
        {
            output: 'sophisticatedbackpacks:pickup_upgrade',
            pattern: [' A ', 'BDB', ' C '],
            key: {
                A: '#forge:slimeballs',
                B: 'thermal:redstone_servo',
                C: 'aquaculture:diamond_fishing_rod',
                D: '#sophisticatedbackpacks:upgrades/base'
            },
            id: 'sophisticatedbackpacks:pickup_upgrade'
        },
        {
            output: 'sophisticatedbackpacks:magnet_upgrade',
            pattern: ['BAA', 'AC ', 'BAA'],
            key: {
                A: '#forge:ingots/iron',
                B: 'bloodmagic:reagentmagnetism',
                C: '#sophisticatedbackpacks:upgrades/pickup'
            },
            id: 'sophisticatedbackpacks:magnet_upgrade'
        },
        {
            output: 'sophisticatedbackpacks:advanced_magnet_upgrade',
            pattern: ['BAA', 'AC ', 'BAA'],
            key: {
                A: '#forge:ingots/iron',
                B: 'bloodmagic:reagentmagnetism',
                C: '#sophisticatedbackpacks:upgrades/advanced_pickup'
            },
            id: 'sophisticatedbackpacks:advanced_magnet_upgrade'
        },
        {
            output: 'sophisticatedbackpacks:advanced_magnet_upgrade',
            pattern: [' A ', 'BCB', 'DDD'],
            key: {
                A: 'naturesaura:hopper_upgrade',
                B: '#forge:gears/lumium',
                C: '#sophisticatedbackpacks:upgrades/magnet',
                D: 'create:electron_tube'
            },
            id: 'sophisticatedbackpacks:advanced_magnet_upgrade_from_basic'
        },
        {
            output: 'sophisticatedbackpacks:advanced_pickup_upgrade',
            pattern: [' A ', 'BCB', 'DDD'],
            key: {
                A: 'naturesaura:hopper_upgrade',
                B: '#forge:gears/lumium',
                C: '#sophisticatedbackpacks:upgrades/pickup',
                D: 'create:electron_tube'
            },
            id: 'sophisticatedbackpacks:advanced_pickup_upgrade'
        },
        {
            output: 'sophisticatedbackpacks:advanced_void_upgrade',
            pattern: ['EAE', 'BCB', 'DDD'],
            key: {
                A: '#sophisticatedbackpacks:upgrades/advanced_filter',
                B: '#forge:gears/lumium',
                C: '#sophisticatedbackpacks:upgrades/void',
                D: 'create:electron_tube',
                E: 'create:precision_mechanism'
            },
            id: 'sophisticatedbackpacks:advanced_void_upgrade'
        },
        {
            output: 'sophisticatedbackpacks:tank_upgrade',
            pattern: ['ABA', 'BCB', 'ABA'],
            key: {
                A: 'create:fluid_pipe',
                B: 'create:fluid_tank',
                C: '#sophisticatedbackpacks:upgrades/base'
            },
            id: 'sophisticatedbackpacks:tank_upgrade'
        },
        {
            output: 'sophisticatedbackpacks:battery_upgrade',
            pattern: [' A ', 'BCB', ' B '],
            key: {
                A: 'thermal:flux_capacitor',
                B: 'thermal:rf_coil',
                C: '#sophisticatedbackpacks:upgrades/base'
            },
            id: 'sophisticatedbackpacks:battery_upgrade'
        },
        {
            output: 'sophisticatedbackpacks:everlasting_upgrade',
            pattern: ['ABA', 'CDE', 'AFA'],
            key: {
                A: 'quark:bottled_cloud',
                B: Item.of('minecraft:enchanted_book').enchant('minecraft:protection', 1),
                C: Item.of('minecraft:enchanted_book').enchant('minecraft:blast_protection', 1),
                D: '#sophisticatedbackpacks:upgrades/base',
                E: Item.of('minecraft:enchanted_book').enchant('minecraft:fire_protection', 1),
                F: Item.of('minecraft:enchanted_book').enchant('minecraft:projectile_protection', 1)
            },
            id: 'sophisticatedbackpacks:everlasting_upgrade'
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
