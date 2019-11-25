import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import url from 'rollup-plugin-url';
import svgr from '@svgr/rollup';
import { terser } from 'rollup-plugin-terser';

const plugins = [
  url(),
  svgr(),
  babel({
    exclude: 'node_modules/**',
    plugins: ['babel-plugin-styled-components']
  }),
  resolve(),
  commonjs(),
  terser()
];
const external = ['react', 'react-dom', 'styled-components', 'polished', 'prop-types'];
const globals = {react: 'React', 'react-dom': 'ReactDOM','prop-types': 'PropTypes', 'styled-components': 'styled'};
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
    output: { format: 'cjs', file: `${dir}/${file}.js`, globals },
    plugins,
    external
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
    output: { format: 'cjs', file: `${dir}/${file}.js`, globals },
    plugins,
    external
  });
});

export default [
  ...folders,
  ...files,
  {
    input: 'src/components/index.js',
    output: { format: 'cjs', file: `${dir}/index.js`, globals },
    plugins,
    external
  },
  {
    input: 'src/svg/index.js',
    output: { format: 'cjs', file: `${dir}/svg.js`, globals },
    plugins,
    external
  },
  {
    input: 'src/theme/index.js',
    output: { format: 'cjs', file: `${dir}/theme.js`, globals },
    plugins,
    external
  }
];
