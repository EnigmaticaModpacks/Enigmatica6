events.listen('item.tags', function (event) {
    event
        .get('forge:wires')
        .add('immersiveengineering:wire_steel')
        .add('immersiveengineering:wire_aluminum')
        .add('immersiveengineering:wire_copper')
        .add('immersiveengineering:wire_electrum');

        event.get('forge:wires/steel').add('immersiveengineering:wire_steel');
        event.get('forge:wires/aluminum').add('immersiveengineering:wire_aluminum');
        event.get('forge:wires/copper').add('immersiveengineering:wire_copper');
        event.get('forge:wires/electrum').add('immersiveengineering:wire_electrum');

});
