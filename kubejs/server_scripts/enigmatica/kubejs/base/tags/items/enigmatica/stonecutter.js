onEvent('item.tags', (event) => {
    stonecuttables.forEach((stoneType) => {
        let tag = `enigmatica:stonecuttables/${stoneType.name}`;
        event.add('enigmatica:stonecuttables', ['#' + tag]);
        event.add(tag, stoneType.stones);
        event.add(tag, stoneType.onlyAsInput);
    });

    let glassTypes = [`glass`, 'glass_panes'];
    glassTypes.forEach((glassType) => {
        event
            .get(`enigmatica:stonecuttables/colorless_${glassType}`)
            .add(`#forge:${glassType}/colorless`)
            .remove([/atum:/, /tconstruct:/]);
    });

    colors.forEach((color) => {
        glassTypes.forEach((glassType) => {
            event
                .get(`enigmatica:stonecuttables/${color}_${glassType}`)
                .add(`#forge:${glassType}/${color}`)
                .remove(/atum:/);
        });
    });
});
