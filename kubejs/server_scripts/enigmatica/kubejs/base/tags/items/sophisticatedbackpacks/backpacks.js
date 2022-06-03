onEvent('item.tags', (event) => {
    event.add('sophisticatedbackpacks:base_backpack', 'sophisticatedbackpacks:backpack');
    event.add('sophisticatedbackpacks:iron_backpack', 'sophisticatedbackpacks:iron_backpack');
    event.add('sophisticatedbackpacks:gold_backpack', 'sophisticatedbackpacks:gold_backpack');
    event.add('sophisticatedbackpacks:diamond_backpack', 'sophisticatedbackpacks:diamond_backpack');

    let sophisticated_upgrades = [
        'sophisticatedbackpacks:tank_upgrade',
        'sophisticatedbackpacks:battery_upgrade',
        'sophisticatedbackpacks:jukebox_upgrade',
        'sophisticatedbackpacks:stonecutter_upgrade',
        'sophisticatedbackpacks:crafting_upgrade',
        'sophisticatedbackpacks:everlasting_upgrade',
        'sophisticatedbackpacks:inception_upgrade',
        'sophisticatedbackpacks:refill_upgrade',

        'sophisticatedbackpacks:xp_pump_upgrade',
        'sophisticatedbackpacks:advanced_pump_upgrade',
        'sophisticatedbackpacks:pump_upgrade',

        'sophisticatedbackpacks:advanced_tool_swapper_upgrade',
        'sophisticatedbackpacks:tool_swapper_upgrade',

        'sophisticatedbackpacks:auto_smelting_upgrade',
        'sophisticatedbackpacks:smelting_upgrade',

        'sophisticatedbackpacks:advanced_deposit_upgrade',
        'sophisticatedbackpacks:deposit_upgrade',

        'sophisticatedbackpacks:advanced_restock_upgrade',
        'sophisticatedbackpacks:restock_upgrade',

        'sophisticatedbackpacks:advanced_void_upgrade',
        'sophisticatedbackpacks:void_upgrade',

        'sophisticatedbackpacks:advanced_compacting_upgrade',
        'sophisticatedbackpacks:compacting_upgrade',

        'sophisticatedbackpacks:advanced_feeding_upgrade',
        'sophisticatedbackpacks:feeding_upgrade',

        'sophisticatedbackpacks:advanced_magnet_upgrade',
        'sophisticatedbackpacks:magnet_upgrade',

        'sophisticatedbackpacks:advanced_filter_upgrade',
        'sophisticatedbackpacks:filter_upgrade',

        'sophisticatedbackpacks:advanced_pickup_upgrade',
        'sophisticatedbackpacks:pickup_upgrade',

        'sophisticatedbackpacks:stack_upgrade_tier_4',
        'sophisticatedbackpacks:stack_upgrade_tier_3',
        'sophisticatedbackpacks:stack_upgrade_tier_2',
        'sophisticatedbackpacks:stack_upgrade_tier_1'
    ];

    event.get('sophisticatedbackpacks:upgrades').add(sophisticated_upgrades);

    sophisticated_upgrades.forEach((upgrade) => {
        let upgrade_tag = upgrade.split(':')[1].replace('_upgrade', '');
        event.get(`sophisticatedbackpacks:upgrades/${upgrade_tag}`).add(upgrade);
    });

    event.get('sophisticatedbackpacks:upgrades').add('sophisticatedbackpacks:upgrade_base');
    event.get('sophisticatedbackpacks:upgrades/base').add('sophisticatedbackpacks:upgrade_base');
});
