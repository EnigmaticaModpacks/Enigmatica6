onEvent('item.tags', (event) => {
    var gems = 'forge:gems';
    var gems_ender = gems + '/ender';
    var gems_coal = gems + '/coal';

    event.add(gems, [
        'rftoolsbase:dimensionalshard',
        'minecraft:ender_pearl',
        'minecraft:coal',
        'ars_nouveau:mana_gem',
        'immersivepetroleum:bitumen',
        'thermal:bitumen',
        'betterendforge:crystalline_sulphur',
        'betterendforge:amber_gem',
        'powah:crystal_blazing',
        'powah:crystal_niotic',
        'powah:crystal_spirited',
        'powah:crystal_nitro',
        'astralsorcery:aquamarine'
    ]);

    event.add(gems + '/coal_coke', [
        'emendatusenigmatica:coke_gem',
        'immersiveengineering:coal_coke',
        'thermal:coal_coke'
    ]);
    event.get(gems_ender).add('minecraft:ender_pearl');
    event.get(gems_coal).add('minecraft:coal');
    event.get('forge:gems/dimensional').add('rftoolsbase:dimensionalshard');
    event.get('forge:gems/mana').add('ars_nouveau:mana_gem');
    event.get('forge:gems/charcoal').add('minecraft:charcoal');
    event.add('forge:gems/bitumen', ['immersivepetroleum:bitumen', 'thermal:bitumen']);
    event.get('forge:gems/mana_gem').remove('ars_nouveau:mana_gem');
    event.get('forge:gems/sulfur').add('betterendforge:crystalline_sulphur');
    event.get('forge:gems/amber').add('betterendforge:amber_gem');

    event.add('forge:gems/blazing', ['powah:crystal_blazing']);
    event.add('forge:gems/niotic', ['powah:crystal_niotic']);
    event.add('forge:gems/spirited', ['powah:crystal_spirited']);
    event.add('forge:gems/nitro', ['powah:crystal_nitro']);
});
