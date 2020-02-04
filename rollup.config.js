import typescript from 'rollup-plugin-typescript2';
import pkg from './package.json';

export default [
  {
    input: 'src/index.ts',
    output: [
     // { file: 'docs/node_modules/oah-ui/dist/index.cjs.js', format: 'cjs' },
      { file: pkg.main, format: 'cjs' },
      { file: pkg.module, format: 'esm' },
    ],
    plugins: [
      typescript({
        typescript: require('typescript'),
        check: false,
        clean: true,
      }),
    ],
    external: Object.keys(pkg.peerDependencies || {}),
  },
];
