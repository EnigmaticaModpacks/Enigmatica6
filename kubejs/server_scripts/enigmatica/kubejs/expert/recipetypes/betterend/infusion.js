onEvent('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/betterendforge/infusion/';
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
                time: 250,
                id: `${id_prefix}mana_pylon`
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
                time: 250,
                id: `${id_prefix}natura_pylon`
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
                time: 250,
                id: `${id_prefix}gaia_pylon`
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
                time: 250,
                id: `${id_prefix}alfsteel_pylon`
            },
            {
                input: 'ars_nouveau:ring_of_greater_discount',
                output: 'botania:mana_ring',
                catalysts: [
                    { index: 0, tag: 'forge:gems/mana_diamond' },
                    { index: 2, tag: 'forge:ingots/manasteel' },
                    { index: 4, item: 'botania:mana_tablet' },
                    { index: 6, tag: 'forge:ingots/manasteel' }
                ],
                time: 75,
                id: `${id_prefix}mana_ring`
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
                id: `${id_prefix}gaia_ingot`
            },
            {
                input: '#atum:relic_non_dirty/ring',
                output: 'botania:mining_ring',
                catalysts: [
                    { index: 0, tag: 'botania:runes/earth' },
                    { index: 2, tag: 'forge:ingots/manasteel' },
                    { index: 4, item: 'bloodmagic:reagentfastminer' },
                    { index: 6, tag: 'forge:ingots/manasteel' }
                ],
                time: 75,
                id: `${id_prefix}mining_ring`
            },
            {
                input: '#atum:relic_non_dirty/ring',
                output: 'botania:dodge_ring',
                catalysts: [
                    { index: 0, tag: 'botania:runes/air' },
                    { index: 2, tag: 'forge:ingots/manasteel' },
                    { index: 4, item: 'alexsmobs:roadrunner_feather' },
                    { index: 6, tag: 'forge:ingots/manasteel' }
                ],
                time: 75,
                id: `${id_prefix}dodge_ring`
            },
            {
                input: '#atum:relic_non_dirty/ring',
                output: 'botania:swap_ring',
                catalysts: [
                    { index: 0, item: 'ars_nouveau:magic_clay' },
                    { index: 2, tag: 'forge:ingots/manasteel' },
                    { index: 6, tag: 'forge:ingots/manasteel' }
                ],
                time: 75,
                id: `${id_prefix}swap_ring`
            },
            {
                input: '#atum:relic_non_dirty/ring',
                output: 'botania:water_ring',
                catalysts: [
                    { index: 0, tag: 'botania:runes/water' },
                    { index: 2, tag: 'forge:ingots/manasteel' },
                    { index: 4, item: 'minecraft:heart_of_the_sea' },
                    { index: 6, tag: 'forge:ingots/manasteel' }
                ],
                time: 75,
                id: `${id_prefix}water_ring`
            },
            {
                input: '#atum:relic_non_dirty/ring',
                output: 'botania:magnet_ring',
                catalysts: [
                    { index: 0, item: 'botania:lens_magnet' },
                    { index: 2, tag: 'forge:ingots/manasteel' },
                    { index: 6, tag: 'forge:ingots/manasteel' }
                ],
                time: 75,
                id: `${id_prefix}magnet_ring`
            },
            {
                input: '#atum:relic_non_dirty/ring',
                output: 'botania:aura_ring',
                catalysts: [
                    { index: 0, tag: 'botania:runes/mana' },
                    { index: 2, tag: 'forge:ingots/manasteel' },
                    { index: 4, item: 'naturesaura:aura_cache' },
                    { index: 6, tag: 'forge:ingots/manasteel' }
                ],
                time: 75,
                id: `${id_prefix}aura_ring`
            },
            {
                input: 'botania:aura_ring',
                output: 'botania:pixie_ring',
                catalysts: [
                    { index: 0, item: 'botania:pixie_dust' },
                    { index: 2, tag: 'forge:ingots/elementium' },
                    { index: 4, item: 'naturesaura:calling_spirit' },
                    { index: 6, tag: 'forge:ingots/elementium' }
                ],
                time: 75,
                id: `${id_prefix}pixie_ring`
            },
            {
                input: 'botania:aura_ring',
                output: 'botania:reach_ring',
                catalysts: [
                    { index: 0, tag: 'botania:runes/pride' },
                    { index: 2, tag: 'forge:ingots/elementium' },
                    { index: 4, tag: 'forge:ingots/sky' },
                    { index: 6, tag: 'forge:ingots/elementium' }
                ],
                time: 75,
                id: `${id_prefix}reach_ring`
            },
            {
                input: 'botania:aura_ring',
                output: 'mythicbotany:fire_ring',
                catalysts: [
                    { index: 0, tag: 'botania:runes/muspelheim' },
                    { index: 2, tag: 'forge:ingots/elementium' },
                    { index: 4, item: 'ars_nouveau:glyph_shield' },
                    { index: 6, tag: 'forge:ingots/elementium' }
                ],
                time: 75,
                id: `${id_prefix}fire_ring`
            },
            {
                input: 'botania:aura_ring',
                output: 'mythicbotany:ice_ring',
                catalysts: [
                    { index: 0, tag: 'botania:runes/niflheim' },
                    { index: 2, tag: 'forge:ingots/elementium' },
                    { index: 4, item: 'ars_nouveau:glyph_shield' },
                    { index: 6, tag: 'forge:ingots/elementium' }
                ],
                time: 75,
                id: `${id_prefix}ice_ring`
            }
        ]
    };
    data.recipes.forEach((recipe) => {
        event
            .custom({
                type: 'betterendforge:infusion',
                input: Ingredient.of(recipe.input).toJson(),
                output: recipe.output,
                time: recipe.time,
                catalysts: recipe.catalysts
            })
            .id(recipe.id);
    });
});
