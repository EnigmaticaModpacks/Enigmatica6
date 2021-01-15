events.listen('block.tags', function (event) {
    var blocks = [
        'botania:bifrost_pane',
        'botania:bifrost_perm',
        'botania:elf_glass_pane',
        'botania:mana_glass_pane',
        'botania:elf_glass',
        'botania:mana_glass',

        'glassential:glass_dark',
        'glassential:glass_dark_ethereal',
        'glassential:glass_ethereal',
        'glassential:glass_light',
        'glassential:glass_redstone',

        'minecraft:soul_sand'
    ];

    event.get('resourcefulbees:valid_apiary').add(blocks);
});
