events.listen('recipes', (event) => {
    data = {
        recipes: [
            {
                result: 'emendatusenigmatica:aluminum_chunk',
                weight: 1200
            },
            {
                result: 'emendatusenigmatica:apatite_chunk',
                weight: 700
            },
            {
                result: 'emendatusenigmatica:mana_chunk',
                weight: 200
            },
            {
                result: 'emendatusenigmatica:bitumen_chunk',
                weight: 1000
            },
            {
                result: 'emendatusenigmatica:cinnabar_chunk',
                weight: 500
            },
            {
                result: 'emendatusenigmatica:coal_chunk',
                weight: 5200
            },
            {
                result: 'emendatusenigmatica:copper_chunk',
                weight: 2000
            },
            {
                result: 'emendatusenigmatica:diamond_chunk',
                weight: 120
            },
            {
                result: 'emendatusenigmatica:dimensional_chunk',
                weight: 20
            },
            {
                result: 'emendatusenigmatica:emerald_chunk',
                weight: 20
            },
            {
                result: 'emendatusenigmatica:fluorite_chunk',
                weight: 50
            },
            {
                result: 'emendatusenigmatica:gold_chunk',
                weight: 550
            },
            {
                result: 'emendatusenigmatica:iron_chunk',
                weight: 2500
            },
            {
                result: 'emendatusenigmatica:lapis_chunk',
                weight: 360
            },
            {
                result: 'emendatusenigmatica:lead_chunk',
                weight: 1500
            },
            {
                result: 'emendatusenigmatica:nickel_chunk',
                weight: 100
            },
            {
                result: 'emendatusenigmatica:osmium_chunk',
                weight: 1500
            },
            {
                result: 'emendatusenigmatica:potassium_nitrate_chunk',
                weight: 250
            },
            {
                result: 'emendatusenigmatica:redstone_chunk',
                weight: 700
            },
            {
                result: 'emendatusenigmatica:silver_chunk',
                weight: 1000
            },
            {
                result: 'emendatusenigmatica:sulfur_chunk',
                weight: 3000
            },
            {
                result: 'emendatusenigmatica:tin_chunk',
                weight: 1800
            },
            {
                result: 'emendatusenigmatica:uranium_chunk',
                weight: 400
            },
            {
                result: 'emendatusenigmatica:zinc_chunk',
                weight: 1000
            },
            {
                result: 'occultism:otherstone',
                weight: 50
            },
            {
                result: 'occultism:iesnium_ore',
                weight: 50
            },
            {
                result: 'minecraft:glowstone',
                weight: 100
            },
            {
                result: 'minecraft:nether_quartz_ore',
                weight: 200
            }
        ]
    };

    data.recipes.forEach((recipe) => {
        event.recipes.occultism.miner({
            type: 'occultism:miner',
            ingredient: {
                tag: 'occultism:miners/ores'
            },
            result: {
                item: recipe.result
            },
            weight: recipe.weight
        });
    });
});

/*perk_void_trash_ore = [
    'forge:ores/aluminum;1200',
    'forge:ores/apatite;700',
    'forge:ores/mana;200',
    'forge:ores/bitumen;1000',
    'forge:ores/cinnabar;500',
    'forge:ores/coal;5200',
    'forge:ores/copper;2000',
    'forge:ores/diamond;120',
    'forge:ores/dimensional;20',
    'forge:ores/emerald;100',
    'forge:ores/fluorite;50',
    'forge:ores/gold;550',
    'forge:ores/iron;2500',
    'forge:ores/lapis;360',
    'forge:ores/lead;1500',
    'forge:ores/nickel;100',
    'forge:ores/osmium;1500',
    'forge:ores/potassium_nitrate;250',
    'forge:ores/redstone;700',
    'forge:ores/silver;1000',
    'forge:ores/sulfur;3000',
    'forge:ores/tin;1800',
    'forge:ores/uranium;400',
    'forge:ores/zinc;1000'
];
*/
