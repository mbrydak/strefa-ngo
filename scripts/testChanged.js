const { getChangedFilesScriptPath, runScript } = require('./scriptsHelpers');

runScript(`jest --findRelatedTests $(node ${getChangedFilesScriptPath()} $ORIGIN) --passWithNoTests CI=true`);
