const { runScript } = require('./scriptsHelpers');

const patternsToRemoveArr = [
  'node_modules',
  'dist',
  'generated',
  'storybook-static',
  '.docusaurus',
  '.next',
  'coverage',
  'yarn-error.log',
];

const patternsToRemoveStr = patternsToRemoveArr.map((pattern) => `${pattern} **/${pattern}`).join(' ');

runScript(`rimraf ${patternsToRemoveStr}`);
