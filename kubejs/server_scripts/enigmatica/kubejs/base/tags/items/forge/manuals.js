events.listen('item.tags', function (event) {
    var items = [
        'patchouli:guide_book',
        'immersiveengineering:manual',
        'botania:lexicon',
        'solcarrot:food_book',
        'tmechworks:book',
        'powah:book',
        'rftoolsbase:manual',
        'ars_nouveau:worn_notebook',
        'astralsorcery:tome',
        'alexsmobs:animal_dictionary',
        'occultism:dictionary_of_spirits'
    ];
    event.get('forge:manuals').add(items);
});
