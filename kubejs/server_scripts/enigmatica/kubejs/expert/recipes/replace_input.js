onEvent('recipes', (event) => {
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
            filter: { id: 'atum:scarab_from_crunchy_scarab' },
            toReplace: '#forge:ingots/gold',
            replaceWith: '#forge:nuggets/nebu'
        },
        {
            filter: { id: 'occultism:crafting/wormhole_frame' },
            toReplace: '#forge:ingots/gold',
            replaceWith: 'atum:nebu_chain'
        },
        {
            filter: { id: 'occultism:crafting/storage_remote_inert' },
            toReplace: '#forge:ingots/gold',
            replaceWith: '#forge:ingots/nebu'
        },
        {
            filter: { id: 'occultism:crafting/storage_remote_inert' },
            toReplace: 'minecraft:stone_button',
            replaceWith: '#forge:nuggets/silver'
        },
        {
            filter: { id: '/wilden_summon/' },
            toReplace: 'minecraft:lapis_block',
            replaceWith: 'meetyourfight:velvet_fortune'
        },
        {
            filter: { mod: 'powah' },
            toReplace: 'powah:capacitor_basic',
            replaceWith: 'powah:capacitor_basic_large'
        },
        {
            filter: { id: '/pressure_chamber_glass/' },
            toReplace: '#forge:glass',
            replaceWith: '#thermal:glass/hardened'
        }
    ];

    recipes.forEach((recipe) => {
        event.replaceInput(recipe.filter, recipe.toReplace, recipe.replaceWith);
    });
});
