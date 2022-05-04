onEvent('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/masterful_machinery/wicked_altar/';
    const recipes = [
        {
            outputs: [{ type: 'masterfulmachinery:items', data: { item: 'eidolon:reaper_scythe', count: 1 } }],
            inputs: [
                { type: 'masterfulmachinery:items', data: { tag: 'forge:ingots/pewter', count: 3 } },
                { type: 'masterfulmachinery:items', data: { item: 'betterendforge:leather_wrapped_stick', count: 2 } },
                { type: 'masterfulmachinery:items', data: { item: 'eidolon:soul_shard', count: 2 } },
                { type: 'masterfulmachinery:items', data: { item: 'eidolon:tattered_cloth', count: 1 } },
                { type: 'masterfulmachinery:items', data: { item: 'atum:anubis_godshard', count: 1 } },
                {
                    type: 'masterfulmachinery:fluids',
                    data: { fluid: 'bloodmagic:life_essence_fluid', amount: 1000 }
                }
            ],
            ticks: 100,
            id: `${id_prefix}reaper_scythe`
        },
        {
            outputs: [{ type: 'masterfulmachinery:items', data: { item: 'eidolon:cleaving_axe', count: 1 } }],
            inputs: [
                { type: 'masterfulmachinery:items', data: { tag: 'forge:ingots/pewter', count: 3 } },
                { type: 'masterfulmachinery:items', data: { item: 'betterendforge:leather_wrapped_stick', count: 2 } },
                { type: 'masterfulmachinery:items', data: { item: 'minecraft:prismarine_crystals', count: 2 } },
                { type: 'masterfulmachinery:items', data: { tag: 'forge:inlays/pewter', count: 1 } },
                { type: 'masterfulmachinery:items', data: { item: 'atum:anput_godshard', count: 1 } },
                {
                    type: 'masterfulmachinery:fluids',
                    data: { fluid: 'bloodmagic:life_essence_fluid', amount: 1000 }
                }
            ],
            ticks: 100,
            id: `${id_prefix}cleaving_axe`
        },
        {
            outputs: [{ type: 'masterfulmachinery:items', data: { item: 'eidolon:prestigious_palm', count: 1 } }],
            inputs: [
                { type: 'masterfulmachinery:items', data: { item: 'eidolon:wicked_weave', count: 4 } },
                { type: 'masterfulmachinery:items', data: { item: 'eidolon:ender_calx', count: 2 } },
                { type: 'masterfulmachinery:items', data: { item: 'eidolon:lesser_soul_gem', count: 1 } },
                { type: 'masterfulmachinery:items', data: { item: 'bloodmagic:reagentvoid', count: 1 } },
                { type: 'masterfulmachinery:items', data: { item: 'eidolon:warped_sprouts', count: 1 } },
                {
                    type: 'masterfulmachinery:fluids',
                    data: { fluid: 'bloodmagic:life_essence_fluid', amount: 1000 }
                }
            ],
            ticks: 100,
            id: `${id_prefix}prestigious_palm`
        },
        {
            outputs: [{ type: 'masterfulmachinery:items', data: { item: 'eidolon:lesser_soul_gem', count: 4 } }],
            inputs: [
                { type: 'masterfulmachinery:items', data: { item: 'occultism:spirit_attuned_gem', count: 4 } },
                { type: 'masterfulmachinery:items', data: { item: 'eidolon:ender_calx', count: 8 } },
                { type: 'masterfulmachinery:items', data: { item: 'atum:nepthys_godshard', count: 1 } },
                {
                    type: 'masterfulmachinery:fluids',
                    data: { fluid: 'bloodmagic:life_essence_fluid', amount: 4000 }
                }
            ],
            ticks: 400,
            id: `${id_prefix}lesser_soul_gem`
        },
        {
            outputs: [{ type: 'masterfulmachinery:items', data: { item: 'eidolon:reversal_pick', count: 1 } }],
            inputs: [
                { type: 'masterfulmachinery:items', data: { tag: 'forge:ingots/hepatizon', count: 3 } },
                { type: 'masterfulmachinery:items', data: { item: 'betterendforge:leather_wrapped_stick', count: 2 } },
                { type: 'masterfulmachinery:items', data: { item: 'eidolon:soul_shard', count: 2 } },
                { type: 'masterfulmachinery:items', data: { tag: 'forge:inlays/pewter', count: 1 } },
                { type: 'masterfulmachinery:items', data: { item: 'eidolon:lesser_soul_gem', count: 1 } },
                {
                    type: 'masterfulmachinery:fluids',
                    data: { fluid: 'bloodmagic:life_essence_fluid', amount: 5000 }
                }
            ],
            ticks: 500,
            id: `${id_prefix}reversal_pick`
        },
        {
            outputs: [{ type: 'masterfulmachinery:items', data: { item: 'alexsmobs:dimensional_carver', count: 1 } }],
            inputs: [
                { type: 'masterfulmachinery:items', data: { item: 'eidolon:reversal_pick', count: 1 } },
                { type: 'masterfulmachinery:items', data: { item: 'alexsmobs:void_worm_mandible', count: 2 } },
                { type: 'masterfulmachinery:items', data: { item: 'alexsmobs:void_worm_eye', count: 1 } },
                { type: 'masterfulmachinery:items', data: { tag: 'forge:ingots/netherite', count: 2 } },
                {
                    type: 'masterfulmachinery:fluids',
                    perTick: true,
                    data: { fluid: 'bloodmagic:life_essence_fluid', amount: 5000 }
                }
            ],
            ticks: 500,
            id: 'alexsmobs:dimensional_carver'
        },
        {
            outputs: [{ type: 'masterfulmachinery:items', data: { item: 'eidolon:glass_hand', count: 1 } }],
            inputs: [
                { type: 'masterfulmachinery:items', data: { item: 'eidolon:basic_amulet', count: 1 } },
                { type: 'masterfulmachinery:items', data: { item: 'create:brass_hand', count: 1 } },
                { type: 'masterfulmachinery:items', data: { item: 'eidolon:zombie_heart', count: 1 } },
                { type: 'masterfulmachinery:items', data: { item: 'eidolon:lesser_soul_gem', count: 2 } },
                { type: 'masterfulmachinery:items', data: { item: 'eidolon:wraith_heart', count: 1 } },
                {
                    type: 'masterfulmachinery:items',
                    data: { item: 'glassential:glass_dark_ethereal_reverse', count: 1 }
                },
                {
                    type: 'masterfulmachinery:fluids',
                    data: { fluid: 'bloodmagic:life_essence_fluid', amount: 10000 }
                }
            ],
            ticks: 1000,
            id: `${id_prefix}glass_hand`
        },
        {
            outputs: [{ type: 'masterfulmachinery:items', data: { item: 'eidolon:void_amulet', count: 1 } }],
            inputs: [
                { type: 'masterfulmachinery:items', data: { item: 'eidolon:basic_amulet', count: 1 } },
                { type: 'masterfulmachinery:items', data: { item: 'alexsmobs:emu_feather', count: 4 } },
                { type: 'masterfulmachinery:items', data: { tag: 'forge:inlays/pewter', count: 2 } },
                { type: 'masterfulmachinery:items', data: { item: 'eidolon:soul_shard', count: 2 } },
                { type: 'masterfulmachinery:items', data: { tag: 'forge:ingots/silver', count: 1 } },
                {
                    type: 'masterfulmachinery:fluids',
                    data: { fluid: 'bloodmagic:life_essence_fluid', amount: 10000 }
                }
            ],
            ticks: 1000,
            id: `${id_prefix}void_amulet`
        },
        {
            outputs: [{ type: 'masterfulmachinery:items', data: { item: 'bloodmagic:componentframeparts', count: 1 } }],
            inputs: [
                { type: 'masterfulmachinery:items', data: { tag: 'forge:gears/osmium', count: 1 } },
                { type: 'masterfulmachinery:items', data: { item: 'tconstruct:ender_slime_crystal', count: 1 } },
                { type: 'masterfulmachinery:items', data: { tag: 'forge:nuggets/utherium', count: 4 } },
                {
                    type: 'masterfulmachinery:fluids',
                    data: { fluid: 'bloodmagic:life_essence_fluid', amount: 1000 }
                }
            ],
            ticks: 100,
            id: `${id_prefix}componentframeparts`
        },
        {
            outputs: [
                { type: 'masterfulmachinery:items', data: { item: 'bloodmagic:itemrouterfilterexact', count: 1 } }
            ],
            inputs: [
                { type: 'masterfulmachinery:items', data: { item: 'bloodmagic:componentframeparts', count: 1 } },
                { type: 'masterfulmachinery:items', data: { item: 'atum:red_stained_crystal_glass_pane', count: 1 } },
                { type: 'masterfulmachinery:items', data: { tag: 'forge:nuggets/arcane_gold', count: 1 } },
                {
                    type: 'masterfulmachinery:fluids',
                    data: { fluid: 'bloodmagic:life_essence_fluid', amount: 1000 }
                }
            ],
            ticks: 100,
            id: `${id_prefix}itemrouterfilterexact`
        },
        {
            outputs: [
                { type: 'masterfulmachinery:items', data: { item: 'bloodmagic:itemrouterfilteroredict', count: 1 } }
            ],
            inputs: [
                { type: 'masterfulmachinery:items', data: { item: 'bloodmagic:componentframeparts', count: 1 } },
                { type: 'masterfulmachinery:items', data: { item: 'atum:lime_stained_crystal_glass_pane', count: 1 } },
                { type: 'masterfulmachinery:items', data: { tag: 'forge:chunks', count: 1 } },
                {
                    type: 'masterfulmachinery:fluids',
                    data: { fluid: 'bloodmagic:life_essence_fluid', amount: 1000 }
                }
            ],
            ticks: 100,
            id: `${id_prefix}itemrouterfilteroredict`
        },
        {
            outputs: [
                { type: 'masterfulmachinery:items', data: { item: 'bloodmagic:itemrouterfilterenchant', count: 1 } }
            ],
            inputs: [
                { type: 'masterfulmachinery:items', data: { item: 'bloodmagic:componentframeparts', count: 1 } },
                { type: 'masterfulmachinery:items', data: { item: 'atum:green_stained_crystal_glass_pane', count: 1 } },
                { type: 'masterfulmachinery:items', data: { item: 'minecraft:enchanted_book', count: 1 } },
                {
                    type: 'masterfulmachinery:fluids',
                    data: { fluid: 'bloodmagic:life_essence_fluid', amount: 1000 }
                }
            ],
            ticks: 100,
            id: `${id_prefix}itemrouterfilterenchant`
        },
        {
            outputs: [
                { type: 'masterfulmachinery:items', data: { item: 'bloodmagic:itemrouterfiltermoditems', count: 1 } }
            ],
            inputs: [
                { type: 'masterfulmachinery:items', data: { item: 'bloodmagic:componentframeparts', count: 1 } },
                {
                    type: 'masterfulmachinery:items',
                    data: { item: 'atum:yellow_stained_crystal_glass_pane', count: 1 }
                },
                { type: 'masterfulmachinery:items', data: { item: 'eidolon:enchanted_ash', count: 1 } },
                {
                    type: 'masterfulmachinery:fluids',
                    data: { fluid: 'bloodmagic:life_essence_fluid', amount: 1000 }
                }
            ],
            ticks: 100,
            id: `${id_prefix}itemrouterfiltermoditems`
        },
        {
            outputs: [
                { type: 'masterfulmachinery:items', data: { item: 'bloodmagic:itemrouterfiltercomposite', count: 1 } }
            ],
            inputs: [
                { type: 'masterfulmachinery:items', data: { item: 'bloodmagic:componentframeparts', count: 1 } },
                { type: 'masterfulmachinery:items', data: { item: 'atum:white_stained_crystal_glass_pane', count: 1 } },
                { type: 'masterfulmachinery:items', data: { tag: 'forge:nuggets/silicon_bronze', count: 1 } },
                {
                    type: 'masterfulmachinery:fluids',
                    data: { fluid: 'bloodmagic:life_essence_fluid', amount: 1000 }
                }
            ],
            ticks: 100,
            id: `${id_prefix}itemrouterfiltercomposite`
        },
        {
            outputs: [{ type: 'masterfulmachinery:items', data: { item: 'bloodmagic:noderouter', count: 1 } }],
            inputs: [
                { type: 'masterfulmachinery:items', data: { item: 'upgrade_aquatic:elder_eye', count: 1 } },
                { type: 'masterfulmachinery:items', data: { item: 'occultism:spirit_attuned_gem', count: 2 } },
                { type: 'masterfulmachinery:items', data: { tag: 'forge:rods/prismarine', count: 2 } },
                { type: 'masterfulmachinery:items', data: { tag: 'forge:inlays/arcane_gold', count: 1 } },
                {
                    type: 'masterfulmachinery:fluids',
                    data: { fluid: 'bloodmagic:life_essence_fluid', amount: 50000 }
                }
            ],
            ticks: 1000,
            id: `${id_prefix}noderouter`
        },
        {
            outputs: [{ type: 'masterfulmachinery:items', data: { item: 'bloodmagic:itemroutingnode', count: 2 } }],
            inputs: [
                { type: 'masterfulmachinery:items', data: { item: 'botania:corporea_spark', count: 2 } },
                { type: 'masterfulmachinery:items', data: { item: 'occultism:spirit_attuned_gem', count: 2 } },
                { type: 'masterfulmachinery:items', data: { item: 'architects_palette:moonstone', count: 1 } },
                {
                    type: 'masterfulmachinery:fluids',
                    data: { fluid: 'bloodmagic:life_essence_fluid', amount: 500 }
                }
            ],
            ticks: 50,
            id: `${id_prefix}itemroutingnode`
        },
        {
            outputs: [{ type: 'masterfulmachinery:items', data: { item: 'bloodmagic:inputroutingnode', count: 1 } }],
            inputs: [
                { type: 'masterfulmachinery:items', data: { item: 'bloodmagic:itemroutingnode', count: 1 } },
                { type: 'masterfulmachinery:items', data: { tag: 'forge:nuggets/lumium', count: 1 } },
                { type: 'masterfulmachinery:items', data: { tag: 'forge:dusts/fluorite', count: 1 } },
                {
                    type: 'masterfulmachinery:fluids',
                    data: { fluid: 'bloodmagic:life_essence_fluid', amount: 500 }
                }
            ],
            ticks: 50,
            id: `${id_prefix}inputroutingnode`
        },
        {
            outputs: [{ type: 'masterfulmachinery:items', data: { item: 'bloodmagic:outputroutingnode', count: 1 } }],
            inputs: [
                { type: 'masterfulmachinery:items', data: { item: 'bloodmagic:itemroutingnode', count: 1 } },
                { type: 'masterfulmachinery:items', data: { tag: 'forge:nuggets/signalum', count: 1 } },
                { type: 'masterfulmachinery:items', data: { tag: 'forge:dusts/fluorite', count: 1 } },
                {
                    type: 'masterfulmachinery:fluids',
                    data: { fluid: 'bloodmagic:life_essence_fluid', amount: 500 }
                }
            ],
            ticks: 50,
            id: `${id_prefix}outputroutingnode`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'masterfulmachinery:machine_process';
        recipe.structureId = 'wicked_altar_structure';
        recipe.controllerId = 'wicked_altar';
        event.custom(recipe).id(recipe.id);
    });
});
