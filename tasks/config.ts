
export const PROXY = 'HMR-Proxy';

export const Paths ={
  electron_src : './standalone/**/*.ts',
  electron_dest : './dist/electron/',
  app_src: ['./apps/main/src/**/*.ts', './apps/main/src/**/*.html', './apps/main/src/**/*.scss'],
  app_config: './apps/main/src/tsconfig.app.json'
}

export const HmrBrowserSyncConfig = {
  open: false,
  ui: false,
  logLevel: 'silent',
  notify: false,
  port: 4201,
  proxy: {
    target: 'http://localhost:4200'
  }
};
