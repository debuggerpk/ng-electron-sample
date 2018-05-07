export const PROXY = 'HMR-Proxy';

export const PATHS = {
  electron: {
    src: {
      folder: './desktop',
      entryPoints: { index: 'index.ts', preload: 'preload.ts' },
      tsConfig: './tsconfig.desktop.json',
      watch: ['./desktop/**/*.ts', './libs/common/**/*.ts'],
    },
    dest: './dist',
  },
  app: {
    src: {
      watch: ['./apps/root/src/**/*.ts', './apps/root/src/**/*.html', './apps/root/src/**/*.scss'],
      tsConfig: './apps/root/src/tsconfig.app.json',
    },
  },
  lib: {
    src: {
      watch: ['./libs/**/*.ts'],
    },
  },
};
// electron_src: './desktop/**/*.ts',
// electron_dest: './dist/',
// app_src: ['./apps/root/src/**/*.ts', './apps/root/src/**/*.html', './apps/root/src/**/*.scss'],
// lib_src: ['./libs/**/*.ts'],
// app_config: './apps/root/src/tsconfig.app.json',

export const HmrBrowserSyncConfig = {
  open: false,
  ui: false,
  logLevel: 'silent',
  notify: false,
  port: 4201,
  proxy: {
    target: 'http://localhost:4200',
  },
};
