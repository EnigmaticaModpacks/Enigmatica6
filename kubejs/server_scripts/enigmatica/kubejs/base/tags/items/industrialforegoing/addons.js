onEvent('item.tags', (event) => {
    event.get('industrialforegoing:addons').add(/industrialforegoing:\w+addon/);
});
