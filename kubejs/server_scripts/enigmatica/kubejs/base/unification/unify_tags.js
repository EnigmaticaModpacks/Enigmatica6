//priority: 900
events.listen('recipes', function (event) {
    materialsToUnify.forEach(function (material) {
        typesToUnify.forEach(function (type) {
            if (!entryIsBlacklisted(material, type)) {
                var tagString = '#forge:' + type + 's/' + material;
                var tag = ingredient.of(tagString);
                if (tag.stacks.size() > 1) {
                    var prefItem = getPreferredItemInTag(tag);
                    console.log('Tag: ' + tag);
                    console.log('Prefered item: ' + prefItem);
                    event.replaceOutput({}, tagString, prefItem);
                }
            }
        });
    });
});

function entryIsBlacklisted(material, type) {
    for (let i = 0; i < unificationBlacklist.length; i++) {
        if (unificationBlacklist[i].material === material && unificationBlacklist[i].type === type) {
            return true;
        }
    }
    return false;
}
