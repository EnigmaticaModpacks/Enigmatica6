events.listen('item.tags', (event) => {
    event
        .get('industrialforegoing:enchantment_extractor_blacklist')
        .add('tetra:modular_double')
        .add('tetra:modular_shield')
        .add('tetra:modular_single')
        .add('tetra:modular_sword')
        .add('tetra:modular_crossbow')
        .add('tetra:modular_bow');
});
