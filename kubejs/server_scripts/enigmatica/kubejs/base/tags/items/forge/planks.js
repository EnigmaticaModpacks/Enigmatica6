events.listen('item.tags', (event) => {
    event.get('forge:planks/ancient').add('naturesaura:ancient_planks');

    event.get('forge:planks/oak').add('minecraft:oak_planks');
    event.get('forge:planks/spruce').add('minecraft:spruce_planks');
    event.get('forge:planks/birch').add('minecraft:birch_planks');
    event.get('forge:planks/jungle').add('minecraft:jungle_planks');
    event.get('forge:planks/acacia').add('minecraft:acacia_planks');
    event.get('forge:planks/dark_oak').add('minecraft:dark_oak_planks');

    event.get('forge:planks/smogstem').add('undergarden:smogstem_planks');
    event.get('forge:planks/grongle').add('undergarden:grongle_planks');
    event.get('forge:planks/wigglewood').add('undergarden:wigglewood_planks');
});
