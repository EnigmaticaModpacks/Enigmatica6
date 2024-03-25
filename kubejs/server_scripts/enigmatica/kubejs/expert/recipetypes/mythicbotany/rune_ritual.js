onEvent('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }

    const id_prefix = 'enigmatica:expert/mythicbotany/rune_ritual/';
    recipes = [
        {
            group: 'rune_rituals',
            center: { item: 'mythicbotany:fimbultyr_tablet' },
            runes: [
                { item: '#botania:runes/midgard', pos: { x: -2, z: -2 } },
                { item: '#botania:runes/midgard', pos: { x: 2, z: 2 } },
                { item: '#botania:runes/helheim', pos: { x: 2, z: -2 } },
                { item: '#botania:runes/helheim', pos: { x: -2, z: 2 } },
                { item: '#botania:runes/summer', pos: { x: -1, z: -3 } },
                { item: '#botania:runes/summer', pos: { x: 1, z: 3 } },
                { item: '#botania:runes/summer', pos: { x: -3, z: -1 } },
                { item: '#botania:runes/summer', pos: { x: 3, z: 1 } },
                { item: '#botania:runes/fire', pos: { x: 1, z: -3 } },
                { item: '#botania:runes/fire', pos: { x: -1, z: 3 } },
                { item: '#botania:runes/fire', pos: { x: 3, z: -1 } },
                { item: '#botania:runes/fire', pos: { x: -3, z: 1 } }
            ],
            consume_runes: false,
            mana: 4000000,
            ticks: 200,
            inputs: [
                Item.of('botania:ender_dagger', '{Damage:0}').weakNBT(),
                'bloodmagic:looting_anointment_l',
                'botania:flask',
                'naturesaura:token_rage'
            ],
            outputs: ['mythicbotany:kvasir_blood'],
            special_input: 'mythicbotany:wandering_trader',
            id: 'mythicbotany:mythicbotany_rune_rituals/kvasir_blood'
        },
        {
            group: 'rune_rituals',
            center: { tag: 'botania:runes/midgard' },
            runes: [
                { pos: { x: -4, z: 4 }, item: 'ars_nouveau:ritual_moonfall' },
                { pos: { x: -3, z: 4 }, item: 'astralsorcery:shifting_star_aevitas' },
                { pos: { x: -2, z: 4 }, item: 'astralsorcery:resonating_gem' },
                { pos: { x: -1, z: 4 }, item: 'kubejs:crystalline_oak_leaves' },
                { pos: { x: 0, z: 4 }, item: '#botania:runes/asgard' },
                { pos: { x: 1, z: 4 }, item: 'kubejs:crystalline_oak_leaves' },
                { pos: { x: 2, z: 4 }, item: 'astralsorcery:resonating_gem' },
                { pos: { x: 3, z: 4 }, item: 'astralsorcery:shifting_star_aevitas' },
                { pos: { x: 4, z: 4 }, item: 'ars_nouveau:ritual_sunrise' },

                { pos: { x: -4, z: 3 }, item: 'astralsorcery:shifting_star_aevitas' },
                { pos: { x: -3, z: 3 }, item: '#botania:runes/alfheim' },
                { pos: { x: -2, z: 3 }, item: 'mythicbotany:yggdrasil_branch' },
                { pos: { x: -1, z: 3 }, item: 'kubejs:crystalline_flowering_palo_verde_leaves' },
                { pos: { x: 0, z: 3 }, item: 'mythicbotany:yggdrasil_branch' },
                { pos: { x: 1, z: 3 }, item: 'kubejs:crystalline_flowering_palo_verde_leaves' },
                { pos: { x: 2, z: 3 }, item: 'mythicbotany:yggdrasil_branch' },
                { pos: { x: 3, z: 3 }, item: '#botania:runes/vanaheim' },
                { pos: { x: 4, z: 3 }, item: 'astralsorcery:shifting_star_aevitas' },

                { pos: { x: -4, z: 2 }, item: 'astralsorcery:resonating_gem' },
                { pos: { x: -3, z: 2 }, item: 'kubejs:crystalline_oak_leaves' },
                { pos: { x: -2, z: 2 }, item: 'kubejs:crystalline_flowering_palo_verde_leaves' },
                { pos: { x: -1, z: 2 }, item: 'mythicbotany:yggdrasil_branch' },
                { pos: { x: 0, z: 2 }, item: 'botania:livingwood' },
                { pos: { x: 1, z: 2 }, item: 'mythicbotany:yggdrasil_branch' },
                { pos: { x: 2, z: 2 }, item: 'kubejs:crystalline_flowering_palo_verde_leaves' },
                { pos: { x: 3, z: 2 }, item: 'kubejs:crystalline_oak_leaves' },
                { pos: { x: 4, z: 2 }, item: 'astralsorcery:resonating_gem' },

                { pos: { x: -4, z: 1 }, item: 'kubejs:crystalline_oak_leaves' },
                { pos: { x: -3, z: 1 }, item: 'mythicbotany:yggdrasil_branch' },
                { pos: { x: -2, z: 1 }, item: 'kubejs:crystalline_oak_leaves' },
                { pos: { x: -1, z: 1 }, item: 'kubejs:crystalline_flowering_palo_verde_leaves' },
                { pos: { x: 0, z: 1 }, item: 'botania:livingwood' },
                { pos: { x: 1, z: 1 }, item: 'kubejs:crystalline_flowering_palo_verde_leaves' },
                { pos: { x: 2, z: 1 }, item: 'kubejs:crystalline_oak_leaves' },
                { pos: { x: 3, z: 1 }, item: 'mythicbotany:yggdrasil_branch' },
                { pos: { x: 4, z: 1 }, item: 'kubejs:crystalline_oak_leaves' },

                { pos: { x: -4, z: 0 }, item: '#botania:runes/muspelheim' },
                { pos: { x: -3, z: 0 }, item: 'kubejs:crystalline_oak_leaves' },
                { pos: { x: -2, z: 0 }, item: 'mythicbotany:yggdrasil_branch' },
                { pos: { x: -1, z: 0 }, item: 'kubejs:crystalline_oak_leaves' },
                //{ pos: { x: 0, z: 0 }, item: center },
                { pos: { x: 1, z: 0 }, item: 'kubejs:crystalline_oak_leaves' },
                { pos: { x: 2, z: 0 }, item: 'mythicbotany:yggdrasil_branch' },
                { pos: { x: 3, z: 0 }, item: 'kubejs:crystalline_oak_leaves' },
                { pos: { x: 4, z: 0 }, item: '#botania:runes/niflheim' },

                { pos: { x: -2, z: -1 }, item: 'kubejs:crystalline_oak_leaves' },
                { pos: { x: -1, z: -1 }, item: 'mythicbotany:yggdrasil_branch' },
                { pos: { x: 0, z: -1 }, item: 'botania:livingwood' },
                { pos: { x: 1, z: -1 }, item: 'mythicbotany:yggdrasil_branch' },
                { pos: { x: 2, z: -1 }, item: 'kubejs:crystalline_oak_leaves' },

                { pos: { x: 0, z: -2 }, item: 'botania:livingwood' },

                { pos: { x: -4, z: -3 }, item: 'quark:root_item' },
                { pos: { x: -3, z: -3 }, item: '#botania:runes/joetunheim' },
                { pos: { x: 0, z: -3 }, item: 'botania:livingwood' },
                { pos: { x: 3, z: -3 }, item: '#botania:runes/nidavellir' },
                { pos: { x: 4, z: -3 }, item: 'quark:root_item' },

                { pos: { x: -4, z: -4 }, item: 'ars_nouveau:ritual_awakening' },
                { pos: { x: -3, z: -4 }, item: 'quark:root_item' },
                { pos: { x: -2, z: -4 }, item: 'naturesaura:generator_limit_remover' },
                { pos: { x: -1, z: -4 }, item: 'botania:livingwood' },
                { pos: { x: 0, z: -4 }, item: '#botania:runes/helheim' },
                { pos: { x: 1, z: -4 }, item: 'botania:livingwood' },
                { pos: { x: 2, z: -4 }, item: 'naturesaura:generator_limit_remover' },
                { pos: { x: 3, z: -4 }, item: 'quark:root_item' },
                { pos: { x: 4, z: -4 }, item: 'ars_nouveau:ritual_awakening' }
            ],
            consume_runes: true,
            mana: 2000000,
            ticks: 200,
            inputs: ['naturesaura:ancient_sapling'],
            outputs: ['masterfulmachinery:enigmatic_tree_of_life_controller'],
            id: `${id_prefix}enigmatic_tree_of_life_controller`
        },
        {
            group: 'rune_rituals',
            center: { item: 'minecraft:conduit' },
            runes: [
                { pos: { x: -4, z: 4 }, item: 'ars_nouveau:ritual_moonfall' },
                { pos: { x: -3, z: 4 }, item: 'astralsorcery:shifting_star_aevitas' },
                { pos: { x: -2, z: 4 }, item: 'astralsorcery:resonating_gem' },
                { pos: { x: -1, z: 4 }, item: 'kubejs:aura_mastery_token' },
                { pos: { x: 0, z: 4 }, item: 'kubejs:crystalline_oak_leaves' },
                { pos: { x: 1, z: 4 }, item: 'kubejs:energistics_mastery_token' },
                { pos: { x: 2, z: 4 }, item: 'astralsorcery:resonating_gem' },
                { pos: { x: 3, z: 4 }, item: 'astralsorcery:shifting_star_aevitas' },
                { pos: { x: 4, z: 4 }, item: 'ars_nouveau:ritual_sunrise' },

                { pos: { x: -4, z: 3 }, item: 'astralsorcery:shifting_star_aevitas' },
                { pos: { x: -3, z: 3 }, item: 'kubejs:battle_mastery_token' },
                { pos: { x: -2, z: 3 }, item: 'mythicbotany:yggdrasil_branch' },
                { pos: { x: -1, z: 3 }, item: 'kubejs:crystalline_flowering_palo_verde_leaves' },
                { pos: { x: 0, z: 3 }, item: 'mythicbotany:yggdrasil_branch' },
                { pos: { x: 1, z: 3 }, item: 'kubejs:crystalline_flowering_palo_verde_leaves' },
                { pos: { x: 2, z: 3 }, item: 'mythicbotany:yggdrasil_branch' },
                { pos: { x: 3, z: 3 }, item: 'kubejs:astronomy_mastery_token' },
                { pos: { x: 4, z: 3 }, item: 'astralsorcery:shifting_star_aevitas' },

                { pos: { x: -4, z: 2 }, item: 'astralsorcery:resonating_gem' },
                { pos: { x: -3, z: 2 }, item: 'kubejs:crystalline_oak_leaves' },
                { pos: { x: -2, z: 2 }, item: 'kubejs:crystalline_flowering_palo_verde_leaves' },
                { pos: { x: -1, z: 2 }, item: 'mythicbotany:yggdrasil_branch' },
                { pos: { x: 0, z: 2 }, item: 'botania:livingwood' },
                { pos: { x: 1, z: 2 }, item: 'mythicbotany:yggdrasil_branch' },
                { pos: { x: 2, z: 2 }, item: 'kubejs:crystalline_flowering_palo_verde_leaves' },
                { pos: { x: 3, z: 2 }, item: 'kubejs:crystalline_oak_leaves' },
                { pos: { x: 4, z: 2 }, item: 'astralsorcery:resonating_gem' },

                { pos: { x: -4, z: 1 }, item: 'kubejs:ritual_mastery_token' },
                { pos: { x: -3, z: 1 }, item: 'mythicbotany:yggdrasil_branch' },
                { pos: { x: -2, z: 1 }, item: 'kubejs:crystalline_oak_leaves' },
                { pos: { x: -1, z: 1 }, item: 'kubejs:crystalline_flowering_palo_verde_leaves' },
                { pos: { x: 0, z: 1 }, item: 'botania:livingwood' },
                { pos: { x: 1, z: 1 }, item: 'kubejs:crystalline_flowering_palo_verde_leaves' },
                { pos: { x: 2, z: 1 }, item: 'kubejs:crystalline_oak_leaves' },
                { pos: { x: 3, z: 1 }, item: 'mythicbotany:yggdrasil_branch' },
                { pos: { x: 4, z: 1 }, item: 'kubejs:engineering_mastery_token' },

                { pos: { x: -3, z: 0 }, item: 'kubejs:crystalline_oak_leaves' },
                { pos: { x: -2, z: 0 }, item: 'mythicbotany:yggdrasil_branch' },
                { pos: { x: -1, z: 0 }, item: 'kubejs:crystalline_oak_leaves' },
                //{ pos: { x: 0, z: 0 }, item: center },
                { pos: { x: 1, z: 0 }, item: 'kubejs:crystalline_oak_leaves' },
                { pos: { x: 2, z: 0 }, item: 'mythicbotany:yggdrasil_branch' },
                { pos: { x: 3, z: 0 }, item: 'kubejs:crystalline_oak_leaves' },

                { pos: { x: -4, z: -1 }, item: 'kubejs:dimensional_mastery_token' },
                { pos: { x: -2, z: -1 }, item: 'kubejs:crystalline_oak_leaves' },
                { pos: { x: -1, z: -1 }, item: 'mythicbotany:yggdrasil_branch' },
                { pos: { x: 0, z: -1 }, item: 'botania:livingwood' },
                { pos: { x: 1, z: -1 }, item: 'mythicbotany:yggdrasil_branch' },
                { pos: { x: 2, z: -1 }, item: 'kubejs:crystalline_oak_leaves' },
                { pos: { x: 4, z: -1 }, item: 'kubejs:botanical_mastery_token' },

                { pos: { x: 0, z: -2 }, item: 'botania:livingwood' },

                { pos: { x: -4, z: -3 }, item: 'kubejs:laputian_ingot' },
                { pos: { x: -3, z: -3 }, item: 'kubejs:alchemy_mastery_token' },
                { pos: { x: -1, z: -3 }, item: 'botania:livingwood' },
                { pos: { x: 0, z: -3 }, item: 'botania:livingwood' },
                { pos: { x: 1, z: -3 }, item: 'botania:livingwood' },
                { pos: { x: 3, z: -3 }, item: 'kubejs:excavation_mastery_token' },
                { pos: { x: 4, z: -3 }, item: 'kubejs:laputian_ingot' },

                { pos: { x: -4, z: -4 }, item: 'ars_nouveau:ritual_awakening' },
                { pos: { x: -3, z: -4 }, item: 'kubejs:laputian_ingot' },
                { pos: { x: -2, z: -4 }, item: 'botania:livingwood' },
                { pos: { x: -1, z: -4 }, item: 'kubejs:automation_mastery_token' },
                { pos: { x: 0, z: -4 }, item: 'botania:livingwood' },
                { pos: { x: 1, z: -4 }, item: 'kubejs:culinary_mastery_token' },
                { pos: { x: 2, z: -4 }, item: 'botania:livingwood' },
                { pos: { x: 3, z: -4 }, item: 'kubejs:laputian_ingot' },
                { pos: { x: 4, z: -4 }, item: 'ars_nouveau:ritual_awakening' }
            ],
            consume_runes: true,
            mana: 2000000,
            ticks: 200,
            inputs: ['naturesaura:ancient_sapling'],
            outputs: [
                Item.of('trofers:large_trophy', {
                    BlockEntityTag: {
                        Item: { id: 'kubejs:disabled_recipe_indicator', Count: 1 },
                        DisplayHeight: '2.0f.0f',
                        Colors: {
                            Bottom: { Red: 249, Blue: 254, Green: 255 },
                            Top: { Red: 249, Blue: 254, Green: 255 },
                            Middle: { Red: 249, Blue: 254, Green: 255 }
                        },
                        Animation: 'spinning',
                        AnimationSpeed: 0.3,
                        Name: 'Enigmatica 6: Expert Mode'
                    }
                })
            ],
            id: `${id_prefix}enigmatic_tree_of_life_trophy`
        }
    ];

    recipes.forEach((recipe) => {
        let rune_inputs = [];

        recipe.runes.forEach((rune) => {
            rune_inputs.push({
                rune: Item.of(rune.item).toJson(),
                x: rune.pos.x,
                z: rune.pos.z,
                consume: recipe.consume_runes
            });
        });

        recipe.type = 'mythicbotany:rune_ritual';
        recipe.runes = rune_inputs;
        recipe.inputs = recipe.inputs.map((input) => Ingredient.of(input).toJson());
        recipe.outputs = recipe.outputs.map((output) => Item.of(output).toJson());
        event.custom(recipe).id(recipe.id);
    });
});
