/// High Priority required or Apotheosis over-writes these.

/*
enchantment_levels: [50, 30, 120, 40],
    level at which normal items are enchanted
    (same when ench module is disabled)
    level at which the affix item is enchanted
    (same when ench module is disable)

*/
onEvent('server.datapack.high_priority', (event) => {
    let bossTypes = [
        // Overrides for default bosses
        {
            name: 'enderman',
            entity: 'minecraft:enderman',
            weight: 1,
            size: { width: 1, height: 3 },
            enchant_chance: 0.95,
            rarity_offset: 880,
            enchantment_levels: [50, 30, 120, 40],
            effects: [{ effect: 'minecraft:fire_resistance', chance: 1.0 }],
            attribute_modifiers: [
                {
                    attribute: 'minecraft:generic.max_health',
                    operation: 'MULTIPLY_BASE',
                    value: { min: 3, max: 8 }
                },
                {
                    attribute: 'minecraft:generic.movement_speed',
                    operation: 'MULTIPLY_BASE',
                    value: { min: 0.1, max: 0.2 }
                },
                {
                    attribute: 'minecraft:generic.attack_damage',
                    operation: 'MULTIPLY_BASE',
                    value: { min: 2, max: 4.6 }
                },
                {
                    attribute: 'minecraft:generic.knockback_resistance',
                    operation: 'ADDITION',
                    value: { min: 0.75, max: 1 }
                }
            ],
            valid_gear_sets: ['#enderman']
        },
        {
            name: 'zombie',
            entity: 'minecraft:zombie',
            weight: 3,
            size: { width: 1, height: 2 },
            enchant_chance: 0.35,
            rarity_offset: 275,
            enchantment_levels: [20, 15, 50, 30],
            effects: [{ effect: 'minecraft:fire_resistance', chance: 1.0 }],
            attribute_modifiers: [
                {
                    attribute: 'minecraft:generic.max_health',
                    operation: 'MULTIPLY_BASE',
                    value: { min: 2.5, max: 6 }
                },
                {
                    attribute: 'minecraft:generic.movement_speed',
                    operation: 'MULTIPLY_BASE',
                    value: { min: 0.05, max: 0.1 }
                },
                {
                    attribute: 'minecraft:generic.attack_damage',
                    operation: 'MULTIPLY_BASE',
                    value: { min: 3.8, max: 5.3 }
                },
                {
                    attribute: 'minecraft:generic.knockback_resistance',
                    operation: 'ADDITION',
                    value: { min: 0.35, max: 1 }
                }
            ],
            valid_gear_sets: ['#standard']
        },
        {
            name: 'zom_piglin',
            entity: 'minecraft:zombified_piglin',
            weight: 2,
            size: { width: 1, height: 2 },
            enchant_chance: 0.75,
            rarity_offset: 700,
            enchantment_levels: [40, 30, 100, 40],
            effects: [{ effect: 'minecraft:fire_resistance', chance: 1.0 }],
            attribute_modifiers: [
                {
                    attribute: 'minecraft:generic.max_health',
                    operation: 'MULTIPLY_BASE',
                    value: { min: 3.6, max: 7 }
                },
                {
                    attribute: 'minecraft:generic.movement_speed',
                    operation: 'MULTIPLY_BASE',
                    value: { min: 0.08, max: 0.2 }
                },
                {
                    attribute: 'minecraft:generic.attack_damage',
                    operation: 'MULTIPLY_BASE',
                    value: { min: 3, max: 6.5 }
                },
                {
                    attribute: 'minecraft:generic.knockback_resistance',
                    operation: 'ADDITION',
                    value: { min: 0.75, max: 1 }
                }
            ],
            valid_gear_sets: ['#standard']
        },
        {
            name: 'stray',
            entity: 'minecraft:stray',
            weight: 5,
            size: { width: 1, height: 2 },
            enchant_chance: 0.55,
            rarity_offset: 525,
            enchantment_levels: [40, 30, 90, 35],
            effects: [{ effect: 'minecraft:fire_resistance', chance: 1.0 }],
            attribute_modifiers: [
                {
                    attribute: 'minecraft:generic.max_health',
                    operation: 'MULTIPLY_BASE',
                    value: { min: 3, max: 6 }
                },
                {
                    attribute: 'minecraft:generic.movement_speed',
                    operation: 'MULTIPLY_BASE',
                    value: { min: 0.05, max: 0.15 }
                },
                {
                    attribute: 'minecraft:generic.attack_damage',
                    operation: 'MULTIPLY_BASE',
                    value: { min: 2.5, max: 5 }
                },
                {
                    attribute: 'minecraft:generic.knockback_resistance',
                    operation: 'ADDITION',
                    value: { min: 0.35, max: 0.85 }
                }
            ],
            valid_gear_sets: ['#skeleton']
        },
        {
            name: 'skeleton',
            entity: 'minecraft:skeleton',
            weight: 3,
            size: { width: 1, height: 2 },
            enchant_chance: 0.35,
            rarity_offset: 400,
            enchantment_levels: [40, 30, 60, 30],
            effects: [{ effect: 'minecraft:fire_resistance', chance: 1.0 }],
            attribute_modifiers: [
                {
                    attribute: 'minecraft:generic.max_health',
                    operation: 'MULTIPLY_BASE',
                    value: { min: 2, max: 4.5 }
                },
                {
                    attribute: 'minecraft:generic.movement_speed',
                    operation: 'MULTIPLY_BASE',
                    value: { min: 0.08, max: 0.17 }
                },
                {
                    attribute: 'minecraft:generic.attack_damage',
                    operation: 'MULTIPLY_BASE',
                    value: { min: 2, max: 4 }
                },
                {
                    attribute: 'minecraft:generic.knockback_resistance',
                    operation: 'ADDITION',
                    value: { min: 0.35, max: 0.75 }
                }
            ],
            valid_gear_sets: ['#skeleton']
        },
        {
            name: 'husk',
            entity: 'minecraft:husk',
            weight: 5,
            size: { width: 1, height: 2 },
            enchant_chance: 0.55,
            rarity_offset: 500,
            enchantment_levels: [20, 15, 50, 30],
            effects: [{ effect: 'minecraft:fire_resistance', chance: 1.0 }],
            attribute_modifiers: [
                {
                    attribute: 'minecraft:generic.max_health',
                    operation: 'MULTIPLY_BASE',
                    value: { min: 3, max: 7 }
                },
                {
                    attribute: 'minecraft:generic.movement_speed',
                    operation: 'MULTIPLY_BASE',
                    value: { min: 0.07, max: 0.12 }
                },
                {
                    attribute: 'minecraft:generic.attack_damage',
                    operation: 'MULTIPLY_BASE',
                    value: { min: 4, max: 5.8 }
                },
                {
                    attribute: 'minecraft:generic.knockback_resistance',
                    operation: 'ADDITION',
                    value: { min: 0.65, max: 1 }
                }
            ],
            valid_gear_sets: ['#standard']
        },

        // Custom Bosses

        {
            name: 'wraith',
            entity: 'eidolon:wraith',
            weight: 5,
            size: { width: 1, height: 2 },
            enchant_chance: 0.55,
            rarity_offset: 500,
            enchantment_levels: [20, 15, 50, 30],
            effects: [{ effect: 'minecraft:fire_resistance', chance: 1.0 }],
            attribute_modifiers: [
                {
                    attribute: 'minecraft:generic.max_health',
                    operation: 'MULTIPLY_BASE',
                    value: { min: 3, max: 7 }
                },
                {
                    attribute: 'minecraft:generic.movement_speed',
                    operation: 'MULTIPLY_BASE',
                    value: { min: 0.07, max: 0.12 }
                },
                {
                    attribute: 'minecraft:generic.attack_damage',
                    operation: 'MULTIPLY_BASE',
                    value: { min: 4, max: 5.8 }
                },
                {
                    attribute: 'minecraft:generic.knockback_resistance',
                    operation: 'ADDITION',
                    value: { min: 0.65, max: 1 }
                }
            ],
            valid_gear_sets: ['#standard']
        },
        {
            name: 'zombie_brute',
            entity: 'eidolon:zombie_brute',
            weight: 2,
            size: { width: 1, height: 3 },
            enchant_chance: 0.95,
            rarity_offset: 880,
            enchantment_levels: [50, 30, 120, 40],
            effects: [{ effect: 'minecraft:fire_resistance', chance: 1.0 }],
            attribute_modifiers: [
                {
                    attribute: 'minecraft:generic.max_health',
                    operation: 'MULTIPLY_BASE',
                    value: { min: 3, max: 8 }
                },
                {
                    attribute: 'minecraft:generic.movement_speed',
                    operation: 'MULTIPLY_BASE',
                    value: { min: 0.1, max: 0.2 }
                },
                {
                    attribute: 'minecraft:generic.attack_damage',
                    operation: 'MULTIPLY_BASE',
                    value: { min: 2, max: 4.6 }
                },
                {
                    attribute: 'minecraft:generic.knockback_resistance',
                    operation: 'ADDITION',
                    value: { min: 0.75, max: 1 }
                }
            ],
            valid_gear_sets: ['#standard']
        },
        {
            name: 'blaze',
            entity: 'minecraft:blaze',
            weight: 3,
            size: { width: 1, height: 2 },
            enchant_chance: 0.35,
            rarity_offset: 400,
            enchantment_levels: [40, 30, 60, 30],
            effects: [
                { effect: 'ars_nouveau:shield', chance: 1.0 },
                { effect: 'minecraft:regeneration', chance: 1.0 }
            ],
            attribute_modifiers: [
                {
                    attribute: 'minecraft:generic.max_health',
                    operation: 'MULTIPLY_BASE',
                    value: { min: 2, max: 4.5 }
                },
                {
                    attribute: 'minecraft:generic.movement_speed',
                    operation: 'MULTIPLY_BASE',
                    value: { min: 0.08, max: 0.17 }
                },
                {
                    attribute: 'minecraft:generic.attack_damage',
                    operation: 'MULTIPLY_BASE',
                    value: { min: 2, max: 4 }
                },
                {
                    attribute: 'minecraft:generic.knockback_resistance',
                    operation: 'ADDITION',
                    value: { min: 0.35, max: 0.75 }
                }
            ],
            valid_gear_sets: ['#standard']
        },
        {
            name: 'basalz',
            entity: 'thermal:basalz',
            weight: 3,
            size: { width: 1, height: 2 },
            enchant_chance: 0.35,
            rarity_offset: 400,
            enchantment_levels: [40, 30, 60, 30],
            effects: [
                { effect: 'ars_nouveau:shield', chance: 1.0 },
                { effect: 'minecraft:regeneration', chance: 1.0 }
            ],
            attribute_modifiers: [
                {
                    attribute: 'minecraft:generic.max_health',
                    operation: 'MULTIPLY_BASE',
                    value: { min: 2, max: 4.5 }
                },
                {
                    attribute: 'minecraft:generic.movement_speed',
                    operation: 'MULTIPLY_BASE',
                    value: { min: 0.08, max: 0.17 }
                },
                {
                    attribute: 'minecraft:generic.attack_damage',
                    operation: 'MULTIPLY_BASE',
                    value: { min: 2, max: 4 }
                },
                {
                    attribute: 'minecraft:generic.knockback_resistance',
                    operation: 'ADDITION',
                    value: { min: 0.35, max: 0.75 }
                }
            ],
            valid_gear_sets: ['#standard']
        },
        {
            name: 'blizz',
            entity: 'thermal:blizz',
            weight: 3,
            size: { width: 1, height: 2 },
            enchant_chance: 0.35,
            rarity_offset: 400,
            enchantment_levels: [40, 30, 60, 30],
            effects: [
                { effect: 'ars_nouveau:shield', chance: 1.0 },
                { effect: 'minecraft:regeneration', chance: 1.0 }
            ],
            attribute_modifiers: [
                {
                    attribute: 'minecraft:generic.max_health',
                    operation: 'MULTIPLY_BASE',
                    value: { min: 2, max: 4.5 }
                },
                {
                    attribute: 'minecraft:generic.movement_speed',
                    operation: 'MULTIPLY_BASE',
                    value: { min: 0.08, max: 0.17 }
                },
                {
                    attribute: 'minecraft:generic.attack_damage',
                    operation: 'MULTIPLY_BASE',
                    value: { min: 2, max: 4 }
                },
                {
                    attribute: 'minecraft:generic.knockback_resistance',
                    operation: 'ADDITION',
                    value: { min: 0.35, max: 0.75 }
                }
            ],
            valid_gear_sets: ['#standard']
        },
        {
            name: 'blitz',
            entity: 'thermal:blitz',
            weight: 3,
            size: { width: 1, height: 2 },
            enchant_chance: 0.35,
            rarity_offset: 400,
            enchantment_levels: [40, 30, 60, 30],
            effects: [
                { effect: 'ars_nouveau:shield', chance: 1.0 },
                { effect: 'minecraft:regeneration', chance: 1.0 }
            ],
            attribute_modifiers: [
                {
                    attribute: 'minecraft:generic.max_health',
                    operation: 'MULTIPLY_BASE',
                    value: { min: 2, max: 4.5 }
                },
                {
                    attribute: 'minecraft:generic.movement_speed',
                    operation: 'MULTIPLY_BASE',
                    value: { min: 0.08, max: 0.17 }
                },
                {
                    attribute: 'minecraft:generic.attack_damage',
                    operation: 'MULTIPLY_BASE',
                    value: { min: 2, max: 4 }
                },
                {
                    attribute: 'minecraft:generic.knockback_resistance',
                    operation: 'ADDITION',
                    value: { min: 0.35, max: 0.75 }
                }
            ],
            valid_gear_sets: ['#standard']
        },
        {
            name: 'wither_skeleton',
            entity: 'minecraft:wither_skeleton',
            weight: 1,
            size: { width: 1, height: 3 },
            enchant_chance: 0.95,
            rarity_offset: 880,
            enchantment_levels: [50, 30, 120, 40],
            effects: [{ effect: 'minecraft:regeneration', chance: 1.0 }],
            attribute_modifiers: [
                {
                    attribute: 'minecraft:generic.max_health',
                    operation: 'MULTIPLY_BASE',
                    value: { min: 3, max: 8 }
                },
                {
                    attribute: 'minecraft:generic.movement_speed',
                    operation: 'MULTIPLY_BASE',
                    value: { min: 0.1, max: 0.2 }
                },
                {
                    attribute: 'minecraft:generic.attack_damage',
                    operation: 'MULTIPLY_BASE',
                    value: { min: 2, max: 4.6 }
                },
                {
                    attribute: 'minecraft:generic.knockback_resistance',
                    operation: 'ADDITION',
                    value: { min: 0.75, max: 1 }
                }
            ],
            valid_gear_sets: ['#standard']
        },
        {
            name: 'mimic',
            entity: 'artifacts:mimic',
            weight: 1,
            size: { width: 1, height: 3 },
            enchant_chance: 0.95,
            rarity_offset: 880,
            enchantment_levels: [50, 30, 120, 40],
            effects: [{ effect: 'minecraft:regeneration', chance: 1.0 }],
            attribute_modifiers: [
                {
                    attribute: 'minecraft:generic.max_health',
                    operation: 'MULTIPLY_BASE',
                    value: { min: 3, max: 8 }
                },
                {
                    attribute: 'minecraft:generic.movement_speed',
                    operation: 'MULTIPLY_BASE',
                    value: { min: 0.1, max: 0.2 }
                },
                {
                    attribute: 'minecraft:generic.attack_damage',
                    operation: 'MULTIPLY_BASE',
                    value: { min: 2, max: 4.6 }
                },
                {
                    attribute: 'minecraft:generic.knockback_resistance',
                    operation: 'ADDITION',
                    value: { min: 0.75, max: 1 }
                }
            ],
            valid_gear_sets: ['#standard']
        },
        {
            name: 'crimson_mosquito',
            entity: 'alexsmobs:crimson_mosquito',
            weight: 1,
            size: { width: 1, height: 3 },
            enchant_chance: 0.95,
            rarity_offset: 880,
            enchantment_levels: [50, 30, 120, 40],
            effects: [{ effect: 'minecraft:regeneration', chance: 1.0 }],
            attribute_modifiers: [
                {
                    attribute: 'minecraft:generic.max_health',
                    operation: 'MULTIPLY_BASE',
                    value: { min: 3, max: 8 }
                },
                {
                    attribute: 'minecraft:generic.movement_speed',
                    operation: 'MULTIPLY_BASE',
                    value: { min: 0.1, max: 0.2 }
                },
                {
                    attribute: 'minecraft:generic.attack_damage',
                    operation: 'MULTIPLY_BASE',
                    value: { min: 2, max: 4.6 }
                },
                {
                    attribute: 'minecraft:generic.knockback_resistance',
                    operation: 'ADDITION',
                    value: { min: 0.75, max: 1 }
                }
            ],
            valid_gear_sets: ['#standard', '#flying_bugs']
        },
        {
            name: 'tarantula_hawk',
            entity: 'alexsmobs:tarantula_hawk',
            weight: 1,
            size: { width: 1, height: 3 },
            enchant_chance: 0.95,
            rarity_offset: 880,
            enchantment_levels: [50, 30, 120, 40],
            effects: [{ effect: 'minecraft:regeneration', chance: 1.0 }],
            attribute_modifiers: [
                {
                    attribute: 'minecraft:generic.max_health',
                    operation: 'MULTIPLY_BASE',
                    value: { min: 3, max: 8 }
                },
                {
                    attribute: 'minecraft:generic.movement_speed',
                    operation: 'MULTIPLY_BASE',
                    value: { min: 0.1, max: 0.2 }
                },
                {
                    attribute: 'minecraft:generic.attack_damage',
                    operation: 'MULTIPLY_BASE',
                    value: { min: 2, max: 4.6 }
                },
                {
                    attribute: 'minecraft:generic.knockback_resistance',
                    operation: 'ADDITION',
                    value: { min: 0.75, max: 1 }
                }
            ],
            valid_gear_sets: ['#standard', '#flying_bugs']
        },
        {
            name: 'dropbear',
            entity: 'alexsmobs:dropbear',
            weight: 5,
            size: { width: 1, height: 2 },
            enchant_chance: 0.55,
            rarity_offset: 500,
            enchantment_levels: [20, 15, 50, 30],
            effects: [{ effect: 'minecraft:fire_resistance', chance: 1.0 }],
            attribute_modifiers: [
                {
                    attribute: 'minecraft:generic.max_health',
                    operation: 'MULTIPLY_BASE',
                    value: { min: 3, max: 7 }
                },
                {
                    attribute: 'minecraft:generic.movement_speed',
                    operation: 'MULTIPLY_BASE',
                    value: { min: 0.07, max: 0.12 }
                },
                {
                    attribute: 'minecraft:generic.attack_damage',
                    operation: 'MULTIPLY_BASE',
                    value: { min: 4, max: 5.8 }
                },
                {
                    attribute: 'minecraft:generic.knockback_resistance',
                    operation: 'ADDITION',
                    value: { min: 0.65, max: 1 }
                }
            ],
            valid_gear_sets: ['#standard']
        },
        {
            name: 'barbarian',
            entity: 'atum:barbarian',
            weight: 5,
            size: { width: 1, height: 2 },
            enchant_chance: 0.55,
            rarity_offset: 500,
            enchantment_levels: [20, 15, 50, 30],
            effects: [
                { effect: 'minecraft:fire_resistance', chance: 1.0 },
                { effect: 'minecraft:strength', chance: 1.0 }
            ],
            attribute_modifiers: [
                {
                    attribute: 'minecraft:generic.max_health',
                    operation: 'MULTIPLY_BASE',
                    value: { min: 7, max: 15 }
                },
                {
                    attribute: 'minecraft:generic.movement_speed',
                    operation: 'MULTIPLY_BASE',
                    value: { min: 0.07, max: 0.12 }
                },
                {
                    attribute: 'minecraft:generic.attack_damage',
                    operation: 'MULTIPLY_BASE',
                    value: { min: 4, max: 10 }
                },
                {
                    attribute: 'minecraft:generic.knockback_resistance',
                    operation: 'ADDITION',
                    value: { min: 0.65, max: 1 }
                }
            ],
            valid_gear_sets: ['#standard']
        },
        {
            name: 'mummy',
            entity: 'atum:mummy',
            weight: 3,
            size: { width: 1, height: 3 },
            enchant_chance: 0.35,
            rarity_offset: 400,
            enchantment_levels: [40, 30, 60, 30],
            effects: [
                { effect: 'ars_nouveau:shield', chance: 1.0 },
                { effect: 'minecraft:regeneration', chance: 1.0 },
                { effect: 'minecraft:strength', chance: 1.0 }
            ],
            attribute_modifiers: [
                {
                    attribute: 'minecraft:generic.max_health',
                    operation: 'MULTIPLY_BASE',
                    value: { min: 7, max: 10 }
                },
                {
                    attribute: 'minecraft:generic.movement_speed',
                    operation: 'MULTIPLY_BASE',
                    value: { min: 0.08, max: 0.17 }
                },
                {
                    attribute: 'minecraft:generic.attack_damage',
                    operation: 'MULTIPLY_BASE',
                    value: { min: 2, max: 16 }
                },
                {
                    attribute: 'minecraft:generic.knockback_resistance',
                    operation: 'ADDITION',
                    value: { min: 1, max: 1 }
                }
            ],
            valid_gear_sets: ['#standard']
        },
        {
            name: 'sergeant',
            entity: 'atum:sergeant',
            weight: 5,
            size: { width: 1, height: 2 },
            enchant_chance: 0.55,
            rarity_offset: 500,
            enchantment_levels: [20, 15, 50, 30],
            effects: [
                { effect: 'minecraft:fire_resistance', chance: 1.0 },
                { effect: 'minecraft:strength', chance: 1.0 }
            ],
            attribute_modifiers: [
                {
                    attribute: 'minecraft:generic.max_health',
                    operation: 'MULTIPLY_BASE',
                    value: { min: 3, max: 7 }
                },
                {
                    attribute: 'minecraft:generic.movement_speed',
                    operation: 'MULTIPLY_BASE',
                    value: { min: 0.07, max: 0.12 }
                },
                {
                    attribute: 'minecraft:generic.attack_damage',
                    operation: 'MULTIPLY_BASE',
                    value: { min: 4, max: 5.8 }
                },
                {
                    attribute: 'minecraft:generic.knockback_resistance',
                    operation: 'ADDITION',
                    value: { min: 0.65, max: 1 }
                }
            ],
            valid_gear_sets: ['#standard']
        },
        {
            name: 'forsaken',
            entity: 'atum:forsaken',
            weight: 5,
            size: { width: 1, height: 2 },
            enchant_chance: 0.55,
            rarity_offset: 525,
            enchantment_levels: [40, 30, 90, 35],
            effects: [{ effect: 'minecraft:fire_resistance', chance: 1.0 }],
            attribute_modifiers: [
                {
                    attribute: 'minecraft:generic.max_health',
                    operation: 'MULTIPLY_BASE',
                    value: { min: 3, max: 6 }
                },
                {
                    attribute: 'minecraft:generic.movement_speed',
                    operation: 'MULTIPLY_BASE',
                    value: { min: 0.05, max: 0.15 }
                },
                {
                    attribute: 'minecraft:generic.attack_damage',
                    operation: 'MULTIPLY_BASE',
                    value: { min: 2.5, max: 5 }
                },
                {
                    attribute: 'minecraft:generic.knockback_resistance',
                    operation: 'ADDITION',
                    value: { min: 0.35, max: 0.85 }
                }
            ],
            valid_gear_sets: ['#standard']
        },
        {
            name: 'vindicator',
            entity: 'minecraft:vindicator',
            weight: 3,
            size: { width: 1, height: 2 },
            enchant_chance: 0.55,
            rarity_offset: 525,
            enchantment_levels: [40, 30, 90, 35],
            effects: [{ effect: 'minecraft:fire_resistance', chance: 1.0 }],
            attribute_modifiers: [
                {
                    attribute: 'minecraft:generic.max_health',
                    operation: 'MULTIPLY_BASE',
                    value: { min: 6, max: 10 }
                },
                {
                    attribute: 'minecraft:generic.movement_speed',
                    operation: 'MULTIPLY_BASE',
                    value: { min: 0.05, max: 0.15 }
                },
                {
                    attribute: 'minecraft:generic.attack_damage',
                    operation: 'MULTIPLY_BASE',
                    value: { min: 2.5, max: 5 }
                },
                {
                    attribute: 'minecraft:generic.knockback_resistance',
                    operation: 'ADDITION',
                    value: { min: 0.35, max: 0.85 }
                }
            ],
            valid_gear_sets: ['#standard']
        },
        {
            name: 'evoker',
            entity: 'minecraft:evoker',
            weight: 3,
            size: { width: 1, height: 3 },
            enchant_chance: 0.35,
            rarity_offset: 400,
            enchantment_levels: [40, 30, 60, 30],
            effects: [
                { effect: 'ars_nouveau:shield', chance: 1.0 },
                { effect: 'minecraft:regeneration', chance: 1.0 },
                { effect: 'minecraft:strength', chance: 1.0 }
            ],
            attribute_modifiers: [
                {
                    attribute: 'minecraft:generic.max_health',
                    operation: 'MULTIPLY_BASE',
                    value: { min: 6, max: 7 }
                },
                {
                    attribute: 'minecraft:generic.movement_speed',
                    operation: 'MULTIPLY_BASE',
                    value: { min: 0.08, max: 0.17 }
                },
                {
                    attribute: 'minecraft:generic.attack_damage',
                    operation: 'MULTIPLY_BASE',
                    value: { min: 2, max: 16 }
                },
                {
                    attribute: 'minecraft:generic.knockback_resistance',
                    operation: 'ADDITION',
                    value: { min: 1, max: 1 }
                }
            ],
            valid_gear_sets: ['#standard']
        }
    ];

    bossTypes.forEach((bossType) => {
        event.addJson(`apotheosis:bosses/${bossType.name}.json`, bossType);
    });
});
