import * as loadGulpPlugins from 'gulp-load-plugins';

const $ = loadGulpPlugins();

export const environmentHMR = done => {
  $.env.set({ LAUNCH_MODE: 'hmr', NODE_ENV: 'development' });
  done();
};
