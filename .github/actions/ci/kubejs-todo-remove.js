const fs = require('fs');
const { execSync } = require("child_process");

//

let modpack_version = fs.readFileSync('./automation/settings.ps1').toString().match(/\$MODPACK_VERSION = "(\d\.\d\.\d)"/)[1];

let to_remove = 0;
let not_empty = 0;

//

/* https://github.com/substack/semver-compare */
function semver_compare(a, b) {
  var pa = a.split('.');
  var pb = b.split('.');
  for (var i = 0; i < 3; i++) {
      var na = Number(pa[i]);
      var nb = Number(pb[i]);
      if (na > nb) return 1;
      if (nb > na) return -1;
      if (!isNaN(na) && isNaN(nb)) return 1;
      if (isNaN(na) && !isNaN(nb)) return -1;
  }
  return 0;
}

function handle_directory(node) {
  switch(node.type) {
    case "directory":
      node.contents.forEach(content => {
        content.name = `${node.name}/${content.name}`;
        handle_directory(content);
      });
      break;
    case "file":
      handle_file(node);
    break;
  }
}

function handle_file(file) {
  const lines = fs.readFileSync(file.name).toString().split('\n');
  
  if (lines[0].toLowerCase().includes('remove in')) {
    let version = lines[0].match(/\d\.\d\.\d/)[0];
    if (semver_compare(modpack_version, version) == 1) {
      console.log(file.name);
      to_remove++;
      if (lines.length > 2) not_empty++;
    }
  }
}

//

const tree = JSON.parse(execSync("tree -J -P '*.js' ./kubejs").toString())[0];
handle_directory(tree);

if(to_remove) {
  let notice = `::notice::${to_remove} kubejs files can be safely deleted now.`;

  if(not_empty) {
    notice += ` (of which ${not_empty} are not empty)`;
  }

  console.log(notice);
}
