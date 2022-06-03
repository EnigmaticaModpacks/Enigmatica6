onEvent('fluid.tags', (event) => {
    event.get('forge:crude_oil').add(['immersivepetroleum:oil', 'pneumaticcraft:oil', 'thermal:crude_oil']);
    event.get('forge:tree_oil').add(['thermal:tree_oil']);
    event.get('forge:gasoline').add(['thermal:refined_fuel']);
    event.get('forge:rocket_fuel').add(['resourcefulbees:rocket_honey']);
});
