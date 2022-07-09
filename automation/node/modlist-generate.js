const fs = require('fs');
const axios = require('axios');

const minecraftinstance_json = JSON.parse(fs.readFileSync(`${__dirname}/../../minecraftinstance.json`));

// grab the name and the version for the markdown header from the pwsh settings
const settings_ps1    = fs.readFileSync(`${__dirname}/../../automation/settings.ps1`).toString();
const CLIENT_NAME     = settings_ps1.match(/\$CLIENT_NAME = "(.*)"/)[1];
const MODPACK_VERSION = settings_ps1.match(/\$MODPACK_VERSION = "(.*)"/)[1];

// match the sorting of MelanX/ModListCreator
function by_project_name(project_a, project_b) {
    if      (project_a.name.toLowerCase() > project_b.name.toLowerCase()) return +1;
    else if (project_a.name.toLowerCase() < project_b.name.toLowerCase()) return -1;
    return 0;
}

// fire off just a single api call
axios.get('https://curse.melanx.de/projects', {
    data: minecraftinstance_json.installedAddons.map(installedAddon => installedAddon.addonID)
}).then(response => {
    const projects = Object.values(response.data).sort(by_project_name);
    const file_for = []

    // we know the filename from minecraftinstance.json already. ^-^
    minecraftinstance_json.installedAddons.forEach(installedAddon => {
        file_for[installedAddon.addonID] = {id: installedAddon.installedFile.id, name: installedAddon.installedFile.fileName};
    });

    const lines = [`## ${CLIENT_NAME} - ${MODPACK_VERSION}`];

    projects.forEach(project => {
        lines.push(`- [${file_for[project.project].name}](${project.website}/files/${file_for[project.project].id}) (by [${project.owner}](https://www.curseforge.com/members/${project.owner.toLowerCase()}/projects))`)
    });

    console.log(lines.join('\n'));
    fs.writeFileSync(`${__dirname}/../../MODLIST.md`, lines.join('\n') + '\n');
})
