const { spawnSync } = require('child_process');
const { relative, resolve } = require('path');

exports.injectChangedFilesScript = () => {
  const relativeScriptPath = relative(process.cwd(), resolve(__dirname, 'findChangedFiles.js'));

  return `$(node ${relativeScriptPath})`;
};

exports.runScript = (script) => {
  spawnSync(script, { stdio: 'inherit', shell: true });
};
