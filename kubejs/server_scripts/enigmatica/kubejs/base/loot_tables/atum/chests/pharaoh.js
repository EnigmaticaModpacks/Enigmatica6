onEvent('chest.loot_tables', (event) => {

    const pools = [
        {
            rolls: {min: 1, max: 1},
            entries: [
                {
                    name: Item.of('resourcefulbees:bee_jar', {Entity: "resourcefulbees:dusty_mummbee_bee"}),
                    weight: 25,
                    count: 1
                }
            ]
        }
    ]

    
    event.modify('atum:pharaoh', (table) => {
        pools.forEach((pool) => {
            table.addPool((newPool) => {
                newPool.setUniformRolls(pool.rolls.min, pool.rolls.max)
                pool.entries.forEach((entry) => {
                    newPool.addItem(entry.name, entry.weight, entry.count);
                })
            })
        })
    })
})