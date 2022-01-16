onEvent('item.tags', (event) => {
    stonecuttables.forEach((stoneType) => {
        var tag = `enigmatica:stonecuttables/${stoneType.name}`;
        event.add('enigmatica:stonecuttables', ['#' + tag]);
        event.add(tag, stoneType.stones);
        event.add(tag, stoneType.onlyAsInput);
    });

    const glassTypes = [`glass`, 'glass_panes'];
    glassTypes.forEach((glassType) => {
        let glassesInTag = getItemsInTag(Ingredient.of(`#forge:${glassType}/colorless`)),
            glasses = [];

        glassesInTag.forEach((glass) => {
            let modId = glass.id.split(':')[0];
            if (modId == 'atum' || modId == 'tconstruct') {
                return;
            }
            glasses.push(glass.id);
        });

        event.get(`enigmatica:stonecuttables/colorless_${glassType}`).add(glasses);
    });

    colors.forEach((color) => {
        glassTypes.forEach((glassType) => {
            let glassesInTag = getItemsInTag(Ingredient.of(`#forge:${glassType}/${color}`)),
                glasses = [];

            glassesInTag.forEach((glass) => {
                let modId = glass.id.split(':')[0];
                if (modId == 'atum') {
                    return;
                }
                glasses.push(glass.id);
            });
            event.get(`enigmatica:stonecuttables/${color}_${glassType}`).add(glasses);
        });
    });
});
