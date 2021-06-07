onEvent('server.datapack.low_priority', (event) => {
    const json = {
        slots: ['double/head_left', 'double/head_right'],
        keySuffixes: ['_left', '_right'],
        materialSlotCount: 1,
        glyph: {
            textureX: 64
        },
        displayType: 'major',
        outcomes: [
            {
                material: {
                    tag: 'forge:ingots/starmetal'
                },
                requiredTools: {
                    hammer: 7
                },
                moduleKey: 'double/basic_hammer',
                moduleVariant: 'basic_hammer/starmetal'
            },
            {
                material: {
                    tag: 'forge:ingots/sky'
                },
                requiredTools: {
                    hammer: 7
                },
                moduleKey: 'double/basic_hammer',
                moduleVariant: 'basic_hammer/sky'
            },
            {
                material: {
                    tag: 'forge:ingots/alfsteel'
                },
                requiredTools: {
                    hammer: 7
                },
                moduleKey: 'double/basic_hammer',
                moduleVariant: 'basic_hammer/alfsteel'
            }
        ]
    };

    event.addJson(`tetra:schematics/double/basic_hammer/basic_hammer.json`, json);
});
