onEvent('item.tags', (event) => {
    const items = ['atum:nebu_hammer', 'mythicbotany:alfsteel_pick', 'aiotbotania:alfsteel_aiot'];
    event.get('atum:nebu_hammer').add(items);
});
