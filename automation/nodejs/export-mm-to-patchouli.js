const fs = require('fs')

const structures_path = 'kubejs/data/masterful_machinery/recipes';

const unused_char = '}' // to free up the 0 with

fs.readdir(structures_path, function (err, files) {
  files.forEach(file => {
    console.log(`${structures_path}/${file}`)
    fs.readFile(`${structures_path}/${file}`, (err, data) => {
      const recipe = JSON.parse(data);

      let mapping = {
        'C': `masterfulmachinery:${recipe.controllerId}_controller`
      }

      // `"B": { "block": "astralsorcery:marble_pillar" },` -> `"B": astralsorcery:marble_pillar,`
      for (const [char, required] of Object.entries(recipe.legend)) {
        mapping[char] = required.block;
      }
      
      // patchouli reserves the 0 char for the placement anchor
      if(mapping['0'] != undefined) {
        mapping[unused_char] = mapping['0']; delete mapping[unused_char];
        recipe.layout = JSON.parse(JSON.stringify(recipe.layout).replaceAll('0', unused_char))
      }

      { // use the controller as the placement anchor
        recipe.layout = JSON.parse(JSON.stringify(recipe.layout).replaceAll('C', '0'))
        mapping['0'] = mapping['C']; delete mapping['C'];
      }

      { // patchouli consideres " " as air and "_" as any other block
        recipe.layout = JSON.parse(JSON.stringify(recipe.layout).replaceAll(' ', '_'))
      }

      { // reverse so it isn't upside down ..
        recipe.layout = recipe.layout.reverse();
        recipe.layout.forEach((layer, i) => {
          // .. and flip so it isn't mirrored
          recipe.layout[i] = layer.reverse();
        })
      }

      let entry = {
        "name": recipe.name,
        "icon": `masterfulmachinery:${recipe.controllerId}_controller`,
        "category": "structures",
        "pages": [
          {
            "type": "text",
            "text": recipe.name
          },
          {
            "type": "multiblock",
            "name": recipe.name,
            "multiblock": {
              "pattern": recipe.layout,
              "mapping": mapping,
            }
          }
        ]
      }


      fs.writeFile(`patchouli_books/masterful_machinery/en_us/entries/structures/${file}`, JSON.stringify(entry), () => {})
    })
  });
});
