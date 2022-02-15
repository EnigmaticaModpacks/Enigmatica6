onEvent('fluid.registry', (event) => {
    const generalFluids = [
        {
            type: 'thick',
            id: 'molten_cobalt_bee',
            texture: '0x209EBD',
            display: 'Molten Cobalt Bee'
        },
        {
            type: 'thick',
            id: 'molten_aluminum_bee',
            texture: '0xdce6f7',
            display: 'Molten Aluminum Bee'
        },
        {
            type: 'thin',
            id: 'liquid_slimy_bee',
            texture: '0x73c262',
            display: 'Liquid Slimy Bee'
        },
        {
            type: 'thin',
            id: 'liquid_skyslime_bee',
            texture: '0x72CFCB',
            display: 'Liquid Skyslime Bee'
        },
        {
            type: 'thin',
            id: 'liquid_ichor_bee',
            texture: '0xFDAB69',
            display: 'Liquid Ichor Bee'
        },
        {
            type: 'thin',
            id: 'liquid_enderslime_bee',
            texture: '0xC75EFF',
            display: 'Liquid Enderslime Bee'
        },
        {
            type: 'thick',
            id: 'molten_compressed_iron',
            texture: '0x868686',
            display: 'Molten Compressed Iron'
        },
        {
            type: 'thick',
            id: 'molten_infused_iron',
            texture: '0x2eb337',
            display: 'Molten Infused Iron'
        },
        {
            type: 'thick',
            id: 'molten_blazing',
            texture: '0xd79811',
            display: 'Molten Blazing Crystal'
        },
        {
            type: 'thick',
            id: 'molten_energized_steel',
            texture: '0xb89365',
            display: 'Molten Energized Steel'
        },
        {
            type: 'thick',
            id: 'molten_sky',
            texture: '0x88d7fc',
            display: 'Molten Sky Metal'
        },
        {
            type: 'thick',
            id: 'molten_terminite',
            texture: '0x74f3e3',
            display: 'Molten Terminite'
        },
        {
            type: 'thick',
            id: 'molten_aeternium',
            texture: '0x2e847c',
            display: 'Molten Aeternium'
        },
        {
            type: 'thick',
            id: 'molten_gaia_spirit',
            texture: '0x94a0bf',
            display: 'Molten Gaia Spirit'
        },
        {
            type: 'thick',
            id: 'molten_niotic',
            texture: '0x54e5ea',
            display: 'Molten Niotic Crystal'
        },
        {
            type: 'thick',
            id: 'molten_nitro',
            texture: '0xa42022',
            display: 'Molten Nitro Crystal'
        },
        {
            type: 'thick',
            id: 'molten_spirited',
            texture: '0x86c52d',
            display: 'Molten Spirited Crystal'
        },
        {
            type: 'thick',
            id: 'pink_ender_slime',
            texture: '0xa504d1',
            display: 'Molten Pink Enderslime'
        },
        {
            type: 'thick',
            id: 'molten_hardened_glass',
            texture: '0x535054',
            display: 'Molten Hardened Glass'
        },
        {
            type: 'thick',
            id: 'molten_signalum_glass',
            texture: '0x968274',
            display: 'Molten Signalum Glass'
        },
        {
            type: 'thick',
            id: 'molten_lumium_glass',
            texture: '0x959674',
            display: 'Molten Lumium Glass'
        },
        {
            type: 'thick',
            id: 'molten_enderium_glass',
            texture: '0x356e5b',
            display: 'Molten Enderium Glass'
        }
    ];

    generalFluids.forEach((fluid) => {
        if (fluid.type == 'thick') {
            event.create(fluid.id).textureThick(fluid.texture).bucketColor(fluid.texture).displayName(fluid.display);
        } else if (fluid.type == 'thin') {
            event.create(fluid.id).textureThin(fluid.texture).bucketColor(fluid.texture).displayName(fluid.display);
        } /*
        else if (fluid.type == 'custom') {
            event.create(fluid.id).displayName(fluid.display).textureStill(fluid.still).textureFlowing(fluid.flowing).bucketColor(fluid.color)
        }*/
    });
});
