import typescript from 'rollup-plugin-typescript2';
import { terser } from 'rollup-plugin-terser';

const plugins = [
  typescript({
    typescript: require('typescript'),
  }),
  terser(),
];
const external = ['react', 'react-dom', 'styled-components'];
const globals = { react: 'React', 'react-dom': 'ReactDOM', 'styled-components': 'styled' };
const dir = 'dist';
const folders = [];
const files = [];
['Alert', 'Badge', 'Button', 'GlobalStyle', 'List', 'Overlay', 'ProgressBar', 'Spinner'].map(file => {
  files.push({
    input: `src/components/${file}.tsx`,
    output: { format: 'cjs', file: `${dir}/${file}.js`, globals },
    plugins,
    external,
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
  'User',
].map(file => {
  folders.push({
    input: `src/components/${file}/index.tsx`,
    output: { format: 'cjs', file: `${dir}/${file}.js`, globals },
    plugins,
    external,
  });
});

export default [
  ...folders,
  ...files,
  {
    input: 'src/components/index.js',
    output: { format: 'cjs', file: `${dir}/index.js`, globals },
    plugins,
    external,
  },
  {
    input: 'src/svg/index.js',
    output: { format: 'cjs', file: `${dir}/svg.js`, globals },
    plugins,
    external,
  },
  {
    input: 'src/theme/index.js',
    output: { format: 'cjs', file: `${dir}/theme.js`, globals },
    plugins,
    external,
  },
];
