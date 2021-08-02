import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';

export default {
    input: './index.js',
    output: [
        {
            file: 'dist/rollup.umd.js',
            format: 'umd',
            name: 'RememberLocation'
        },
        {
            file: 'dist/rollup.iife.js',
            format: 'iife',
            name: 'RememberLocation'
        },
        {
            file: 'dist/rollup.esm.js',
            format: 'es',
        },
        {
            file: 'dist/rollup.cjs.js',
            format: 'cjs',
            exports: 'default'
        }
    ],
    plugins: [ commonjs(), resolve() ]
};