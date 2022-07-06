// priority: 10

const categories = [
    {
        id: 'enigmatica:basics',
        category_item_id: 'minecraft:cobblestone',
        title: 'Basic Mechanics',
        description: 'Learn about some basic (sometimes vanilla!) mechanics that will come in handy.',
        items: ['minecraft:cobblestone', 'minecraft:stone', 'minecraft:end_crystal']
    },
    {
        id: 'enigmatica:portals',
        category_item_id: 'undergarden:catalyst',
        title: 'Thinking with Portals',
        description: 'Learn how to construct some of the key portals in Enigmatica.',
        items: ['undergarden:catalyst', 'atum:scarab']
    },
    {
        id: 'enigmatica:tech',
        category_item_id: 'industrialforegoing:latex_processing_unit',
        title: 'Better Living through SCIENCE!',
        description: 'Technolgy can mold the world around you - learn to harness it today!',
        items: [
            'industrialforegoing:ore_laser_base',
            'industrialforegoing:latex_processing_unit',
            'sushigocrafting:nori_sheets'
        ]
    },
    {
        id: 'enigmatica:magic',
        category_item_id: 'resourcefulbees:t1_beehive',
        title: 'Harnessing the Mystical Forces',
        description: "Magic is just technology we don't understand yet.",
        items: ['resourcefulbees:iron_bee_spawn_egg']
    },
    {
        id: 'enigmatica:tools',
        category_item_id: 'tetra:hammer_base',
        title: 'Tools of the Trade',
        description: 'Better tools = better survivability.',
        items: ['tetra:hammer_base']
    }
];

onEvent('ponder.tag.registry', (event) => {
    categories.forEach((category) => {
        event.create(category.id, category.category_item_id, category.title, category.description);
    });
});

onEvent('ponder.tag', (event) => {
    categories.forEach((category) => {
        category.items.forEach((item) => {
            event.add(category.id, item);
        });
    });
});
