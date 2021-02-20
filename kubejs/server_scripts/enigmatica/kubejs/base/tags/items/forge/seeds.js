events.listen('item.tags', (event) => {
    event.add('forge:seeds', [
        'immersiveengineering:seed',
        'betterendforge:bulb_vine_seed',
        'betterendforge:blossom_berry_seed',
        'betterendforge:shadow_berry',
        'betterendforge:glowing_pillar_seed',
        'betterendforge:lanceleaf_seed',
        'betterendforge:end_lotus_seed',
        'betterendforge:end_lily_seed',
        'betterendforge:blue_vine_seed',
        'betterendforge:lumecorn_seed'
    ]);
    event.add('forge:seeds/hemp', ['immersiveengineering:seed']);

    event.add('forge:seeds/bulb_vine', ['betterendforge:bulb_vine_seed']);
    event.add('forge:seeds/blossom_berry', ['betterendforge:blossom_berry_seed']);
    event.add('forge:seeds/shadow_berry', ['betterendforge:shadow_berry']);
    event.add('forge:seeds/glowing_pillar', ['betterendforge:glowing_pillar_seed']);
    event.add('forge:seeds/lanceleaf', ['betterendforge:lanceleaf_seed']);
    event.add('forge:seeds/end_lotus', ['betterendforge:end_lotus_seed']);
    event.add('forge:seeds/end_lily', ['betterendforge:end_lily_seed']);
    event.add('forge:seeds/blue_vine', ['betterendforge:blue_vine_seed']);
    event.add('forge:seeds/lumecorn', ['betterendforge:lumecorn_seed']);
});
