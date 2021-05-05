events.listen('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }

    const data = {
        recipes: [
            {
                input: 'architects_palette:sunmetal_brick',
                output: 'naturesaura:infused_iron',
                aura_type: 'naturesaura:overworld',
                aura: 15000,
                time: 80,
                id: 'infused_iron'
            },
            {
                input: 'architects_palette:sunmetal_block',
                output: 'naturesaura:infused_iron_block',
                aura_type: 'naturesaura:overworld',
                aura: 135000,
                time: 700,
                id: 'infused_iron_block'
            }
        ]
    };

    data.recipes.forEach((recipe) => {
        const re = event.custom({
            type: 'naturesaura:altar',
            input: recipe.input.charAt(0) == '#' ? { tag: recipe.input.slice(1) } : { item: recipe.input },
            output: { item: recipe.output },
            aura_type: recipe.aura_type,
            aura: recipe.aura,
            time: recipe.time
        });
        if (recipe.id) {
            re.id(`naturesaura:altar/${recipe.id}`);
        }
    });
});
