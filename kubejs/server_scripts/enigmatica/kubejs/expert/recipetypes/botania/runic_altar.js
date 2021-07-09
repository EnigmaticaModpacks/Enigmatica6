onEvent('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }

    const recipes = [
        {
            inputs: [
                '#forge:dusts/mana',
                '#forge:ingots/manasteel',
                'thermal:blizz_powder',
                '#upgrade_aquatic:coralstone/infused',
                'minecraft:kelp',
                'aquaculture:diamond_hook'
            ],
            mana: 16000,
            output: 'botania:rune_water',
            count: 2,
            id: 'botania:runic_altar/water'
        },
        {
            inputs: [
                '#forge:dusts/mana',
                '#forge:ingots/manasteel',
                'minecraft:blaze_powder',
                'quark:magma_bricks',
                'undergarden:ditchbulb',
                'quark:white_candle'
            ],
            mana: 16000,
            output: 'botania:rune_fire',
            count: 2,
            id: 'botania:runic_altar/fire'
        },
        {
            inputs: [
                '#forge:dusts/mana',
                '#forge:ingots/manasteel',
                'thermal:basalz_powder',
                'undergarden:tremblecrust',
                '#quark:runes',
                'aquaculture:worm'
            ],
            mana: 16000,
            output: 'botania:rune_earth',
            count: 2,
            id: 'botania:runic_altar/earth'
        },
        {
            inputs: [
                '#forge:dusts/mana',
                '#forge:ingots/manasteel',
                'thermal:blitz_powder',
                'betterendforge:silk_fiber',
                'quark:bottled_cloud',
                'alexsmobs:guster_eye'
            ],
            mana: 16000,
            output: 'botania:rune_air',
            count: 2,
            id: 'botania:runic_altar/air'
        },
        {
            inputs: [
                '#forge:ingots/manasteel',
                '#forge:ingots/manasteel',
                'naturesaura:sky_ingot',
                '#forge:ingots/manasteel',
                '#forge:ingots/manasteel',
                'botania:mana_pearl',
                'atum:isis_godshard'
            ],
            mana: 96000,
            output: 'botania:rune_mana',
            count: 1,
            id: 'botania:runic_altar/mana'
        },
        {
            inputs: [
                '#botania:runes/water',
                '#botania:runes/fire',
                'naturesaura:birth_spirit',
                'kubejs:syrup_bottle',
                '#minecraft:saplings',
                '#minecraft:saplings',
                'quark:turf',
                'quark:turf',
                'atum:osiris_godshard'
            ],
            mana: 32000,
            output: 'botania:rune_spring',
            count: 1,
            id: 'botania:runic_altar/spring'
        },
        {
            inputs: [
                '#botania:runes/earth',
                '#botania:runes/air',
                '#forge:sand',
                '#forge:sand',
                'farmersdelight:melon_popsicle',
                'farmersdelight:melon_popsicle',
                '#forge:pies',
                '#forge:pies',
                'atum:ra_godshard'
            ],
            mana: 32000,
            output: 'botania:rune_summer',
            count: 1,
            id: 'botania:runic_altar/summer'
        },
        {
            inputs: [
                '#botania:runes/fire',
                '#botania:runes/air',
                'minecraft:carved_pumpkin',
                'minecraft:carved_pumpkin',
                'create:honeyed_apple',
                'create:honeyed_apple',
                'farmersdelight:hot_cocoa',
                'farmersdelight:hot_cocoa',
                'atum:geb_godshard'
            ],
            mana: 32000,
            output: 'botania:rune_autumn',
            count: 1,
            id: 'botania:runic_altar/autumn'
        },
        {
            inputs: [
                '#botania:runes/water',
                '#botania:runes/earth',
                'farmersdelight:shepherds_pie_block',
                '#upgrade_aquatic:bedrolls',
                '#forge:hay_bales',
                '#forge:hay_bales',
                'betterendforge:dense_snow',
                'betterendforge:dense_snow',
                'atum:tefnut_godshard'
            ],
            mana: 32000,
            output: 'botania:rune_winter',
            count: 1,
            id: 'botania:runic_altar/winter'
        },
        {
            inputs: [
                'bloodmagic:weakbloodshard',
                'astralsorcery:resonating_gem',
                '#botania:runes/winter',
                '#botania:runes/water',
                'astralsorcery:resonating_gem'
            ],
            mana: 64000,
            output: 'botania:rune_envy',
            count: 1,
            id: 'botania:runic_altar/envy'
        },
        {
            inputs: [
                'bloodmagic:weakbloodshard',
                'astralsorcery:resonating_gem',
                '#botania:runes/winter',
                '#botania:runes/fire',
                'astralsorcery:resonating_gem'
            ],
            mana: 64000,
            output: 'botania:rune_gluttony',
            count: 1,
            id: 'botania:runic_altar/gluttony'
        },
        {
            inputs: [
                'bloodmagic:weakbloodshard',
                'astralsorcery:resonating_gem',
                '#botania:runes/spring',
                '#botania:runes/water',
                'astralsorcery:resonating_gem'
            ],
            mana: 64000,
            output: 'botania:rune_greed',
            count: 1,
            id: 'botania:runic_altar/greed'
        },
        {
            inputs: [
                'bloodmagic:weakbloodshard',
                'astralsorcery:resonating_gem',
                '#botania:runes/summer',
                '#botania:runes/air',
                'astralsorcery:resonating_gem'
            ],
            mana: 64000,
            output: 'botania:rune_lust',
            count: 1,
            id: 'botania:runic_altar/lust'
        },
        {
            inputs: [
                'bloodmagic:weakbloodshard',
                'astralsorcery:resonating_gem',
                '#botania:runes/summer',
                '#botania:runes/fire',
                'astralsorcery:resonating_gem'
            ],
            mana: 64000,
            output: 'botania:rune_pride',
            count: 1,
            id: 'botania:runic_altar/pride'
        },
        {
            inputs: [
                'bloodmagic:weakbloodshard',
                'astralsorcery:resonating_gem',
                '#botania:runes/autumn',
                '#botania:runes/air',
                'astralsorcery:resonating_gem'
            ],
            mana: 64000,
            output: 'botania:rune_sloth',
            count: 1,
            id: 'botania:runic_altar/sloth'
        },
        {
            inputs: [
                'bloodmagic:weakbloodshard',
                'astralsorcery:resonating_gem',
                '#botania:runes/winter',
                '#botania:runes/earth',
                'astralsorcery:resonating_gem'
            ],
            mana: 64000,
            output: 'botania:rune_wrath',
            count: 1,
            id: 'botania:runic_altar/wrath'
        },
        {
            inputs: [
                '#forge:ingots/elementium',
                '#botania:runes/air',
                '#botania:runes/summer',
                '#botania:runes/lust',
                'naturesaura:gold_leaf'
            ],
            mana: 96000,
            output: 'mythicbotany:alfheim_rune',
            count: 1,
            id: 'mythicbotany:runic_altar/alfheim'
        },
        {
            inputs: [
                '#forge:ingots/sky',
                '#botania:runes/air',
                '#botania:runes/autumn',
                '#botania:runes/pride',
                'botania:bifrost_perm'
            ],
            mana: 96000,
            output: 'mythicbotany:asgard_rune',
            count: 1,
            id: 'mythicbotany:runic_altar/asgard'
        },
        {
            inputs: [
                '#forge:ingots/tainted_gold',
                '#botania:runes/fire',
                '#botania:runes/autumn',
                '#botania:runes/envy',
                ['eidolon:zombie_heart', 'eidolon:wraith_heart']
            ],
            mana: 96000,
            output: 'mythicbotany:helheim_rune',
            count: 1,
            id: 'mythicbotany:runic_altar/helheim'
        },
        {
            inputs: [
                '#forge:ingots/netherite',
                '#botania:runes/earth',
                '#botania:runes/autumn',
                '#botania:runes/gluttony',
                'naturesaura:infused_stone'
            ],
            mana: 96000,
            output: 'mythicbotany:joetunheim_rune',
            count: 1,
            id: 'mythicbotany:runic_altar/joetunheim'
        },
        {
            inputs: [
                '#forge:ingots/manasteel',
                '#botania:runes/earth',
                '#botania:runes/spring',
                '#botania:runes/greed',
                'minecraft:podzol'
            ],
            mana: 96000,
            output: 'mythicbotany:midgard_rune',
            count: 1,
            id: 'mythicbotany:runic_altar/midgard'
        },
        {
            inputs: [
                '#forge:ingots/sunmetal',
                '#botania:runes/fire',
                '#botania:runes/summer',
                '#botania:runes/wrath',
                'architects_palette:sunstone'
            ],
            mana: 96000,
            output: 'mythicbotany:muspelheim_rune',
            count: 1,
            id: 'mythicbotany:runic_altar/muspelheim'
        },
        {
            inputs: [
                'create:shadow_steel',
                '#botania:runes/earth',
                '#botania:runes/winter',
                '#botania:runes/sloth',
                'eidolon:shadow_gem'
            ],
            mana: 96000,
            output: 'mythicbotany:nidavellir_rune',
            count: 1,
            id: 'mythicbotany:runic_altar/nidavellir'
        },
        {
            inputs: [
                '#forge:ingots/froststeel',
                '#botania:runes/water',
                '#botania:runes/winter',
                '#botania:runes/wrath',
                'architects_palette:moonstone'
            ],
            mana: 96000,
            output: 'mythicbotany:niflheim_rune',
            count: 1,
            id: 'mythicbotany:runic_altar/niflheim'
        },
        {
            inputs: [
                '#forge:ingots/iesnium',
                '#botania:runes/earth',
                '#botania:runes/spring',
                '#botania:runes/pride',
                'bloodmagic:seersigil'
            ],
            mana: 96000,
            output: 'mythicbotany:vanaheim_rune',
            count: 1,
            id: 'mythicbotany:runic_altar/vanaheim'
        }
    ];

    recipes.forEach((recipe) => {
        let ingredients = [];

        recipe.inputs.forEach((input) => {
            ingredients.push(Ingredient.of(input).toJson());
        });

        const re = event.custom({
            type: 'botania:runic_altar',
            output: { item: recipe.output, count: recipe.count },
            mana: recipe.mana,
            ingredients: ingredients
        });
        if (recipe.id) {
            re.id(recipe.id);
        }
    });
});
