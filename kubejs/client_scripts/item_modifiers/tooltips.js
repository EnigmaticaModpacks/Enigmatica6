 events.listen('client.item_tooltip', function (event) {
 //    switch (event.item.id) {
 //        case 'appliedenergistics2:quantum_entangled_singularity':
 //            event.add(
 //                'To create drop 1 Singularity and 1 Ender Dust (From Applied Energistics) and cause an explosion within range of the items.'
 //            );
 //    }
    global.rsitems.forEach(function(rsitem) {
        if(event.item.id == 'refinedstorage:' + rsitem) {
            event.add(
                'The color of this block can be configured by crafting it with a dye or right clicking it with dye in the world.'
            );
        }
    })
});
