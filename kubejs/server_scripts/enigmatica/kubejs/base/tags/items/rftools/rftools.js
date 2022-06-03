onEvent('item.tags', (event) => {
    //Crafters
    for (i = 1; i <= 3; i++) {
        event.get('rftools:crafter').add('rftoolsutility:crafter' + i);
    }

    //Power Cells
    for (i = 1; i <= 3; i++) {
        event.get('rftools:powercell').add('rftoolspower:cell' + i);
    }

    //Dimensional Cells
    var dimtiers = ['_simple', '', '_advanced'];
    dimtiers.forEach(function (tier) {
        event.get('rftools:dimensionalcell').add('rftoolspower:dimensionalcell' + tier);
    });

    //Quarry Shape Cards
    var quarrycards = ['_fortune', '_silk', ''];
    quarrycards.forEach(function (card) {
        event.get('rftools:quarrycard').add('rftoolsbuilder:shape_card_quarry' + card);
        event.get('rftools:quarrycard').add('rftoolsbuilder:shape_card_quarry_clear' + card);
    });

    //Fluid Shape Cards
    event.get('rftools:fluidcard').add('rftoolsbuilder:shape_card_liquid');
    event.get('rftools:fluidcard').add('rftoolsbuilder:shape_card_pump');
    event.get('rftools:fluidcard').add('rftoolsbuilder:shape_card_pump_clear');
});
