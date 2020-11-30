//priority: 1000

function shapedRecipe(result, pattern, key) {
    return { result: result, pattern: pattern, key: key };
}

function shapelessRecipe(result, ingredients) {
    return { result: result, ingredients: ingredients };
}
