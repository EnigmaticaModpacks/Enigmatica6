onEvent('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }
    var data = {
        recipes: [
            {
                input: 'betterendforge:eternal_crystal',
                output: 'botania:mana_pylon',
                catalysts: [
                    { index: 0, tag: 'forge:gems/mana_diamond' },
                    { index: 1, tag: 'forge:plates/electrum' },
                    { index: 2, tag: 'forge:ingots/manasteel' },
                    { index: 3, tag: 'forge:plates/electrum' },
                    { index: 4, tag: 'forge:gems/mana_diamond' },
                    { index: 5, tag: 'forge:plates/electrum' },
                    { index: 6, tag: 'forge:ingots/manasteel' },
                    { index: 7, tag: 'forge:plates/electrum' }
                ],
                time: 250
            },
            {
                input: 'botania:mana_pylon',
                output: 'botania:natura_pylon',
                catalysts: [
                    { index: 0, item: 'powah:crystal_spirited' },
                    { index: 1, item: 'botania:glimmering_livingwood' },
                    { index: 2, tag: 'forge:ingots/terrasteel' },
                    { index: 3, item: 'botania:glimmering_livingwood' },
                    { index: 4, item: 'powah:crystal_spirited' },
                    { index: 5, item: 'botania:glimmering_livingwood' },
                    { index: 6, tag: 'forge:ingots/terrasteel' },
                    { index: 7, item: 'botania:glimmering_livingwood' }
                ],
                time: 250
            },
            {
                input: 'botania:natura_pylon',
                output: 'botania:gaia_pylon',
                catalysts: [
                    { index: 0, item: 'powah:crystal_nitro' },
                    { index: 1, tag: 'forge:ingots/elementium' },
                    { index: 2, item: 'botania:pixie_dust' },
                    { index: 3, tag: 'forge:ingots/elementium' },
                    { index: 4, item: 'powah:crystal_nitro' },
                    { index: 5, tag: 'forge:ingots/elementium' },
                    { index: 6, item: 'botania:pixie_dust' },
                    { index: 7, tag: 'forge:ingots/elementium' }
                ],
                time: 250
            },
            {
                input: 'botania:gaia_pylon',
                output: 'mythicbotany:alfsteel_pylon',
                catalysts: [
                    { index: 0, item: 'atum:ra_godshard' },
                    { index: 1, tag: 'chipped:crying_obsidian' },
                    { index: 2, tag: 'forge:ingots/alfsteel' },
                    { index: 3, tag: 'chipped:crying_obsidian' },
                    { index: 4, item: 'atum:ra_godshard' },
                    { index: 5, tag: 'chipped:crying_obsidian' },
                    { index: 6, tag: 'forge:ingots/alfsteel' },
                    { index: 7, tag: 'chipped:crying_obsidian' }
                ],
                time: 250
            },
            {
                input: 'ars_nouveau:ring_of_greater_discount',
                output: 'botania:mana_ring',
                catalysts: [
                    { index: 0, tag: 'forge:gems/mana_diamond' },
                    { index: 1, tag: 'forge:ingots/manasteel' },
                    { index: 3, tag: 'forge:ingots/manasteel' },
                    { index: 4, item: 'botania:mana_tablet' },
                    { index: 5, tag: 'forge:ingots/manasteel' },
                    { index: 7, tag: 'forge:ingots/manasteel' }
                ],
                time: 75,
                id: 'botania:mana_ring'
            },
            {
                input: '#forge:ingots/terrasteel',
                output: 'botania:gaia_ingot',
                catalysts: [
                    { index: 0, item: 'atum:seth_godshard' },
                    { index: 1, item: 'botania:life_essence' },
                    { index: 3, item: 'botania:life_essence' },
                    { index: 5, item: 'botania:life_essence' },
                    { index: 7, item: 'botania:life_essence' }
                ],
                time: 300,
                id: 'botania:gaia_ingot'
            }
        ]
    };
    data.recipes.forEach((recipe) => {
        const re = event.custom({
            type: 'betterendforge:infusion',
            input: Ingredient.of(recipe.input).toJson(),
            output: recipe.output,
            time: recipe.time,
            catalysts: recipe.catalysts
        });
        if (recipe.id) {
            re.id(recipe.id);
        }
    });
});
