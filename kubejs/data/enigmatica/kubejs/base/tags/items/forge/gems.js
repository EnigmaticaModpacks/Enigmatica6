events.listen('item.tags', function (event) {
    var gems_certus = 'forge:gems/certus';
    // event.get('forge:gems').add('rftoolsbase:dimensionalshard');
    // event.get('forge:gems/dimensional').add('rftoolsbase:dimensionalshard');

    event.get('forge:gems/fluix').add('appliedenergistics2:fluix_crystal');
    event.get(gems_certus).add('appliedenergistics2:certus_quartz_crystal');
    event.get(gems_certus).add('appliedenergistics2:charged_certus_quartz_crystal');
    event.get(gems_certus).add('emendatusenigmatica:gem_certus_quartz');
    event.get(gems_certus).add('emendatusenigmatica:gem_charged_certus_quartz');
});
