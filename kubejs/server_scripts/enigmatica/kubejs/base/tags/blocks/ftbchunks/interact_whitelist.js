onEvent('block.tags', (event) => {
    const blocks = [/waystones:.*sharestone/, /lootr:lootr_\w+/];
    event.get('ftbchunks:interact_whitelist').add(blocks);
});
