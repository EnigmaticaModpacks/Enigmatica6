events.listen('player.logged_in', (event) => {
    if (!event.hasGameStage('starting_items')) {
        event.player.give(Item.of('ftbquests:book'));
        event.addGameStage('starting_items');
    }
});
