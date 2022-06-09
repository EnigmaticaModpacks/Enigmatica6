const fs = require('fs');
const axios = require('axios');
const https = require('https');
const clc = require('cli-color');

const axiosThrottle = require('axios-request-throttle');
axiosThrottle.use(axios, { requestsPerSecond: 4 });

const minecraftinstance = JSON.parse(fs.readFileSync('minecraftinstance.json'));

const no_3rd_party_downloads = [];

const requests = [];

axios.defaults.headers.common = {
    'Accept': 'application/json',
    'x-api-key': `<api key>`,
}

minecraftinstance.installedAddons.forEach(addon => {
    requests.push(axios.get(`https://api.curseforge.com/v1/mods/${addon.addonID}`)
        .then(response => {
            const allowed = String(response.data.data.allowModDistribution);

            let color = clc.yellow;
            if(allowed === 'true') color = clc.green;
            if(allowed === 'false') color = clc.red;

            console.log(response.data.data.name, color(allowed));

            if(response.data.data.allowModDistribution === false) no_3rd_party_downloads.push(response.data.data.name);
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
            console.log(`::warning::${no_3rd_party_downloads.length} mods would like to get paid for their work: ${no_3rd_party_downloads.join(', ')}`);
        }
    });
