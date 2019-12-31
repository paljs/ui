import typescript from 'rollup-plugin-typescript2';
import { terser } from 'rollup-plugin-terser';
import babel from 'rollup-plugin-babel';

const plugins = [
  typescript({
    typescript: require('typescript'),
    check: true,
    clean: true,
  }),
  babel({
    exclude: 'node_modules/**',
    plugins: ['babel-plugin-styled-components'],
  }),
  terser(),
];

const external = ['react', 'react-dom', 'styled-components'];
const globals = { react: 'React', 'react-dom': 'ReactDOM', 'styled-components': 'styled' };
const dir = 'dist';

export default [
  {
    input: 'src/index.ts',
    output: { format: 'cjs', file: `${dir}/index.js`, globals },
    plugins,
    external,
  },
];
