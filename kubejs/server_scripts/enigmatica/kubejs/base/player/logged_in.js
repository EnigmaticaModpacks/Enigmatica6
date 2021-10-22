onEvent('player.logged_in', (event) => {
    const startingItemsGameStage = 'starting_items';
    randomWaystone = () => {
        const waystones = ['waystones:waystone', 'waystones:mossy_waystone', 'waystones:sandy_waystone'];
        return waystones[Math.floor(Math.random() * waystones.length + 1)];
    };

    if (!event.hasGameStage(startingItemsGameStage)) {
        event.player.give(Item.of('ftbquests:book'));
        event.player.give(Item.of(randomWaystone()));

        event.addGameStage(startingItemsGameStage);
    }
});
