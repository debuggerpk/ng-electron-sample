export const PROXY = 'HMR-Proxy';

export const Paths = {
  electron_src: './desktop/**/*.ts',
  electron_dest: './dist/',
  app_src: ['./apps/root/src/**/*.ts', './apps/root/src/**/*.html', './apps/root/src/**/*.scss'],
  lib_src: ['./libs/**/*.ts'],
  app_config: './apps/root/src/tsconfig.app.json',
};

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
