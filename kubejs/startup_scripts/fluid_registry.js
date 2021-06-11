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
        }
    ];

    generalFluids.forEach((fluid) => {
        if (fluid.type == 'thick') {
            event.create(fluid.id).textureThick(fluid.texture).bucketColor(fluid.texture); //.displayName(fluid.display);
        }
        else if (fluid.type == 'thin') {
            event.create(fluid.id).textureThin(fluid.texture).bucketColor(fluid.texture); //.displayName(fluid.display);
        }/*
        else if (fluid.type == 'custom') {
            event.create(fluid.id).displayName(fluid.display).textureStill(fluid.still).textureFlowing(fluid.flowing).bucketColor(fluid.color)
        }*/
    });
});
