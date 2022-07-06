import { basename } from "https://deno.land/std@0.127.0/path/mod.ts";

// during my tests a repo-wide .prettierignore didn't work nicely at all,
// so instead of a blacklist we're gonna run prettier for each directory.
const directories: string[] = [
  'kubejs/client_scripts',
  'kubejs/server_scripts',
  'kubejs/startup_scripts',
];

console.log({directories});

const prettiers: Promise<Deno.ProcessStatus>[] = [];

directories.forEach(directory => {
  const process = Deno.run({
    cmd: ['npx', '--yes', 'prettier', directory, '--loglevel=debug', '--write'],
  });

  prettiers.push(process.status());
});

//

Promise.all(prettiers).then(async () => {

  const process = Deno.run({
    cmd: ['git', 'status', '--porcelain'],
    stdout: 'piped',
  });

  const status_lines = new TextDecoder().decode(await process.output()).split('\n');
  console.log(status_lines);

  const authors: {[key: string]: string} = {};

  for (const status_line of status_lines) {
    if (status_line.startsWith(' M ')) {
      const pathname = status_line.substring(3);

      // https://github.com/EnigmaticaModpacks/Enigmatica6/pull/5056
      if (pathname.includes(' ')) continue;

      // an = author name
      //  n = newline
      // ae = author email
      const last_commiter = Deno.run({
        cmd: ['git', 'log', '-n 1', '--pretty=format:%an%n%ae', pathname],
        stdout: 'piped',
      })
  
      // parse the last comitter for this file
      const [author_name, author_email] = new TextDecoder().decode(await last_commiter.output()).split('\n');
      console.log([pathname, author_name, author_email]);

      await Deno.run({
        cmd: ['git', 'add', pathname]
      }).status();

      // flag author for in co-authored-by
      authors[author_email] = author_name;
    }
  }

  console.log({authors});
  let co_authors = '';
  for (const [email, name] of Object.entries(authors)) {
    co_authors += `Co-authored-by: ${name} <${email}>\n`;
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
