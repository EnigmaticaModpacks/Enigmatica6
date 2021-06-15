onEvent('server.datapack.high_priority', (event) => {
    event.addJson('minecraft:advancements/story/mine_stone.json', {
        parent: 'minecraft:story/root',
        display: {
            icon: {
                item: 'minecraft:wooden_pickaxe',
                nbt: '{Damage:0}'
            },
            title: {
                translate: 'advancements.story.mine_stone.title'
            },
            description: {
                translate: 'advancements.story.mine_stone.description'
            },
            frame: 'task',
            show_toast: true,
            announce_to_chat: true,
            hidden: false
        },
        criteria: {
            get_stone: {
                trigger: 'minecraft:inventory_changed',
                conditions: {
                    items: [
                        {
                            tag: 'quark:stone_tool_materials'
                        }
                    ]
                }
            }
        },
        requirements: [['get_stone']]
    });
});
