const fs = require('fs');
const axios = require('axios');

const minecraftinstance_json = JSON.parse(fs.readFileSync(`${__dirname}/../../minecraftinstance.json`));

const settings_ps1 = fs.readFileSync(`${__dirname}/../../automation/settings.ps1`).toString();
const CLIENT_NAME = settings_ps1.match(/\$CLIENT_NAME = "(.*)"/)[1];
const MODPACK_VERSION = settings_ps1.match(/\$MODPACK_VERSION = "(.*)"/)[1];

const header = `## ${CLIENT_NAME} - ${MODPACK_VERSION}`;
console.log(header);

// match the sorting of MelanX/ModListCreator
function by_project_name(project_a, project_b) {
    if      (project_a.name.toLowerCase() > project_b.name.toLowerCase()) return +1;
    else if (project_a.name.toLowerCase() < project_b.name.toLowerCase()) return -1;
    return 0;
}

const projects = [];

const max = minecraftinstance_json.installedAddons.length;

function next(i) {
    const installedAddon = minecraftinstance_json.installedAddons[i];

    if (installedAddon) {
        const melanx_url = `https://curse.melanx.de/project/${installedAddon.addonID}`;
        console.log(`${i+1}/${max}: ${melanx_url}`);

        axios.get(melanx_url)
            .then(response => {
                const project = response.data;
                project.file = {id: installedAddon.installedFile.id, name: installedAddon.installedFile.fileName};

                console.log(project);
                projects.push(project);

                next(i+1);
            })
            .catch(error => {
                next(i);
            });
    } else {
        done();
    }
}

function done() {
    projects.sort(by_project_name);

    const readme = [];
    readme.push(header);

    projects.forEach(project => {
        readme.push(`- [${project.file.name}](${project.website}/files/${project.file.id}) (by [${project.owner}](https://www.curseforge.com/members/${project.owner.toLowerCase()}/projects))`)
    });

    fs.writeFileSync(`${__dirname}/../../MODLIST.md`, readme.join('\n') + '\n');
}

// begin
next(0);
