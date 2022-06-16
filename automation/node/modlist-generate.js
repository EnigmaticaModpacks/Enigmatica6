const fs = require('fs');
const axios = require('axios');

const minecraftinstance_json = JSON.parse(fs.readFileSync(`${__dirname}/../../minecraftinstance.json`));
const total_addons = minecraftinstance_json.installedAddons.length;

// grab the name and the version for the markdown header from the pwsh settings
const settings_ps1    = fs.readFileSync(`${__dirname}/../../automation/settings.ps1`).toString();
const CLIENT_NAME     = settings_ps1.match(/\$CLIENT_NAME = "(.*)"/)[1];
const MODPACK_VERSION = settings_ps1.match(/\$MODPACK_VERSION = "(.*)"/)[1];

const readme = [`## ${CLIENT_NAME} - ${MODPACK_VERSION}`];
console.log(readme[0]);

const projects = [];

function next(i) {
    const installedAddon = minecraftinstance_json.installedAddons[i];
    if (installedAddon) {

        // this is the api behind the current modlist generator, not some custom one :)
        const melanx_url = `https://curse.melanx.de/project/${installedAddon.addonID}`;

        // log the progress to the console, old one does not.
        console.log(`${i+1}/${total_addons}: ${melanx_url}`);

        axios.get(melanx_url)
            .then(response => {
                const project = response.data;

                // the api itself does not return the filename without an additional call, but we already know it.
                project.file = {id: installedAddon.installedFile.id, name: installedAddon.installedFile.fileName};

                console.log(project);
                projects.push(project);

                // {
                //     project: 345779,
                //     slug: 'plonk',
                //     name: 'Plonk',
                //     owner: 'BlueAgent',
                //     summary: 'Place items down in the world',
                //     distribution: true,
                //     website: 'https://www.curseforge.com/minecraft/mc-mods/plonk',
                //     thumbnail: 'https://media.forgecdn.net/avatars/230/201/637059414601035196.png',
                //     file: { id: 3299406, name: 'plonk-1.16.5-9.0.8.jar' }
                // }

                next(i + 1); // process the next addon synchronously.
            })
            .catch(error => {
                next(i); // the api has a tendency to be slow (or even time out), so in case of failure retry the current addon.
            });
    } else {
        done(); // all the addons have been processed, finalize.
    }
}

// match the sorting of MelanX/ModListCreator
function by_project_name(project_a, project_b) {
    if      (project_a.name.toLowerCase() > project_b.name.toLowerCase()) return +1;
    else if (project_a.name.toLowerCase() < project_b.name.toLowerCase()) return -1;
    return 0;
}

function done() {
    projects.sort(by_project_name);

    projects.forEach(project => {
        readme.push(`- [${project.file.name}](${project.website}/files/${project.file.id}) (by [${project.owner}](https://www.curseforge.com/members/${project.owner.toLowerCase()}/projects))`)
    });

    fs.writeFileSync(`${__dirname}/../../MODLIST.md`, readme.join('\n') + '\n');
}

next(0); // all variables and functions have been defined above, now we can start it here.
