const { runScript } = require('./scriptsHelpers');

const targetBranch = process.argv[2] || 'master';
const splitPath = process.cwd().split('/');
const packagePath = `${splitPath[splitPath.length - 2]}/${splitPath[splitPath.length - 1]}`;

const gitDiffScript = `git diff --name-only --relative="${packagePath}" --diff-filter=ACMRTUXB ${targetBranch}`;
const grepJSFilesScript = 'grep -E "(.js$|.ts$|.tsx$)"';

runScript(`${gitDiffScript} | ${grepJSFilesScript}`);
