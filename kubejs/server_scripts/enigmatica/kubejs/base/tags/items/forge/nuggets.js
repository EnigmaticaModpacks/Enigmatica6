events.listen('item.tags', function (event) {
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

    event.get('forge:nuggets/cloggrum').add('undergarden:cloggrum_nugget');
    event.get('forge:nuggets/froststeel').add('undergarden:froststeel_nugget');
    event.get('forge:nuggets/utherium').add('undergarden:utherium_chunk');
    event.get('forge:nuggets/regalium').add('undergarden:regalium_nugget');

    event.get('forge:nuggets/iron_copper').add('#forge:nuggets/iron').add('#forge:nuggets/copper');
    event.get('forge:nuggets/gold_bronze').add('#forge:nuggets/gold').add('#forge:nuggets/bronze');
    event.get('forge:nuggets/gold_copper').add('#forge:nuggets/gold').add('#forge:nuggets/copper');
    event.get('forge:nuggets/gold_silver').add('#forge:nuggets/gold').add('#forge:nuggets/silver');
});
