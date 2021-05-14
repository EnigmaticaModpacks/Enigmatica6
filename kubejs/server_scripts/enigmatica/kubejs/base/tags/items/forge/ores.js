events.listen('item.tags', (event) => {
    event.add('forge:ores', [
        'powah:uraninite_ore_poor',
        'powah:uraninite_ore',
        'powah:uraninite_ore_dense',
        'betterendforge:ender_ore',
        'betterendforge:amber_ore',
        'minecraft:ancient_debris',
        'occultism:iesnium_ore',
        'byg:cryptic_redstone_ore',
        'betterendforge:thallasium_ore'
    ]);

    event.add('forge:ores/dimensional', [
        'rftoolsbase:dimensionalshard_overworld',
        'rftoolsbase:dimensionalshard_nether',
        'rftoolsbase:dimensionalshard_end'
    ]);

    event.get('forge:ores/nether/gold').add('minecraft:nether_gold_ore');
    event.get('forge:ores/netherite_scrap').remove('minecraft:ancient_debris');
    event.get('forge:ores/netherite').add('minecraft:ancient_debris');

    event.add('forge:ores/ender', 'betterendforge:ender_ore');
    event.add('forge:ores/amber', 'betterendforge:amber_ore');
    event.add('forge:ores/redstone', 'byg:cryptic_redstone_ore');
    event.get('forge:ores/thallasium').add(['betterendforge:thallasium_ore' , 'kubejs:thallasium_chunk']);
    event.get('forge:ores/starmetal').add(['astralsorcery:starmetal_ore', 'kubejs:starmetal_chunk']);
    event.get('forge:ores/iesnium').add(['occultism:iesnium_ore', 'kubejs:iesnium_chunk']);
    event.get('forge:ores/cloggrum').add(['undergarden:cloggrum_ore', 'kubejs:cloggrum_chunk']);
    event.get('forge:ores/utherium').add(['undergarden:utherium_ore', 'kubejs:utherium_chunk']);
    event.get('forge:ores/regalium').add(['undergarden:regalium_ore', 'kubejs:regalium_chunk']);
    event.get('forge:ores/froststeel').add(['undergarden:froststeel_ore', 'kubejs:froststeel_chunk']);
    event.get('forge:ores/aquamarine').add('astralsorcery:aquamarine_sand_ore');
});
