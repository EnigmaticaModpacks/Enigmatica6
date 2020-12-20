events.listen('block.tags', function (event) {
    event
        .get('forge:stones/basalt')
        .add([
            'quark:basalt',
            'quark:chiseled_basalt_bricks',
            'quark:basalt_pavement',
            'quark:basalt_pillar',
            'quark:polished_basalt',
            'quark:basalt_bricks'
        ]);
    event.get('forge:stones/slate').add(['quark:slate', 'quark:polished_slate']);
    event.get('forge:stones/marble').add(['quark:marble', 'quark:polished_marble']);
    event.get('forge:stones/limestone').add(['quark:limestone', 'quark:polished_limestone']);
    event.get('forge:stones/jasper').add(['quark:jasper', 'quark:polished_jasper']);
    event.get('forge:stones/granite').add(['minecraft:granite', 'minecraft:polished_granite']);
    event.get('forge:stones/diorite').add(['minecraft:diorite', 'minecraft:polished_diorite']);
    event.get('forge:stones/andesite').add(['minecraft:andesite', 'minecraft:polished_andesite']);

    createStoneTypes.forEach(function (stone) {
        event.get('forge:stones/' + stone).add('create:' + stone);
    });
});
