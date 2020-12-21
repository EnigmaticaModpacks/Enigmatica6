events.listen('recipes', function (event) {
    global.woodVariants.forEach((variant) => {
        var modID = variant.logBlock.split(':')[0];

        // mod blacklist
        if (modID == 'minecraft') {
            return;
        }

        event.recipes.immersiveengineering.sawmill({
            type: 'immersiveengineering:sawmill',
            input: {
                item: variant.logBlockStripped
            },
            result: {
                item: variant.plankBlock,
                count: 6
            },
            //secondaries: [{ output: { tag: 'forge:dusts/wood' }, stripping: false }], // This doesn't work?
            energy: 800
        });

        event.recipes.immersiveengineering.sawmill({
            type: 'immersiveengineering:sawmill', //Why you no work, secondaries?
            /*secondaries: [
                { output: { tag: 'forge:dusts/wood' }, stripping: true },
                { output: { tag: 'forge:dusts/wood' }, stripping: false }
            ],*/ result: {
                item: variant.plankBlock,
                count: 6
            },
            energy: 1600,
            input: [
                {
                    item: variant.logBlock
                },
                {
                    item: variant.woodBlock
                }
            ],
            stripped: {
                item: variant.logBlockStripped
            }
        });
    });
});

/*
item: 'emendatusenigmatica:wood_dust'
 */
