const defineConfig = require('./define-config').build;
const { stringifyStrings } = require('@zengenti/contensis-react-base/util');

module.exports = {
  base: stringifyStrings(defineConfig),
  dev: {
    __isBrowser__: 'true',
  },
  prod: {
    __isBrowser__: 'false',
  },
};
