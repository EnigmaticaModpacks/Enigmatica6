onEvent('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/refinedcrafterproxy/shaped/';

    const recipes = [
        {
            output: Item.of('refinedcrafterproxy:crafter_proxy'),
            pattern: ['CTC', 'LXR', 'CBC'],
            key: {
                C: 'refinedstorage:quartz_enriched_iron',
                X: 'refinedstorage:crafter',
                L: 'refinedstorage:improved_processor',
                R: 'rftoolscontrol:network_card',
                T: 'extrastorage:neural_processor',
                B: 'refinedstorage:cable'
            },
            id: `refinedcrafterproxy:crafter_proxy`
        },
        {
            output: 'refinedcrafterproxy:crafter_proxy_card',
            pattern: ['ABA', 'ACA', 'ADA'],
            key: {
                A: 'refinedstorage:quartz_enriched_iron',
                B: 'pneumaticcraft:printed_circuit_board',
                C: 'refinedstorage:crafting_upgrade',
                D: 'refinedstorage:advanced_processor'
            },
            id: `refinedcrafterproxy:crafter_proxy_card`
        }
    ];

    for (let tier of ['iron', 'gold', 'diamond', 'netherite']) {
        recipes.push({
            output: Item.of('refinedcrafterproxy:crafter_proxy', { Tier: `extrastorage_${tier}` }),
            pattern: ['CTC', 'LXR', 'CBC'],
            key: {
                C: 'refinedstorage:quartz_enriched_iron',
                X: `extrastorage:${tier}_crafter`,
                L: 'refinedstorage:improved_processor',
                R: 'rftoolscontrol:network_card',
                T: 'extrastorage:neural_processor',
                B: 'refinedstorage:cable'
            },
            id: `${id_prefix}${tier}_crafter_proxy`
        });
    }

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
