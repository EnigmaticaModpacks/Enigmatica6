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
  let groups = {
    added: {},
    removed: {},
    modified: {},

    duplicate: {},
    kjs: {},
    md5: {},
  };

  lines.forEach(line => {
    if (pattern_totals.test(line)) {
      return console.log(line.match(pattern_totals));
    }

    if (pattern_header.test(line)) {
      return group = line.match(pattern_header)[1];
    }
    
    if (!group || !line.endsWith('}')) return;

    console.log(line);
    const matches = line.match(/^\[\d{2}:\d{2}:\d{2}] \[INFO \] (.*?): (.*)/);

    let id = matches[1];
    let recipe = JSON.parse(matches[2].split(' FROM {"')[0]);

    if (group == "added" && groups[group][id]) {
      groups['duplicate'][id] = recipe;      
    }

    if (group == "added" && id.includes('kjs_')) {
      groups['kjs'][id] = recipe;      
    }

    if (group == "added" && id.includes('md5_')) {
      groups['md5'][id] = recipe;      
    }

    groups[group][id] = recipe;
  });

  // write each group to their own file
  for (const [group, recipes] of Object.entries(groups)) {
    fsp.writeFile(`kubejs/exported/recipes/${group}.json`, JSON.stringify(recipes, null, '\t'));
  }

  console.log(`::notice::${Object.entries(groups['kjs']).length} KubeJS recipes with kjs_, ${Object.entries(groups['md5']).length} KubeJS recipes with md5_, and ${Object.entries(groups['duplicate']).length} duplicates.`)
});
