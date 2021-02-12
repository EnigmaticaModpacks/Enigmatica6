events.listen('item.tags', (event) => {
    event.get('industrialforegoing:bioreactor').add('#forge:crops');
});
