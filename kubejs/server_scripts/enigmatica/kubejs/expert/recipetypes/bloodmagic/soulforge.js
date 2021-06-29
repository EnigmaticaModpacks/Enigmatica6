onEvent('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }
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
                    'occultism:spirit_attuned_gem',
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
                inputs: ['bloodmagic:soulgempetty', 'undergarden:forgotten_sword', '#forge:ingots/iesnium'],
                output: Item.of('bloodmagic:soulsword'),
                minimumDrain: 0.0,
                drain: 0.0,
                id: 'bloodmagic:soulforge/sentientsword'
            },
            {
                inputs: ['bloodmagic:soulgempetty', 'undergarden:forgotten_axe', '#forge:ingots/iesnium'],
                output: Item.of('bloodmagic:soulaxe'),
                minimumDrain: 0.0,
                drain: 0.0,
                id: 'bloodmagic:soulforge/sentientaxe'
            },
            {
                inputs: ['bloodmagic:soulgempetty', 'undergarden:forgotten_pickaxe', '#forge:ingots/iesnium'],
                output: Item.of('bloodmagic:soulpickaxe', {
                    'occultism:otherworldToolTier': 2
                }),
                minimumDrain: 0.0,
                drain: 0.0,
                id: 'bloodmagic:soulforge/sentientpickaxe'
            },
            {
                inputs: ['bloodmagic:soulgempetty', 'undergarden:forgotten_shovel', '#forge:ingots/iesnium'],
                output: Item.of('bloodmagic:soulshovel'),
                minimumDrain: 0.0,
                drain: 0.0,
                id: 'bloodmagic:soulforge/sentientshovel'
            },
            {
                inputs: ['bloodmagic:soulgempetty', 'undergarden:forgotten_hoe', '#forge:ingots/iesnium'],
                output: Item.of('bloodmagic:soulscythe'),
                minimumDrain: 0.0,
                drain: 0.0,
                id: 'bloodmagic:soulforge/sentientscythe'
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
                drain: 32.0
            },
            {
                inputs: [
                    ['#forge:ingots/regalium', '#forge:ingots/nebu'],
                    'eidolon:soul_shard',
                    'eidolon:crimson_essence'
                ],
                output: Item.of('eidolon:arcane_gold_ingot'),
                minimumDrain: 32.0,
                drain: 16.0
            },
            {
                inputs: ['bloodmagic:rawdemoncrystal', 'bloodmagic:soulpickaxe', '#forge:storage_blocks/iesnium'],
                output: Item.of('occultism:iesnium_pickaxe'),
                minimumDrain: 4000.0,
                drain: 2048.0,
                id: 'occultism:crafting/iesnium_pickaxe'
            }
        ]
    };

    data.recipes.forEach((recipe) => {
        const re = event.recipes.bloodmagic
            .soulforge(recipe.output, recipe.inputs)
            .minimumDrain(recipe.minimumDrain)
            .drain(recipe.drain);
        if (recipe.id) {
            re.id(recipe.id);
        }
    });
});
