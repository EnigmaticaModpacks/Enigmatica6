const { Octokit } = require("@octokit/rest");
const fs = require("fs");
const { execSync } = require("child_process");
const octokit = new Octokit({ auth: process.argv[2] });

let params = {
    owner: process.argv[3],
    repo:  process.argv[4],
    path: 'MODLIST.md',
    ref:   process.argv[5],
};

octokit.rest.repos.getContent(params).then(response => {
    octokit.rest.repos.createOrUpdateFileContents({
        message: 'Update MODLIST.md',
        content: Buffer.from(fs.readFileSync(`${__dirname}/../../MODLIST.md`)).toString('base64'),
        sha: response.data.sha,
        branch: params["ref"],
        author: { // attribute the changelog to whomever last edited minecraftinstance.json:)
            name: execSync('git log -n 1 --pretty=format:%an minecraftinstance.json').toString().trim(),
            email: execSync('git log -n 1 --pretty=format:%ae minecraftinstance.json').toString().trim(),
        },
        ...params
    });
});
