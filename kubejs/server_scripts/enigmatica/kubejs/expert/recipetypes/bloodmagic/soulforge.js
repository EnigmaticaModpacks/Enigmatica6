onEvent('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/bloodmagic/soulforge/';
    var data = {
        recipes: [
            {
                inputs: [
                    'bloodmagic:soulforge',
                    '#forge:ingots/iesnium',
                    'occultism:spirit_attuned_crystal',
                    'glassential:glass_ghostly'
                ],
                output: 'bloodmagic:demoncrystallizer',
                minimumDrain: 500.0,
                drain: 100.0,
                id: 'bloodmagic:soulforge/demon_crystallizer'
            },
            {
                inputs: [
                    'bloodmagic:soulforge',
                    '#forge:ingots/iesnium',
                    'eidolon:crimson_essence',
                    'occultism:spirit_attuned_gem'
                ],
                output: 'bloodmagic:demoncrucible',
                minimumDrain: 400.0,
                drain: 100.0,
                id: 'bloodmagic:soulforge/demon_crucible'
            },
            {
                inputs: [
                    'eidolon:soul_shard',
                    'naturesaura:infused_iron',
                    'glassential:glass_ghostly',
                    'minecraft:conduit'
                ],
                output: 'bloodmagic:soulgempetty',
                minimumDrain: 1.0,
                drain: 1.0,
                id: 'bloodmagic:soulforge/pettytartaricgem'
            },
            {
                inputs: [
                    'bloodmagic:soulgempetty',
                    '#forge:ingots/forgotten_metal',
                    'glassential:glass_ethereal',
                    'quark:diamond_heart'
                ],
                output: 'bloodmagic:soulgemlesser',
                minimumDrain: 60.0,
                drain: 20.0,
                id: 'bloodmagic:soulforge/lessertartaricgem'
            },
            {
                inputs: [
                    'bloodmagic:soulgemlesser',
                    '#forge:ingots/enderium',
                    '#botania:runes/helheim',
                    'bloodmagic:infusedslate'
                ],
                output: 'bloodmagic:soulgemcommon',
                minimumDrain: 240.0,
                drain: 50.0,
                id: 'bloodmagic:soulforge/commontartaricgem'
            },
            {
                inputs: [
                    'bloodmagic:soulgemcommon',
                    'bloodmagic:demonslate',
                    '#forge:ingots/gaia_spirit',
                    '#bloodmagic:crystals/demon'
                ],
                output: 'bloodmagic:soulgemgreater',
                minimumDrain: 1000.0,
                drain: 100.0,
                id: 'bloodmagic:soulforge/greatertartaricgem'
            },
            {
                inputs: [
                    'atum:nuit_godshard',
                    'eidolon:soul_shard',
                    'astralsorcery:nocturnal_powder',
                    'eidolon:death_essence'
                ],
                output: Item.of('eidolon:shadow_gem'),
                minimumDrain: 100.0,
                drain: 32.0,
                id: `${id_prefix}shadow_gem`
            },
            {
                inputs: [
                    ['#forge:ingots/regalium', '#forge:ingots/nebu'],
                    'eidolon:soul_shard',
                    'eidolon:crimson_essence'
                ],
                output: Item.of('eidolon:arcane_gold_ingot'),
                minimumDrain: 32.0,
                drain: 16.0,
                id: `${id_prefix}arcane_gold_ingot`
            },
            {
                inputs: ['bloodmagic:rawdemoncrystal', 'bloodmagic:soulpickaxe', '#forge:storage_blocks/iesnium'],
                output: Item.of('occultism:iesnium_pickaxe'),
                minimumDrain: 4000.0,
                drain: 2048.0,
                id: 'occultism:crafting/iesnium_pickaxe'
            },
            {
                inputs: ['occultism:dimensional_matrix', '#botania:runes/helheim', 'occultism:storage_controller_base'],
                output: 'occultism:storage_controller',
                minimumDrain: 1000.0,
                drain: 200.0,
                id: 'occultism:crafting/storage_controller'
            },
            {
                inputs: ['bloodmagic:dungeon_stone', '#forge:ingots/tainted_gold', '#forge:gems/nitro'],
                output: 'bloodmagic:crystalline_resonator',
                minimumDrain: 1200.0,
                drain: 200.0,
                id: 'bloodmagic:soulforge/primitive_crystalline_resonator'
            },

            /// Patchouli Removals
            {
                inputs: ['kubejs:altered_recipe_indicator'],
                output: Item.of('bloodmagic:soulsword'),
                minimumDrain: 0.0,
                drain: 0.0,
                id: 'bloodmagic:soulforge/sentientsword'
            },
            {
                inputs: ['kubejs:altered_recipe_indicator'],
                output: Item.of('bloodmagic:soulaxe'),
                minimumDrain: 0.0,
                drain: 0.0,
                id: 'bloodmagic:soulforge/sentientaxe'
            },
            {
                inputs: ['kubejs:altered_recipe_indicator'],
                output: Item.of('bloodmagic:soulpickaxe', {
                    'occultism:otherworldToolTier': 2
                }),
                minimumDrain: 0.0,
                drain: 0.0,
                id: 'bloodmagic:soulforge/sentientpickaxe'
            },
            {
                inputs: ['kubejs:altered_recipe_indicator'],
                output: Item.of('bloodmagic:soulshovel'),
                minimumDrain: 0.0,
                drain: 0.0,
                id: 'bloodmagic:soulforge/sentientshovel'
            },
            {
                inputs: ['kubejs:altered_recipe_indicator'],
                output: Item.of('bloodmagic:soulscythe'),
                minimumDrain: 0.0,
                drain: 0.0,
                id: 'bloodmagic:soulforge/sentientscythe'
            }
        ]
    };

    data.recipes.forEach((recipe) => {
        event.recipes.bloodmagic
            .soulforge(recipe.output, recipe.inputs)
            .minimumDrain(recipe.minimumDrain)
            .drain(recipe.drain)
            .id(recipe.id);
    });
});
