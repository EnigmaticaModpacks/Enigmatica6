onEvent('recipes', (event) => {
    if (global.isNormalMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:normal/apotheosis/spawner_modifier/';
    const recipes = [
        {
            mainhand: { item: 'comforts:rope_and_nail' },
            stat_changes: [{ id: 'no_ai', value: true }],
            id: 'apotheosis:spawner/no_ai'
        },
        {
            mainhand: { item: 'comforts:rope_and_nail' },
            offhand: { item: 'minecraft:quartz' },
            consumes_offhand: false,
            stat_changes: [{ id: 'no_ai', value: false }],
            id: 'apotheosis:spawner/no_ai_inverted'
        },
        {
            mainhand: { item: 'upgrade_aquatic:elder_eye' },
            stat_changes: [{ id: 'ignore_players', value: true }],
            id: 'apotheosis:spawner/ignore_players'
        },
        {
            mainhand: { item: 'upgrade_aquatic:elder_eye' },
            offhand: { item: 'minecraft:quartz' },
            consumes_offhand: false,
            stat_changes: [{ id: 'ignore_players', value: false }],
            id: 'apotheosis:spawner/ignore_players_inverted'
        },
        {
            mainhand: { item: 'architects_palette:abyssaline_lamp' },
            stat_changes: [{ id: 'ignore_conditions', value: true }],
            id: 'apotheosis:spawner/ignore_conditions'
        },
        {
            mainhand: { item: 'architects_palette:abyssaline_lamp' },
            offhand: { item: 'minecraft:quartz' },
            consumes_offhand: false,
            stat_changes: [{ id: 'ignore_conditions', value: false }],
            id: 'apotheosis:spawner/ignore_conditions_inverted'
        },
        {
            mainhand: { item: 'glassential:glass_dark' },
            stat_changes: [{ id: 'ignore_light', value: true }],
            id: 'apotheosis:spawner/ignore_light'
        },
        {
            mainhand: { item: 'glassential:glass_dark' },
            offhand: { item: 'minecraft:quartz' },
            consumes_offhand: false,
            stat_changes: [{ id: 'ignore_light', value: false }],
            id: 'apotheosis:spawner/ignore_light_inverted'
        },
        {
            mainhand: { item: 'upgrade_aquatic:tooth_lantern' },
            stat_changes: [
                {
                    id: 'max_nearby_entities',
                    value: 2,
                    min: -1,
                    max: 10
                }
            ],
            id: 'apotheosis:spawner/max_nearby'
        },
        {
            mainhand: { item: 'upgrade_aquatic:tooth_lantern' },
            offhand: { item: 'minecraft:quartz' },
            consumes_offhand: false,
            stat_changes: [
                {
                    id: 'max_nearby_entities',
                    value: -2,
                    min: 1,
                    max: -1
                }
            ],
            id: 'apotheosis:spawner/max_nearby_inverted'
        },
        {
            mainhand: { item: 'minecraft:clock' },
            stat_changes: [
                {
                    id: 'min_delay',
                    value: -5,
                    min: 100,
                    max: -1
                }
            ],
            id: 'apotheosis:spawner/min_delay'
        },
        {
            mainhand: { item: 'minecraft:clock' },
            offhand: { item: 'minecraft:quartz' },
            consumes_offhand: false,
            stat_changes: [
                {
                    id: 'min_delay',
                    value: 5,
                    min: -1,
                    max: -1
                }
            ],
            id: 'apotheosis:spawner/min_delay_inverted'
        },
        {
            mainhand: { item: 'aquaculture:double_hook' },
            stat_changes: [
                {
                    id: 'spawn_count',
                    value: 1,
                    min: -1,
                    max: 5
                }
            ],
            id: 'apotheosis:spawner/spawn_count'
        },
        {
            mainhand: { item: 'aquaculture:double_hook' },
            offhand: { item: 'minecraft:quartz' },
            consumes_offhand: false,
            stat_changes: [
                {
                    id: 'spawn_count',
                    value: -1,
                    min: 1,
                    max: -1
                }
            ],
            id: 'apotheosis:spawner/spawn_count_inverted'
        },
        {
            mainhand: { item: 'minecraft:sea_lantern' },
            stat_changes: [
                {
                    id: 'req_player_range',
                    value: 2,
                    min: -1,
                    max: 50
                }
            ],
            id: 'apotheosis:spawner/player_range'
        },
        {
            mainhand: { item: 'minecraft:sea_lantern' },
            offhand: { item: 'minecraft:quartz' },
            consumes_offhand: false,
            stat_changes: [
                {
                    id: 'req_player_range',
                    value: -2,
                    min: 1,
                    max: -1
                }
            ],
            id: 'apotheosis:spawner/player_range_inverted'
        },
        {
            mainhand: { item: 'botania:blaze_block' },
            stat_changes: [
                {
                    id: 'spawn_range',
                    value: 1,
                    min: -1,
                    max: 32
                }
            ],
            id: 'apotheosis:spawner/spawn_range'
        },
        {
            mainhand: { item: 'botania:blaze_block' },
            offhand: { item: 'minecraft:quartz' },
            consumes_offhand: false,
            stat_changes: [
                {
                    id: 'spawn_range',
                    value: -1,
                    min: 1,
                    max: -1
                }
            ],
            id: 'apotheosis:spawner/spawn_range_inverted'
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'apotheosis:spawner_modifier';
        recipe.conditions = [{ type: 'apotheosis:module', module: 'spawner' }];
        event.custom(recipe).id(recipe.id);
    });
});
