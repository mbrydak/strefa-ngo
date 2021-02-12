const { runScript } = require('./scriptsHelpers');

const targetBranch = process.env.TARGET_BRANCH || 'master';
const splitPath = process.cwd().split('/');
const packagePath = splitPath.slice(-2).join('/');

const gitDiffScript = `git diff --name-only --relative="${packagePath}" --diff-filter=ACMRTUXB ${targetBranch}`;
const grepJSFilesScript = 'grep -E "(.js$|.ts$|.tsx$)"';

runScript(`${gitDiffScript} | ${grepJSFilesScript}`);
