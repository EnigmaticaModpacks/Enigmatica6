onEvent('recipes', (event) => {
    recipes = [
        {
            input: '#forge:ingots/compressed_iron',
            input_count: 4,
            output: 'pneumaticcraft:elevator_frame',
            output_count: 8,
            program: 'drill'
        },
        {
            input: 'pneumaticcraft:reinforced_brick_wall',
            input_count: 6,
            output: 'pneumaticcraft:cannon_barrel',
            output_count: 2,
            program: 'drill'
        }
    ];
    recipes.forEach((recipe) => {
        let constructed_input = recipe.input.charAt(0) == '#' ? { tag: recipe.input.slice(1) } : { item: recipe.input };
        if (recipe.input_count) {
            constructed_input.type = 'pneumaticcraft:stacked_item';
            constructed_input.count = recipe.input_count;
        }

        let re = event.custom({
            type: `pneumaticcraft:assembly_${recipe.program}`,
            input: constructed_input,
            result: {
                item: recipe.output,
                count: recipe.output_count
            },
            program: recipe.program
        });
        if (recipe.id) {
            re.id(recipe.id);
        }
    });
});
