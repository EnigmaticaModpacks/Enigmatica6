onEvent('player.logged_in', (event) => {
    const startingItemsGameStage = 'starting_items';
    randomWaystone = () => {
        const waystones = ['waystones:waystone', 'waystones:mossy_waystone', 'waystones:sandy_waystone'];
        return waystones[Math.floor(Math.random() * waystones.length)];
    };

    setMode = (player) => {
        console.log(`setting mode for player: ${player}`);
        if (global.packmode == 'expert') {
            player.data.ftbquests.complete('0000000000000FEB');
            console.log(`set mode to expert for player: ${player}`);
        } else {
            player.data.ftbquests.reset('0000000000000FEB');
        }
    };

    setMode(event.player);

    if (!event.hasGameStage(startingItemsGameStage)) {
        event.player.give(Item.of('ftbquests:book'));
        event.player.give(Item.of(randomWaystone()));

        event.addGameStage(startingItemsGameStage);
    }
});
