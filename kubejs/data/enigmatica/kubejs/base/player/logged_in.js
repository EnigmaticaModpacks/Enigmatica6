events.listen('player.logged_in', function (event) {
    if (!event.hasGameStage('starting_items')) {
        event.player.give(item.of('patchouli:guide_book', { 'patchouli:book': 'patchouli:modded_for_dummies' }));

        event.addGameStage('starting_items');
    }
});
