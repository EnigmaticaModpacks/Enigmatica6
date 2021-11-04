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
            pattern: ['ADA', 'BCB', 'ADA'],
            key: {
                A: '#forge:storage_blocks/rose_gold',
                B: 'thermal:hazmat_fabric',
                C: 'resourcefulbees:gold_honeycomb_block',
                D: 'sophisticatedbackpacks:stack_upgrade_tier_1'
            },
            id: 'sophisticatedbackpacks:stack_upgrade_tier_2'
        },
        {
            output: 'sophisticatedbackpacks:stack_upgrade_tier_3',
            pattern: ['ADA', 'BCB', 'ADA'],
            key: {
                A: '#forge:storage_blocks/enderium',
                B: 'thermal:diving_fabric',
                C: 'resourcefulbees:diamond_honeycomb_block',
                D: 'sophisticatedbackpacks:stack_upgrade_tier_2'
            },
            id: 'sophisticatedbackpacks:stack_upgrade_tier_3'
        },
        {
            output: 'sophisticatedbackpacks:stack_upgrade_tier_4',
            pattern: ['ADA', 'BCB', 'ADA'],
            key: {
                A: '#forge:storage_blocks/aeternium',
                B: 'botania:manaweave_cloth',
                C: 'resourcefulbees:netherite_honeycomb_block',
                D: 'sophisticatedbackpacks:stack_upgrade_tier_3'
            },
            id: 'sophisticatedbackpacks:stack_upgrade_tier_4'
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
