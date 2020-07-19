events.listen('recipes', function (event) {
    var blockNames = ['stained_glass', 'stained_glass_pane', 'terracotta', 'concrete_powder', 'wool', 'carpet'];

    for (var i = 0; i < colors.length; i++) {
        var dyeTag = '#forge:dyes/' + colors[i];
        for (var j = 0; j < blockNames.length; j++) {
            var itemTag = '#forge:' + blockNames[j];
            var block = 'minecraft:' + colors[i] + '_' + blockNames[j];
            if (blockNames[j] === 'stained_glass_pane') {
                event.remove({ id: block + '_from_glass_pane' });
            } else {
                event.remove({ id: block });
            }

            event.shaped({ item: block, count: 8 }, ['SSS', 'SDS', 'SSS'], {
                S: itemTag,
                D: dyeTag
            });
            event.shapeless({ item: block, count: 1 }, [dyeTag, itemTag]);
        }

        var itemTag = '#forge:' + 'concrete_powder';
        var sand = '#forge:sand';
        var gravel = '#forge:gravel';

        event.shapeless({ item: 'minecraft:' + colors[i] + '_concrete_powder', count: 8 }, [
            dyeTag,
            sand,
            sand,
            sand,
            sand,
            gravel,
            gravel,
            gravel,
            gravel
        ]);

        var wool = 'minecraft:' + colors[i] + '_wool';
        event.remove({ id: 'minecraft:' + colors[i] + '_carpet_from_white_carpet' });
        event.shaped({ item: 'minecraft:' + colors[i] + '_carpet', count: 3 }, ['WW'], {
            W: wool
        });

        var glass_pane = 'minecraft:glass_pane';
        event.shaped({ item: 'minecraft:' + colors[i] + '_stained_glass_pane', count: 8 }, ['GGG', 'GDG', 'GGG'], {
            G: glass_pane,
            D: dyeTag
        });

        var glass = 'minecraft:glass';
        event.shaped({ item: 'minecraft:' + colors[i] + '_stained_glass', count: 8 }, ['GGG', 'GDG', 'GGG'], {
            G: glass,
            D: dyeTag
        });
    }

    // Replaces recipes not using forge:dyes tag for inputs
    colors.forEach(function (color) {
        event.replaceInput({}, 'minecraft:' + color + '_dye', '#forge:dyes/' + color);
    });
});
