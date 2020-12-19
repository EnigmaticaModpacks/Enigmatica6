events.listen('recipes', function (event) {
    // Withering Oak Exceptions, these are meant to strip to Vanilla Oak
   var data = {
        recipes : [
           {input: 'byg:withering_oak_log', output: 'minecraft:stripped_oak_log', count: 1, time: 50 },
           {input: 'byg:withering_oak_wood', output: 'minecraft:stripped_oak_log', count: 1, time: 50 }
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

    var variants = woodVariantsBYG.concat(woodVariantsUG);

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

        if (modID == 'undergarden') {
            data = {
                recipes : [
                    {input: logBlock, output: plankBlock, count: 5, time: 100 },
                    {input: woodBlock, output: plankBlock, count: 5, time: 100 }
            ]};
        } else {
            data = {
                recipes : [
                    {input: logBlock, output: logBlockStripped, count: 1, time: 50 },
                    {input: woodBlock, output: woodBlockStripped, count: 1, time: 50 },
                    {input: logBlockStripped, output: plankBlock, count: 5, time: 100 },
                    {input: woodBlockStripped, output: plankBlock, count: 5, time: 100 }
            ]};
        }   
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
