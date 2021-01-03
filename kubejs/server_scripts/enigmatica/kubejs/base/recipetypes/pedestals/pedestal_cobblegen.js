events.listen('recipes', function (event) {
    event.remove({ id: 'pedestals:pedestal_cobblegen/blackstone' });
    var data = {
        recipes: [
            {
                type: 'cobblestone',
                blocks: [
                    'byg:ether_stone',
                    'byg:red_rock',
                    'byg:scoria_cobblestone',
                    'byg:soapstone',
                    'embellishcraft:basalt_cobblestone',
                    'embellishcraft:gneiss_cobblestone',
                    'embellishcraft:jade_cobblestone',
                    'embellishcraft:larvikite_cobblestone',
                    'embellishcraft:marble_cobblestone',
                    'embellishcraft:slate_cobblestone',
                    'minecraft:blackstone',
                    'create:andesite_cobblestone',
                    'create:diorite_cobblestone',
                    'create:granite_cobblestone',
                    'quark:cobbedstone',
                    'undergarden:depthrock',
                    'undergarden:shiverstone',
                    'create:dark_scoria_cobblestone',
                    'create:scoria_cobblestone',
                    'create:gabbro_cobblestone',
                    'create:dolomite_cobblestone',
                    'create:weathered_limestone_cobblestone',
                    'create:limestone_cobblestone'
                ]
            },
            {
                type: 'stone',
                blocks: [
                    'minecraft:andesite',
                    'minecraft:diorite',
                    'minecraft:granite',
                    'biomesoplenty:black_sandstone',
                    'biomesoplenty:orange_sandstone',
                    'biomesoplenty:white_sandstone',
                    'byg:black_sandstone',
                    'byg:blue_sandstone',
                    'byg:dacite',
                    'byg:purple_sandstone',
                    'byg:scoria_stone',
                    'byg:white_sandstone',
                    'embellishcraft:basalt',
                    'embellishcraft:gneiss',
                    'embellishcraft:jade',
                    'embellishcraft:larvikite',
                    'embellishcraft:marble',
                    'embellishcraft:slate',
                    'minecraft:red_sandstone',
                    'minecraft:sandstone',
                    'quark:basalt',
                    'quark:brimstone',
                    'quark:jasper',
                    'quark:limestone',
                    'quark:marble',
                    'quark:permafrost',
                    'quark:slate',
                    'astralsorcery:marble_raw',
                    'create:dark_scoria',
                    'create:scoria',
                    'create:gabbro',
                    'create:dolomite',
                    'create:weathered_limestone',
                    'create:limestone'
                ]
            }
        ]
    };

    data.recipes.forEach((recipe) => {
        if (recipe.type == 'cobblestone') {
            recipe.blocks.forEach((block) => {
                event.recipes.pedestals.pedestal_cobblegen({
                    type: 'pedestals:pedestal_cobblegen',
                    ingredient: {
                        item: block
                    },
                    result: {
                        item: block,
                        count: 1
                    }
                });
            });
        } else if (recipe.type == 'stone') {
            recipe.blocks.forEach((block) => {
                event.recipes.pedestals.pedestal_cobblegensilk({
                    type: 'pedestals:pedestal_cobblegensilk',
                    ingredient: {
                        item: block
                    },
                    result: {
                        item: block,
                        count: 1
                    }
                });
            });
        }
    });
});
