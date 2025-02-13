import { Config } from '@stencil/core';
import { postcss } from '@stencil-community/postcss';
import tailwind from 'tailwindcss';
import autoprefixer from 'autoprefixer';

export const config: Config = {
  namespace: 'swc-tiptap',
  globalStyle: 'src/global/app.css',
  taskQueue: 'async',
  sourceMap: true,
  devServer: {
    openBrowser: false,
    port: 3333,
    reloadStrategy: 'hmr',
  },
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'www',
      serviceWorker: null,
      buildDir: 'build',
      dir: 'www',
    },
    {
      type: 'dist-custom-elements',
      generateTypeDeclarations: true,
      customElementsExportBehavior: 'auto-define-custom-elements',
      dir: 'dist/components',
    },
    {
      type: 'docs-readme',
    },
  ],
  plugins: [
    postcss({
      plugins: [
        tailwind({
          config: './tailwind.config.js',
        }),
        autoprefixer(),
      ],
    }),
  ],
  testing: {
    browserHeadless: true,
  },
  extras: {
    enableImportInjection: true,
  },
  globalScript: 'src/global/app.ts',
};
