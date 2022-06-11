//priority: 1000

const draining_whitelist = [
    {
        id: 'create:chocolate',
        create_a_hose_pulley_advancement: false, // built-in
    },
    {
        id: 'create:tea',
        bucket: 'create:builders_tea',
        create_a_hose_pulley_advancement: false, // built-in
    },
    {
        id: 'immersivepetroleum:oil',
        name: 'ip_oil'
    },
    {
        id: 'industrialforegoing:latex',
    },
    {
        id: 'industrialforegoing:sewage',
    },
    {
        id: 'industrialforegoing:sludge',
    },
    {
        id: 'integrateddynamics:liquid_chorus',
    },
    {
        id: 'integrateddynamics:menril_resin',
    },
    {
        id: 'minecraft:lava',
        create_a_hose_pulley_advancement: false, // built-in
    },
    {
        id: 'minecraft:milk',
    },
    {
        id: 'minecraft:water',
        create_a_hose_pulley_advancement: false, // built-in
    },
    {
        id: 'pneumaticcraft:oil',
        name: 'pnc_oil'
    },
    {
        id: 'tconstruct:blood',
    },
    {
        id: 'tconstruct:earth_slime',
    },
    {
        id: 'tconstruct:ender_slime',
    },
    {
        id: 'tconstruct:sky_slime',
    },
    {
        id: 'thermal:crude_oil',
        create_a_hose_pulley_advancement: false, // is this obtainable?
    },
    {
        id: 'thermal:latex',
    },
    {
        id: 'thermal:resin',
    },
    {
        id: 'thermal:sap',
    },
    {
        id: 'undergarden:virulent_mix_source',
        bucket: 'undergarden:virulent_mix_bucket',
    },
]

draining_whitelist.forEach(fluid => {
    if (fluid.bucket == undefined) {
        fluid.bucket = `${fluid.id}_bucket`;
    }

    if (fluid.name == undefined) {
        fluid.name = fluid.id.split(':')[1];
    }

    if (fluid.create_a_hose_pulley_advancement == undefined) {
        fluid.create_a_hose_pulley_advancement = true
    }
});
