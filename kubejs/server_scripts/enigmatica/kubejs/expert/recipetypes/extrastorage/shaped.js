onEvent('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/extrastorage/';
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
            output: Item.of('extrastorage:iron_crafter'),
            pattern: ['ABA', 'CEC', 'ADA'],
            key: {
                A: 'refinedstorage:quartz_enriched_iron',
                B: '#forge:circuits/advanced',
                C: 'extrastorage:neural_processor',
                D: 'thermal:upgrade_augment_1',
                E: 'refinedstorage:crafter'
            },
            id: 'extrastorage:iron_crafter'
        },
        {
            output: Item.of('extrastorage:gold_crafter'),
            pattern: ['ABA', 'CEC', 'ADA'],
            key: {
                A: 'refinedstorage:quartz_enriched_iron',
                B: '#forge:circuits/elite',
                C: 'extrastorage:neural_processor',
                D: 'thermal:upgrade_augment_2',
                E: 'refinedstorage:crafter'
            },
            id: 'extrastorage:gold_crafter'
        },
        {
            output: Item.of('extrastorage:gold_crafter'),
            pattern: [' B ', ' E ', ' D '],
            key: {
                B: '#forge:circuits/elite',
                D: 'thermal:upgrade_augment_2',
                E: 'extrastorage:iron_crafter'
            },
            id: 'extrastorage:gold_crafter_upgrade'
        },
        {
            output: Item.of('extrastorage:diamond_crafter'),
            pattern: ['ABA', 'CEC', 'ADA'],
            key: {
                A: 'refinedstorage:quartz_enriched_iron',
                B: '#forge:circuits/ultimate',
                C: 'extrastorage:neural_processor',
                D: 'thermal:upgrade_augment_3',
                E: 'refinedstorage:crafter'
            },
            id: 'extrastorage:diamond_crafter'
        },
        {
            output: Item.of('extrastorage:diamond_crafter'),
            pattern: [' B ', ' E ', ' D '],
            key: {
                B: '#forge:circuits/ultimate',
                D: 'thermal:upgrade_augment_3',
                E: 'extrastorage:gold_crafter'
            },
            id: 'extrastorage:diamond_crafter_upgrade'
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
