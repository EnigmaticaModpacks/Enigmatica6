onEvent('item.tags', (event) => {
    atum_aspects.forEach((atum_aspect) => {
        event.get(`atum:godforged_blocks`).add(`atum:${atum_aspect}_godforged_block`);
        event.get(`atum:godforged_blocks/${atum_aspect}`).add(`atum:${atum_aspect}_godforged_block`);
    });

    event.get(`atum:godforged_blocks`).add(`atum:godforged_block`);
});
