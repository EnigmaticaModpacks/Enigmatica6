onEvent('recipes', (event) => {
    if (global.isNormalMode == false) {
        return;
    }
    const recipes = [
        {
            inputs: [
                '#forge:gems/mana',
                '#forge:gems/mana',
                '#forge:ingots/gold_brass',
                '#forge:ingots/gold_brass',
                'ars_nouveau:spell_parchment',
                'ars_nouveau:glyph_projectile',
                'ars_nouveau:glyph_accelerate'
            ],
            reagent: 'ars_nouveau:archwood_planks',
            output: 'ars_nouveau:wand',
            id: 'ars_nouveau:wand'
        },
        {
            inputs: [
                '#forge:gems/diamond',
                '#forge:gems/diamond',
                '#forge:ingots/gold_brass',
                '#forge:ingots/gold_brass',
                '#forge:gems/mana',
                '#forge:gems/mana',
                '#forge:gems/mana',
                '#forge:gems/mana'
            ],
            reagent: 'ars_nouveau:dull_trinket',
            output: 'ars_nouveau:amulet_of_mana_regen',
            id: 'ars_nouveau:amulet_of_mana_regen'
        },
        {
            inputs: [
                '#forge:gems/diamond',
                '#forge:gems/diamond',
                '#forge:gems/diamond',
                '#forge:ingots/gold_brass',
                '#forge:ingots/gold_brass',
                '#forge:gems/mana',
                '#forge:gems/mana',
                '#forge:gems/mana'
            ],
            reagent: 'ars_nouveau:dull_trinket',
            output: 'ars_nouveau:amulet_of_mana_boost',
            id: 'ars_nouveau:amulet_of_mana_boost'
        }
    ];
    recipes.forEach((recipe) => {
        event.recipes.ars_nouveau.enchanting_apparatus(recipe.output, recipe.reagent, recipe.inputs).id(recipe.id);
    });
});
