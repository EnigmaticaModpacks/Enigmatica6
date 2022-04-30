const fs = require('fs');
const {format} = require('lua-json');

const recipes_created = '======== Debug output of all added recipes ========';
const recipes_updated = '======== Debug output of all modified recipes ========';
const recipes_deleted = '======== Debug output of all removed recipes ========';

//

const latest_log_path = './logs/latest.log';
const kubejs_export_path = './kubejs/exported/kubejs-server-export.json';

if (!fs.existsSync(latest_log_path)) console.error('no log (yet)');
if (!fs.existsSync(kubejs_export_path)) console.error('no export');

//

const latest_log = fs.readFileSync(latest_log_path);

if(!latest_log.includes(recipes_created)) console.error('no created recipes');
if(!latest_log.includes(recipes_updated)) console.error('no updated recipes');
if(!latest_log.includes(recipes_deleted)) console.error('no deleted recipes');

//

let data = JSON.parse(fs.readFileSync(kubejs_export_path));
for (const [id, recipe_input_output] of Object.entries(data.recipes)) {
  data.recipes[id] = recipe_input_output['recipe'];
}

//

let header = null
id_recipes_for = {deleted: [], updated: [], created: []}
latest_log.toString().split('\n').forEach(line => {

  if(line.endsWith(recipes_created)) return header = 'created';
  if(line.endsWith(recipes_updated)) return header = 'updated';
  if(line.endsWith(recipes_deleted)) return header = 'deleted';

  if(!line.endsWith('}')) return header = null;
  if (!header) return;

  let id_recipe = line.split(' [KubeJS Server/]: ', 2)[1].split(': ', 2);
  id_recipes_for[header].push(id_recipe);
});

//

id_recipes_for['deleted'].forEach(id_recipe => {
  delete data.recipes[id_recipe[0]];
})

id_recipes_for['updated'].forEach(id_recipe => {
  data.recipes[id_recipe[0]] = JSON.parse(id_recipe[1].split(' FROM {', 2)[0]);
})

id_recipes_for['created'].forEach(id_recipe => {
  data.recipes[id_recipe[0]] = JSON.parse(id_recipe[1]);
})

//

const disk = './kubejs/data/computercraft/lua/treasure/kubejs/recipes';

fs.mkdirSync(disk, {recursive: true});
fs.writeFileSync(`${disk}/.gitignore`, '*')
fs.writeFileSync(`${disk}/recipes.json`, JSON.stringify(data.recipes, null, '  '));
fs.writeFileSync(`${disk}/recipes.lua`, format(data.recipes).replaceAll("\\\\'", "\\'").replaceAll("'\\'", "'\\\\'").replaceAll("and =", "['and'] ="))
