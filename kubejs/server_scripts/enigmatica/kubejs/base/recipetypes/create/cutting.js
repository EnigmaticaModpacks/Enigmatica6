events.listen('recipes', function (event) {
    var variants = [
        'byg:aspen',
        'byg:baobab',
        'byg:blue_enchanted',
        'byg:cherry',
        'byg:cika',
        'byg:cypress',
        'byg:ebony',
        'byg:ether',
        'byg:fir',
        'byg:green_enchanted',
        'byg:holly',
        'byg:jacaranda',
        'byg:lament',
        'byg:mahogany',
        'byg:mangrove',
        'byg:maple',
        'byg:nightshade',
        'byg:palm',
        'byg:palo_verde',
        'byg:pine',
        'byg:rainbow_eucalyptus',
        'byg:redwood',
        'byg:skyris',
        'byg:willow',
        'byg:witch_hazel',
        'byg:zelkova',
        'byg:sythian',
        'byg:bulbis',
        'byg:embur'
        // No stripped variant
        // 'byg:withering_oak_log',
        // 'byg:withering_oak_wood',
        /* Exceptions:
        'byg:sythian_hyphae',
        'byg:sythian_stem',
        'byg:bulbis_stem',
        'byg:bulbis_wood',
        'byg:embur_hyphae',
        'byg:embur_pedu',*/
    ];

    variants.forEach((variant) => {
        var splitVariant = variant.split(':');
        var modID = splitVariant[0];
        var logType = splitVariant[1];
        var logSuffix;
        var woodSuffix;

        switch(logType){
            case 'bulbis':
                logSuffix = '_stem';
                break;
            case 'sythian':
                logSuffix = '_stem';
                woodSuffix = '_hyphae';
                break;
            case 'embur':
                logSuffix = '_pedu';
                woodSuffix = '_hyphae';
                break;
            default: 
                logSuffix = '_log';
                woodSuffix = '_wood';
        }

        var logBlock = modID + ':' + logType + logSuffix;
        var woodBlock = modID  + ':' + logType + woodSuffix;
        var logBlockStripped = modID + ':stripped_' + logType + logSuffix;
        var woodBlockStripped = modID  + ':stripped_' + logType + woodSuffix;
        var plankBlock = modID  + ':' + logType + '_planks';

        var data = {
             recipes : [
                {input: logBlock, output: logBlockStripped, count: 1, time: 50 },
                {input: woodBlock, output: woodBlockStripped, count: 1, time: 50 },
                {input: logBlockStripped, output: plankBlock, count: 5, time: 100 },
                {input: woodBlockStripped, output: plankBlock, count: 5, time: 100 }
        ]};

        data.recipes.forEach((recipe) => {
            event.recipes.create.cutting({
                type: 'create:cutting',
                ingredients: [
                {
                    item: recipe.input
                }
                ],
                results: [
                {
                    item: recipe.output,
                    count: recipe.count
                }
                ],
                processingTime: recipe.time
            });
        });
        
    });
});
