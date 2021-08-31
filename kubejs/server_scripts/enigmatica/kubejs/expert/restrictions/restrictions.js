onEvent('server.datapack.high_priority', (event) => {
    if (global.isExpertMode == false) {
        return;
    }

    let restrictions = [
        // Soul Enchanter only usable in the nether after crafting a Hellfire Forge
        {
            type: 'and',
            name: 'eidolon:soul_enchanter',
            block: true,
            first: {
                type: 'dimension',
                dimension: 'minecraft:the_nether'
            },
            second: {
                type: 'gamestage',
                stage: 'hellfire_forge'
            }
        }
    ];

    let restrictedBloodMagicBlocks = [
        'bloodmagic:altar',
        'bloodmagic:alchemytable',
        'bloodmagic:demoncrucible',
        'bloodmagic:demoncrystallizer',
        'bloodmagic:alchemytable',
        'bloodmagic:soulforge',
        'bloodmagic:alchemicalreactionchamber',
        'bloodmagic:incensealtar'
    ];
    // Requires creation Master Blood Orb to place outside of Undergarden
    restrictedBloodMagicBlocks.forEach((item) => {
        restrictions.push({
            type: 'or',
            name: item,
            block: true,
            first: {
                type: 'dimension',
                dimension: 'undergarden:undergarden'
            },
            second: {
                type: 'gamestage',
                stage: 'master_blood_orb'
            }
        });
    });

    let restrictedOccultismItems = [
        'occultism:chalk_white',
        'occultism:chalk_gold',
        'occultism:chalk_purple',
        'occultism:chalk_red',
        'occultism:golden_sacrificial_bowl'
    ];
    // Requires creation of Red Chalk to place outside of Atum
    restrictedOccultismItems.forEach((item) => {
        restrictions.push({
            type: 'or',
            name: item,
            block: true,
            item: true,
            first: {
                type: 'dimension',
                dimension: 'atum:atum'
            },
            second: {
                type: 'gamestage',
                stage: 'red_chalk'
            }
        });
    });

    event.addJson(`restriction:restrictions/expert.json`, restrictions);
});
