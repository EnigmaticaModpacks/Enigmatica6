onEvent('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }

    recipes = [
        {
            input: 'thermal:machine_frame',
            input_count: 2,
            output: { item: 'kubejs:rftools_frame_parts', count: 1 },
            program: 'drill',
            id: 'rftoolsbase:machine_frame'
        },
        {
            input: 'kubejs:rftools_frame_parts',
            input_count: 1,
            output: { item: 'rftoolsbase:machine_frame', count: 1 },
            program: 'laser',
            id: 'rftoolsbase:machine_frame'
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
            result: recipe.output,
            program: recipe.program
        });
        if (recipe.id) {
            re.id(recipe.id);
        }
    });
});
