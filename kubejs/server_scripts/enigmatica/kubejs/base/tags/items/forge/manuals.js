events.listen('item.tags', (event) => {
    var items = [
        'patchouli:guide_book',
        'immersiveengineering:manual',
        'botania:lexicon',
        'solcarrot:food_book',
        'powah:book',
        'rftoolsbase:manual',
        'ars_nouveau:worn_notebook',
        'astralsorcery:tome',
        'alexsmobs:animal_dictionary',
        'occultism:dictionary_of_spirits'
    ];
    event.get('forge:manuals').add(items);
});
