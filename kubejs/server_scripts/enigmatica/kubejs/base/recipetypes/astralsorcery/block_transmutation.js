events.listen('recipes', (event) => {
    var data = {
        recipes: [
            { inputTag: '#forge:ores/iron', output: 'astralsorcery:starmetal_ore', starlight: 100 },
            { inputTag: '#forge:ores/diamond', output: 'emendatusenigmatica:emerald_ore', starlight: 1000 },
            { inputTag: '#forge:workbench', output: 'astralsorcery:altar_discovery', starlight: 60 }
        ]
    };
    data.recipes.forEach((recipe) => {
        ingredient.of(recipe.inputTag).stacks.forEach((input) => {
            console.log(input);
            console.log(recipe.output);
            console.log(recipe.starlight);

            event.recipes.astralsorcery.block_transmutation({
                input: {
                    block: input.id
                },
                output: {
                    block: recipe.output
                },
                starlight: recipe.starlight
            });
        });
    });
});
