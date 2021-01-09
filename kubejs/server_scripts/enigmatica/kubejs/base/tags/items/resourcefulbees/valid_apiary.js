events.listen('item.tags', function (event) {
    var blocks = [
        'minecraft:soul_sand',
        'botania:bifrost_pane',
        'botania:bifrost_perm',
        'botania:elf_glass_pane',
        'botania:mana_glass_pane',
        'botania:elf_glass',
        'botania:mana_glass'
    ];

    event.get('resourcefulbees:valid_apiary').add(blocks);
});
