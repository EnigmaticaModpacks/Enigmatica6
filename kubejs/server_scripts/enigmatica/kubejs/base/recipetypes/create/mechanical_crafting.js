onEvent('recipes', (event) => {
  const id_prefix = 'enigmatica:base/create/mechanical_crafting/';
  const recipes = [
    {
      output: Item.of(`computercraft:treasure_disk`, {Title: "all recipes", SubPath: "kubejs/recipes", Colour: 11829822}),
      pattern: ['A'],
      key: {
        A: Item.of(`computercraft:disk`).ignoreNBT(), 
      },
      id: `${id_prefix}treasure_disk`
    }
  ];

  recipes.forEach((recipe) => {
      event.recipes.create.mechanical_crafting(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
  });
});
