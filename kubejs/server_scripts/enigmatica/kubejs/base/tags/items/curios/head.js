events.listen('item.tags', (event) => {
    event.remove('curios:head', ['occultism:otherworld_goggles']);
});
