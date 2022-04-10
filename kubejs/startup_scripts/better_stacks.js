onEvent('item.modification', (event) => {
    const increaseStackSize = [
        'industrialforegoing:efficiency_addon_1',
        'industrialforegoing:efficiency_addon_2',
        'industrialforegoing:speed_addon_1',
        'industrialforegoing:speed_addon_2',
        'industrialforegoing:processing_addon_1',
        'industrialforegoing:processing_addon_2',
        'industrialforegoing:range_addon0',
        'industrialforegoing:range_addon1',
        'industrialforegoing:range_addon2',
        'industrialforegoing:range_addon3',
        'industrialforegoing:range_addon4',
        'industrialforegoing:range_addon5',
        'industrialforegoing:range_addon6',
        'industrialforegoing:range_addon7',
        'industrialforegoing:range_addon8',
        'industrialforegoing:range_addon9',
        'industrialforegoing:range_addon10',
        'industrialforegoing:range_addon11',

        'minecraft:ender_pearl',
        'minecraft:bucket',
        'minecraft:snowball',

        'powah:charged_snowball',

        'rftoolsbase:infused_enderpearl',
        'rftoolsbase:infused_diamond',

        'undergarden:goo_ball'
    ];

    event.modify(increaseStackSize, (item) => {
        item.maxStackSize = 64;
    });
});
