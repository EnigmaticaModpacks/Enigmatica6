events.listen('jei.add.items', (event) => {
    const items = [
        Item.of('morphtool:tool').nbt({
            'morphtool:data': {
                blockcarpentry: { id: 'blockcarpentry:texture_wrench', Count: 1 },
                powah: { id: 'powah:wrench', Count: 1 },
                resourcefulbees: { id: 'resourcefulbees:scraper', Count: 1 },
                astralsorcery: { id: 'astralsorcery:wand', Count: 1 },
                pneumaticcraft: { id: 'pneumaticcraft:pneumatic_wrench', Count: 1 },
                immersiveengineering: { id: 'immersiveengineering:hammer', Count: 1 },
                transport: { id: 'transport:rail_breaker', Count: 1 },
                pedestals: { id: 'pedestals:linkingtool', Count: 1 },
                botania: { id: 'botania:twig_wand', Count: 1, tag: { color1: 0, color2: 0 } },
                ars_nouveau: { id: 'ars_nouveau:dominion_wand', Count: 1 },
                mekanism: { id: 'mekanism:configurator', Count: 1 },
                bloodmagic: { id: 'bloodmagic:ritualtinkerer', Count: 1 },
                thermal: { id: 'thermal:wrench', Count: 1 },
                rftoolsbase: { id: 'rftoolsbase:smartwrench', Count: 1 },
                create: { id: 'create:wrench', Count: 1 },
                chiselsandbits: { id: 'chiselsandbits:wrench_wood', Count: 1 },
                refinedstorage: { id: 'refinedstorage:wrench', Count: 1 },
                prettypipes: { id: 'prettypipes:wrench', Count: 1 },
                storagedrawers: { id: 'storagedrawers:drawer_key', Count: 1 },
                fluxnetworks: { id: 'fluxnetworks:flux_configurator', Count: 1 },
                integratedtunnels: { id: 'integrateddynamics:wrench', Count: 1 }
            }
        }),
        Item.of('akashictome:tome').nbt({
            'akashictome:data': {
                industrialforegoing: {
                    id: 'patchouli:guide_book',
                    Count: 1,
                    tag: { 'patchouli:book': 'industrialforegoing:industrial_foregoing' }
                },
                tetra: {
                    id: 'tetra:holo',
                    Count: 1,
                    tag: {
                        'holo/core_material': 'frame/dim',
                        'holo/frame': 'holo/frame',
                        'holo/core': 'holo/core',
                        'holo/frame_material': 'core/ancient'
                    }
                },
                resourcefulbees: {
                    id: 'patchouli:guide_book',
                    Count: 1,
                    tag: { 'patchouli:book': 'resourcefulbees:fifty_shades_of_bees' }
                },
                theoneprobe: { id: 'theoneprobe:probenote', Count: 1 },
                astralsorcery: { id: 'astralsorcery:tome', Count: 1 },
                ftbquests: { id: 'ftbquests:book', Count: 1 },
                alexsmobs: { id: 'alexsmobs:animal_dictionary', Count: 1 },
                immersiveengineering: { id: 'immersiveengineering:manual', Count: 1 },
                eidolon: { id: 'eidolon:codex', Count: 1 },
                botania: { id: 'botania:lexicon', Count: 1, tag: {} },
                thermal: { id: 'patchouli:guide_book', Count: 1, tag: { 'patchouli:book': 'thermal:guidebook' } },
                patchouli: {
                    id: 'patchouli:guide_book',
                    Count: 1,
                    tag: { 'patchouli:book': 'patchouli:modded_for_dummies' }
                },
                rftoolsbase: { id: 'rftoolsbase:manual', Count: 1 },
                cookingforblockheads: {
                    id: 'cookingforblockheads:crafting_book',
                    Count: 1
                },
                powah: { id: 'powah:book', Count: 1 },
                pneumaticcraft: {
                    id: 'patchouli:guide_book',
                    Count: 1,
                    tag: { 'patchouli:book': 'pneumaticcraft:book' }
                },
                naturesaura: {
                    id: 'patchouli:guide_book',
                    Count: 1,
                    tag: { 'patchouli:book': 'naturesaura:book' }
                },
                pedestals: { id: 'patchouli:guide_book', Count: 1, tag: { 'patchouli:book': 'pedestals:manual' } },
                transport: { id: 'patchouli:guide_book', Count: 1, tag: { 'patchouli:book': 'transport:guide' } },
                engineersdecor: {
                    id: 'patchouli:guide_book',
                    Count: 1,
                    tag: { 'patchouli:book': 'engineersdecor:engineersdecor_manual' }
                },
                occultism: { id: 'occultism:dictionary_of_spirits', Count: 1 },
                solcarrot: { id: 'solcarrot:food_book', Count: 1 },
                modularrouters: {
                    id: 'patchouli:guide_book',
                    Count: 1,
                    tag: { 'patchouli:book': 'modularrouters:book' }
                },
                ars_nouveau: { id: 'ars_nouveau:worn_notebook', Count: 1 },
                bloodmagic: { id: 'patchouli:guide_book', Count: 1, tag: { 'patchouli:book': 'bloodmagic:guide' } },
                integrateddynamics: { id: 'integrateddynamics:on_the_dynamics_of_integration', Count: 1 },
                betterendforge: { id: 'betterendforge:guidebook', Count: 1 }
            }
        })
    ];

    items.forEach((item) => event.add(item));
});
