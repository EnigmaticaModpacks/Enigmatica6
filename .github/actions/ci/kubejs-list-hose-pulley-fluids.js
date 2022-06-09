const fsp = require('fs/promises');

fsp
  .readFile('kubejs/exported/kubejs-server-export.json')
  .then(data => {
    const exported = JSON.parse(data.toString());

    let blacklisted = exported.tags.fluids['create:no_infinite_draining'];
    let whitelisted = exported.registries.fluids.filter(fluid_id => !blacklisted.includes(fluid_id));

    whitelisted = whitelisted.filter(fluid_id => {
      const fluid_name = fluid_id.split(':')[1];

      if (fluid_name.startsWith('flowing_')) return false;
      if (fluid_name.endsWith('_flowing')) return false;

      if (fluid_name.startsWith('fluid_')) return false;
      if (fluid_name.endsWith('_fluid')) return false;

      return true;
    });

    console.log(whitelisted);
    console.log(`::notice::${whitelisted.length} fluids can be used with the hose pulley.`);
  });
