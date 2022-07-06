onEvent('recipes', (event) => {
    const id_prefix = 'enigmatica:base/thermal/sawmill/';
    const recipes = [
        {
            input: '#minecraft:planks',
            outputs: [Item.of('minecraft:stick', 6), Item.of('emendatusenigmatica:wood_dust').chance(0.25)],
            id: `${id_prefix}sticks_from_planks`
        },
        {
            input: '#minecraft:wooden_slabs',
            outputs: [Item.of('minecraft:stick', 3), Item.of('emendatusenigmatica:wood_dust').chance(0.125)],
            id: `${id_prefix}sticks_from_wooden_slabs`
        },
        {
            input: '#minecraft:wooden_stairs',
            outputs: [Item.of('minecraft:stick', 9), Item.of('emendatusenigmatica:wood_dust').chance(0.375)],
            id: `${id_prefix}sticks_from_wooden_stairs`
        },
        {
            input: ['naturesaura:ancient_log'],
            outputs: [Item.of('6x naturesaura:ancient_planks'), Item.of('emendatusenigmatica:wood_dust').chance(0.25)],
            id: `${id_prefix}ancient_planks_from_log`
        },
        {
            input: ['naturesaura:ancient_bark'],
            outputs: [Item.of('6x naturesaura:ancient_planks'), Item.of('emendatusenigmatica:wood_dust').chance(0.25)],
            id: `${id_prefix}ancient_planks_from_bark`
        },
        {
            input: ['botania:livingwood'],
            outputs: [Item.of('6x botania:livingwood_planks'), Item.of('emendatusenigmatica:wood_dust').chance(0.25)],
            id: `${id_prefix}livingwood_planks_from_livingwood`
        },
        {
            input: ['astralsorcery:infused_wood'],
            outputs: [Item.of('6x astralsorcery:infused_wood_planks'), Item.of('astralsorcery:stardust').chance(0.01)],
            id: `${id_prefix}infused_wood_planks_from_infused_wood`
        }
    ];

    recipes.forEach((recipe) => {
        event.recipes.thermal.sawmill(recipe.outputs, recipe.input).id(recipe.id);
    });
});
