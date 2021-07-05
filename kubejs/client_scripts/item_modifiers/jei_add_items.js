onEvent('jei.add.items', (event) => {
    const items = [
        Item.of('tconstruct:tinker_station').nbt({ texture: 'minecraft:oak_planks' }),
        Item.of('tconstruct:crafting_station').nbt({ texture: 'minecraft:oak_planks' }),
        Item.of('tconstruct:part_builder').nbt({ texture: 'minecraft:oak_planks' }),
        Item.of('tconstruct:scorched_anvil').nbt({ texture: 'emendatusenigmatica:steel_block' }),
        Item.of('tconstruct:tinkers_anvil').nbt({ texture: 'emendatusenigmatica:steel_block' })
    ];

    items.forEach((item) => event.add(item));
});
