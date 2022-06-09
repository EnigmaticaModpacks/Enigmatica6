// This script runs for pull requests, it downloads the artifact for the target branch.

const { default: axios } = require("axios")
const { exec } = require("child_process")
const fsp = require("fs/promises")

const arg_repo = process.argv[2]
const arg_hash = process.argv[3]
const arg_mode = process.argv[4]
const arg_auth = process.argv[5]

const name = `server (${arg_mode})`

axios.defaults.headers.common = {
  'Accept': 'application/vnd.github.v3+json',
  'Authorization': `token ${arg_auth}`,
}

// axios.get('https://api.github.com/user').then(response => {
//   console.log(response.data);
// })

axios
  .get(`https://api.github.com/repos/${arg_repo}/actions/artifacts`)
  .then(response => {
    let artifact = response.data.artifacts.find(artifact => {
      return artifact.name == name && artifact.workflow_run.head_sha == arg_hash
    })

    console.log(artifact)
    if (!artifact) throw new Error(`Artifact not found.`)

    // ensure unzip target does not exist
    exec(`rm -r '${__dirname}/artifact'`)

    axios.get(artifact.archive_download_url, {responseType: 'stream'}).then(response => {
      console.log('downloaded, saving...')
      fsp.writeFile(`${__dirname}/artifact.zip`, response.data).then(() => {
        console.log('saved, unzipping...')
        exec(`unzip '${__dirname}/artifact.zip' -d '${__dirname}/artifact'`, (error, stdout, stderr) => console.log(stdout))
      })
    })
  })
