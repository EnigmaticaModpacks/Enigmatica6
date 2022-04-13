onEvent('item.modification', (event) => {
    const increaseStackSize = [
        'alexsmobs:emu_egg',

        'atum:quail_egg',

        'environmental:duck_egg',

        /industrialforegoing:efficiency_addon/,
        /industrialforegoing:speed_addon/,
        /industrialforegoing:processing_addon/,
        /industrialforegoing:range_addon/,

        'minecraft:ender_pearl',
        'minecraft:bucket',
        'minecraft:snowball',
        'minecraft:honey_bottle',
        'minecraft:egg',

        'powah:charged_snowball',

        'resourcefulbees:bee_jar',
        /resourcefulbees:\w+_honey_bottle/,

        'rftoolsbase:infused_enderpearl',
        'rftoolsbase:infused_diamond',

        'undergarden:goo_ball',

        //signs
        /(minecraft|undergarden|betterendforge|atmospheric|upgrade_aquatic|atum|tconstruct|environmental):\w+_sign/
    ];

    event.modify(increaseStackSize, (item) => {
        item.maxStackSize = 64;
    });
});
