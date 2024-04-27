import { defineConfig } from 'vite'
import { resolve } from 'path'
import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  server: {
    port: 7788,
    host: '0.0.0.0',
  },
  build: {
    minify: 'esbuild',
    terserOptions: {
      format: {
        comments: false,
      },
    },
    lib: {
      entry: resolve(__dirname, './src/index.ts'),
      name: 'swc-core',
      fileName: (format) => `index.${format}.js`,
      formats: ['es', 'cjs'],
    },
  },
  plugins: [dts()],
})
