onEvent('server.datapack.high_priority', function (event) {

    draining_whitelist.filter(fluid => fluid.create_a_hose_pulley_advancement).forEach(fluid => {

        event.addJson(`minecraft:advancements/create/${fluid.name}.json`, {
            parent: "create:hose_pulley",
            display: {
                icon: {
                    item: fluid.bucket
                },
                title: {
                    translate: `advancement.create.infinite_${fluid.name}`,
                    translate: `10000+ ${fluid.id}`
                },
                description: {
                    translate: `advancement.create.infinite_${fluid.name}.desc`,
                    translate: `Pump from a body of ${fluid.id} large enough to be considered infinite.`
                },
                frame: "challenge",
                show_toast: true,
                announce_to_chat: true,
                hidden: false
            },
            criteria: {
                "0": {
                    trigger: "create:infinite_fluid",
                    conditions: {
                        accepted_entries: [
                            fluid.id
                        ]
                    }
                }
            },
            requirements: [
                [
                    "0"
                ]
            ]
        });
    });

});
