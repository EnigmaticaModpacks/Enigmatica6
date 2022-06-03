onEvent('recipes', (event) => {
    const recipes = [
        /*{
            input: 'input_item_here',
            output: [
                Item.of('6x create:large_cogwheel').withChance(32.0), //withChance sets a weight for the output, default is 1 without it
                Item.of('secondary_outputs').withChance(2.0),
,               'more_secondaries_with_weight_1'
            ],
            transitionalItem: 'transitional_item_here', //required, but can be same as input item apparently
            loops: 1, //required
            sequence: [
                {
                    type: 'sequence_type_here',  //options are deploying, cutting, filling, pressing
                    input: 'input_items_fluids_or_array_here',
                    output: 'output_item_here',
                    processingTime: 50 // for cutting recipes
                }
            ],
            id: 'recipe_id_here'
        }*/

        {
            input: 'create:andesite_alloy',
            outputs: [Item.of('12x create:cogwheel')],
            transitionalItem: 'create:incomplete_cogwheel',
            loops: 4,
            sequence: [
                {
                    type: 'deploying',
                    input: ['create:incomplete_cogwheel', '#minecraft:wooden_buttons'],
                    output: 'create:incomplete_cogwheel'
                },
                {
                    type: 'cutting',
                    input: 'create:incomplete_cogwheel',
                    output: 'create:incomplete_cogwheel',
                    processingTime: 50
                }
            ],
            id: 'create:sequenced_assembly/cogwheel'
        },
        {
            input: 'create:andesite_alloy',
            outputs: [Item.of('6x create:large_cogwheel')],
            transitionalItem: 'create:incomplete_large_cogwheel',
            loops: 3,
            sequence: [
                {
                    type: 'deploying',
                    input: ['create:incomplete_large_cogwheel', '#minecraft:planks'],
                    output: 'create:incomplete_large_cogwheel'
                },
                {
                    type: 'deploying',
                    input: ['create:incomplete_large_cogwheel', '#minecraft:wooden_buttons'],
                    output: 'create:incomplete_large_cogwheel'
                },
                {
                    type: 'cutting',
                    input: 'create:incomplete_large_cogwheel',
                    output: 'create:incomplete_large_cogwheel',
                    processingTime: 50
                }
            ],
            id: 'create:sequenced_assembly/large_cogwheel'
        },
        {
            input: '#forge:plates/gold',
            outputs: ['create:precision_mechanism'],
            transitionalItem: 'create:incomplete_precision_mechanism',
            loops: 5,
            sequence: [
                {
                    type: 'deploying',
                    input: ['create:incomplete_precision_mechanism', 'create:cogwheel'],
                    output: 'create:incomplete_precision_mechanism'
                },
                {
                    type: 'deploying',
                    input: ['create:incomplete_precision_mechanism', 'create:large_cogwheel'],
                    output: 'create:incomplete_precision_mechanism'
                },
                {
                    type: 'deploying',
                    input: ['create:incomplete_precision_mechanism', '#forge:nuggets/iron'],
                    output: 'create:incomplete_precision_mechanism'
                }
            ],
            id: 'create:precision_mechanism'
        }
    ];

    recipes.forEach((recipe) => {
        let sequence = [];

        recipe.sequence.forEach((step) => {
            if (step.type == 'deploying') {
                sequence.push(event.recipes.create.deploying(step.output, step.input));
            } else if (step.type == 'cutting') {
                sequence.push(
                    event.recipes.create.cutting(step.output, step.input).processingTime(step.processingTime)
                );
            } else if (step.type == 'filling') {
                sequence.push(event.recipes.create.filling(step.output, step.input));
            } else if (step.type == 'pressing') {
                sequence.push(event.recipes.create.pressing(step.output, step.input));
            }
        });

        const re = event.recipes.create
            .sequenced_assembly(recipe.outputs, recipe.input, sequence)
            .loops(recipe.loops)
            .transitionalItem(recipe.transitionalItem);

        if (recipe.id) {
            re.id(recipe.id);
        }
    });
});
