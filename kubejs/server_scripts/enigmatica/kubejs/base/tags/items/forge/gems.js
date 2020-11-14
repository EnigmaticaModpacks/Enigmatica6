events.listen('item.tags', function (event) {
    var gems = 'forge:gems';
    var gems_ender = gems + '/ender';

    event.get(gems).add('rftoolsbase:dimensionalshard').add('minecraft:ender_pearl').add('ars_nouveau:mana_gem');
    event.get(gems_ender).add('minecraft:ender_pearl');
    event.get('forge:gems/dimensional').add('rftoolsbase:dimensionalshard');
    event.get('forge:gems/mana').add('ars_nouveau:mana_gem');
});
