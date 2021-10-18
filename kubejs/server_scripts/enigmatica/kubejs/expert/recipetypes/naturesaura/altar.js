onEvent('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:base/naturesaura/altar/';
    const recipes = [
        {
            input: 'architects_palette:sunmetal_brick',
            output: 'naturesaura:infused_iron',
            aura_type: 'naturesaura:overworld',
            aura: 15000,
            time: 80,
            id: 'naturesaura:altar/infused_iron'
        },
        {
            input: 'architects_palette:sunmetal_block',
            output: 'naturesaura:infused_iron_block',
            aura_type: 'naturesaura:overworld',
            aura: 135000,
            time: 700,
            id: 'naturesaura:altar/infused_iron_block'
        },
        {
            input: '#forge:ingots/arcane_gold',
            output: 'naturesaura:tainted_gold',
            aura_type: 'naturesaura:nether',
            aura: 15000,
            time: 80,
            id: 'naturesaura:altar/tainted_gold'
        },
        {
            input: '#forge:storage_blocks/arcane_gold',
            output: 'naturesaura:tainted_gold_block',
            aura_type: 'naturesaura:nether',
            aura: 135000,
            time: 700,
            id: 'naturesaura:altar/tainted_gold_block'
        },
        {
            input: 'eidolon:candle',
            output: 'occultism:candle_white',
            aura_type: 'naturesaura:nether',
            aura: 50000,
            time: 60,
            id: 'occultism:crafting/candle'
        },
        {
            input: 'kubejs:firmament',
            output: 'architects_palette:sunstone',
            aura_type: 'naturesaura:overworld',
            aura: 15000,
            time: 80,
            id: `${id_prefix}sunstone`
        },
        {
            input: 'minecraft:vine',
            output: 'quark:root',
            aura_type: 'naturesaura:nether',
            aura: 30000,
            time: 250,
            id: `${id_prefix}root`
        },
        {
            input: 'ars_nouveau:arcane_stone',
            output: 'naturesaura:infused_stone',
            aura_type: 'naturesaura:nether',
            aura: 15000,
            time: 40,
            id: 'naturesaura:altar/infused_stone'
        },
        {
            input: 'minecraft:glass',
            output: 'glassential:glass_ghostly',
            aura_type: 'naturesaura:nether',
            aura: 100,
            time: 20,
            id: `${id_prefix}glass_ghostly`
        },
        {
            input: 'minecraft:ender_pearl',
            output: 'integrateddynamics:proto_chorus',
            aura_type: 'naturesaura:nether',
            aura: 135000,
            time: 700,
            id: 'integrateddynamics:crafting/proto_chorus'
        }
    ];
    recipes.forEach((recipe) => {
        let constructed_recipe = {
            type: 'naturesaura:altar',
            input: Ingredient.of(recipe.input).toJson(),
            output: Ingredient.of(recipe.output).toJson(),
            aura_type: recipe.aura_type,
            aura: recipe.aura,
            time: recipe.time
        };
        if (recipe.catalyst) {
            constructed_recipe.catalyst = Ingredient.of(recipe.catalyst).toJson();
        }
        event.custom(constructed_recipe).id(recipe.id);
    });
});
