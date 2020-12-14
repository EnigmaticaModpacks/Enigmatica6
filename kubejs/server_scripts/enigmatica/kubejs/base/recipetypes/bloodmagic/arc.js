events.listen('recipes', event => {
    event.remove({id: 'bloodmagic:arc/fragmentsgold'});
    event.remove({id: 'bloodmagic:arc/fragmentsiron'});
    event.remove({id: 'bloodmagic:arc/ore/dustgold'});
    event.remove({id: 'bloodmagic:arc/ore/dustiron'});
    event.remove({id: 'bloodmagic:arc/dustsfrom_gravel_gold'});
    event.remove({id: 'bloodmagic:arc/dustsfrom_gravel_iron'});
    event.remove({id: 'bloodmagic:arc/dustsfrom_ingot_gold'});
    event.remove({id: 'bloodmagic:arc/dustsfrom_ingot_iron'});
    event.remove({id: 'bloodmagic:arc/dustsfrom_ore_gold'});
    event.remove({id: 'bloodmagic:arc/dustsfrom_ore_iron'});
    event.remove({id: 'bloodmagic:arc/gravelsgold'});
    event.remove({id: 'bloodmagic:arc/gravelsiron'});
  })