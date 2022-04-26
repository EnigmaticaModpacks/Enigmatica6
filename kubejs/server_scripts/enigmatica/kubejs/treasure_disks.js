onEvent('recipes.after_load', (event) => {
  
  let mechanical_crafting_recipes = {}
  let enchanting_apparatus_recipes = {}

  event.forEachRecipe((recipe) => true, (recipe) => {

    if(recipe.getType() == "create:mechanical_crafting") {
      mechanical_crafting_recipes[recipe.getId()] = {
        input: recipe.getOriginalRecipeIngredients(),
        output: recipe.getOriginalRecipeResult(),
        width: recipe.originalRecipe.getRecipeWidth(),
        height: recipe.originalRecipe.getRecipeHeight(),
      }
    }

    if(recipe.getType() == "ars_nouveau:enchanting_apparatus") {
      enchanting_apparatus_recipes[recipe.getId()] = recipe.originalRecipe.asRecipe()
    }

  })

  JsonIO.write('./kubejs/data/computercraft/lua/treasure/recipes_for/mechanical_crafting/recipes.json', mechanical_crafting_recipes);
  JsonIO.write('./kubejs/data/computercraft/lua/treasure/recipes_for/enchanting_apparatus/recipes.json', enchanting_apparatus_recipes);
});
