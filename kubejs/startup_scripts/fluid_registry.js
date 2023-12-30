onEvent('fluid.registry', (event) => {
    /**
     * @type {{type:string,id:string,color:number,display?:string,still?:string,flowing?:string}[]}
     * @param type Can be `thin`, `thick`, or `custom`
     * @param display Deprecated, DO NOT USE. Please switch to lang file. 
     * Tips: For a targeted fluid, its language key is `"fluid.kubejs.{id}"`, 
     * and the language key for its bucket item is `"item.kubejs.{id}_bucket"`
     * @param still Valid only when `type` is `custom`
     * @param flowing Valid only when `type` is `custom`
     */
    const generalFluids = [
        {
            type: 'thick',
            id: 'molten_cobalt_bee',
            color: 0x209ebd
        },
        {
            type: 'thick',
            id: 'molten_aluminum_bee',
            color: 0xdce6f7
        },
        {
            type: 'thin',
            id: 'liquid_slimy_bee',
            color: 0x73c262
        },
        {
            type: 'thin',
            id: 'liquid_skyslime_bee',
            color: 0x72cfcb
        },
        {
            type: 'thin',
            id: 'liquid_ichor_bee',
            color: 0xfdab69
        },
        {
            type: 'thin',
            id: 'liquid_enderslime_bee',
            color: 0xc75eff
        },
        {
            type: 'thick',
            id: 'molten_compressed_iron',
            color: 0x868686
        },
        {
            type: 'thick',
            id: 'molten_infused_iron',
            color: 0x2eb337
        },
        {
            type: 'thick',
            id: 'molten_blazing',
            color: 0xd79811
        },
        {
            type: 'thick',
            id: 'molten_energized_steel',
            color: 0xb89365
        },
        {
            type: 'thick',
            id: 'molten_sky',
            color: 0x88d7fc
        },
        {
            type: 'thick',
            id: 'molten_terminite',
            color: 0x74f3e3
        },
        {
            type: 'thick',
            id: 'molten_aeternium',
            color: 0x2e847c
        },
        {
            type: 'thick',
            id: 'molten_gaia_spirit',
            color: 0x94a0bf
        },
        {
            type: 'thick',
            id: 'molten_niotic',
            color: 0x54e5ea
        },
        {
            type: 'thick',
            id: 'molten_nitro',
            color: 0xa42022
        },
        {
            type: 'thick',
            id: 'molten_spirited',
            color: 0x86c52d
        },
        {
            type: 'thick',
            id: 'pink_ender_slime',
            color: 0xa504d1
        },
        {
            type: 'thick',
            id: 'molten_hardened_glass',
            color: 0x535054
        },
        {
            type: 'thick',
            id: 'molten_signalum_glass',
            color: 0x968274
        },
        {
            type: 'thick',
            id: 'molten_lumium_glass',
            color: 0x959674
        },
        {
            type: 'thick',
            id: 'molten_enderium_glass',
            color: 0x356e5b
        }
    ];

    generalFluids.forEach((fluid) => {
        let /** @type {Internal.FluidBuilder} */ builder;
        if (fluid.type == 'thick') {
            builder = event.create(fluid.id).textureThick(fluid.color).bucketColor(fluid.color);
        } else if (fluid.type == 'thin') {
            builder = event.create(fluid.id).textureThin(fluid.color).bucketColor(fluid.color);
        } else if (fluid.type == 'custom') {
            builder = event
                .create(fluid.id)
                .textureStill(fluid.still)
                .textureFlowing(fluid.flowing)
                .bucketColor(fluid.color);
        } else {
            console.error('Invalid fluid registry type: ' + fluid.type);
        }
        if (fluid.display) {
            console.warn(
                'Deprecated param used: `display`, please switch to language file(kubejs/lang/en_us.json).'
            );
            builder.displayName(fluid.display);
        }
    });
});
