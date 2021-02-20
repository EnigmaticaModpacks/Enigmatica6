events.listen('block.tags', (event) => {
    event.get('forge:sand').add('betterendforge:endstone_dust');
    event.get('forge:sand/end').add('betterendforge:endstone_dust');
});