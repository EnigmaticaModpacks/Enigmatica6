onEvent('item.tags', (event) => {
  var items = [
    /pneumaticcraft:(reinforced_)?air_canister/, // 10 & 20 bar canisters
    /pneumaticcraft:(\w*_)?drone/,               // all 5 craftable drones
    /pneumaticcraft:pneumatic_\w+/,              // wrench and armor pieces

    'pneumaticcraft:vortex_cannon',
    'pneumaticcraft:manometer',
    'pneumaticcraft:logistics_configurator',
    'pneumaticcraft:amadron_tablet',
    'pneumaticcraft:minigun',
    'pneumaticcraft:camo_applicator',
    'pneumaticcraft:jackhammer'
  ];

  var tags = ['forge:storage', 'forge:storage/air'];

  tags.forEach((tag) => {
      event.get(tag).add(items);
  });
});
