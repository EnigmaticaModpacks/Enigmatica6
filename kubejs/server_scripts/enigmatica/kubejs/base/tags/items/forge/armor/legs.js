onEvent('item.tags', (event) => {
    var items = [
        'immersiveengineering:armor_faraday_legs',
        'immersiveengineering:armor_steel_legs',
        'mekanism:hazmat_pants',
        'mekanism:mekasuit_pants',
        'naturesaura:infused_iron_pants',
        'naturesaura:sky_pants',
        'bloodmagic:livingleggings'
    ];

    var exceptions = ['kubejs:pneumatic_leggings_package', 'kubejs:pneumatic_leggings_assembly'];

    var tags = ['forge:armor', 'forge:armor/leggings'];

    tags.forEach((tag) => {
        event
            .get(tag)
            .add(items)
            .add(/_leggings/)
            .add(/atum:.*legs/)
            .add(/atum:legs/)
            .remove(exceptions);
    });
});
