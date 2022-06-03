onEvent('recipes', (event) => {
    var multiplier = 40;
    const recipes = [
        {
            input: '#forge:coins/gold',
            energy: 64000,
            id: 'thermal:fuels/numismatic/numismatic_gold_coin'
        },
        {
            input: '#forge:coins/invar',
            energy: 48000,
            id: 'thermal:fuels/numismatic/numismatic_invar_coin'
        },
        {
            input: '#forge:coins/iron',
            energy: 32000,
            id: 'thermal:fuels/numismatic/numismatic_iron_coin'
        },
        {
            input: '#forge:coins/enderium',
            energy: 160000,
            id: 'thermal:fuels/numismatic/numismatic_enderium_coin'
        },
        {
            input: '#forge:coins/lead',
            energy: 48000,
            id: 'thermal:fuels/numismatic/numismatic_lead_coin'
        },
        {
            input: '#forge:coins/lumium',
            energy: 80000,
            id: 'thermal:fuels/numismatic/numismatic_lumium_coin'
        },
        {
            input: '#forge:coins/nickel',
            energy: 64000,
            id: 'thermal:fuels/numismatic/numismatic_nickel_coin'
        },
        {
            input: '#forge:coins/signalum',
            energy: 80000,
            id: 'thermal:fuels/numismatic/numismatic_signalum_coin'
        },
        {
            input: '#forge:coins/silver',
            energy: 48000,
            id: 'thermal:fuels/numismatic/numismatic_silver_coin'
        },
        {
            input: '#forge:coins/tin',
            energy: 32000,
            id: 'thermal:fuels/numismatic/numismatic_tin_coin'
        },
        {
            input: '#forge:coins/bronze',
            energy: 40000,
            id: 'thermal:fuels/numismatic/numismatic_bronze_coin'
        },
        {
            input: '#forge:coins/constantan',
            energy: 56000,
            id: 'thermal:fuels/numismatic/numismatic_constantan_coin'
        },
        {
            input: '#forge:coins/copper',
            energy: 32000,
            id: 'thermal:fuels/numismatic/numismatic_copper_coin'
        },
        {
            input: '#forge:coins/electrum',
            energy: 60000,
            id: 'thermal:fuels/numismatic/numismatic_electrum_coin'
        },
        {
            input: '#forge:coins/netherite',
            energy: 320000,
            id: 'thermal:fuels/numismatic/numismatic_netherite_coin'
        }
    ];
    recipes.forEach((recipe) => {
        event.recipes.thermal
            .numismatic_fuel(recipe.input)
            .energy(recipe.energy * multiplier)
            .id(recipe.id);
    });
});
