// during my tests a repo-wide .prettierignore didn't work nicely at all,
// so instead of a blacklist we're gonna run prettier for each directory.
const directories: string[] = [
  'kubejs/client_scripts',
  'kubejs/server_scripts',
  'kubejs/startup_scripts',
];

// run each of the directories asyncronously
const prettiers: Promise<Deno.ProcessStatus>[] = [];
directories.forEach(directory => {
  prettiers.push(Deno.run({
    cmd: ['npx', '--yes', 'prettier', directory, '--loglevel=debug', '--write'],
  }).status());
});

// once all prettiers are done, view diff
Promise.all(prettiers).then(async () => {

  const process = Deno.run({
    cmd: ['git', 'status', '--porcelain'],
    stdout: 'piped',
  });

  const status_lines = new TextDecoder().decode(await process.output()).split('\n');
  const authors: {[key: string]: boolean} = {};

  for (const status_line of status_lines) {
    if (status_line.startsWith(' M ')) {
      const pathname = status_line.substring(3);

      // https://github.com/EnigmaticaModpacks/Enigmatica6/pull/5056
      if (pathname.includes(' ')) continue;

      // an = author name
      // ae = author email
      const git_log = Deno.run({
        cmd: ['git', 'log', '--pretty=format:"%an <%ae>"', pathname],
        stdout: 'piped',
      });

      // get the last author of this file who's name is not github-actions[bot]
      const author: string = new TextDecoder().decode(await git_log.output()).split('\n').find(author => {
        return !author.startsWith('"github-actions[bot]');
      })!;

      await Deno.run({
        cmd: ['git', 'add', pathname]
      }).status();

      authors[author.slice(1, -1)] = true;
    }
  }

  let co_authors = '';
  for (const author of Object.keys(authors)) {
    co_authors += `Co-authored-by: ${author}\n`;
  }

  await Deno.run({
    cmd: ['git', 'commit', '-m', `Run prettier\n\n${co_authors}`],
    env: {
      GIT_AUTHOR_NAME: 'github-actions[bot]',
      GIT_AUTHOR_EMAIL: '41898282+github-actions[bot]@users.noreply.github.com',
      GIT_COMMITTER_NAME: 'github-actions[bot]',
      GIT_COMMITTER_EMAIL: '41898282+github-actions[bot]@users.noreply.github.com',
    }
  }).status();
});
