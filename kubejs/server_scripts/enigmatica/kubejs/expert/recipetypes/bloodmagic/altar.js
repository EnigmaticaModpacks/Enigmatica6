onEvent('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/bloodmagic/altar/';
    const recipes = [
        /*{
                input: 'input item here',
                output: 'output item here',
                syphon: 1000,                       //Recipe LP Cost
                altarLevel: 0,                      //Altar Level is zero indexed
                consumptionRate: 5,                 //How much LP is infused per operation
                drainRate: 5,                       //How much LP is lost per operation when the altar is empty
                id: 'input item here'
            }*/

        {
            input: 'eidolon:unholy_symbol',
            output: 'bloodmagic:weakbloodorb',
            syphon: 7000,
            altarLevel: 0,
            consumptionRate: 5,
            drainRate: 1,
            id: 'bloodmagic:altar/weakbloodorb'
        },
        {
            input: 'meetyourfight:caged_heart',
            output: 'bloodmagic:apprenticebloodorb',
            syphon: 7000,
            altarLevel: 1,
            consumptionRate: 5,
            drainRate: 5,
            id: 'bloodmagic:altar/apprenticebloodorb'
        },
        {
            input: 'botania:mana_tablet',
            output: 'bloodmagic:magicianbloodorb',
            syphon: 50000,
            altarLevel: 2,
            consumptionRate: 20,
            drainRate: 20,
            id: 'bloodmagic:altar/magicianbloodorb'
        },
        {
            input: 'occultism:otherstone_tablet',
            output: 'bloodmagic:blankslate',
            syphon: 1000,
            altarLevel: 0,
            consumptionRate: 50,
            drainRate: 5,
            id: 'bloodmagic:altar/slate'
        },
        {
            input: 'bloodmagic:blankslate',
            output: 'bloodmagic:reinforcedslate',
            syphon: 2000,
            altarLevel: 1,
            consumptionRate: 100,
            drainRate: 5,
            id: 'bloodmagic:altar/reinforcedslate'
        },
        {
            input: 'bloodmagic:reinforcedslate',
            output: 'bloodmagic:infusedslate',
            syphon: 5000,
            altarLevel: 2,
            consumptionRate: 250,
            drainRate: 10,
            id: 'bloodmagic:altar/imbuedslate'
        },
        {
            input: 'bloodmagic:infusedslate',
            output: 'bloodmagic:demonslate',
            syphon: 15000,
            altarLevel: 3,
            consumptionRate: 750,
            drainRate: 20,
            id: 'bloodmagic:altar/demonicslate'
        },
        {
            input: 'bloodmagic:demonslate',
            output: 'bloodmagic:etherealslate',
            syphon: 200000,
            altarLevel: 4,
            consumptionRate: 1000,
            drainRate: 1000,
            id: `${id_prefix}etherealslate`
        },
        {
            input: 'occultism:chalk_white_impure',
            output: 'occultism:chalk_white',
            syphon: 7000,
            altarLevel: 0,
            consumptionRate: 5,
            drainRate: 1,
            id: 'occultism:spirit_fire/chalk_white'
        },
        {
            input: 'occultism:chalk_gold_impure',
            output: 'occultism:chalk_gold',
            syphon: 7000,
            altarLevel: 1,
            consumptionRate: 5,
            drainRate: 5,
            id: 'occultism:spirit_fire/chalk_gold'
        },
        {
            input: 'occultism:chalk_purple_impure',
            output: 'occultism:chalk_purple',
            syphon: 25000,
            altarLevel: 2,
            consumptionRate: 20,
            drainRate: 20,
            id: 'occultism:spirit_fire/chalk_purple'
        },
        {
            input: 'occultism:chalk_red_impure',
            output: 'occultism:chalk_red',
            syphon: 40000,
            altarLevel: 3,
            consumptionRate: 30,
            drainRate: 50,
            id: 'occultism:spirit_fire/chalk_red'
        },
        {
            input: 'ars_nouveau:mana_fiber',
            output: 'bloodmagic:soulsnare',
            syphon: 500,
            altarLevel: 1,
            consumptionRate: 5,
            drainRate: 1,
            id: 'bloodmagic:altar/soul_snare'
        },
        {
            input: 'kubejs:firmament',
            output: 'architects_palette:moonstone',
            syphon: 5000,
            altarLevel: 0,
            consumptionRate: 250,
            drainRate: 1,
            id: `${id_prefix}moonstone`
        },
        {
            input: Item.of('eidolon:sapping_sword', '{Damage:0}').weakNBT(),
            output: 'bloodmagic:sacrificialdagger',
            syphon: 7000,
            altarLevel: 1,
            consumptionRate: 5,
            drainRate: 5,
            id: 'bloodmagic:sacrificial_dagger'
        },
        {
            input: 'create:shadow_steel',
            output: 'bloodmagic:masterbloodorb',
            syphon: 80000,
            altarLevel: 3,
            consumptionRate: 30,
            drainRate: 50,
            id: 'bloodmagic:altar/masterbloodorb'
        },
        {
            input: '#botania:runes/air',
            output: 'bloodmagic:airscribetool',
            syphon: 1000,
            altarLevel: 2,
            consumptionRate: 5,
            drainRate: 5,
            id: 'bloodmagic:altar/air_tool'
        },
        {
            input: '#botania:runes/fire',
            output: 'bloodmagic:firescribetool',
            syphon: 1000,
            altarLevel: 2,
            consumptionRate: 5,
            drainRate: 5,
            id: 'bloodmagic:altar/fire_tool'
        },
        {
            input: '#botania:runes/water',
            output: 'bloodmagic:waterscribetool',
            syphon: 1000,
            altarLevel: 2,
            consumptionRate: 5,
            drainRate: 5,
            id: 'bloodmagic:altar/water_tool'
        },
        {
            input: '#botania:runes/earth',
            output: 'bloodmagic:earthscribetool',
            syphon: 1000,
            altarLevel: 2,
            consumptionRate: 5,
            drainRate: 5,
            id: 'bloodmagic:altar/earth_tool'
        },
        {
            input: '#botania:runes/nidavellir',
            output: 'bloodmagic:duskscribetool',
            syphon: 2000,
            altarLevel: 3,
            consumptionRate: 20,
            drainRate: 10,
            id: 'bloodmagic:altar/dusk_tool'
        },
        {
            input: 'botania:livingwood_planks',
            output: 'eidolon:polished_planks',
            syphon: 50,
            altarLevel: 0,
            consumptionRate: 25,
            drainRate: 5,
            id: `${id_prefix}polished_planks`
        },
        {
            input: 'ars_nouveau:ritual_warping',
            output: 'waystones:warp_stone',
            syphon: 25000,
            altarLevel: 2,
            consumptionRate: 20,
            drainRate: 20,
            id: 'waystones:warp_stone'
        },
        {
            input: 'undergarden:gloom_o_lantern',
            output: 'botania:fel_pumpkin',
            syphon: 1000,
            altarLevel: 0,
            consumptionRate: 5,
            drainRate: 5,
            id: `${id_prefix}fel_pumpkin`
        },
        {
            input: 'eidolon:void_amulet',
            output: 'botania:blood_pendant',
            syphon: 7000,
            altarLevel: 1,
            consumptionRate: 5,
            drainRate: 5,
            id: `${id_prefix}blood_pendant`
        }
    ];

    recipes.forEach((recipe) => {
        event.recipes.bloodmagic
            .altar(recipe.output, recipe.input)
            .upgradeLevel(recipe.altarLevel)
            .altarSyphon(recipe.syphon)
            .consumptionRate(recipe.consumptionRate)
            .drainRate(recipe.drainRate)
            .id(recipe.id);
    });
});
