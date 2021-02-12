const path = require('path');

module.exports = {
  icon: true,
  typescript: true,
  ref: true,
  replaceAttrValues: {
    '#000': 'currentColor',
  },
  template({ template }, opts, { interfaces, componentName, props, jsx }) {
    const plugins = ['jsx', 'typescript'];
    const typeScriptTpl = template.smart({ plugins });
    const name = `${componentName.name.replace('Svg', '')}Icon`;

    return typeScriptTpl.ast`
    import React, { forwardRef } from 'react';

    ${interfaces}

    export const ${name} = forwardRef((${props}) => (${jsx}));

    ${name}.displayName = '${name}';
    `;
  },
  indexTemplate(filePaths) {
    const exportEntries = filePaths.map((filePath) => {
      const basename = path.basename(filePath, path.extname(filePath));

      return `export { ${basename}Icon } from './${basename}'`;
    });

    return exportEntries.join('\n');
  },
};
