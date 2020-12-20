events.listen('item.tags', function (event) {
    var items = [
        'vanillahammers:bone_hammer',
        'vanillahammers:coal_hammer',
        'vanillahammers:diamond_hammer',
        'vanillahammers:emerald_hammer',
        'vanillahammers:ender_hammer',
        'vanillahammers:fiery_hammer',
        'vanillahammers:glowstone_hammer',
        'vanillahammers:gold_hammer',
        'vanillahammers:iron_hammer',
        'vanillahammers:lapis_hammer',
        'vanillahammers:nether_hammer',
        'vanillahammers:netherite_hammer',
        'vanillahammers:obsidian_hammer',
        'vanillahammers:paper_hammer',
        'vanillahammers:prismarine_hammer',
        'vanillahammers:quartz_hammer',
        'vanillahammers:redstone_hammer',
        'vanillahammers:slime_hammer',
        'vanillahammers:stone_hammer',
        'vanillahammers:wood_hammer'
    ];
    event.get('forge:tools').add(items);
    event.get('forge:tools/hammer').add(items);
});
