onEvent('item.tags', (event) => {
    var items = [
        'botania:flare_chakram',
        'botania:thorn_chakram',
        'gunswithoutroses:diamond_gatling',
        'gunswithoutroses:diamond_shotgun',
        'gunswithoutroses:diamond_sniper',
        'gunswithoutroses:gold_gun',
        'gunswithoutroses:iron_gun',
        'immersiveengineering:chemthrower',
        'immersiveengineering:railgun',
        'immersiveengineering:revolver',
        'industrialforegoing:infinity_trident',
        'meetyourfight:phantasmal_rifle',
        'meetyourfight:cocktail_shotgun',
        'mekanism:flamethrower',
        'minecraft:bow',
        'minecraft:crossbow',
        'minecraft:trident',
        'pneumaticcraft:micromissiles',
        'pneumaticcraft:minigun',
        'undergarden:slingshot',
        'alexsmobs:blood_sprayer',
        'atum:tefnuts_call',
        'atum:tefnuts_rain',
        'atum:shus_breath',
        'atum:seths_venom',
        'atum:ras_fury',
        'atum:montus_blast',
        'atum:isis_division',
        'atum:horus_soaring',
        'atum:anputs_grounding'
    ];

    var tags = ['forge:weapons', 'forge:weapons/ranged'];

    tags.forEach((tag) => {
        event.get(tag).add(items).add(/_bow$/);
    });
});
