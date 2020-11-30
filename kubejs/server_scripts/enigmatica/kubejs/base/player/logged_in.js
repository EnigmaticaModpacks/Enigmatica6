events.listen('player.logged_in', (event) => {
    if (!event.hasGameStage('starting_items')) {
        // event.player.give(item.of('patchouli:guide_book', { 'patchouli:book': 'patchouli:modded_for_dummies' }));
        event.player.give(item.of('ftbquests:book'));
        event.addGameStage('starting_items');
    }
});
