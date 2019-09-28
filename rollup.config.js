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
    exclude: 'node_modules/**'
  }),
  resolve(),
  commonjs()
];

const dir = 'dist';
const folders = [];
const files = [];
[
  'Alert',
  'Badge',
  'Button',
  'GlobalStyle',
  'List',
  'Overlay',
  'ProgressBar',
  'Spinner'
].map(file => {
  files.push({
    input: `src/components/${file}.js`,
    output: { format: 'cjs', file: `${dir}/${file}.js` },
    plugins
  });
});
[
  'Accordion',
  'Actions',
  'Card',
  'Chat',
  'ContextMenu',
  'Form',
  'Grid',
  'Layout',
  'Menu',
  'Popover',
  'Search',
  'Sidebar',
  'Tabs',
  'Toastr',
  'Tooltip',
  'User'
].map(file => {
  folders.push({
    input: `src/components/${file}/index.js`,
    output: { format: 'cjs', file: `${dir}/${file}.js` },
    plugins
  });
});

export default [
  ...folders,
  ...files,
  {
    input: 'src/components/index.js',
    output: { format: 'cjs', file: `${dir}/index.js` },
    plugins
  },
  {
    input: 'src/svg/index.js',
    output: { format: 'cjs', file: `${dir}/svg.js` },
    plugins
  },
  {
    input: 'src/theme/index.js',
    output: { format: 'cjs', file: `${dir}/theme.js` },
    plugins
  }
];
