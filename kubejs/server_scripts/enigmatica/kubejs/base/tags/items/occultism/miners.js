onEvent('item.tags', (event) => {
    event.get('occultism:miners/ores').remove('occultism:miner_foliot_unspecialized');
    event.get('occultism:miners/fish').add('kubejs:fisher_foliot');
});
