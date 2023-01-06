import json from '@rollup/plugin-json'
import typescript from 'rollup-plugin-typescript2'
// 引入外部包
import resolve from '@rollup/plugin-node-resolve'
// 解析 cjs 格式的包
import commonjs from '@rollup/plugin-commonjs'

import eslint from '@rollup/plugin-eslint'

export default [
    {
        input: 'packages/vue/index.ts',
        external: ['react'],
        plugins: [
            resolve(),
            eslint({
                throwOnError: true,
            }),
            // 转换 cjs 为 esm
            commonjs(),
            typescript({
                sourcemap: true,
            }),
            json(),
        ],
        output: [
            {
                file: 'packages/vue/dist/index.umd.js',
                format: 'umd',
                sourcemap: true,
                name: 'Vue',
            },
            {
                file: 'packages/vue/dist/index.es.js',
                format: 'es',
                sourcemap: true,
                name: 'Vue',
            },
            {
                file: 'packages/vue/dist/index.js',
                format: 'iife',
                sourcemap: true,
                name: 'Vue',
            },
        ],
    },
]
