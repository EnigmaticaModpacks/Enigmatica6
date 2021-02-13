events.listen('item.tags', (event) => {
    event
        .get('forge:nuggets')
        .add('immersiveengineering:nugget_aluminum')
        .add('immersiveengineering:nugget_lead')
        .add('immersiveengineering:nugget_silver')
        .add('immersiveengineering:nugget_nickel')
        .add('immersiveengineering:nugget_uranium')
        .add('immersiveengineering:nugget_constantan')
        .add('immersiveengineering:nugget_electrum')
        .add('occultism:iesnium_nugget');

    event.get('forge:nuggets/iron_copper').add('#forge:nuggets/iron').add('#forge:nuggets/copper');
    event.get('forge:nuggets/gold_bronze').add('#forge:nuggets/gold').add('#forge:nuggets/bronze');
    event.get('forge:nuggets/gold_brass').add('#forge:nuggets/gold').add('#forge:nuggets/brass');
    event.get('forge:nuggets/gold_copper').add('#forge:nuggets/gold').add('#forge:nuggets/copper');
    event.get('forge:nuggets/gold_silver').add('#forge:nuggets/gold').add('#forge:nuggets/silver');
});
