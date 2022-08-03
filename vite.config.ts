import { resolve } from 'path'
import { defineConfig } from 'vite'
import { createVuePlugin as vue } from 'vite-plugin-vue2'

export default defineConfig({
    plugins: [vue()],
    resolve: {
        alias: {
            '@': resolve(__dirname, './src')
        }
    },
    build: {
        lib: {
            entry: resolve(__dirname, `src/index.ts`),
            formats: [`es`, `cjs`],
            fileName: `index`
        },
        rollupOptions: {
            external: [`vue`],
            output: {
                exports: `named`
            }
        },
        target: `es2018`,
        sourcemap: true
    }
})
