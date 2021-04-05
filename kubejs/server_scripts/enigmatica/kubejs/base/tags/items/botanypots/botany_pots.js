events.listen('item.tags', (event) => {
    event
        .get('botanypots:simple_botany_pots')
        .add('botanypots:botany_pot')
        .add(/botanypots:\w+_botany_pot/);
});
