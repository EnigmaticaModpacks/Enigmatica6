events.listen('item.tags', (event) => {
    event.get('forge:dusts/ender').add('betterendforge:ender_dust');
    event.get('forge:dusts/ender_pearl').add('betterendforge:ender_dust');
});
