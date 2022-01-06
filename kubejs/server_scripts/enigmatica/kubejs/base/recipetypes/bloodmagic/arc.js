onEvent('recipes', (event) => {
    const id_prefix = 'enigmatica:base/bloodmagic/arc/';
    const recipes = [
        {
            output: 'immersivepetroleum:petcoke_dust',
            input: '#forge:coal_petcoke',
            tool: '#bloodmagic:arc/explosive',
            extraOutputs: [],
            consume: false,
            id: `${id_prefix}petcoke_dust`
        },
        {
            output: Item.of('9x immersivepetroleum:petcoke_dust'),
            input: '#forge:storage_blocks/coal_petcoke',
            tool: '#bloodmagic:arc/explosive',
            extraOutputs: [],
            consume: false,
            id: `${id_prefix}petcoke_dust_from_block`
        },
        {
            output: Item.of('9x emendatusenigmatica:coke_dust'),
            input: '#forge:storage_blocks/coal_coke',
            tool: '#bloodmagic:arc/explosive',
            extraOutputs: [],
            consume: false,
            id: `${id_prefix}coke_dust_from_block`
        }
    ];
    recipes.forEach((recipe) => {
        const re = event.recipes.bloodmagic
            .arc(recipe.output, recipe.input, recipe.tool, recipe.extraOutputs)
            .consumeIngredient(recipe.consume)
            .id(recipe.id);

        if (recipe.outputFluid) {
            re.outputFluid(recipe.outputFluid);
        }
    });
});
