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
    runtimeHelpers: true,
    plugins: [
      'external-helpers',
      [
        'transform-runtime',
        {
          polyfill: false,
          regenerator: true
        }
      ]
    ]
  }),
  resolve(),
  commonjs()
];
const cjs = {
  format: 'cjs',
  sourcemap: true
};

const es = {
  format: 'es',
  sourcemap: true
};

const getCjs = file => ({ ...cjs, file });
const getEs = file => ({ ...es, file });

export default [
  {
    input: 'src/components/index.js',
    output: [getCjs('dist/components.js'), getEs('dist/components.es.js')],
    plugins
  },
  {
    input: 'src/svg/index.js',
    output: [getCjs('dist/svg.js'), getEs('dist/svg.es.js')],
    plugins
  },
  {
    input: 'src/theme/index.js',
    output: [getCjs('dist/theme.js'), getEs('dist/theme.es.js')],
    plugins
  }
];
