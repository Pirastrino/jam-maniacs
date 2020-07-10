const { generateConfig } = require('gatsby-plugin-ts-config');
module.exports = generateConfig({
  configDir: '.gatsby',
  tsNode: {
    project: 'tsconfig.build.json',
  },
});
