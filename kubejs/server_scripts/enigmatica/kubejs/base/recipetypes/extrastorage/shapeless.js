onEvent('recipes', (event) => {
    const id_prefix = 'enigmatica:base/extrastorage/';

    let crafter_tiers = ['iron', 'gold', 'diamond', 'netherite'];

    const recipes = [];

    crafter_tiers.forEach((crafter_tier) => {
        recipes.push({
            output: `extrastorage:${crafter_tier}_crafter`,
            inputs: [Item.of(`extrastorage:${crafter_tier}_crafter`).ignoreNBT()],
            id: `${id_prefix}${crafter_tier}crafter_reset`
        });
    });

    recipes.forEach((recipe) => {
        event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
    });
});
