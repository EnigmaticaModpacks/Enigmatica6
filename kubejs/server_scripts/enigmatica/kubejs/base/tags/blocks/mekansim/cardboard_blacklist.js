onEvent('block.tags', (event) => {
    let blacklist_blocks = ['engineersdecor:factory_placer'];
    event.get('mekanism:cardboard_blacklist').add(blacklist_blocks);
});
