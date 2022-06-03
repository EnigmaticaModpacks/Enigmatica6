onEvent('item.tags', (event) => {
    event
        .get('dankstorage:blacklisted_usage')
        .add(['industrialforegoing:mob_imprisonment_tool', 'occultism:soul_gem', 'pneumaticcraft:spawner_core']);
});
