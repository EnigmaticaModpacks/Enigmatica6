events.listen('item.tags', (event) => {
    var items = [
        'immersiveengineering:armor_faraday_feet',
        'immersiveengineering:armor_steel_feet',
        'mekanism:free_runners',
        'naturesaura:infused_iron_shoes',
        'naturesaura:sky_shoes'
    ];
    var exceptions = [
        'pneumaticcraft:jet_boots_upgrade_1',
        'pneumaticcraft:jet_boots_upgrade_2',
        'pneumaticcraft:jet_boots_upgrade_3',
        'pneumaticcraft:jet_boots_upgrade_4',
        'pneumaticcraft:jet_boots_upgrade_5'
    ];

    var tags = ['forge:armor', 'forge:armor/boots'];

    tags.forEach((tag) => {
        event
            .get(tag)
            .add(items)
            .add(/_boots/)
            .remove(exceptions);
    });
});
