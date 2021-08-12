onEvent('jei.add.items', (event) => {
    const items = [
        Item.of('tconstruct:tinker_station').nbt({ texture: 'minecraft:oak_planks' }),
        Item.of('tconstruct:crafting_station').nbt({ texture: 'minecraft:oak_planks' }),
        Item.of('tconstruct:part_builder').nbt({ texture: 'minecraft:oak_planks' }),
        Item.of('tconstruct:scorched_anvil').nbt({ texture: 'emendatusenigmatica:steel_block' }),
        Item.of('tconstruct:tinkers_anvil').nbt({ texture: 'emendatusenigmatica:steel_block' }),
        'lootr:lootr_chest',
        'lootr:lootr_barrel',
        'lootr:lootr_trapped_chest',
        Item.of('tetra:modular_double', {
            'double/handle': 'double/basic_handle',
            HideFlags: 1,
            'double/head_left': 'double/basic_hammer_left',
            'double/head_right': 'double/basic_hammer_right',
            Damage: 0,
            'double/basic_hammer_right_material': 'basic_hammer/alfsteel',
            'double/basic_handle_material': 'basic_handle/end_rod',
            'double/basic_hammer_left_material': 'basic_hammer/alfsteel'
        }),
        Item.of('tetra:modular_sword', {
            'sword/wide_guard_material': 'wide_guard/starmetal',
            'sword/guard': 'sword/wide_guard',
            'sword/short_blade_material': 'short_blade/eternal_crystal',
            'sword/blade': 'sword/short_blade',
            'sword/pommel': 'sword/decorative_pommel',
            'sword/basic_hilt_material': 'basic_hilt/end_rod',
            HideFlags: 1,
            'sword/hilt': 'sword/basic_hilt',
            Damage: 0,
            'sword/blade:arrested': 0,
            'sword/decorative_pommel_material': 'decorative_pommel/oak'
        })
    ];

    items.forEach((item) => event.add(item));
});
