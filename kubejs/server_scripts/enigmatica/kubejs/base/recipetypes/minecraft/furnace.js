events.listen('recipes', (event) => {
    event.recipes.minecraft.smelting('thermal:white_rockwool', 'forge:slag').xp(0.1);
});
