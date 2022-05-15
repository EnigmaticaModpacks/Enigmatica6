// This script extracts recipe output from the kubejs log,
// `kubejs common debugInfo=true` is required or it fails.

const fsp = require('fs/promises');

const pattern_totals = /Added (\d+) recipes, removed (\d+) recipes, modified (\d+) recipes, with (\d+) failed recipes and (\d+) fall-backed recipes/;
const pattern_header = /======== Debug output of all (\w+) recipes ========/;

// ensure the output directory exists
fsp.access('kubejs/exported/recipes').catch(() => {
  fsp.mkdir('kubejs/exported/recipes');
});

fsp.readFile('logs/kubejs/server.txt').then(data => {
  const lines = data.toString().split('\n');

  let group = null;
  let groups = {};

  lines.forEach(line => {
    if(pattern_totals.test(line)) {
      console.log(line.match(pattern_totals));
      return;
    }

    if(pattern_header.test(line)) {
      group = line.match(pattern_header)[1];
      groups[group] = {};
      return;
    }
    
    if (!group || !line.endsWith('}')) return;

    console.log(line);
    const recipe = line.match(/^\[\d{2}:\d{2}:\d{2}] \[INFO \] (.*?): (.*)/); // [1] = id, [2] = {recipe}
    groups[group][recipe[1]] = JSON.parse(recipe[2].split(' FROM {"')[0]);
  });

  // assert that we have as much groups as were expecting
  if (Object.entries(groups).length != 3) process.exit(1);

  fsp.access('kubejs/exported/recipes').catch(() => {
    fsp.rmdir('kubejs/exported/recipes');
  });

  // write each group to their own file
  for (const [group, recipes] of Object.entries(groups)) {
    fsp.writeFile(`kubejs/exported/recipes/${group}.json`, JSON.stringify(recipes, null, '\t'));
  }
});
