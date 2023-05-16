onEvent('item.tags', (event) => {
    if (global.isExpertMode == false) {
        return;
    }
    // 'ritua_runes' not a typo
    event
        .get('mythicbotany:ritua_runes')
        .add([
            'astralsorcery:shifting_star_aevitas',
            'astralsorcery:resonating_gem',
            'ars_nouveau:ritual_sunrise',
            'ars_nouveau:ritual_moonfall',
            'ars_nouveau:ritual_awakening',
            'botania:livingwood',
            'mythicbotany:yggdrasil_branch',
            'kubejs:crystalline_oak_leaves',
            'kubejs:crystalline_flowering_palo_verde_leaves',
            'naturesaura:generator_limit_remover',
            'quark:root_item',
            'kubejs:laputian_ingot',
            'minecraft:conduit',
            /kubejs:.*_mastery_token/
        ]);
});
