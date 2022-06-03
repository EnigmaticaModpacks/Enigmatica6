onEvent('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/eidolon/shaped/';

    /*
        ,
        {
            output: '',
            pattern: ['', '', ''],
            key: {
                A: ''
            },
            id: ''
        }
    */

    const recipes = [
        {
            output: 'eidolon:wooden_altar',
            pattern: ['AAA', 'B B', 'B B'],
            key: {
                A: 'eidolon:polished_planks_slab',
                B: 'eidolon:polished_planks'
            },
            id: 'eidolon:wooden_altar'
        },
        {
            output: 'eidolon:basic_belt',
            pattern: ['ABA', 'BCB', 'ABA'],
            key: {
                A: 'betterendforge:silk_fiber',
                B: 'betterendforge:leather_stripe',
                C: '#forge:gems/mana'
            },
            id: 'eidolon:basic_belt'
        },
        {
            output: 'eidolon:brazier',
            pattern: ['AAA', 'CBC', 'D D'],
            key: {
                A: '#forge:ingots/pewter',
                B: 'minecraft:conduit',
                C: 'eidolon:ender_calx',
                D: 'minecraft:nether_brick_fence'
            },
            id: 'eidolon:brazier'
        },
        {
            output: 'eidolon:wooden_altar',
            pattern: ['AAA', 'CBC', 'CBC'],
            key: {
                A: 'quark:brown_stained_planks_slab',
                B: 'kubejs:scented_stick',
                C: 'quark:brown_stained_planks_vertical_slab'
            },
            id: 'eidolon:wooden_altar'
        },
        {
            output: 'eidolon:soul_enchanter',
            pattern: [' A ', 'BCB', 'DED'],
            key: {
                A: 'tomeofblood:blood_tome_three',
                B: '#forge:inlays/arcane_gold',
                C: 'eidolon:polished_planks',
                D: 'create:shadow_steel_casing',
                E: Item.of('bloodmagic:soulgemlesser', '{souls:256.0d}')
            },
            id: `${id_prefix}soul_enchanter`
        },
        {
            output: Item.of('6x eidolon:wicked_weave'),
            pattern: ['ABA', 'ACA', 'ABA'],
            key: {
                A: 'atum:linen_cloth',
                B: Item.of('minecraft:potion', '{Potion:"ars_nouveau:spell_damage"}'),
                C: { type: 'bloodmagic:bloodorb', orb_tier: 1 }
            },
            id: `${id_prefix}wicked_weave`
        },
        {
            output: Item.of('eidolon:bonechill_wand'),
            pattern: [' AB', 'CDA', 'EC '],
            key: {
                A: '#forge:ingots/pewter',
                B: 'eidolon:wraith_heart',
                C: '#forge:rods/silver',
                D: 'minecraft:bone',
                E: '#forge:inlays/pewter'
            },
            id: `${id_prefix}bonechill_wand`
        },
        {
            output: Item.of('eidolon:soulfire_wand'),
            pattern: [' AB', 'CDA', 'EC '],
            key: {
                A: '#forge:ingots/arcane_gold',
                B: 'atum:anubis_godshard',
                C: '#forge:rods/electrum',
                D: '#forge:bones/wither',
                E: '#forge:inlays/arcane_gold'
            },
            id: `${id_prefix}soulfire_wand`
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
