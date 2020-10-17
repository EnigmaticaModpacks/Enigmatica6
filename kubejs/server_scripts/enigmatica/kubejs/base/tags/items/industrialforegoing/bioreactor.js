events.listen('item.tags', function (event) {
    event.get('industrialforegoing:bioreactor').add('#forge:crops');
});
