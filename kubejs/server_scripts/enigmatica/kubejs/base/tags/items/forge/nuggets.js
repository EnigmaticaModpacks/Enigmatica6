onEvent('item.tags', (event) => {
    event.add('forge:nuggets', [
        'betterendforge:terminite_nugget',
        'betterendforge:thallasium_nugget',
        'eidolon:arcane_gold_nugget',
        'eidolon:pewter_nugget',
        'immersiveengineering:nugget_aluminum',
        'immersiveengineering:nugget_constantan',
        'immersiveengineering:nugget_electrum',
        'immersiveengineering:nugget_lead',
        'immersiveengineering:nugget_nickel',
        'immersiveengineering:nugget_silver',
        'immersiveengineering:nugget_uranium',
        'mythicbotany:alfsteel_nugget',
        'occultism:iesnium_nugget',
        'tconstruct:debris_nugget',
        'tconstruct:netherite_nugget'
    ]);

    event.get('forge:nuggets/thallasium').add('betterendforge:thallasium_nugget');
    event.get('forge:nuggets/terminite').add('betterendforge:terminite_nugget');
    event.get('forge:nuggets/tinkers_bronze').add('tconstruct:tinkers_bronze_nugget');
    event.get('forge:nuggets/alfsteel').add('mythicbotany:alfsteel_nugget');
});
