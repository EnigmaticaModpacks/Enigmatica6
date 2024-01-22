onEvent('fluid.tags', (event) => {
    let draining_whitelist = [
        'create:chocolate',
        'immersivepetroleum:oil',
        'integrateddynamics:liquid_chorus',
        'integrateddynamics:menril_resin',
        'minecraft:lava',
        'minecraft:water',
        'pneumaticcraft:oil',
        'tconstruct:blood',
        'tconstruct:earth_slime',
        'tconstruct:ender_slime',
        'tconstruct:sky_slime',
        'undergarden:virulent_mix_source'
    ];

    event.get('create:no_infinite_draining').add(/.*/).remove(draining_whitelist);

    event.get('create:allow_infinite_draining').add(draining_whitelist);
});
