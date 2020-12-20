events.listen('recipes', function (event) {
    global.woodVariants.forEach((variant) => {
        var modID = variant.logBlock.split(':')[0];

        // mod blacklist
        if (modID == 'biomesoplenty' || modID == 'minecraft') {
            return;
        }

        if (modID == 'undergarden') {
            data = {
                recipes: [
                    {
                        input: variant.logBlock,
                        output: variant.plankBlock,
                        count: 5,
                        time: 100
                    },
                    {
                        input: variant.woodBlock,
                        output: variant.plankBlock,
                        count: 5,
                        time: 100
                    }
                ]
            };
        } else {
            data = {
                recipes: [
                    {
                        input: variant.logBlock,
                        output: variant.logBlockStripped,
                        count: 1,
                        time: 50
                    },
                    {
                        input: variant.woodBlock,
                        output: variant.woodBlockStripped,
                        count: 1,
                        time: 50
                    },
                    {
                        input: variant.logBlockStripped,
                        output: variant.plankBlock,
                        count: 5,
                        time: 100
                    },
                    {
                        input: variant.woodBlockStripped,
                        output: variant.plankBlock,
                        count: 5,
                        time: 100
                    }
                ]
            };
        }

        data.recipes.forEach((recipe) => {
            event.recipes.create.cutting({
                type: 'create:cutting',
                ingredients: [
                    {
                        item: recipe.input
                    }
                ],
                results: [
                    {
                        item: recipe.output,
                        count: recipe.count
                    }
                ],
                processingTime: recipe.time
            });
        });
    });
});
