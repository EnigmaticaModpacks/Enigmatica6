onEvent('server.datapack.high_priority', (event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const errorKey_prefix = 'enigmatica.restrictions.stage.';

    let restrictions = [
        // Soul Enchanter only usable in the nether after crafting a Hellfire Forge
        {
            type: 'and',
            name: 'eidolon:soul_enchanter',
            block: true,
            first: { type: 'dimension', dimension: 'minecraft:the_nether' },
            second: { type: 'gamestage', stage: 'hellfire_forge' },
            errorKey: `${errorKey_prefix}hellfire_forge`
        },
        // Requires creation of Red Chalk to place outside of Atum
        {
            type: 'or',
            name: 'occultism:golden_sacrificial_bowl',
            block: true,
            first: { type: 'dimension', dimension: 'atum:atum' },
            second: { type: 'gamestage', stage: 'red_chalk' },
            errorKey: `${errorKey_prefix}red_chalk`
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
    restrictedBloodMagicBlocks.forEach((block) => {
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
