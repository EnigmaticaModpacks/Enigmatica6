events.listen('item.tags', (event) => {
    var washableBotanyPots = [],
        washableHopperBotanyPots = [],
        washableTerracotta = [];

    colors.forEach((color) => {
        washableBotanyPots.push(`botanypots:${color}_botany_pot`);
        washableHopperBotanyPots.push(`botanypots:hopper_${color}_botany_pot`);
        washableTerracotta.push(`minecraft:${color}_terracotta`);
    });

    event.get('enigmatica:washables/simplebotanypots').add(washableBotanyPots);
    event.get('enigmatica:washables/hopperbotanypots').add(washableHopperBotanyPots);
    event.get('enigmatica:washables/terracotta').add(washableTerracotta);
});
