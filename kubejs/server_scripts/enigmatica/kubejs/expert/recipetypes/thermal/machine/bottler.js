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
            id: `${id_prefix}dryrubber`
        },
        {
            input: ['#forge:ingots/superheated_steel', '#forge:ingots/hot_compressed_iron'],
            fluid: Fluid.of('tconstruct:scorched_stone', 144 * 8),
            output: 'tconstruct:foundry_controller',
            id: 'tconstruct:smeltery/casting/scorched/foundry_controller'
        }
        /*
        {
            input: '#forge:concrete_powder',
            fluid: Fluid.of('kubejs:molten_compressed_iron', 18),
            output: 'pneumaticcraft:reinforced_stone',
            id: 'pneumaticcraft:reinforced_stone'
        }
        {
            input: 'kubejs:memory_basic_empty',
            fluid: Fluid.of('pneumaticcraft:memory_essence', 8000),
            output: 'kubejs:memory_basic_filled',
            id: `${id_prefix}memory_basic_filled`
        },
        {
            input: 'kubejs:memory_advanced_empty',
            fluid: Fluid.of('pneumaticcraft:memory_essence', 8000 * 2),
            output: 'kubejs:memory_advanced_filled',
            id: `${id_prefix}memory_advanced_filled`
        },
        {
            input: 'kubejs:memory_elite_empty',
            fluid: Fluid.of('pneumaticcraft:memory_essence', 8000 * 4),
            output: 'kubejs:memory_elite_filled',
            id: `${id_prefix}memory_elite_filled`
        },
        {
            input: 'kubejs:memory_ultimate_empty',
            fluid: Fluid.of('pneumaticcraft:memory_essence', 8000 * 8),
            output: 'kubejs:memory_ultimate_filled',
            id: `${id_prefix}memory_ultimate_filled`
        },
        {
            input: 'gunswithoutroses:iron_bullet',
            fluid: Fluid.of('tconstruct:blazing_blood', 5),
            output: 'gunswithoutroses:blaze_bullet',
            id: `${id_prefix}blaze_bullet`
        }
        */
    ];
    recipes.forEach((recipe) => {
        event.recipes.thermal.bottler(recipe.output, [recipe.fluid, recipe.input]).id(recipe.id);
    });
});
