onEvent('item.tags', (event) => {
    const items = ['minecraft:anvil', /tetra:modular_.*/];

    event.get('industrialforegoing:enchantment_extractor_blacklist').add(items);
});
