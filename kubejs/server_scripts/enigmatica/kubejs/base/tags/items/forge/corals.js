onEvent('item.tags', (event) => {
    event.add('forge:coral_blocks', [/\w+:(?!dead)(\w+)_coral_block$/]);
    event.add('forge:dead_coral_blocks', [/dead_\w+coral_block$/]);

    event.add('forge:corals', [/\w+:(?!dead)(\w+)_coral$/]);
    event.add('forge:dead_corals', [/dead_\w+coral$/]);

    event.add('forge:coral_fans', [/\w+:(?!dead)(\w+)_coral_fan$/]);
    event.add('forge:dead_coral_fans', [/dead_\w+coral_fan$/]);
});
