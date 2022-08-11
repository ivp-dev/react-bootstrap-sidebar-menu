import babel from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import copy from "rollup-plugin-copy";
//import { terser } from "rollup-plugin-terser";
//import { uglify } from "rollup-plugin-uglify";

const input = "src/index.ts";
const output = "dist/index";
const extensions = [".js", ".ts", ".tsx", ".scss"];

const globals = {
  react: "React",
  "react-dom": "ReactDOM",
  "prop-types": "PropTypes",
  "react-bootstrap": "ReactBootstrap",
};

const external = [
  "react",
  "react-dom",
  "react-bootstrap",
  "prop-types",
  "classnames",
];

export default [
  {
    input: input,
    output: {
      file: `${output}.js`,
      format: "cjs",
      sourcemap: false,
      globals,
    },
    external,
    plugins: [
      resolve({
        browser: true,
        extensions,
      }),
      commonjs({
        include: ["node_modules/**"],
      }),
      babel({
        extensions,
        exclude: "node_modules/**",
        babelHelpers: "bundled",
      }),
      copy({
        targets: [
          {
            src: "src/sidebar-menu.scss",
            dest: "dist",
          },
        ],
      }),
      external,
    ],
  },
  {
    input: input,
    output: {
      name: "react-bootstrap-sidebar-menu",
      file: `${output}.umd.js`,
      format: "umd",
      globals,
    },
    external,
    plugins: [
      resolve({
        extensions,
      }),
      commonjs({
        include: ["node_modules/**"],
      }),
      babel({
        extensions,
        exclude: "node_modules/**",
        babelHelpers: "bundled",
      }),
      external,
    ],
  },
  {
    input: input,
    output: {
      file: `${output}.es.js`,
      format: "es",
      globals,
    },
    external,
    plugins: [
      resolve({
        extensions,
      }),
      commonjs({
        include: ["node_modules/**"],
      }),
      babel({
        extensions,
        exclude: "node_modules/**",
        babelHelpers: "bundled",
      }),
      external,
    ],
  }
];
