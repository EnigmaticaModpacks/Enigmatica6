onEvent('item.tags', (event) => {
    event.add('forge:ores', [
        'powah:uraninite_ore_poor',
        'powah:uraninite_ore',
        'powah:uraninite_ore_dense',
        'betterendforge:ender_ore',
        'betterendforge:amber_ore',
        'minecraft:ancient_debris',
        'occultism:iesnium_ore',
        'byg:cryptic_redstone_ore',
        'betterendforge:thallasium_ore',
        'atum:bone_ore',
        'atum:relic_ore'
    ]);

    event.add('forge:ores/dimensional', [
        'rftoolsbase:dimensionalshard_overworld',
        'rftoolsbase:dimensionalshard_nether',
        'rftoolsbase:dimensionalshard_end'
    ]);
    event.add('forge:ores/quartz', ['byg:blue_nether_quartz_ore', 'byg:brimstone_nether_quartz_ore']);

    event.add('forge:ores/gold', ['byg:blue_nether_gold_ore', 'byg:brimstone_nether_gold_ore']);
    event.add('forge:ores/nether/gold', [
        'minecraft:nether_gold_ore',
        'byg:blue_nether_gold_ore',
        'byg:brimstone_nether_gold_ore'
    ]);
    event.get('forge:ores/netherite').add('minecraft:ancient_debris');

    event.add('forge:ores/ender', 'betterendforge:ender_ore');
    event.add('forge:ores/amber', 'betterendforge:amber_ore');
    event.add('forge:ores/redstone', 'byg:cryptic_redstone_ore');
    event.get('forge:ores/thallasium').add(['betterendforge:thallasium_ore']);
    event.get('forge:ores/elementium').add(['mythicbotany:elementium_ore']);
    event.get('forge:ores/starmetal').add(['astralsorcery:starmetal_ore']);
    event.get('forge:ores/iesnium').add(['occultism:iesnium_ore']);
    event.get('forge:ores/aquamarine').add('astralsorcery:aquamarine_sand_ore');
});
