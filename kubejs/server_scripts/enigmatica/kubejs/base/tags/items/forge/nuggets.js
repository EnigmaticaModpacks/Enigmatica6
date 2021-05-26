events.listen('item.tags', (event) => {
    event.add('forge:nuggets', [
        'immersiveengineering:nugget_aluminum',
        'immersiveengineering:nugget_lead',
        'immersiveengineering:nugget_silver',
        'immersiveengineering:nugget_nickel',
        'immersiveengineering:nugget_uranium',
        'immersiveengineering:nugget_constantan',
        'immersiveengineering:nugget_electrum',
        'occultism:iesnium_nugget',
        'betterendforge:thallasium_nugget',
        'betterendforge:terminite_nugget'
    ]);

    event.get('forge:nuggets/thallasium').add('betterendforge:thallasium_nugget');
    event.get('forge:nuggets/terminite').add('betterendforge:terminite_nugget');
});
