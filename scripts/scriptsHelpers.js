const { spawnSync } = require('child_process');
const { relative, resolve } = require('path');

exports.getChangedFilesScriptPath = () => relative(process.cwd(), resolve(__dirname, 'findChangedFiles.js'));

exports.runScript = (script) => {
  spawnSync(script, { stdio: 'inherit', shell: true });
};
