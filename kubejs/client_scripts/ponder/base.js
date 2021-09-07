// priority: 10

onEvent('ponder.tag.registry', (event) => {
    event.create(
      'enigmatica:industrial_foregoing',
      'industrialforegoing:latex_processing_unit',
      'Industrial Foregoing',
      'Learn more about the Industrial Foregoing mod and its intriguing mechanics!'
    );
    event.create(
      'enigmatica:basics',
      'minecraft:cobblestone',
      'Basic Mechanics',
      'Learn about some basic (sometimes vanilla!) mechanics that will come in handy.'
    )
});
