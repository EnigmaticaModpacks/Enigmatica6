events.listen('recipes', function (event) {
    // AE2 Seeds -> Pure Crystals
    var crystals = [
        ['appliedenergistics2:certus_crystal_seed', 'appliedenergistics2:purified_certus_quartz_crystal'],
        ['appliedenergistics2:fluix_crystal_seed', 'appliedenergistics2:purified_fluix_crystal'],
        ['appliedenergistics2:nether_quartz_seed', 'appliedenergistics2:purified_nether_quartz_crystal']
    ];
    var count = 1;
    crystals.forEach(function (pair) {
        var seed = pair[0];
        var pure_crystal = pair[1];

        event.recipes.mekanism.enriching({
            input: {
                ingredient: {
                    item: seed
                }
            },
            output: {
                item: pure_crystal,
                count: count
            }
        });
    });

    // output = 'rftoolsbase:dimensionalshard';
    // count = 8;
    // event.recipes.mekanism.enriching({
    //     input: {
    //         ingredient: {
    //             tag: 'forge:ores/dimensional'
    //         }
    //     },
    //     output: {
    //         item: output,
    //         count: count
    //     }
    // });
});
