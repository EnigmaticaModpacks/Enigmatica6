events.listen('item.tags', (event) => {
    event
        .get('forge:stone')
        .add([
            'astralsorcery:marble_arch',
            'astralsorcery:marble_bricks',
            'astralsorcery:marble_chiseled',
            'astralsorcery:marble_engraved',
            'astralsorcery:marble_raw',
            'astralsorcery:marble_runed',
            'create:natural_scoria'
        ]);
    event
        .get('forge:stones/basalt')
        .add([
            'quark:basalt',
            'quark:chiseled_basalt_bricks',
            'quark:basalt_pavement',
            'quark:basalt_pillar',
            'quark:polished_basalt',
            'quark:basalt_bricks',
            'minecraft:basalt',
            'embellishcraft:basalt'
        ]);
    event.get('forge:stones/slate').add(['quark:slate', 'quark:polished_slate', 'embellishcraft:slate']);
    event
        .get('forge:stones/marble')
        .add([
            'quark:marble',
            'quark:polished_marble',
            'embellishcraft:marble',
            'astralsorcery:marble_arch',
            'astralsorcery:marble_bricks',
            'astralsorcery:marble_chiseled',
            'astralsorcery:marble_engraved',
            'astralsorcery:marble_raw',
            'astralsorcery:marble_runed'
        ]);
    event.get('forge:stones/limestone').add(['quark:limestone', 'quark:polished_limestone']);
    event.get('forge:stones/jasper').add(['quark:jasper', 'quark:polished_jasper']);
    event.get('forge:stones/granite').add(['minecraft:granite', 'minecraft:polished_granite']);
    event.get('forge:stones/diorite').add(['minecraft:diorite', 'minecraft:polished_diorite']);
    event.get('forge:stones/andesite').add(['minecraft:andesite', 'minecraft:polished_andesite']);
    createStoneTypes.forEach(function (stone) {
        event.get('forge:stones/' + stone).add('create:' + stone);
    });
});
