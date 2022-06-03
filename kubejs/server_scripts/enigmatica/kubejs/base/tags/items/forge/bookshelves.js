onEvent('item.tags', (event) => {
    event.add('forge:bookshelves', [/betterendforge:\w+_bookshelf/, /upgrade_aquatic:\w+_bookshelf/]);
});
