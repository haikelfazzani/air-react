import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import postcss from "rollup-plugin-postcss";
import babel from '@rollup/plugin-babel';
import { terser } from "rollup-plugin-terser";
//import sass from 'rollup-plugin-sass';

const path = require('path')
const packageJson = require("./package.json");

export default {
  input: "components/index.js",
  output: [
    {
      file: packageJson.main,
      format: "cjs",
      sourcemap: true
    },
    {
      file: packageJson.module,
      format: "esm",
      sourcemap: true
    }
  ],
  plugins: [
    peerDepsExternal(),
    resolve(),
    babel({
      presets: ['@babel/env', '@babel/preset-react'],
      plugins: ['@babel/plugin-transform-runtime'],
      babelHelpers: 'runtime',
      exclude: 'node_modules/**'
    }),
    postcss({
      minimize: true,
      extensions: ['.css'],
      extract: path.resolve('dist/index.css')
    }),
    commonjs(),
    process.env.NODE_ENV === 'production' ? terser() : ''
  ]
};