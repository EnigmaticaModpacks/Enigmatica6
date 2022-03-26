onEvent('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/interactio/item_lightning/';
    const recipes = [
        {
            inputs: ['4x minecraft:snowball', 'quark:bottled_cloud', '#forge:gems/fluorite'],
            output: {
                entries: [{ result: { item: 'powah:charged_snowball', count: 3 }, weight: 1 }],
                empty_weight: 0,
                rolls: 1
            },
            id: `${id_prefix}charged_snowball`
        },
        {
            inputs: ['3x #forge:storage_blocks/clay', '#forge:gems/mana', '#forge:gems/apatite'],
            output: {
                entries: [{ result: { item: 'ars_nouveau:arcane_stone', count: 4 }, weight: 1 }],
                empty_weight: 0,
                rolls: 1
            },
            id: `${id_prefix}arcane_stone`
        },
        {
            inputs: [
                'minecraft:heart_of_the_sea',
                '4x minecraft:nautilus_shell',
                '2x #forge:gems/lapis',
                '2x #forge:gems/fluorite',
                '#forge:gems/mana'
            ],
            output: {
                entries: [{ result: { item: 'minecraft:conduit', count: 1 }, weight: 1 }],
                empty_weight: 0,
                rolls: 1
            },
            id: 'minecraft:conduit'
        },
        {
            inputs: ['eidolon:gold_inlay', 'botania:livingwood_wall', 'naturesaura:gold_leaf', '#forge:gems/apatite'],
            output: {
                entries: [{ result: { item: 'naturesaura:wood_stand', count: 1 }, weight: 1 }],
                empty_weight: 0,
                rolls: 1
            },
            id: 'naturesaura:wood_stand'
        },
        {
            inputs: [
                [
                    'undergarden:music_disc_relict',
                    'undergarden:music_disc_mammoth',
                    'undergarden:music_disc_limax_maximus',
                    'undergarden:music_disc_gloomper_anthem'
                ],
                'aquaculture:fish_bones',
                '2x #forge:gems/lapis',
                '2x minecraft:fermented_spider_eye',
                '4x undergarden:raw_dweller_meat'
            ],
            output: {
                entries: [{ result: { item: 'meetyourfight:fossil_bait', count: 1 }, weight: 1 }],
                empty_weight: 0,
                rolls: 1
            },
            id: 'meetyourfight:fossil_bait'
        },
        {
            inputs: ['supplementaries:jar', '3x #forge:gems/fluorite'],
            output: {
                entries: [{ result: { item: 'ars_nouveau:jar_of_light', count: 1 }, weight: 1 }],
                empty_weight: 0,
                rolls: 1
            },
            id: `${id_prefix}jar_of_light`
        },
        {
            inputs: ['supplementaries:jar', '3x #forge:dusts/obsidian'],
            output: {
                entries: [{ result: { item: 'ars_nouveau:void_jar', count: 1 }, weight: 1 }],
                empty_weight: 0,
                rolls: 1
            },
            id: `${id_prefix}void_jar`
        },
        {
            inputs: [
                Item.of('naturesaura:aura_bottle', '{stored_type:"naturesaura:overworld"}'),
                'naturesaura:infused_iron',
                '#botania:runes/water',
                '#botania:runes/earth',
                Item.of('naturesaura:aura_bottle', '{stored_type:"naturesaura:nether"}'),
                'naturesaura:tainted_gold',
                '#botania:runes/fire',
                '#botania:runes/air'
            ],
            output: {
                entries: [{ result: { item: 'naturesaura:calling_spirit', count: 4 }, weight: 1 }],
                empty_weight: 0,
                rolls: 1
            },
            id: `${id_prefix}calling_spirit`
        },
        {
            inputs: ['#forge:storage_blocks/iron', '#forge:dusts/iron', '#forge:gems/fluorite', '#forge:dusts/copper'],
            output: {
                entries: [{ result: { item: 'minecraft:lodestone', count: 1 }, weight: 1 }],
                empty_weight: 0,
                rolls: 1
            },
            id: `${id_prefix}lodestone`
        },
        {
            inputs: ['6x #botania:petals', '2x botania:quartz_blaze', '#forge:nuggets/nebu'],
            output: {
                entries: [{ result: { item: 'botania:spark', count: 3 }, weight: 1 }],
                empty_weight: 0,
                rolls: 1
            },
            id: `${id_prefix}spark`
        },
        {
            inputs: [
                '2x eidolon:gold_inlay',
                'eidolon:pewter_inlay',
                '#forge:gems/mana',
                '4x architects_palette:sunmetal_blend'
            ],
            output: {
                entries: [{ result: { item: 'atum:scarab', count: 1 }, weight: 1 }],
                empty_weight: 0,
                rolls: 1
            },
            id: 'atum:scarab'
        },
        {
            inputs: ['minecraft:bell', '3x atum:ectoplasm', '#forge:gems/fluorite', '#atum:relic_non_dirty'],
            output: {
                entries: [{ result: { item: 'meetyourfight:haunted_bell', count: 1 }, weight: 1 }],
                empty_weight: 0,
                rolls: 1
            },
            id: 'meetyourfight:haunted_bell'
        },
        {
            inputs: ['2x thermal:phytogro', '2x #forge:dusts/iron', '#forge:dusts/nickel'],
            output: {
                entries: [{ result: { item: 'emendatusenigmatica:invar_dust', count: 3 }, weight: 1 }],
                empty_weight: 0,
                rolls: 1
            },
            id: `${id_prefix}invar_dust`
        },
        {
            inputs: ['#forge:gems/fluorite', '6x minecraft:prismarine', '6x undergarden:shiverstone'],
            output: {
                entries: [{ result: { item: 'kubejs:firmament', count: 3 }, weight: 1 }],
                empty_weight: 0,
                rolls: 1
            },
            id: `${id_prefix}firmament`
        },
        {
            inputs: ['eidolon:soul_shard', 'minecraft:polished_andesite', '#forge:inlays/pewter'],
            output: {
                entries: [{ result: { item: 'eidolon:stone_altar', count: 1 }, weight: 1 }],
                empty_weight: 0,
                rolls: 1
            },
            id: `${id_prefix}stone_altar`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'interactio:item_lightning';

        recipe.inputs = recipe.inputs.map((input) => Ingredient.of(input).toJson());

        event.custom(recipe).id(recipe.id);
    });
});
