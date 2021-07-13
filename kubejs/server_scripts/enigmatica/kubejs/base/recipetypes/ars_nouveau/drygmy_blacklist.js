onEvent('server.datapack.low_priority', (event) => {
    var drygmy_blacklist = {
        replace: true,
        values: [
            'minecraft:iron_golem',
            'occultism:wild_hunt_wither_skeleton',
            'occultism:wild_hunt_skeleton',
            'occultism:possessed_skeleton',
            'occultism:possessed_endermite',
            'occultism:possessed_enderman',
            'occultism:otherworld_bird',
            'occultism:foliot',
            'occultism:djinni',
            'occultism:afrit_wild',
            'occultism:afrit',
            'alexsmobs:mimicube',
            'alexsmobs:centipede_body',
            'alexsmobs:centipede_tail',
            'alexsmobs:bone_serpent_part',
            'artifacts:mimic',
            'losttrinkets:dark_vex'
        ]
    };

    event.addJson('ars_nouveau:tags/entity_types/drygmy_blacklist.json', drygmy_blacklist);
});
