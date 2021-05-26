events.listen('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }

    const recipes = [
        {
            filter: { id: 'create:crafting/kinetics/mechanical_piston' },
            toReplace: '#minecraft:planks',
            replaceWith: ['minecraft:piston', 'minecraft:sticky_piston']
        },
        {
            filter: { id: 'thermal:machine_pyrolyzer' },
            toReplace: 'minecraft:blaze_rod',
            replaceWith: '#forge:gems/coal_coke'
        },
        {
            filter: { id: 'occultism:crafting/goggles' },
            toReplace: 'minecraft:leather',
            replaceWith: 'betterendforge:leather_stripe'
        },
        {
            filter: { id: 'glassential:glass_ghostly' },
            toReplace: 'minecraft:ender_pearl',
            replaceWith: Item.of('naturesaura:aura_bottle', { stored_type: 'naturesaura:nether' })
        },
        {
            filter: { id: 'occultism:crafting/iesnium_pickaxe' },
            toReplace: '#forge:rods/wooden',
            replaceWith: 'betterendforge:leather_wrapped_stick'
        }
    ];

    recipes.forEach((recipe) => {
        event.replaceInput(recipe.filter, recipe.toReplace, recipe.replaceWith);
    });
});
