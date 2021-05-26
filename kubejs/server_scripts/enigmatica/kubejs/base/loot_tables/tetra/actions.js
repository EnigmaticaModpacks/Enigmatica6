events.listen('server.datapack.low_priority', (event) => {
    const actionRecipes = [
        {
            loot_table: 'tetra:loot_tables/actions/beam_salvage.json',
            pools: {
                pools: [
                    {
                        name: 'ancient/beam_salvage',
                        rolls: 1,
                        entries: [
                            {
                                type: 'minecraft:item',
                                name: 'minecraft:iron_nugget',
                                weight: 10,
                                functions: [
                                    { function: 'set_count', count: { min: 3, max: 10 } },
                                    {
                                        function: 'minecraft:apply_bonus',
                                        enchantment: 'minecraft:fortune',
                                        formula: 'uniform_bonus_count',
                                        parameters: { bonusMultiplier: 2 }
                                    }
                                ]
                            },
                            {
                                type: 'minecraft:item',
                                name: 'emendatusenigmatica:steel_ingot',
                                weight: 3,
                                functions: [
                                    { function: 'set_count', count: 1 },
                                    {
                                        function: 'minecraft:apply_bonus',
                                        enchantment: 'minecraft:fortune',
                                        formula: 'uniform_bonus_count',
                                        parameters: { bonusMultiplier: 1 }
                                    }
                                ]
                            },
                            {
                                type: 'minecraft:item',
                                name: 'emendatusenigmatica:steel_ingot',
                                expand: true,
                                weight: 4,
                                functions: [
                                    { function: 'set_count', count: { min: 1, max: 2 } },
                                    {
                                        function: 'minecraft:apply_bonus',
                                        enchantment: 'minecraft:fortune',
                                        formula: 'uniform_bonus_count',
                                        parameters: { bonusMultiplier: 1 }
                                    }
                                ]
                            },
                            {
                                type: 'minecraft:item',
                                name: 'emendatusenigmatica:steel_nugget',
                                expand: true,
                                weight: 12,
                                functions: [
                                    { function: 'set_count', count: { min: 3, max: 10 } },
                                    {
                                        function: 'minecraft:apply_bonus',
                                        enchantment: 'minecraft:fortune',
                                        formula: 'uniform_bonus_count',
                                        parameters: { bonusMultiplier: 2 }
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        },
        {
            loot_table: 'tetra:loot_tables/actions/bolt_salvage.json',
            pools: {
                pools: [
                    {
                        name: 'forged/bolt_salvage',
                        rolls: 1,
                        entries: [
                            {
                                type: 'minecraft:item',
                                name: 'minecraft:iron_nugget',
                                weight: 10,
                                functions: [
                                    { function: 'set_count', count: { min: 3, max: 10 } },
                                    {
                                        function: 'minecraft:apply_bonus',
                                        enchantment: 'minecraft:fortune',
                                        formula: 'uniform_bonus_count',
                                        parameters: { bonusMultiplier: 2 }
                                    }
                                ]
                            },
                            {
                                type: 'minecraft:item',
                                name: 'minecraft:iron_ingot',
                                weight: 3,
                                functions: [
                                    { function: 'set_count', count: 1 },
                                    {
                                        function: 'minecraft:apply_bonus',
                                        enchantment: 'minecraft:fortune',
                                        formula: 'uniform_bonus_count',
                                        parameters: { bonusMultiplier: 1 }
                                    }
                                ]
                            },
                            {
                                type: 'minecraft:item',
                                name: 'emendatusenigmatica:copper_ingot',
                                expand: true,
                                weight: 3,
                                functions: [
                                    { function: 'set_count', count: 1 },
                                    {
                                        function: 'minecraft:apply_bonus',
                                        enchantment: 'minecraft:fortune',
                                        formula: 'uniform_bonus_count',
                                        parameters: { bonusMultiplier: 1 }
                                    }
                                ]
                            },
                            {
                                type: 'minecraft:item',
                                name: 'emendatusenigmatica:copper_nugget',
                                expand: true,
                                weight: 10,
                                functions: [
                                    { function: 'set_count', count: { min: 3, max: 10 } },
                                    {
                                        function: 'minecraft:apply_bonus',
                                        enchantment: 'minecraft:fortune',
                                        formula: 'uniform_bonus_count',
                                        parameters: { bonusMultiplier: 1 }
                                    }
                                ]
                            },
                            {
                                type: 'minecraft:item',
                                name: 'emendatusenigmatica:bronze_ingot',
                                expand: true,
                                weight: 1,
                                functions: [
                                    { function: 'set_count', count: 1 },
                                    {
                                        function: 'minecraft:apply_bonus',
                                        enchantment: 'minecraft:fortune',
                                        formula: 'uniform_bonus_count',
                                        parameters: { bonusMultiplier: 1 }
                                    }
                                ]
                            },
                            {
                                type: 'minecraft:item',
                                name: 'emendatusenigmatica:bronze_nugget',
                                expand: true,
                                weight: 6,
                                functions: [
                                    { function: 'set_count', count: { min: 3, max: 10 } },
                                    {
                                        function: 'minecraft:apply_bonus',
                                        enchantment: 'minecraft:fortune',
                                        formula: 'uniform_bonus_count',
                                        parameters: { bonusMultiplier: 2 }
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        },
        {
            loot_table: 'tetra:loot_tables/actions/earthpiercer_salvage.json',
            pools: {
                pools: [
                    {
                        name: 'forged/stonecutter_salvage',
                        rolls: 1,
                        entries: [
                            {
                                type: 'minecraft:item',
                                name: 'tetra:metal_scrap',
                                functions: [
                                    { function: 'set_count', count: { min: 4, max: 8 } },
                                    {
                                        function: 'minecraft:apply_bonus',
                                        enchantment: 'minecraft:fortune',
                                        formula: 'uniform_bonus_count',
                                        parameters: { bonusMultiplier: 1 }
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        },
        {
            loot_table: 'tetra:loot_tables/actions/geode.json',
            pools: {
                pools: [
                    {
                        name: 'geode_extended',
                        rolls: 1,
                        entries: [
                            {
                                type: 'group',
                                weight: 8,
                                children: [
                                    {
                                        type: 'minecraft:item',
                                        name: 'minecraft:gold_nugget',
                                        functions: [
                                            { function: 'set_count', count: { min: 4, max: 12 } },
                                            {
                                                function: 'minecraft:apply_bonus',
                                                enchantment: 'minecraft:fortune',
                                                formula: 'uniform_bonus_count',
                                                parameters: { bonusMultiplier: 3 }
                                            }
                                        ]
                                    },
                                    {
                                        type: 'minecraft:item',
                                        name: 'minecraft:iron_nugget',
                                        functions: [
                                            { function: 'set_count', count: { min: 4, max: 12 } },
                                            {
                                                function: 'minecraft:apply_bonus',
                                                enchantment: 'minecraft:fortune',
                                                formula: 'uniform_bonus_count',
                                                parameters: { bonusMultiplier: 3 }
                                            }
                                        ]
                                    },
                                    {
                                        type: 'minecraft:item',
                                        name: 'emendatusenigmatica:copper_nugget',
                                        expand: true,
                                        functions: [
                                            { function: 'set_count', count: { min: 4, max: 12 } },
                                            {
                                                function: 'minecraft:apply_bonus',
                                                enchantment: 'minecraft:fortune',
                                                formula: 'uniform_bonus_count',
                                                parameters: { bonusMultiplier: 3 }
                                            }
                                        ]
                                    },
                                    {
                                        type: 'minecraft:item',
                                        name: 'emendatusenigmatica:aluminum_nugget',
                                        expand: true,
                                        functions: [
                                            { function: 'set_count', count: { min: 4, max: 12 } },
                                            {
                                                function: 'minecraft:apply_bonus',
                                                enchantment: 'minecraft:fortune',
                                                formula: 'uniform_bonus_count',
                                                parameters: { bonusMultiplier: 3 }
                                            }
                                        ]
                                    },
                                    {
                                        type: 'minecraft:item',
                                        name: 'emendatusenigmatica:silver_nugget',
                                        expand: true,
                                        functions: [
                                            { function: 'set_count', count: { min: 4, max: 12 } },
                                            {
                                                function: 'minecraft:apply_bonus',
                                                enchantment: 'minecraft:fortune',
                                                formula: 'uniform_bonus_count',
                                                parameters: { bonusMultiplier: 3 }
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                type: 'minecraft:item',
                                name: 'tetra:pristine_diamond',
                                weight: 6,
                                conditions: [
                                    {
                                        condition: 'tetra:random_chance_with_fortune',
                                        chance: 0.1,
                                        fortuneMultiplier: 0.15
                                    }
                                ]
                            },
                            {
                                type: 'minecraft:item',
                                name: 'tetra:pristine_emerald',
                                weight: 4,
                                conditions: [
                                    {
                                        condition: 'tetra:random_chance_with_fortune',
                                        chance: 0.1,
                                        fortuneMultiplier: 0.15
                                    }
                                ]
                            },
                            {
                                type: 'minecraft:item',
                                name: 'tetra:pristine_lapis',
                                weight: 8,
                                conditions: [
                                    {
                                        condition: 'tetra:random_chance_with_fortune',
                                        chance: 0.1,
                                        fortuneMultiplier: 0.15
                                    }
                                ]
                            },
                            {
                                type: 'minecraft:item',
                                name: 'minecraft:diamond',
                                weight: 4,
                                conditions: [
                                    {
                                        condition: 'tetra:random_chance_with_fortune',
                                        chance: 0.5,
                                        fortuneMultiplier: 0.2
                                    }
                                ],
                                functions: [
                                    {
                                        function: 'minecraft:apply_bonus',
                                        enchantment: 'minecraft:fortune',
                                        formula: 'uniform_bonus_count',
                                        parameters: { bonusMultiplier: 1 }
                                    }
                                ]
                            },
                            {
                                type: 'minecraft:item',
                                name: 'minecraft:emerald',
                                weight: 2,
                                conditions: [
                                    {
                                        condition: 'tetra:random_chance_with_fortune',
                                        chance: 0.5,
                                        fortuneMultiplier: 0.2
                                    }
                                ],
                                functions: [
                                    {
                                        function: 'minecraft:apply_bonus',
                                        enchantment: 'minecraft:fortune',
                                        formula: 'uniform_bonus_count',
                                        parameters: { bonusMultiplier: 1 }
                                    }
                                ]
                            },
                            {
                                type: 'minecraft:item',
                                name: 'minecraft:flint',
                                weight: 4,
                                functions: [
                                    { function: 'set_count', count: { min: 1, max: 3 } },
                                    {
                                        function: 'minecraft:apply_bonus',
                                        enchantment: 'minecraft:fortune',
                                        formula: 'uniform_bonus_count',
                                        parameters: { bonusMultiplier: 4 }
                                    }
                                ]
                            },
                            {
                                type: 'minecraft:item',
                                name: 'minecraft:redstone',
                                weight: 5,
                                functions: [
                                    { function: 'set_count', count: { min: 1, max: 5 } },
                                    {
                                        function: 'minecraft:apply_bonus',
                                        enchantment: 'minecraft:fortune',
                                        formula: 'uniform_bonus_count',
                                        parameters: { bonusMultiplier: 3 }
                                    }
                                ]
                            },
                            {
                                type: 'minecraft:item',
                                name: 'minecraft:lapis_lazuli',
                                weight: 5,
                                functions: [
                                    { function: 'set_count', count: { min: 1, max: 5 } },
                                    {
                                        function: 'minecraft:apply_bonus',
                                        enchantment: 'minecraft:fortune',
                                        formula: 'uniform_bonus_count',
                                        parameters: { bonusMultiplier: 3 }
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        },
        {
            loot_table: 'tetra:loot_tables/actions/mesh_salvage.json',
            pools: {
                pools: [
                    {
                        name: 'ancient/bolt_salvage',
                        rolls: 1,
                        entries: [
                            {
                                type: 'minecraft:item',
                                name: 'minecraft:iron_nugget',
                                weight: 10,
                                functions: [
                                    { function: 'set_count', count: { min: 3, max: 10 } },
                                    {
                                        function: 'minecraft:apply_bonus',
                                        enchantment: 'minecraft:fortune',
                                        formula: 'uniform_bonus_count',
                                        parameters: { bonusMultiplier: 2 }
                                    }
                                ]
                            },
                            {
                                type: 'minecraft:item',
                                name: 'minecraft:iron_ingot',
                                weight: 3,
                                functions: [
                                    { function: 'set_count', count: 1 },
                                    {
                                        function: 'minecraft:apply_bonus',
                                        enchantment: 'minecraft:fortune',
                                        formula: 'uniform_bonus_count',
                                        parameters: { bonusMultiplier: 1 }
                                    }
                                ]
                            },
                            {
                                type: 'minecraft:item',
                                name: 'emendatusenigmatica:steel_ingot',
                                expand: true,
                                weight: 2,
                                functions: [
                                    { function: 'set_count', count: 1 },
                                    {
                                        function: 'minecraft:apply_bonus',
                                        enchantment: 'minecraft:fortune',
                                        formula: 'uniform_bonus_count',
                                        parameters: { bonusMultiplier: 1 }
                                    }
                                ]
                            },
                            {
                                type: 'minecraft:item',
                                name: 'emendatusenigmatica:steel_nugget',
                                expand: true,
                                weight: 6,
                                functions: [
                                    { function: 'set_count', count: { min: 3, max: 10 } },
                                    {
                                        function: 'minecraft:apply_bonus',
                                        enchantment: 'minecraft:fortune',
                                        formula: 'uniform_bonus_count',
                                        parameters: { bonusMultiplier: 2 }
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        },
        {
            loot_table: 'tetra:loot_tables/actions/metal_scrap_salvage.json',
            pools: {
                pools: [
                    {
                        name: 'forged/metal_scrap_salvage',
                        rolls: 1,
                        entries: [
                            {
                                type: 'minecraft:item',
                                name: 'minecraft:iron_nugget',
                                weight: 10,
                                functions: [
                                    { function: 'set_count', count: { min: 3, max: 10 } },
                                    {
                                        function: 'minecraft:apply_bonus',
                                        enchantment: 'minecraft:fortune',
                                        formula: 'uniform_bonus_count',
                                        parameters: { bonusMultiplier: 2 }
                                    }
                                ]
                            },
                            {
                                type: 'minecraft:item',
                                name: 'minecraft:iron_ingot',
                                weight: 10,
                                functions: [
                                    { function: 'set_count', count: 1 },
                                    {
                                        function: 'minecraft:apply_bonus',
                                        enchantment: 'minecraft:fortune',
                                        formula: 'uniform_bonus_count',
                                        parameters: { bonusMultiplier: 1 }
                                    }
                                ]
                            },
                            {
                                type: 'minecraft:item',
                                name: 'minecraft:gold_nugget',
                                weight: 10,
                                functions: [
                                    { function: 'set_count', count: { min: 3, max: 10 } },
                                    {
                                        function: 'minecraft:apply_bonus',
                                        enchantment: 'minecraft:fortune',
                                        formula: 'uniform_bonus_count',
                                        parameters: { bonusMultiplier: 2 }
                                    }
                                ]
                            },
                            {
                                type: 'minecraft:item',
                                name: 'minecraft:gold_ingot',
                                weight: 10,
                                functions: [
                                    { function: 'set_count', count: 1 },
                                    {
                                        function: 'minecraft:apply_bonus',
                                        enchantment: 'minecraft:fortune',
                                        formula: 'uniform_bonus_count',
                                        parameters: { bonusMultiplier: 1 }
                                    }
                                ]
                            },
                            {
                                type: 'minecraft:item',
                                name: 'emendatusenigmatica:copper_ingot',
                                expand: true,
                                weight: 10,
                                functions: [
                                    { function: 'set_count', count: 1 },
                                    {
                                        function: 'minecraft:apply_bonus',
                                        enchantment: 'minecraft:fortune',
                                        formula: 'uniform_bonus_count',
                                        parameters: { bonusMultiplier: 1 }
                                    }
                                ]
                            },
                            {
                                type: 'minecraft:item',
                                name: 'emendatusenigmatica:copper_nugget',
                                expand: true,
                                weight: 10,
                                functions: [
                                    { function: 'set_count', count: { min: 3, max: 10 } },
                                    {
                                        function: 'minecraft:apply_bonus',
                                        enchantment: 'minecraft:fortune',
                                        formula: 'uniform_bonus_count',
                                        parameters: { bonusMultiplier: 2 }
                                    }
                                ]
                            },
                            {
                                type: 'minecraft:item',
                                name: 'emendatusenigmatica:bronze_ingot',
                                expand: true,
                                weight: 10,
                                functions: [
                                    { function: 'set_count', count: 1 },
                                    {
                                        function: 'minecraft:apply_bonus',
                                        enchantment: 'minecraft:fortune',
                                        formula: 'uniform_bonus_count',
                                        parameters: { bonusMultiplier: 1 }
                                    }
                                ]
                            },
                            {
                                type: 'minecraft:item',
                                name: 'emendatusenigmatica:bronze_nugget',
                                expand: true,
                                weight: 10,
                                functions: [
                                    { function: 'set_count', count: { min: 3, max: 10 } },
                                    {
                                        function: 'minecraft:apply_bonus',
                                        enchantment: 'minecraft:fortune',
                                        formula: 'uniform_bonus_count',
                                        parameters: { bonusMultiplier: 2 }
                                    }
                                ]
                            },
                            {
                                type: 'minecraft:item',
                                name: 'emendatusenigmatica:steel_ingot',
                                expand: true,
                                weight: 10,
                                functions: [
                                    { function: 'set_count', count: 1 },
                                    {
                                        function: 'minecraft:apply_bonus',
                                        enchantment: 'minecraft:fortune',
                                        formula: 'uniform_bonus_count',
                                        parameters: { bonusMultiplier: 1 }
                                    }
                                ]
                            },
                            {
                                type: 'minecraft:item',
                                name: 'emendatusenigmatica:steel_nugget',
                                expand: true,
                                weight: 10,
                                functions: [
                                    { function: 'set_count', count: { min: 3, max: 10 } },
                                    {
                                        function: 'minecraft:apply_bonus',
                                        enchantment: 'minecraft:fortune',
                                        formula: 'uniform_bonus_count',
                                        parameters: { bonusMultiplier: 2 }
                                    }
                                ]
                            },
                            {
                                type: 'minecraft:item',
                                name: 'emendatusenigmatica:electrum_ingot',
                                expand: true,
                                weight: 10,
                                functions: [
                                    { function: 'set_count', count: 1 },
                                    {
                                        function: 'minecraft:apply_bonus',
                                        enchantment: 'minecraft:fortune',
                                        formula: 'uniform_bonus_count',
                                        parameters: { bonusMultiplier: 1 }
                                    }
                                ]
                            },
                            {
                                type: 'minecraft:item',
                                name: 'emendatusenigmatica:electrum_nugget',
                                expand: true,
                                weight: 10,
                                functions: [
                                    { function: 'set_count', count: { min: 3, max: 10 } },
                                    {
                                        function: 'minecraft:apply_bonus',
                                        enchantment: 'minecraft:fortune',
                                        formula: 'uniform_bonus_count',
                                        parameters: { bonusMultiplier: 2 }
                                    }
                                ]
                            },
                            {
                                type: 'minecraft:item',
                                name: 'emendatusenigmatica:nickel_ingot',
                                expand: true,
                                weight: 10,
                                functions: [
                                    { function: 'set_count', count: 1 },
                                    {
                                        function: 'minecraft:apply_bonus',
                                        enchantment: 'minecraft:fortune',
                                        formula: 'uniform_bonus_count',
                                        parameters: { bonusMultiplier: 1 }
                                    }
                                ]
                            },
                            {
                                type: 'minecraft:item',
                                name: 'emendatusenigmatica:nickel_nugget',
                                expand: true,
                                weight: 10,
                                functions: [
                                    { function: 'set_count', count: { min: 3, max: 10 } },
                                    {
                                        function: 'minecraft:apply_bonus',
                                        enchantment: 'minecraft:fortune',
                                        formula: 'uniform_bonus_count',
                                        parameters: { bonusMultiplier: 2 }
                                    }
                                ]
                            },
                            {
                                type: 'minecraft:item',
                                name: 'emendatusenigmatica:silver_ingot',
                                expand: true,
                                weight: 10,
                                functions: [
                                    { function: 'set_count', count: 1 },
                                    {
                                        function: 'minecraft:apply_bonus',
                                        enchantment: 'minecraft:fortune',
                                        formula: 'uniform_bonus_count',
                                        parameters: { bonusMultiplier: 1 }
                                    }
                                ]
                            },
                            {
                                type: 'minecraft:item',
                                name: 'emendatusenigmatica:silver_nugget',
                                expand: true,
                                weight: 10,
                                functions: [
                                    { function: 'set_count', count: { min: 3, max: 10 } },
                                    {
                                        function: 'minecraft:apply_bonus',
                                        enchantment: 'minecraft:fortune',
                                        formula: 'uniform_bonus_count',
                                        parameters: { bonusMultiplier: 2 }
                                    }
                                ]
                            },
                            {
                                type: 'minecraft:item',
                                name: 'emendatusenigmatica:lead_ingot',
                                expand: true,
                                weight: 10,
                                functions: [
                                    { function: 'set_count', count: 1 },
                                    {
                                        function: 'minecraft:apply_bonus',
                                        enchantment: 'minecraft:fortune',
                                        formula: 'uniform_bonus_count',
                                        parameters: { bonusMultiplier: 1 }
                                    }
                                ]
                            },
                            {
                                type: 'minecraft:item',
                                name: 'emendatusenigmatica:lead_nugget',
                                expand: true,
                                weight: 10,
                                functions: [
                                    { function: 'set_count', count: { min: 3, max: 10 } },
                                    {
                                        function: 'minecraft:apply_bonus',
                                        enchantment: 'minecraft:fortune',
                                        formula: 'uniform_bonus_count',
                                        parameters: { bonusMultiplier: 2 }
                                    }
                                ]
                            },
                            {
                                type: 'minecraft:item',
                                name: 'emendatusenigmatica:aluminum_ingot',
                                expand: true,
                                weight: 10,
                                functions: [
                                    { function: 'set_count', count: 1 },
                                    {
                                        function: 'minecraft:apply_bonus',
                                        enchantment: 'minecraft:fortune',
                                        formula: 'uniform_bonus_count',
                                        parameters: { bonusMultiplier: 1 }
                                    }
                                ]
                            },
                            {
                                type: 'minecraft:item',
                                name: 'emendatusenigmatica:aluminum_nugget',
                                expand: true,
                                weight: 10,
                                functions: [
                                    { function: 'set_count', count: { min: 3, max: 10 } },
                                    {
                                        function: 'minecraft:apply_bonus',
                                        enchantment: 'minecraft:fortune',
                                        formula: 'uniform_bonus_count',
                                        parameters: { bonusMultiplier: 2 }
                                    }
                                ]
                            },
                            {
                                type: 'minecraft:item',
                                name: 'emendatusenigmatica:tin_ingot',
                                expand: true,
                                weight: 10,
                                functions: [
                                    { function: 'set_count', count: 1 },
                                    {
                                        function: 'minecraft:apply_bonus',
                                        enchantment: 'minecraft:fortune',
                                        formula: 'uniform_bonus_count',
                                        parameters: { bonusMultiplier: 1 }
                                    }
                                ]
                            },
                            {
                                type: 'minecraft:item',
                                name: 'emendatusenigmatica:tin_nugget',
                                expand: true,
                                weight: 10,
                                functions: [
                                    { function: 'set_count', count: { min: 3, max: 10 } },
                                    {
                                        function: 'minecraft:apply_bonus',
                                        enchantment: 'minecraft:fortune',
                                        formula: 'uniform_bonus_count',
                                        parameters: { bonusMultiplier: 2 }
                                    }
                                ]
                            },
                            {
                                type: 'minecraft:item',
                                name: 'emendatusenigmatica:osmium_ingot',
                                expand: true,
                                weight: 10,
                                functions: [
                                    { function: 'set_count', count: 1 },
                                    {
                                        function: 'minecraft:apply_bonus',
                                        enchantment: 'minecraft:fortune',
                                        formula: 'uniform_bonus_count',
                                        parameters: { bonusMultiplier: 1 }
                                    }
                                ]
                            },
                            {
                                type: 'minecraft:item',
                                name: 'emendatusenigmatica:osmium_nugget',
                                expand: true,
                                weight: 10,
                                functions: [
                                    { function: 'set_count', count: { min: 3, max: 10 } },
                                    {
                                        function: 'minecraft:apply_bonus',
                                        enchantment: 'minecraft:fortune',
                                        formula: 'uniform_bonus_count',
                                        parameters: { bonusMultiplier: 2 }
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        },
        {
            loot_table: 'tetra:loot_tables/actions/quick_latch_salvage_hammer.json',
            pools: {
                pools: [
                    {
                        name: 'forged/quick_latch_salvage_hammer',
                        rolls: 1,
                        entries: [
                            {
                                type: 'item',
                                name: 'minecraft:iron_nugget',
                                weight: 10,
                                functions: [
                                    { function: 'set_count', count: { min: 3, max: 10 } },
                                    {
                                        function: 'minecraft:apply_bonus',
                                        enchantment: 'minecraft:fortune',
                                        formula: 'uniform_bonus_count',
                                        parameters: { bonusMultiplier: 2 }
                                    }
                                ]
                            },
                            {
                                type: 'minecraft:item',
                                name: 'emendatusenigmatica:copper_nugget',
                                expand: true,
                                weight: 10,
                                functions: [
                                    { function: 'set_count', count: { min: 3, max: 10 } },
                                    {
                                        function: 'minecraft:apply_bonus',
                                        enchantment: 'minecraft:fortune',
                                        formula: 'uniform_bonus_count',
                                        parameters: { bonusMultiplier: 2 }
                                    }
                                ]
                            },
                            {
                                type: 'minecraft:item',
                                name: 'emendatusenigmatica:bronze_nugget',
                                expand: true,
                                weight: 6,
                                functions: [
                                    { function: 'set_count', count: { min: 3, max: 10 } },
                                    {
                                        function: 'minecraft:apply_bonus',
                                        enchantment: 'minecraft:fortune',
                                        formula: 'uniform_bonus_count',
                                        parameters: { bonusMultiplier: 2 }
                                    }
                                ]
                            },
                            {
                                type: 'item',
                                name: 'minecraft:gold_nugget',
                                weight: 3,
                                functions: [{ function: 'set_count', count: { min: 2, max: 4 } }]
                            },
                            {
                                type: 'item',
                                name: 'minecraft:redstone',
                                weight: 3,
                                functions: [{ function: 'set_count', count: { min: 1, max: 2 } }]
                            },
                            { type: 'item', name: 'minecraft:quartz', weight: 1 }
                        ]
                    }
                ]
            }
        },
        {
            loot_table: 'tetra:loot_tables/actions/quick_latch_salvage_pry.json',
            pools: {
                pools: [
                    {
                        name: 'forged/quick_latch_salvage_pry',
                        rolls: 1,
                        entries: [
                            {
                                type: 'minecraft:item',
                                name: 'minecraft:iron_nugget',
                                weight: 4,
                                functions: [{ function: 'set_count', count: { min: 2, max: 6 } }]
                            },
                            {
                                type: 'minecraft:item',
                                name: 'emendatusenigmatica:copper_nugget',
                                expand: true,
                                weight: 4,
                                functions: [{ function: 'set_count', count: { min: 2, max: 6 } }]
                            },
                            {
                                type: 'minecraft:item',
                                name: 'emendatusenigmatica:bronze_nugget',
                                expand: true,
                                weight: 2,
                                functions: [{ function: 'set_count', count: { min: 2, max: 6 } }]
                            },
                            {
                                type: 'minecraft:item',
                                name: 'minecraft:gold_nugget',
                                weight: 10,
                                functions: [
                                    { function: 'set_count', count: { min: 3, max: 5 } },
                                    {
                                        function: 'minecraft:apply_bonus',
                                        enchantment: 'minecraft:fortune',
                                        formula: 'uniform_bonus_count',
                                        parameters: { bonusMultiplier: 3 }
                                    }
                                ]
                            },
                            {
                                type: 'minecraft:item',
                                name: 'minecraft:redstone',
                                weight: 10,
                                functions: [
                                    { function: 'set_count', count: { min: 1, max: 3 } },
                                    {
                                        function: 'minecraft:apply_bonus',
                                        enchantment: 'minecraft:fortune',
                                        formula: 'uniform_bonus_count',
                                        parameters: { bonusMultiplier: 2 }
                                    }
                                ]
                            },
                            {
                                type: 'minecraft:item',
                                name: 'minecraft:quartz',
                                weight: 10,
                                conditions: [
                                    {
                                        condition: 'tetra:random_chance_with_fortune',
                                        chance: 0.5,
                                        fortuneMultiplier: 0.1
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        },
        {
            loot_table: 'tetra:loot_tables/actions/shatter_diamond.json',
            pools: {
                pools: [
                    {
                        name: 'shatter_diamond',
                        rolls: 1,
                        entries: [
                            {
                                type: 'item',
                                name: 'minecraft:diamond',
                                functions: [
                                    {
                                        function: 'minecraft:apply_bonus',
                                        enchantment: 'minecraft:fortune',
                                        formula: 'uniform_bonus_count',
                                        parameters: { bonusMultiplier: 1 }
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        },
        {
            loot_table: 'tetra:loot_tables/actions/shatter_emerald.json',
            pools: {
                pools: [
                    {
                        name: 'shatter_emerald',
                        rolls: 1,
                        entries: [
                            {
                                type: 'item',
                                name: 'minecraft:emerald',
                                functions: [
                                    {
                                        function: 'minecraft:apply_bonus',
                                        enchantment: 'minecraft:fortune',
                                        formula: 'uniform_bonus_count',
                                        parameters: { bonusMultiplier: 1 }
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        },
        {
            loot_table: 'tetra:loot_tables/actions/shatter_lapis.json',
            pools: {
                pools: [
                    {
                        name: 'shatter_lapis',
                        rolls: 1,
                        entries: [
                            {
                                type: 'item',
                                name: 'minecraft:lapis_lazuli',
                                functions: [
                                    { function: 'set_count', count: { min: 1, max: 5 } },
                                    {
                                        function: 'minecraft:apply_bonus',
                                        enchantment: 'minecraft:fortune',
                                        formula: 'uniform_bonus_count',
                                        parameters: { bonusMultiplier: 3 }
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        },
        {
            loot_table: 'tetra:loot_tables/actions/stonecutter_salvage.json',
            pools: {
                pools: [
                    {
                        name: 'forged/stonecutter_salvage',
                        rolls: 1,
                        entries: [
                            {
                                type: 'minecraft:item',
                                name: 'tetra:metal_scrap',
                                functions: [
                                    { function: 'set_count', count: { min: 8, max: 12 } },
                                    {
                                        function: 'minecraft:apply_bonus',
                                        enchantment: 'minecraft:fortune',
                                        formula: 'uniform_bonus_count',
                                        parameters: { bonusMultiplier: 1 }
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        },
        {
            loot_table: 'tetra:loot_tables/actions/vent_plate_salvage.json',
            pools: {
                pools: [
                    {
                        name: 'forged/vent_plate_salvage',
                        rolls: 1,
                        entries: [
                            {
                                type: 'minecraft:item',
                                name: 'emendatusenigmatica:iron_plate',
                                expand: true,
                                weight: 3,
                                functions: [
                                    { function: 'set_count', count: 1 },
                                    {
                                        function: 'minecraft:apply_bonus',
                                        enchantment: 'minecraft:fortune',
                                        formula: 'uniform_bonus_count',
                                        parameters: { bonusMultiplier: 1 }
                                    }
                                ]
                            },
                            {
                                type: 'minecraft:item',
                                name: 'minecraft:iron_nugget',
                                weight: 10,
                                functions: [
                                    { function: 'set_count', count: { min: 3, max: 10 } },
                                    {
                                        function: 'minecraft:apply_bonus',
                                        enchantment: 'minecraft:fortune',
                                        formula: 'uniform_bonus_count',
                                        parameters: { bonusMultiplier: 1 }
                                    }
                                ]
                            },
                            {
                                type: 'minecraft:item',
                                name: 'minecraft:iron_ingot',
                                weight: 3,
                                functions: [
                                    { function: 'set_count', count: 1 },
                                    {
                                        function: 'minecraft:apply_bonus',
                                        enchantment: 'minecraft:fortune',
                                        formula: 'uniform_bonus_count',
                                        parameters: { bonusMultiplier: 1 }
                                    }
                                ]
                            },
                            {
                                type: 'minecraft:item',
                                name: 'emendatusenigmatica:copper_plate',
                                expand: true,
                                weight: 3,
                                functions: [
                                    { function: 'set_count', count: 1 },
                                    {
                                        function: 'minecraft:apply_bonus',
                                        enchantment: 'minecraft:fortune',
                                        formula: 'uniform_bonus_count',
                                        parameters: { bonusMultiplier: 1 }
                                    }
                                ]
                            },
                            {
                                type: 'minecraft:item',
                                name: 'emendatusenigmatica:copper_ingot',
                                expand: true,
                                weight: 3,
                                functions: [
                                    { function: 'set_count', count: 1 },
                                    {
                                        function: 'minecraft:apply_bonus',
                                        enchantment: 'minecraft:fortune',
                                        formula: 'uniform_bonus_count',
                                        parameters: { bonusMultiplier: 1 }
                                    }
                                ]
                            },
                            {
                                type: 'minecraft:item',
                                name: 'emendatusenigmatica:copper_nugget',
                                expand: true,
                                weight: 10,
                                functions: [
                                    { function: 'set_count', count: { min: 3, max: 10 } },
                                    {
                                        function: 'minecraft:apply_bonus',
                                        enchantment: 'minecraft:fortune',
                                        formula: 'uniform_bonus_count',
                                        parameters: { bonusMultiplier: 2 }
                                    }
                                ]
                            },
                            {
                                type: 'minecraft:item',
                                name: 'emendatusenigmatica:bronze_plate',
                                expand: true,
                                weight: 1,
                                functions: [
                                    { function: 'set_count', count: 1 },
                                    {
                                        function: 'minecraft:apply_bonus',
                                        enchantment: 'minecraft:fortune',
                                        formula: 'uniform_bonus_count',
                                        parameters: { bonusMultiplier: 1 }
                                    }
                                ]
                            },
                            {
                                type: 'minecraft:item',
                                name: 'emendatusenigmatica:bronze_ingot',
                                expand: true,
                                weight: 1,
                                functions: [
                                    { function: 'set_count', count: 1 },
                                    {
                                        function: 'minecraft:apply_bonus',
                                        enchantment: 'minecraft:fortune',
                                        formula: 'uniform_bonus_count',
                                        parameters: { bonusMultiplier: 1 }
                                    }
                                ]
                            },
                            {
                                type: 'minecraft:item',
                                name: 'emendatusenigmatica:bronze_nugget',
                                expand: true,
                                weight: 6,
                                functions: [
                                    { function: 'set_count', count: { min: 3, max: 10 } },
                                    {
                                        function: 'minecraft:apply_bonus',
                                        enchantment: 'minecraft:fortune',
                                        formula: 'uniform_bonus_count',
                                        parameters: { bonusMultiplier: 2 }
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        }
    ];

    actionRecipes.forEach((recipe) => {
        event.addJson(recipe.loot_table, recipe.pools);
    });
});
