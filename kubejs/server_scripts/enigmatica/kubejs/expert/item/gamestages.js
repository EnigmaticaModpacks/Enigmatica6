onEvent('item.right_click', (event) => {
    const player = event.player;

    let items = [
        'kubejs:medium_machinery_schematics',
        'kubejs:heavy_machinery_schematics',
        'occultism:chalk_red',
        'bloodmagic:masterbloodorb',
        'bloodmagic:soulgemlesser'
    ];

    items.forEach((item) => {
        if (player.mainHandItem == `${item}`) {
            let stage_name = item.split(':')[1];
            if (stage_name == 'masterbloodorb') stage_name = 'master_blood_orb';
            if (stage_name == 'soulgemlesser') stage_name = 'lesser_tartaric_gem';
            if (stage_name == 'chalk_red') stage_name = 'red_chalk';

            if (!event.getEntity().stages.has(`${stage_name}`)) {
                event.player.tell(`Gamestage Granted: ${titleCase(stage_name.replace(/_+/g, ' '))}`);
                event.getEntity().stages.add(`${stage_name}`);
            }
        }
    });
});

function titleCase(str) {
    var splitStr = str.toLowerCase().split(' ');
    for (var i = 0; i < splitStr.length; i++) {
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
    }
    return splitStr.join(' ');
}
