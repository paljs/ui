import typescript from 'rollup-plugin-typescript2';

const plugins = [
  typescript({
    typescript: require('typescript'),
  }),
];

export default [
  {
    input: 'src/index.ts',
    output: { format: 'cjs', file: `dist/index.js` },
    plugins,
  },
];
