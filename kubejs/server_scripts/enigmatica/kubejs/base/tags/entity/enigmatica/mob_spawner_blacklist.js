onEvent('entity_type.tags', (event) => {
    let entities = [
        /occultism/,
        /meetyourfight/,
        '#minecraft:beehive_inhabitors',
        'alexsmobs:mimicube',
        'alexsmobs:centipede_body',
        'alexsmobs:centipede_tail',
        'alexsmobs:bone_serpent_part',
        'artifacts:mimic',
        'losttrinkets:dark_vex',
        'ars_nouveau:familiar_bookwyrm',
        'ars_nouveau:familiar_carbuncle',
        'ars_nouveau:familiar_drygmy',
        'ars_nouveau:familiar_jabberwog',
        'ars_nouveau:familiar_sylph',
        'ars_nouveau:familiar_wixie',
        'atum:pharaoh'
    ];
    event.get('enigmatica:mob_spawner_blacklist').add(entities);
});
