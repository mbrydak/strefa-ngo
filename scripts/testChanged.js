const { injectChangedFilesScript, runScript } = require('./scriptsHelpers');

runScript(`jest --findRelatedTests ${injectChangedFilesScript()} --passWithNoTests CI=true`);
