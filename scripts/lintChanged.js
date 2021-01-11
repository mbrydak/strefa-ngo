const { getChangedFilesScriptPath, runScript } = require('./scriptsHelpers');

runScript(`eslint $(node ${getChangedFilesScriptPath()} $ORIGIN) --no-error-on-unmatched-pattern`);
