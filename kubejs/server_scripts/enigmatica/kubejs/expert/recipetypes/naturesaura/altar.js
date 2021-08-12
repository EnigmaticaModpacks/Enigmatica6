onEvent('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }

    const data = {
        recipes: [
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
                time: 80
            },
            {
                input: 'minecraft:vine',
                output: 'quark:root',
                aura_type: 'naturesaura:nether',
                aura: 30000,
                time: 250
            },
            {
                input: 'kubejs:firmament',
                output: 'naturesaura:infused_stone',
                aura_type: 'naturesaura:nether',
                aura: 15000,
                time: 40,
                id: 'naturesaura:altar/infused_stone'
            }
        ]
    };

    data.recipes.forEach((recipe) => {
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
        const re = event.custom(constructed_recipe);
        if (recipe.id) {
            re.id(recipe.id);
        }
    });
});
