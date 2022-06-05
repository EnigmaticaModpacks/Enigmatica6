onEvent('item.tags', (event) => {
    atum_aspects.forEach((atum_aspect) => {
        event.get(`atum:godshards/${atum_aspect}`).add(`atum:${atum_aspect}_godshard`);
    });
});
