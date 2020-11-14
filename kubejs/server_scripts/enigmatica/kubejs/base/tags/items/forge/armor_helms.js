events.listen('item.tags', function (event) {
    var helms = [
        'aquaculture:neptunium_helmet',
        'ars_nouveau:apprentice_hood',
        'ars_nouveau:archmage_hood',
        'ars_nouveau:novice_hood',
        'botania:elementium_helmet',
        'botania:manasteel_helmet',
        'botania:manaweave_helmet',
        'botania:terrasteel_helmet',
        'byg:ametrine_helmet',
        'good_nights_sleep:candy_helmet',
        'good_nights_sleep:negatite_helmet',
        'good_nights_sleep:positite_helmet',
        'good_nights_sleep:rainbow_helmet',
        'good_nights_sleep:zitrite_helmet',
        'immersiveengineering:armor_faraday_head',
        'immersiveengineering:armor_steel_head',
        'mapperbase:steel_helmet',
        'mekanism:hazmat_mask',
        'mekanism:mekasuit_helmet',
        'mekanism:scuba_mask',
        'mekanismtools:bronze_helmet',
        'mekanismtools:lapis_lazuli_helmet',
        'mekanismtools:osmium_helmet',
        'mekanismtools:refined_glowstone_helmet',
        'mekanismtools:refined_obsidian_helmet',
        'minecraft:chainmail_helmet',
        'minecraft:diamond_helmet',
        'minecraft:golden_helmet',
        'minecraft:iron_helmet',
        'minecraft:leather_helmet',
        'minecraft:netherite_helmet',
        'naturesaura:infused_iron_helmet',
        'naturesaura:sky_helmet',
        'pneumaticcraft:pneumatic_helmet',
        'thermal:beekeeper_helmet',
        'thermal:diving_helmet',
        'thermal:hazmat_helmet'
    ];

    helms.forEach(function (helm) {
        event.get('forge:armor').add(helm);
        event.get('forge:armor/helms').add(helm);
    });
});
