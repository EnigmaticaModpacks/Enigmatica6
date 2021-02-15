events.listen('item.tags', (event) => {
    var items = [
        'ars_nouveau:apprentice_hood',
        'ars_nouveau:archmage_hood',
        'ars_nouveau:novice_hood',
        'immersiveengineering:armor_faraday_head',
        'immersiveengineering:armor_steel_head',
        'mekanism:hazmat_mask',
        'mekanism:scuba_mask',
        'bloodmagic:livinghelmet',
        'alexsmobs:sombrero',
        'alexsmobs:frontier_cap',
        'alexsmobs:moose_headgear',
        'eidolon:warlock_hat',
        'eidolon:top_hat'
    ];
    var tags = ['forge:armor', 'forge:armor/helm'];

    tags.forEach((tag) => {
        event
            .get(tag)
            .add(items)
            .add(/_helmet/);
    });
});
