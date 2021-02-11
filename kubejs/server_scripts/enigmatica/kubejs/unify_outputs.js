//priority: 900
/*
    This scripts unifies the output of recipes.

    It uses three arrays that define what to unify into what. 
    You can find those arrays in the constants/materials.js script

    The functions used can be found in the functions.js script, 
    in the same directory as this script is in.

    You may use this script and modify it as you see fit, as
    long as you do not claim to have made it. Attribution is
    appreciated, but not required.
*/
events.listen('recipes', (event) => {
    materialsToUnify.forEach((material) => {
        typesToUnify.forEach((type) => {
            if (!entryIsBlacklisted(material, type)) {
                var tagString = `#forge:${type}s/${material}`;
                var tag = Ingredient.of(tagString);
                if (tag.stacks.size() > 1) {
                    var prefItem = getPreferredItemInTag(tag);
                    event.replaceOutput({}, tagString, prefItem);
                }
            }
        });
    });
});
