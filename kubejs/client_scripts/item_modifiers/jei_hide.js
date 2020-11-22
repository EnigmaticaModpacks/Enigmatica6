events.listen('jei.hide.items', (event) => {
    global.materialsToUnify.forEach(function (material) {
        global.typesToUnify.forEach(function (type) {
            var tagString = '#forge:' + type + 's/' + material;
            var tag = ingredient.of(tagString);
            if (tag.stacks.size() > 1) {
                // console.log('JEI Hiding Tag: ' + tag);
                var prefItem = getPreferredItemInTag(tag);
                tag.stacks.forEach((stack) => {
                    if (stack.id != prefItem.id) {
                        // console.log('JEI Hiding item: ' + stack.id);
                        event.hide(stack);
                    }
                });
            }
        });
    });

    global.disabledItems.forEach((item) => {
        event.hide(item);
    });
});
