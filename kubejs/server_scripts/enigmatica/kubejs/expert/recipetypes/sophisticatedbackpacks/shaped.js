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
                A: 'refinedstorage:quartz_enriched_iron_block',
                B: 'immersiveengineering:hemp_fabric',
                C: 'sophisticatedbackpacks:upgrade_base'
            },
            id: 'sophisticatedbackpacks:stack_upgrade_tier_1'
        },
        {
            output: 'sophisticatedbackpacks:stack_upgrade_tier_2',
            pattern: ['ADA', 'B B', 'ADA'],
            key: {
                A: '#forge:storage_blocks/rose_gold',
                B: 'thermal:hazmat_fabric',
                D: 'sophisticatedbackpacks:stack_upgrade_tier_1'
            },
            id: 'sophisticatedbackpacks:stack_upgrade_tier_2'
        },
        {
            output: 'sophisticatedbackpacks:stack_upgrade_tier_3',
            pattern: ['ADA', 'B B', 'ADA'],
            key: {
                A: '#forge:storage_blocks/enderium',
                B: 'thermal:diving_fabric',
                D: 'sophisticatedbackpacks:stack_upgrade_tier_2'
            },
            id: 'sophisticatedbackpacks:stack_upgrade_tier_3'
        },
        {
            output: 'sophisticatedbackpacks:stack_upgrade_tier_4',
            pattern: ['ADA', 'B B', 'ADA'],
            key: {
                A: '#forge:storage_blocks/aeternium',
                B: 'botania:manaweave_cloth',
                D: 'sophisticatedbackpacks:stack_upgrade_tier_3'
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
                D: 'sophisticatedbackpacks:upgrade_base'
            },
            id: 'sophisticatedbackpacks:crafting_upgrade'
        },
        {
            output: 'sophisticatedbackpacks:pickup_upgrade',
            pattern: [' A ', 'BDB', ' C '],
            key: {
                A: 'quark:slime_in_a_bucket',
                B: 'thermal:redstone_servo',
                C: 'aquaculture:diamond_fishing_rod',
                D: 'sophisticatedbackpacks:upgrade_base'
            },
            id: 'sophisticatedbackpacks:pickup_upgrade'
        },
        {
            output: 'sophisticatedbackpacks:magnet_upgrade',
            pattern: ['BAA', 'AC ', 'BAA'],
            key: {
                A: '#forge:ingots/iron',
                B: 'bloodmagic:reagentmagnetism',
                C: 'sophisticatedbackpacks:pickup_upgrade'
            },
            id: 'sophisticatedbackpacks:magnet_upgrade'
        },
        {
            output: 'sophisticatedbackpacks:advanced_magnet_upgrade',
            pattern: ['BAA', 'AC ', 'BAA'],
            key: {
                A: '#forge:ingots/iron',
                B: 'bloodmagic:reagentmagnetism',
                C: 'sophisticatedbackpacks:advanced_pickup_upgrade'
            },
            id: 'sophisticatedbackpacks:advanced_magnet_upgrade'
        },
        {
            output: 'sophisticatedbackpacks:advanced_magnet_upgrade',
            pattern: [' A ', 'BCB', 'DDD'],
            key: {
                A: 'naturesaura:hopper_upgrade',
                B: '#forge:gears/lumium',
                C: 'sophisticatedbackpacks:magnet_upgrade',
                D: 'create:polished_rose_quartz'
            },
            id: 'sophisticatedbackpacks:advanced_magnet_upgrade_from_basic'
        },
        {
            output: 'sophisticatedbackpacks:advanced_pickup_upgrade',
            pattern: [' A ', 'BCB', 'DDD'],
            key: {
                A: 'naturesaura:hopper_upgrade',
                B: '#forge:gears/lumium',
                C: 'sophisticatedbackpacks:pickup_upgrade',
                D: 'create:polished_rose_quartz'
            },
            id: 'sophisticatedbackpacks:advanced_pickup_upgrade'
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
