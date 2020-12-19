events.listen('recipes', function (event) {
    var variants = woodVariantsBYG.concat(woodVariantsBOP).concat(woodVariantsUG);

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
            case 'grongle':
                logSuffix = '_stem';
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
                {input: logBlock, output: plankBlock, count: 6 },
                {input: woodBlock, output: plankBlock, count: 6 },
                {input: logBlockStripped, output: plankBlock, count: 6 },
                {input: woodBlockStripped, output: plankBlock, count: 6 }
        ]};

        data.recipes.forEach((recipe) => {
            event.recipes.mekanism.sawing({
                type: 'mekanism:sawing',
                input: {
                  ingredient: {
                    item: recipe.input
                  }
                },
                mainOutput: {
                  item: recipe.output,
                  count: recipe.count
                },
                secondaryOutput: {
                  item: 'emendatusenigmatica:wood_dust'
                },
                secondaryChance: 0.25
            });
        });        
    });
});
