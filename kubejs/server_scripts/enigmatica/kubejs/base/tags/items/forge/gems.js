events.listen('item.tags', (event) => {
    var gems = 'forge:gems';
    var gems_ender = gems + '/ender';

    event.add(gems, [
        'rftoolsbase:dimensionalshard',
        'minecraft:ender_pearl',
        'ars_nouveau:mana_gem',
        'mapperbase:raw_bitumen',
        'immersivepetroleum:bitumen',
        'thermal:bitumen',
        'betterendforge:crystalline_sulphur',
        'betterendforge:amber_gem'
    ]);

    event.add(gems + '/coal_coke', [
        'emendatusenigmatica:coke_gem',
        'immersiveengineering:coal_coke',
        'thermal:coal_coke'
    ]);
    event.get(gems_ender).add('minecraft:ender_pearl');
    event.get('forge:gems/dimensional').add('rftoolsbase:dimensionalshard');
    event.get('forge:gems/mana').add('ars_nouveau:mana_gem');
    event.get('forge:gems/charcoal').add('minecraft:charcoal');
    event.add('forge:gems/bitumen', ['mapperbase:raw_bitumen', 'immersivepetroleum:bitumen', 'thermal:bitumen']);
    event.get('forge:gems/mana_gem').remove('ars_nouveau:mana_gem');
    event.get('forge:gems/sulfur').add('betterendforge:crystalline_sulphur');
    event.get('forge:gems/amber').add('betterendforge:amber_gem');
});
