events.listen('item.tags', (event) => {
    var gems = 'forge:gems';
    var gems_ender = gems + '/ender';

    event
        .get(gems)
        .add('rftoolsbase:dimensionalshard')
        .add('minecraft:ender_pearl')
        .add('ars_nouveau:mana_gem')
        .add('mapperbase:raw_bitumen')
        .add('immersivepetroleum:bitumen')
        .add('thermal:bitumen')
        .add('betterendforge:crystalline_sulphur');
    event.add(gems + '/coal_coke', [
        'emendatusenigmatica:coke_gem',
        'immersiveengineering:coal_coke',
        'thermal:coal_coke'
    ]);
    event.get(gems_ender).add('minecraft:ender_pearl');
    event.get('forge:gems/dimensional').add('rftoolsbase:dimensionalshard');
    event.get('forge:gems/mana').add('ars_nouveau:mana_gem');
    event.get('forge:gems/charcoal').add('minecraft:charcoal');
    event
        .get('forge:gems/bitumen')
        .add('mapperbase:raw_bitumen')
        .add('immersivepetroleum:bitumen')
        .add('thermal:bitumen');

    event.get('forge:gems/mana_gem').remove('ars_nouveau:mana_gem');

    event.get('forge:gems/sulfur').add('betterendforge:crystalline_sulphur');
});
