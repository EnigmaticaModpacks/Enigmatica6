onEvent('generic.loot_tables', (event) => {
    const pools = [
        {
            rolls: { min: 2, max: 3 },
            entries: [
                {
                    item: 'farmersdelight:noodle_soup',
                    weight: 50,
                    count: [4, 16]
                },
                {
                    item: 'ars_nouveau:source_berry_pie',
                    weight: 50,
                    count: [4, 8]
                },
                {
                    item: 'alexsmobs:kangaroo_burger',
                    weight: 50,
                    count: [4, 8]
                },
                {
                    item: 'undergarden:dweller_steak',
                    weight: 50,
                    count: [2, 8]
                },
                {
                    item: 'simpledelights:orange_chicken',
                    weight: 50,
                    count: [2, 8]
                },
                {
                    item: 'immersivecooking:pyttipanna',
                    weight: 50,
                    count: [2, 8]
                },
                {
                    item: 'farmersdelight:apple_cider',
                    weight: 50,
                    count: [2, 8]
                },
                {
                    item: 'simplefarming:sake',
                    weight: 40,
                    count: [1, 2]
                },
                {
                    item: Item.of(
                        'sushigocrafting:tobiko_tuna_cucumber_california',
                        '{Weights:[I;0,0,0,0,0,0],Spices:{}}'
                    ),
                    weight: 20,
                    count: [4, 16]
                },
                {
                    item: 'minecraft:carrot',
                    weight: 30,
                    count: [4, 16]
                },
                {
                    item: 'farmersdelight:shepherds_pie',
                    weight: 50,
                    count: [2, 8]
                },
                {
                    item: 'farmersdelight:fried_rice',
                    weight: 20,
                    count: [2, 8]
                },
                {
                    item: 'farmersdelight:mixed_salad',
                    weight: 20,
                    count: [2, 8]
                },
                {
                    item: 'minecraft:potato',
                    weight: 20,
                    count: [4, 16]
                },
                {
                    item: 'farmersdelight:steak_and_potatoes',
                    weight: 15,
                    count: [4, 8]
                },
                {
                    item: 'simplefarming:vegetable_curry',
                    weight: 50,
                    count: [4, 16]
                },
                {
                    item: 'simpledelights:mango_wings',
                    weight: 50,
                    count: [4, 16]
                },
                {
                    item: 'simpledelights:plum_pudding',
                    weight: 50,
                    count: [4, 16]
                },
                {
                    item: 'create:builders_tea',
                    weight: 10,
                    count: [4, 16]
                },
                {
                    item: Item.of('sushigocrafting:onigiri', '{Weights:[I;0,0],Spices:{}}'),
                    weight: 50,
                    count: [4, 16]
                },
                {
                    item: 'farmersdelight:roasted_mutton_chops',
                    weight: 50,
                    count: [4, 16]
                },
                {
                    item: 'alexsmobs:shrimp_fried_rice',
                    weight: 50,
                    count: [4, 16]
                },
                {
                    item: 'create:honeyed_apple',
                    weight: 50,
                    count: [4, 16]
                },
                {
                    item: 'quark:golden_frog_leg',
                    weight: 50,
                    count: [4, 16]
                },
                {
                    item: 'create:sweet_roll',
                    weight: 50,
                    count: [4, 16]
                },
                {
                    item: 'simplefarming:pork_curry',
                    weight: 50,
                    count: [4, 16]
                },
                {
                    item: 'simplefarming:italian_beef',
                    weight: 50,
                    count: [4, 16]
                },
                {
                    item: 'simplefarming:beef_and_broccoli',
                    weight: 50,
                    count: [4, 16]
                },
                {
                    item: Item.of(
                        'ars_nouveau:potion_flask',
                        '{count:8,CustomPotionEffects:[{Ambient:0b,CurativeItems:[{id:"minecraft:milk_bucket",Count:1b}],ShowIcon:1b,ShowParticles:1b,Duration:3600,Id:5b,Amplifier:0b},{Ambient:0b,CurativeItems:[{id:"minecraft:milk_bucket",Count:1b}],ShowIcon:1b,ShowParticles:1b,Duration:900,Id:10b,Amplifier:0b},{Ambient:0b,CurativeItems:[{id:"minecraft:milk_bucket",Count:1b}],ShowIcon:1b,ShowParticles:1b,Duration:3600,Id:1b,Amplifier:0b}],Potion:"apotheosis:resistance"}'
                    ),
                    weight: 5
                }
            ]
        }
    ];

    const mansions = [
        'birch', //
        'desert',
        'jungle',
        'oak',
        'savanna',
        'snowy',
        'taiga'
    ];

    mansions.forEach((mansion) => {
        event.modify(`repurposed_structures:chests/mansion/${mansion}_storage`, (table) => {
            pools.forEach((pool) => {
                table.addPool((newPool) => {
                    newPool.setUniformRolls(pool.rolls.min, pool.rolls.max);
                    pool.entries.forEach((entry) => {
                        let count = entry.count ? entry.count : 1,
                            weight = entry.weight ? entry.weight : 1;

                        newPool.addItem(entry.item, weight, count);
                    });
                });
            });
        });
    });
});
