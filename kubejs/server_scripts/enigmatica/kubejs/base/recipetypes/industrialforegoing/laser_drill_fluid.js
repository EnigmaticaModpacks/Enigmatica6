events.listen('recipes', function (event) {
    event.recipes.industrialforegoing.laser_drill_fluid({
        "output": "{FluidName:\"pneumaticcraft:oil\",Amount:10}",
        "rarity": [
          {
            "whitelist": {},
            "blacklist": {
              "type": "minecraft:worldgen/biome",
              "values": [
                "minecraft:nether_wastes",
                "minecraft:basalt_deltas",
                "minecraft:warped_forest",
                "minecraft:crimson_forest",
                "minecraft:soul_sand_valley"
              ]
            },
            "depth_min": 5,
            "depth_max": 20,
            "weight": 8
          }
        ],
        "pointer": 0,
        "catalyst": {
          "item": "industrialforegoing:laser_lens15"
        },
        "entity": "minecraft:empty",
        "type": "industrialforegoing:laser_drill_fluid"
      });
});