onEvent('item.tags', (event) => {
    const items = [
        /pneumaticcraft:(reinforced_)?air_canister/, // 10 & 20 bar canisters
        /pneumaticcraft:(\w+_)?drone$/, // all 5 craftable drones

        /pneumaticcraft:pneumatic_(wrench|helmet|chestplate|leggings|boots)/,

        'pneumaticcraft:vortex_cannon',
        'pneumaticcraft:manometer',
        'pneumaticcraft:logistics_configurator',
        'pneumaticcraft:amadron_tablet',
        'pneumaticcraft:minigun',
        'pneumaticcraft:camo_applicator',
        'pneumaticcraft:jackhammer'
    ];

    const tags = ['forge:storage', 'forge:storage/air'];

    tags.forEach((tag) => {
        event.get(tag).add(items);
    });
});
