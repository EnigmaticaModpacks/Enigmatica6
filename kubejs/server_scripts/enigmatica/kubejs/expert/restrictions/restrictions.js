onEvent('server.datapack.high_priority', (event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const errorKey_prefix = 'gamestage.enigmatica.restrictions.';

    let restrictions = [
        // Soul Enchanter only usable in the nether after crafting a Hellfire Forge

        {
            type: 'and',
            name: 'eidolon:soul_enchanter',
            block: true,
            first: { type: 'dimension', dimension: 'minecraft:the_nether' },
            second: { type: 'gamestage', stage: 'lesser_tartaric_gem' },
            errorKey: `${errorKey_prefix}lesser_tartaric_gem`
        },
        {
            type: 'gamestage',
            name: 'eidolon:worktable',
            block: true,
            stage: 'disabled',
            errorKey: `${errorKey_prefix}disabled`
        }
    ];

    let restricted_occultism_blocks = ['occultism:sacrificial_bowl'];
    restricted_occultism_blocks.forEach((block) => {
        restrictions.push({
            type: 'or',
            name: block,
            block: true,
            first: { type: 'dimension', dimension: 'atum:atum' },
            second: { type: 'gamestage', stage: 'red_chalk' },
            errorKey: `${errorKey_prefix}red_chalk`
        });
    });

    let restricted_blood_magic_blocks = [
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
    restricted_blood_magic_blocks.forEach((block) => {
        restrictions.push({
            type: 'or',
            name: block,
            block: true,
            first: { type: 'dimension', dimension: 'undergarden:undergarden' },
            second: { type: 'gamestage', stage: 'master_blood_orb' },
            errorKey: `${errorKey_prefix}master_blood_orb`
        });
    });

    event.addJson(`restriction:restrictions/expert.json`, restrictions);
});
