onEvent('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/naturesaura/altar/';
    const recipes = [
        {
            input: 'architects_palette:sunmetal_brick',
            output: { item: 'naturesaura:infused_iron' },
            aura_type: 'naturesaura:overworld',
            aura: 15000,
            time: 80,
            id: 'naturesaura:altar/infused_iron'
        },
        {
            input: 'architects_palette:sunmetal_block',
            output: { item: 'naturesaura:infused_iron_block' },
            aura_type: 'naturesaura:overworld',
            aura: 135000,
            time: 700,
            id: 'naturesaura:altar/infused_iron_block'
        },
        {
            input: '#forge:ingots/arcane_gold',
            output: { item: 'naturesaura:tainted_gold' },
            aura_type: 'naturesaura:nether',
            aura: 15000,
            time: 80,
            id: 'naturesaura:altar/tainted_gold'
        },
        {
            input: '#forge:storage_blocks/arcane_gold',
            output: { item: 'naturesaura:tainted_gold_block' },
            aura_type: 'naturesaura:nether',
            aura: 135000,
            time: 700,
            id: 'naturesaura:altar/tainted_gold_block'
        },
        {
            input: 'eidolon:candle',
            output: { item: 'occultism:candle_white' },
            aura_type: 'naturesaura:nether',
            aura: 50000,
            time: 60,
            id: 'occultism:crafting/candle'
        },
        {
            input: 'kubejs:firmament',
            output: { item: 'architects_palette:sunstone' },
            aura_type: 'naturesaura:overworld',
            aura: 15000,
            time: 80,
            id: `${id_prefix}sunstone`
        },
        {
            input: 'ars_nouveau:arcane_stone',
            output: { item: 'naturesaura:infused_stone' },
            aura_type: 'naturesaura:nether',
            aura: 15000,
            time: 40,
            id: 'naturesaura:altar/infused_stone'
        },
        {
            input: 'minecraft:glass',
            output: { item: 'glassential:glass_ghostly' },
            aura_type: 'naturesaura:nether',
            aura: 100,
            time: 20,
            id: `${id_prefix}glass_ghostly`
        },
        {
            input: 'minecraft:ender_pearl',
            output: { item: 'integrateddynamics:proto_chorus' },
            aura_type: 'naturesaura:nether',
            aura: 135000,
            time: 700,
            id: 'integrateddynamics:crafting/proto_chorus'
        },
        {
            input: '#minecraft:fishes',
            output: { item: 'aquaculture:fish_bones' },
            aura_type: 'naturesaura:nether',
            catalyst: { item: 'naturesaura:crushing_catalyst' },
            aura: 1000,
            time: 60,
            id: `${id_prefix}fish_bones`
        },
        {
            input: 'minecraft:pufferfish',
            output: { item: 'upgrade_aquatic:lionfish' },
            catalyst: { item: 'naturesaura:conversion_catalyst' },
            aura_type: 'naturesaura:nether',
            aura: 15000,
            time: 80,
            id: `${id_prefix}lionfish`
        },
        {
            input: 'integrateddynamics:part_static_light_panel',
            output: { item: 'integrateddynamics:part_display_panel' },
            aura_type: 'naturesaura:nether',
            aura: 100,
            time: 20,
            id: 'integrateddynamics:crafting/part_display_panel'
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'naturesaura:altar';
        recipe.input = Ingredient.of(recipe.input).toJson();

        event.custom(recipe).id(recipe.id);
    });
});
