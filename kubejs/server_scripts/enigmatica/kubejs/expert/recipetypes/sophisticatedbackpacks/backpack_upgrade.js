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
            pattern: ['III', 'IBI', 'III'],
            key: {
                I: { tag: 'forge:ingots/iron' },
                B: { item: 'sophisticatedbackpacks:backpack' }
            },
            result: { item: 'sophisticatedbackpacks:iron_backpack' },
            id: 'sophisticatedbackpacks:iron_backpack'
        },
        {
            pattern: ['GGG', 'GBG', 'GGG'],
            key: {
                G: { tag: 'forge:ingots/gold' },
                B: { item: 'sophisticatedbackpacks:iron_backpack' }
            },
            result: { item: 'sophisticatedbackpacks:gold_backpack' },
            id: 'sophisticatedbackpacks:gold_backpack'
        },
        {
            pattern: ['DDD', 'DBD', 'DDD'],
            key: {
                D: { tag: 'forge:gems/diamond' },
                B: { item: 'sophisticatedbackpacks:gold_backpack' }
            },
            result: { item: 'sophisticatedbackpacks:diamond_backpack' },
            id: 'sophisticatedbackpacks:diamond_backpack'
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'sophisticatedbackpacks:backpack_upgrade';
        event.shaped(recipe).id(recipe.id);
    });
});
