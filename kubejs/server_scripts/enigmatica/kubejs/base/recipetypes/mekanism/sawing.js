events.listen('recipes', function (event) {
    var sawDust = 'emendatusenigmatica:wood_dust';
    event.recipes.mekanism.sawing(item.of(sawDust), '#forge:rods/wooden');
});
