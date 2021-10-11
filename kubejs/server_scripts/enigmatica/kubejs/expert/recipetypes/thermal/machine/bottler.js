onEvent('recipes', (event) => {
    const id_prefix = 'enigmatica:expert/thermal/bottler/';
    if (global.isExpertMode == false) {
        return;
    }

    const recipes = [
        {
            input: 'minecraft:glass_bottle',
            fluid: Fluid.of('thermal:syrup', 250),
            output: 'kubejs:syrup_bottle',
            id: `${id_prefix}syrup_bottle`
        },
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
        },
        {
            input: '#forge:concrete_powder',
            fluid: Fluid.of('kubejs:molten_compressed_iron', 18),
            output: 'pneumaticcraft:reinforced_stone',
            id: 'pneumaticcraft:reinforced_stone'
        },
        {
            input: 'extrastorage:diamond_crafter',
            fluid: Fluid.of('tconstruct:molten_netherite', 5184),
            output: 'extrastorage:netherite_crafter',
            id: 'extrastorage:netherite_crafter'
        }
    ];
    recipes.forEach((recipe) => {
        event.recipes.thermal.bottler(recipe.output, [recipe.fluid, recipe.input]).id(recipe.id);
    });
});
