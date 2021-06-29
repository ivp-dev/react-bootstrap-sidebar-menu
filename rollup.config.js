import babel from "rollup-plugin-babel";
import commonjs from "rollup-plugin-commonjs";
import resolve from "rollup-plugin-node-resolve";
import external from "rollup-plugin-peer-deps-external";
import { terser } from "rollup-plugin-terser";
import { uglify } from "rollup-plugin-uglify";

const input = 'src/index.ts';
const output = 'dist/index';
const extensions = ['.js', '.ts', '.tsx'];

export default [
  {
    input: input,
    output: {
      file: `${output}.js`,
      format: 'cjs',
      sourcemap: true
    },
    external: [
      'react',
      'react-dom',
      'react-bootstrap',
      'prop-types'
    ],
    plugins: [
      resolve({
        browser: true,
        extensions
      }),
      commonjs({
        include: [
          'node_modules/**'
        ]
      }),
      babel({
        extensions,
        exclude: "node_modules/**"
      }),
      external(),
      uglify(),
    ],
  },
  {
    input: input,
    output: {
      name: 'react-split-view',
      file: `${output}.umd.js`,
      format: 'umd'
    },
    external: [
        'react',
        'react-dom',
        'react-bootstrap',
        'prop-types'
    ],
    plugins: [
      resolve({
        extensions
      }),
      commonjs({
        include: [
          'node_modules/**'
        ]
      }),
      external(),
      babel({
        extensions,
        exclude: "node_modules/**"
      }),
      terser(),
    ],
  }, {
    input: input,
    output: {
      file: `${output}.es.js`,
      format: 'es'
    },
    external: [
        'react',
        'react-dom',
        'react-bootstrap',
        'prop-types'
    ],
    plugins: [
      resolve({
        extensions
      }),
      commonjs({
        include: [
          'node_modules/**'
        ]
      }),
      babel({
        extensions,
        exclude: "node_modules/**"
      }),
      external(),
      terser(),
    ]
  }
]