onEvent('player.logged_in', (event) => {
    const startingItemsGameStage = 'starting_items';
    const waystones = ['waystones:waystone', 'waystones:mossy_waystone', 'waystones:sandy_waystone'];

    setMode(event.player);

    if (!event.hasGameStage(startingItemsGameStage)) {
        event.player.give(Item.of('ftbquests:book'));
        event.player.give(Item.of(randomOf(waystones)));

        event.addGameStage(startingItemsGameStage);
    }
});
