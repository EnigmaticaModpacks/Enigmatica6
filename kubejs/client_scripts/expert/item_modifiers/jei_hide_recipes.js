onEvent('jei.remove.recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }

    //console.log('JEI RECIPE CATEGORIES: ' + event.getCategoryIds());
    //console.log('Valid Keys: ' + Object.keys(event));
    recipesToHide.forEach((recipe) => {
        recipe.recipes_by_id.forEach((id) => {
            if (recipe.category == 'minecraft:crafting') {
                try {
                    event.remove('create:automatic_shaped', [id]);
                } catch (err) {
                    // do nothing
                }

                try {
                    event.remove('create:automatic_shapeless', [id]);
                } catch (err) {
                    // do nothing
                }
            }
            console.log(`Category: ${recipe.category}, Hiding: ${id}`);
            event.remove(recipe.category, [id]);
        });
    });
});
