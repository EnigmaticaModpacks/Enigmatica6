events.listen('recipes', function (event) {
    var variants = woodVariantsUG;

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
            event.recipes.thermal.sawmill({
                type: 'thermal:sawmill',
                ingredient: {
                    item: recipe.input
                },
                result: [
                  {
                    item: recipe.output,
                    count: recipe.count
                  },
                  {
                    item: 'emendatusenigmatica:wood_dust',
                    chance: 1.25
                  }
                ],
                energy: 1000
              });
        });        
    });
});