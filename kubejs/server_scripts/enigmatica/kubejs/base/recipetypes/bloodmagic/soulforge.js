events.listen('recipes', (event) => {
    event.recipes.bloodmagic.soulforge({
        type: 'bloodmagic:soulforge',
        input0: {
            tag: 'forge:stone'
        },
        input1: {
            tag: 'forge:rods/blaze'
        },
        input2: {
            item: 'bloodmagic:explosivepowder'
        },
        input3: {
            item: 'bloodmagic:explosivepowder'
        },
        output: {
            item: 'bloodmagic:primitive_explosive_cell',
            nbt: '{Damage:0}'
        },
        minimumDrain: 1200.0,
        drain: 200.0
    });
});
