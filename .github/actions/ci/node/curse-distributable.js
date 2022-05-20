const fs = require('fs');
const axios = require('axios');
const https = require('https');
const clc = require('cli-color');

const minecraftinstance = JSON.parse(fs.readFileSync('minecraftinstance.json'));

https.globalAgent.maxSockets = 5; // concurrent api requests

const no_3rd_party_downloads = [];

const requests = [];

minecraftinstance.installedAddons.forEach(addon => {
    requests.push(axios.get(`https://auto.xmdhs.top/curse/api/v2/addon/${addon.addonID}`)
        .then(response => {
            const allowed = String(response.data.allowModDistribution);

            let color = clc.yellow;
            if(allowed === 'true') color = clc.green;
            if(allowed === 'false') color = clc.red;

            console.log(response.data.name, color(allowed));

            if(response.data.allowModDistribution === false) no_3rd_party_downloads.push(response.data.name);
        })
        .catch(error => {
            console.log(error.response.status);
            console.log(addon);
        }));
});

Promise.all(requests)
    .then(() => {
        console.log(no_3rd_party_downloads);
        if (no_3rd_party_downloads.length > 0) {
            console.log(`::warning::${no_3rd_party_downloads.length} mods have opted out of distribution: ${no_3rd_party_downloads.join(', ')}`);
        }
    });
