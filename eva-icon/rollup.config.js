import typescript from 'rollup-plugin-typescript2';
import { terser } from 'rollup-plugin-terser';

const plugins = [
  typescript({
    typescript: require('typescript'),
  }),
  terser(),
];

export default [
  {
    input: 'src/index.ts',
    output: { format: 'cjs', file: `dist/index.js` },
    plugins,
  },
];
