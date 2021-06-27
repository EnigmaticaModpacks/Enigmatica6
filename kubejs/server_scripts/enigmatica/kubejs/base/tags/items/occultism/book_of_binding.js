onEvent('item.tags', (event) => {
    event.get('occultism:book_of_binding_bound').add([/book_of_binding_bound/]);

    event.get('occultism:book_of_binding_bound/foliot').add('occultism:book_of_binding_bound_foliot');
    event.get('occultism:book_of_binding_bound/djinni').add('occultism:book_of_binding_bound_djinni');
    event.get('occultism:book_of_binding_bound/afrit').add('occultism:book_of_binding_bound_afrit');
    event.get('occultism:book_of_binding_bound/marid').add('occultism:book_of_binding_bound_marid');
});
