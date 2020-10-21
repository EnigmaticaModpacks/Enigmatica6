events.listen('item.tags', function (event) {
    var gems = 'forge:gems';
    var gems_ender = gems + '/ender';
    event.get('forge:gems').add('rftoolsbase:dimensionalshard');
    event.get('forge:gems/dimensional').add('rftoolsbase:dimensionalshard');

    event.get(gems_ender).add('minecraft:ender_pearl');
    event.get(gems).add('minecraft:ender_pearl');
});
