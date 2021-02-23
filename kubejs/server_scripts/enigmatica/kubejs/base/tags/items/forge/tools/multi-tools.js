events.listen('item.tags', (event) => {
    var items = [
        'bountifulbaubles:gloves_digging_diamond',
        'bountifulbaubles:gloves_digging_iron',
        'immersiveengineering:buzzsaw',
        'immersiveengineering:drill',
        'industrialforegoing:infinity_drill',
        'industrialforegoing:infinity_saw',
        'mekanism:atomic_disassembler',
        'mekanism:meka_tool',
        'mininggadgets:mininggadget',
        'pneumaticcraft:jackhammer',
        'thermal:flux_drill',
        'thermal:flux_saw'
    ];
    var tags = ['forge:tools', 'forge:tools/multi-tool'];

    tags.forEach((tag) => {
        event
            .get(tag)
            .add(items)
            .add(/_paxel/)
            .add(/_aiot/);
    });
});
