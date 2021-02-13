events.listen('recipes', (event) => {
    event.custom({
        type: 'immersivepetroleum:distillation',
        byproducts: [
            {
                item: 'emendatusenigmatica:bitumen_gem',
                chance: '0.07'
            }
        ],
        results: [
            {
                fluid: 'immersivepetroleum:lubricant',
                amount: 9
            },
            {
                fluid: 'immersivepetroleum:diesel',
                amount: 27
            },
            {
                fluid: 'immersivepetroleum:gasoline',
                amount: 39
            }
        ],
        input: {
            tag: 'forge:crude_oil',
            amount: 75
        },
        energy: 2048
    });
});
