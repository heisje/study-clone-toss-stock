// rollup.config.mjs

import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import { babel } from '@rollup/plugin-babel';
import css from "rollup-plugin-import-css";

// This is required to read package.json file when
// using Native ES modules in Node.js
// https://rollupjs.org/command-line-interface/#importing-package-json
import { createRequire } from 'node:module';
const requireFile = createRequire(import.meta.url);
const packageJson = requireFile('./package.json');

export default [
    {

        input: 'src/index.js',
        output: [
            {
                file: packageJson.main,
                format: 'cjs',
                sourcemap: true,
            },
            {
                file: packageJson.module,
                format: 'esm',
                exports: 'named',
                sourcemap: true,
            },
        ],
        plugins: [
            peerDepsExternal(),
            resolve({
                extensions: ['.js', '.jsx'],
            }),
            commonjs(),
            terser(),
            babel({
                babelHelpers: 'bundled',
                extensions: ['.js', '.jsx'],
                exclude: 'node_modules/**',
            }),
            css()
        ],
        external: ['react', 'react-dom'],
    },
];