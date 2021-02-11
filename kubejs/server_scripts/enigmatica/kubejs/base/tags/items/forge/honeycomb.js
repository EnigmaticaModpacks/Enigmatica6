events.listen('item.tags', (event) => {
    const beeTiers = {
        tier1: [
            { material: 'coal' },
            { material: 'creeper' },
            { material: 'zombie' },
            { material: 'skeleton' },
            { material: 'clay' },
            { material: 'rgbee' },
            { material: 'nether_quartz' },
            { material: 'blaze' },
            { material: 'ender' }
        ],
        tier2: [
            { material: 'iron' },
            { material: 'gold' },
            { material: 'slimy' },
            { material: 'pigman' },
            { material: 'obsidian' },
            { material: 'redstone' },
            { material: 'lapis' },
            { material: 'ghast' }
        ],
        tier3: [
            { material: 'copper' },
            { material: 'copper' },
            { material: 'tin' },
            { material: 'silver' },
            { material: 'lead' },
            { material: 'nickel' },
            { material: 'steel' },
            { material: 'osmium' },
            { material: 'emerald' },
            { material: 'diamond' },
            { material: 'netherite' },
            { material: 'wither' }
        ]
        // special: [
        //     { material: 'manasteel' },
        //     { material: 'elementium' },
        //     { material: 'terrasteel' },

        //     { material: 'infused_iron' },
        //     { material: 'tainted_gold' },
        //     { material: 'sky' }
        // ]
    };
    ['honeycomb', 'honeycomb_block'].forEach((honeyComb) => {
        event
            .get('forge:' + honeyComb)
            .add(beeTiers.tier1.map((bee) => 'resourcefulbees:' + bee.material + '_' + honeyComb));
        event
            .get('forge:' + honeyComb)
            .add(beeTiers.tier2.map((bee) => 'resourcefulbees:' + bee.material + '_' + honeyComb));
        event
            .get('forge:' + honeyComb)
            .add(beeTiers.tier3.map((bee) => 'resourcefulbees:' + bee.material + '_' + honeyComb));
        // event
        //     .get('forge:' + honeyComb)
        //     .add(beeTiers.special.map((bee) => 'resourcefulbees:' + bee.material + '_' + honeyComb));
        event
            .get('forge:' + honeyComb + '/tier1')
            .add(beeTiers.tier1.map((bee) => 'resourcefulbees:' + bee.material + '_' + honeyComb));
        event
            .get('forge:' + honeyComb + '/tier2')
            .add(beeTiers.tier2.map((bee) => 'resourcefulbees:' + bee.material + '_' + honeyComb));
        event
            .get('forge:' + honeyComb + '/tier3')
            .add(beeTiers.tier3.map((bee) => 'resourcefulbees:' + bee.material + '_' + honeyComb));
        // event
        //     .get('forge:' + honeyComb + '/special')
        //     .add(beeTiers.special.map((bee) => 'resourcefulbees:' + bee.material + '_' + honeyComb));
    });
});
