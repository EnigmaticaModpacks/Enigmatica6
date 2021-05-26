events.listen('item.tags', (event) => {
    event.get('enigmatica:washables/simplebotanypots').add(/botanypots:\w+_botany_pot/);
    event.get('enigmatica:washables/hopperbotanypots').add(/botanypots:hopper_\w+_botany_pot/);
    event.get('enigmatica:washables/terracotta').add(/minecraft:\w+_terracotta/);
});
