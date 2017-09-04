const path = require('path');

const rollupPluginNodeResolve = require('rollup-plugin-node-resolve');
const rollupPluginCommonJs = require('rollup-plugin-commonjs');
const rollupPluginJson = require('rollup-plugin-json');

module.exports = {
  input: path.join(__dirname, 'index.js'),
  plugins: [
    rollupPluginNodeResolve({
      main: true,
      preferBuiltins: false,
    }),
    rollupPluginCommonJs(),
    rollupPluginJson(),
  ],
  output: {
    format: 'cjs',
  },
  name: 'indev',
  strict: false,
};
