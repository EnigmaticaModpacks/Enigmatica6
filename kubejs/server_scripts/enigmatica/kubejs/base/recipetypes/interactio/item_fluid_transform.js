events.listen('recipes', function (event) {
    event.recipes.interactio.item_fluid_transform({
        inputs: [
            {
                tag: 'forge:dusts/redstone',
                count: 1
            },
            {
                tag: 'forge:gems/charged_certus_quartz',
                count: 1
            },
            {
                tag: 'forge:gems/quartz',
                count: 1
            }
        ],
        fluid: {
            fluid: 'water'
        },
        output: {
            item: 'emendatusenigmatica:gem_fluix',
            count: 2
        },

        consume_fluid: 0.0
    });
});
