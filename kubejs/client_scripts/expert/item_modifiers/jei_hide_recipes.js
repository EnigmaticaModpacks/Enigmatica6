onEvent('jei.yeet.recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }
    recipesToHide.forEach((recipe) => {
        recipe.recipes_by_id.forEach((id) => {
            if (recipe.category == 'minecraft:crafting') {
                try {
                    event.yeet('create:automatic_shaped', id);
                } catch (err) {
                    // do nothing
                }

                try {
                    event.yeet('create:automatic_shapeless', id);
                } catch (err) {
                    // do nothing
                }
            }
            event.yeet(recipe.category, id);
        });
    });
});
