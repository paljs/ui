import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import external from 'rollup-plugin-peer-deps-external';
import resolve from 'rollup-plugin-node-resolve';
import url from 'rollup-plugin-url';
import svgr from '@svgr/rollup';

const plugins = [
  external(),
  url(),
  svgr(),
  babel({
    exclude: 'node_modules/**',
    plugins: ['external-helpers']
  }),
  resolve(),
  commonjs()
];
const folders = [];
const files = [];
[
  'Alert',
  'Button',
  'Badge',
  'Overlay',
  'GlobalStyle',
  'Spinner',
  'ProgressBar',
  'List'
].map(file => {
  files.push({
    input: `src/components/${file}.js`,
    output: { format: 'cjs', file: `dist/${file}.js` },
    plugins
  });
});
[
  'Actions',
  'Menu',
  'Accordion',
  'Card',
  'Grid',
  'Sidebar',
  'Tabs',
  'Layout',
  'Form',
  'Search',
  'User',
  'Popover',
  'Tooltip'
].map(file => {
  folders.push({
    input: `src/components/${file}/index.js`,
    output: { format: 'cjs', file: `dist/${file}.js` },
    plugins
  });
});

export default [
  ...folders,
  ...files,
  {
    input: 'src/components/index.js',
    output: { format: 'cjs', file: 'dist/index.js' },
    plugins
  },
  {
    input: 'src/svg/index.js',
    output: { format: 'cjs', file: 'dist/svg.js' },
    plugins
  },
  {
    input: 'src/theme/index.js',
    output: { format: 'cjs', file: 'dist/theme.js' },
    plugins
  }
];
