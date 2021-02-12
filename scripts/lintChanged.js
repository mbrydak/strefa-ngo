const { injectChangedFilesScript, runScript } = require('./scriptsHelpers');

runScript(`eslint ${injectChangedFilesScript()} --no-error-on-unmatched-pattern`);
