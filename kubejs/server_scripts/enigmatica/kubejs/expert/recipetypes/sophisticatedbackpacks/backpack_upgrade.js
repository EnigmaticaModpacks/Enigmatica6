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
            pattern: ['FMF', 'RBR', 'FFF'],
            key: {
                F: { item: 'immersiveengineering:hemp_fabric' },
                M: { tag: 'forge:storage_blocks/pig_iron' },
                R: { tag: 'forge:rods/aluminum' },
                B: { item: 'sophisticatedbackpacks:backpack' }
            },
            result: { item: 'sophisticatedbackpacks:iron_backpack' },
            id: 'sophisticatedbackpacks:iron_backpack'
        },
        {
            pattern: ['FMF', 'RBR', 'FFF'],
            key: {
                F: { item: 'thermal:hazmat_fabric' },
                M: { tag: 'forge:storage_blocks/rose_gold' },
                R: { tag: 'forge:rods/electrum' },
                B: { item: 'sophisticatedbackpacks:iron_backpack' }
            },
            result: { item: 'sophisticatedbackpacks:gold_backpack' },
            id: 'sophisticatedbackpacks:gold_backpack'
        },
        {
            pattern: ['FMF', 'RBR', 'FFF'],
            key: {
                F: { item: 'thermal:diving_fabric' },
                M: { tag: 'forge:storage_blocks/enderium' },
                R: { tag: 'forge:alloys/elite' },
                B: { item: 'sophisticatedbackpacks:gold_backpack' }
            },
            result: { item: 'sophisticatedbackpacks:diamond_backpack' },
            id: 'sophisticatedbackpacks:diamond_backpack'
        },
        {
            pattern: ['FMF', 'RBR', 'FFF'],
            key: {
                F: { item: 'botania:manaweave_cloth' },
                M: { tag: 'forge:storage_blocks/aeternium' },
                R: { item: 'atum:shu_godshard' },
                B: { item: 'sophisticatedbackpacks:diamond_backpack' }
            },
            result: { item: 'sophisticatedbackpacks:netherite_backpack' },
            id: 'sophisticatedbackpacks:netherite_backpack'
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'sophisticatedbackpacks:backpack_upgrade';
        event.custom(recipe).id(recipe.id);
    });
});
