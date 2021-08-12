onEvent('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }

    const recipes = [
        {
            inputs: [
                { item: 'minecraft:snowball', count: 16 },
                { item: 'quark:bottled_cloud', count: 1 },
                { tag: 'forge:dusts/fluorite', count: 1, return_chance: 0.75 }
            ],
            output: {
                entries: [{ result: { item: 'powah:charged_snowball', count: 1 }, weight: 7 }],
                empty_weight: 3,
                rolls: 16
            }
        },
        {
            inputs: [
                { tag: 'forge:stone', count: 4 },
                { tag: 'forge:dusts/mana', count: 1 },
                { tag: 'forge:dusts/apatite', count: 1 }
            ],
            output: {
                entries: [{ result: { item: 'ars_nouveau:arcane_stone', count: 1 }, weight: 9 }],
                empty_weight: 1,
                rolls: 4
            }
        },
        {
            inputs: [
                { item: 'minecraft:heart_of_the_sea', count: 1 },
                { item: 'minecraft:nautilus_shell', count: 4 },
                { tag: 'forge:dusts/lapis', count: 2 },
                { tag: 'forge:dusts/fluorite', count: 2 },
                { tag: 'forge:dusts/mana', count: 1 }
            ],
            output: {
                entries: [{ result: { item: 'minecraft:conduit', count: 1 }, weight: 1 }],
                empty_weight: 0,
                rolls: 1
            },
            id: 'minecraft:conduit'
        },
        {
            inputs: [
                { item: 'eidolon:gold_inlay', count: 2 },
                { item: 'botania:livingwood', count: 1 },
                { item: 'naturesaura:gold_leaf', count: 1 },
                { tag: 'forge:dusts/apatite', count: 1 }
            ],
            output: {
                entries: [{ result: { item: 'naturesaura:wood_stand', count: 1 }, weight: 1 }],
                empty_weight: 0,
                rolls: 1
            },
            id: 'naturesaura:wood_stand'
        },
        {
            inputs: [
                { item: 'undergarden:music_disc_relict', count: 1 },
                { item: 'aquaculture:fish_bones', count: 1 },
                { tag: 'forge:dusts/lapis', count: 2 },
                { item: 'minecraft:fermented_spider_eye', count: 2 },
                { item: 'undergarden:raw_dweller_meat', count: 4 }
            ],
            output: {
                entries: [{ result: { item: 'meetyourfight:fossil_bait', count: 1 }, weight: 1 }],
                empty_weight: 0,
                rolls: 1
            },
            id: 'meetyourfight:fossil_bait'
        },
        {
            inputs: [
                { item: 'supplementaries:jar', count: 1 },
                { tag: 'forge:dusts/fluorite', count: 3 }
            ],
            output: {
                entries: [{ result: { item: 'ars_nouveau:jar_of_light', count: 1 }, weight: 1 }],
                empty_weight: 0,
                rolls: 1
            }
        },
        {
            inputs: [
                { item: 'supplementaries:jar', count: 1 },
                { tag: 'forge:dusts/obsidian', count: 3 }
            ],
            output: {
                entries: [{ result: { item: 'ars_nouveau:void_jar', count: 1 }, weight: 1 }],
                empty_weight: 0,
                rolls: 1
            }
        },
        {
            inputs: [
                {
                    type: 'forge:nbt',
                    item: 'naturesaura:aura_bottle',
                    count: 1,
                    nbt: '{stored_type:"naturesaura:overworld"}'
                },
                { item: 'naturesaura:infused_iron', count: 1 },
                { item: 'botania:rune_water', count: 1, return_chance: 0.75 },
                { item: 'botania:rune_earth', count: 1, return_chance: 0.75 },
                {
                    type: 'forge:nbt',
                    item: 'naturesaura:aura_bottle',
                    count: 1,
                    nbt: '{stored_type:"naturesaura:nether"}'
                },
                { item: 'naturesaura:tainted_gold', count: 1 },
                { item: 'botania:rune_fire', count: 1, return_chance: 0.75 },
                { item: 'botania:rune_air', count: 1, return_chance: 0.75 }
            ],
            output: {
                entries: [{ result: { item: 'naturesaura:calling_spirit', count: 3 }, weight: 1 }],
                empty_weight: 0,
                rolls: 1
            }
        },
        {
            inputs: [
                { tag: 'forge:storage_blocks/iron', count: 1 },
                { tag: 'forge:dusts/iron', count: 1 },
                { tag: 'forge:dusts/fluorite', count: 1 },
                { tag: 'forge:dusts/copper', count: 1 }
            ],
            output: {
                entries: [{ result: { item: 'minecraft:lodestone', count: 1 }, weight: 1 }],
                empty_weight: 0,
                rolls: 1
            }
        },
        {
            inputs: [
                { tag: 'botania:petals', count: 2 },
                { item: 'botania:quartz_blaze', count: 2 },
                { tag: 'forge:nuggets/nebu', count: 1 }
            ],
            output: {
                entries: [{ result: { item: 'botania:spark', count: 1 }, weight: 1 }],
                empty_weight: 0,
                rolls: 1
            }
        },
        {
            inputs: [
                { item: 'eidolon:gold_inlay', count: 2 },
                { item: 'eidolon:pewter_inlay', count: 1 },
                { tag: 'forge:gems/mana', count: 1 },
                { item: 'architects_palette:sunmetal_blend', count: 4 }
            ],
            output: {
                entries: [{ result: { item: 'atum:scarab', count: 1 }, weight: 1 }],
                empty_weight: 0,
                rolls: 1
            },
            id: 'atum:scarab'
        },
        {
            inputs: [
                { item: 'minecraft:bell', count: 1 },
                { item: 'atum:ectoplasm', count: 3 },
                { tag: 'forge:dusts/fluorite', count: 1 },
                { tag: 'atum:relic_non_dirty', count: 1 }
            ],
            output: {
                entries: [{ result: { item: 'meetyourfight:haunted_bell', count: 1 }, weight: 1 }],
                empty_weight: 0,
                rolls: 1
            },
            id: 'meetyourfight:haunted_bell'
        }
    ];

    recipes.forEach((recipe) => {
        const re = event.custom({
            type: 'interactio:item_lightning',
            inputs: recipe.inputs,
            output: recipe.output
        });
        if (recipe.id) {
            re.id(recipe.id);
        }
    });
});
