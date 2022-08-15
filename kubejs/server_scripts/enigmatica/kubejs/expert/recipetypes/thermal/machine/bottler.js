onEvent('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/thermal/bottler/';
    const recipes = [
        {
            input: '#forge:dusts/sulfur',
            fluid: Fluid.of('industrialforegoing:latex', 900),
            output: 'industrialforegoing:dryrubber',
            energy: 12000,
            id: `${id_prefix}dryrubber`
        },
        {
            input: ['#forge:ingots/superheated_steel', '#forge:ingots/hot_compressed_iron'],
            fluid: Fluid.of('tconstruct:scorched_stone', 144 * 8),
            output: 'tconstruct:foundry_controller',
            energy: 10000,
            id: 'tconstruct:smeltery/casting/scorched/foundry_controller'
        },
        {
            input: 'minecraft:light_gray_concrete_powder',
            fluid: Fluid.of('kubejs:molten_compressed_iron', 18),
            output: 'pneumaticcraft:reinforced_stone',
            energy: 8000,
            id: 'pneumaticcraft:reinforced_stone'
        },
        {
            input: 'kubejs:memory_basic_empty',
            fluid: Fluid.of('pneumaticcraft:memory_essence', 8000),
            output: 'kubejs:memory_basic_filled',
            energy: 8000,
            id: `${id_prefix}memory_basic_filled`
        },
        {
            input: 'kubejs:memory_advanced_empty',
            fluid: Fluid.of('pneumaticcraft:memory_essence', 8000 * 2),
            output: 'kubejs:memory_advanced_filled',
            energy: 8000 * 2,
            id: `${id_prefix}memory_advanced_filled`
        },
        {
            input: 'kubejs:memory_elite_empty',
            fluid: Fluid.of('pneumaticcraft:memory_essence', 8000 * 4),
            output: 'kubejs:memory_elite_filled',
            energy: 8000 * 4,
            id: `${id_prefix}memory_elite_filled`
        },
        {
            input: 'kubejs:memory_ultimate_empty',
            fluid: Fluid.of('pneumaticcraft:memory_essence', 8000 * 8),
            output: 'kubejs:memory_ultimate_filled',
            energy: 8000 * 8,
            id: `${id_prefix}memory_ultimate_filled`
        },
        {
            input: 'gunswithoutroses:iron_bullet',
            fluid: Fluid.of('tconstruct:blazing_blood', 5),
            output: 'gunswithoutroses:blaze_bullet',
            energy: 100,
            id: `${id_prefix}blaze_bullet`
        },
        {
            input: 'botania:thorn_chakram',
            fluid: Fluid.of('tconstruct:blazing_blood', 1000),
            output: 'botania:flare_chakram',
            energy: 15000,
            id: `${id_prefix}flare_chakram`
        }
    ];
    recipes.forEach((recipe) => {
        event.recipes.thermal.bottler(recipe.output, [recipe.fluid, recipe.input]).energy(recipe.energy).id(recipe.id);
    });
});
