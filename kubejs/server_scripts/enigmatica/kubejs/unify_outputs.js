//priority: 900
events.listen('recipes', (event) => {
    materialsToUnify.forEach((material) => {
        typesToUnify.forEach((type) => {
            if (!entryIsBlacklisted(material, type)) {
                var tagString = `#forge:${type}s/${material}`;
                var tag = ingredient.of(tagString);
                if (tag.stacks.size() > 1) {
                    var prefItem = getPreferredItemInTag(tag);
                    event.replaceOutput({}, tagString, prefItem);
                }
            }
        });
    });
});
