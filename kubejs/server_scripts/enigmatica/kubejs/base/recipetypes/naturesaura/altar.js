onEvent('recipes', (event) => {
    const id_prefix = 'enigmatica:base/naturesaura/altar/';

    const recipes = [
        {
            input: 'resourcefulbees:infused_honeycomb',
            output: { item: 'naturesaura:infused_iron' },
            aura_type: 'naturesaura:overworld',
            aura: 10000,
            time: 60,
            id: `${id_prefix}infused_iron_from_comb`
        },
        {
            input: 'resourcefulbees:infused_honeycomb_block',
            output: { item: 'naturesaura:infused_iron_block' },
            aura_type: 'naturesaura:overworld',
            aura: 90000,
            time: 540,
            id: `${id_prefix}infused_iron_block_from_comb_block`
        },
        {
            input: 'resourcefulbees:tainted_honeycomb',
            output: { item: 'naturesaura:tainted_gold' },
            aura_type: 'naturesaura:nether',
            aura: 10000,
            time: 60,
            id: `${id_prefix}tainted_gold_from_comb`
        },
        {
            input: 'resourcefulbees:tainted_honeycomb_block',
            output: { item: 'naturesaura:tainted_gold_block' },
            aura_type: 'naturesaura:nether',
            aura: 90000,
            time: 540,
            id: `${id_prefix}tainted_gold_block_from_comb_block`
        },
        {
            input: 'undergarden:blood_mushroom',
            output: { item: 'byg:soul_shroom' },
            aura_type: 'naturesaura:nether',
            catalyst: { item: 'naturesaura:conversion_catalyst' },
            aura: 30000,
            time: 250,
            id: `${id_prefix}soul_shroom`
        },
        {
            input: 'undergarden:veil_mushroom',
            output: { item: 'byg:death_cap' },
            aura_type: 'naturesaura:nether',
            catalyst: { item: 'naturesaura:conversion_catalyst' },
            aura: 30000,
            time: 250,
            id: `${id_prefix}death_cap`
        },
        {
            input: 'undergarden:indigo_mushroom',
            output: { item: 'byg:sythian_fungus' },
            aura_type: 'naturesaura:nether',
            catalyst: { item: 'naturesaura:conversion_catalyst' },
            aura: 30000,
            time: 250,
            id: `${id_prefix}sythian_fungus`
        },
        {
            input: 'undergarden:ink_mushroom',
            output: { item: 'byg:embur_wart' },
            aura_type: 'naturesaura:nether',
            catalyst: { item: 'naturesaura:conversion_catalyst' },
            aura: 30000,
            time: 250,
            id: `${id_prefix}embur_wart`
        },
        {
            input: 'minecraft:bamboo',
            output: { item: 'byg:sythian_stalk_block' },
            aura_type: 'naturesaura:nether',
            catalyst: { item: 'naturesaura:conversion_catalyst' },
            aura: 30000,
            time: 250,
            id: `${id_prefix}sythian_stalk_block`
        },
        {
            input: 'minecraft:flint',
            output: { item: 'minecraft:gunpowder' },
            aura_type: 'naturesaura:nether',
            catalyst: { item: 'naturesaura:conversion_catalyst' },
            aura: 10000,
            time: 60,
            id: `${id_prefix}gunpowder`
        },
        {
            input: 'supplementaries:flint_block',
            output: { item: 'thermal:gunpowder_block' },
            aura_type: 'naturesaura:nether',
            catalyst: { item: 'naturesaura:conversion_catalyst' },
            aura: 80000,
            time: 480,
            id: `${id_prefix}gunpowder_block`
        },
        {
            input: 'thermal:basalz_rod',
            output: { item: 'thermal:basalz_powder', count: 4 },
            aura_type: 'naturesaura:nether',
            catalyst: { item: 'naturesaura:crushing_catalyst' },
            aura: 5000,
            time: 60,
            id: `${id_prefix}basalz_powder`
        },
        {
            input: 'thermal:blizz_rod',
            output: { item: 'thermal:blizz_powder', count: 4 },
            aura_type: 'naturesaura:nether',
            catalyst: { item: 'naturesaura:crushing_catalyst' },
            aura: 5000,
            time: 60,
            id: `${id_prefix}blizz_powder`
        },
        {
            input: 'thermal:blitz_rod',
            output: { item: 'thermal:blitz_powder', count: 4 },
            aura_type: 'naturesaura:nether',
            catalyst: { item: 'naturesaura:crushing_catalyst' },
            aura: 5000,
            time: 60,
            id: `${id_prefix}blitz_powder`
        },
        {
            input: 'minecraft:vine',
            output: { item: 'quark:root' },
            aura_type: 'naturesaura:nether',
            aura: 30000,
            time: 250,
            id: `${id_prefix}root`
        }
    ];
    recipes.forEach((recipe) => {
        recipe.type = 'naturesaura:altar';
        recipe.input = Ingredient.of(recipe.input).toJson();

        event.custom(recipe).id(recipe.id);
    });
});
