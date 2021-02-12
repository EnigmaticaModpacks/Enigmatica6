events.listen('recipes', (event) => {
    var sawDust = 'emendatusenigmatica:wood_dust';
    event.recipes.mekanism.sawing(Item.of(sawDust), '#forge:rods/wooden');
});
