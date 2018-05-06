import * as browserSync from 'browser-sync';
import { exec } from 'child_process';
import * as gulp from 'gulp';
import * as loadGulpPlugins from 'gulp-load-plugins';
// import * as env from 'gulp-env';
// import * as nodemon from 'gulp-nodemon';
// import * as typescript from 'gulp-typescript';
import { HmrBrowserSyncConfig, Paths, PROXY } from './config';

const $ = loadGulpPlugins();

/**
 * Task to Build Main App
 */
export const buildAppTask = () => {
  const buildCmd = exec('ng build');

  buildCmd.stdout.pipe(process.stdout);
  buildCmd.on('error', err => {
    throw err;
  });

  return buildCmd;
};

/**
 * Task to Serve Main App
 */
export const serveAppTask = () => {
  const servedApp = exec('ng serve');

  servedApp.stdout.pipe(process.stdout);
  servedApp.on('error', err => {
    throw err;
  });

  return servedApp;
};

/**
 * Task to Build Electron
 */
export const buildElectronTask = () => {
  return (
    gulp
      .src([Paths.electron_src])
      .pipe($.debug())
      // .pipe($.sourcemaps.init())
      .pipe($.typescript.createProject('./tsconfig.desktop.json')())
      .pipe($.debug())
      // .pipe($.sourcemaps.write('.'))
      .pipe(gulp.dest(Paths.electron_dest))
  );
};

/**
 * Task to Serve Built Electron
 */
export const serveElectronTask = () => {
  const electronIns = exec(`electron ${Paths.electron_dest}`);

  electronIns.stdout.pipe(process.stdout);

  return electronIns;
};

/**
 * Task to set Launch Mode to Build in enviorment so Electron
 * serve the built app and listen to proxy.
 * @param done - Callback function to signal task completion.
 */
export const setLaunchVariableTask = done => {
  $.env.set({
    LAUNCH_MODE: 'build',
    NODE_ENV: 'development',
  });

  done();
};

/**
 * Task to set Launch Mode to hmr in enviorment.
 * @param done - Callback function to signal task completion.
 */
export const setHmrVariableTask = done => {
  $.env.set({
    LAUNCH_MODE: 'hmr',
    NODE_ENV: 'development',
  });

  done();
};

/**
 * Task to Serve Hmr
 * @param done - Callback function to signal task completion.
 */
export const serveHmrTask = done => {
  let firstRun = true;

  const hmr = exec('ng serve --hmr -e=hmr -dop=false');

  hmr.stdout.pipe(process.stdout);
  hmr.stdout.on('data', data => {
    if (String(data) === 'webpack: Compiled successfully.\n') {
      if (firstRun) {
        firstRun = false;
        done();
        return serveElectronHmrTask(done);
      }
    }
  });

  hmr.on('error', err => {
    throw err;
  });
};

/**
 * Task to Initaite Electron while app is being served via Hmr
 * @param done - Callback function to signal task completion.
 */
export const serveElectronHmrTask = done => {
  return $.nodemon({
    exec: `electron ${Paths.electron_dest}`,
    ignore: [`${Paths.electron_dest}apps/**/*.*`, `${Paths.electron_dest}libs/**/*.*`],
    watch: [Paths.electron_dest],
  }).on('start', () => {
    proxyCli(PROXY, HmrBrowserSyncConfig);
  });
};

/**
 * Helper Method.
 * This method gets the proxy browser-sync instance and
 * calls the reload method.
 * If the instance doesnt exist, it creates a new one.
 * @param proxy  - proxy type, HMR
 * @param config - relative proxy config object.
 */
export const proxyCli = (proxy: string, config: object) => {
  try {
    const active = browserSync.get(proxy);
    if (active) {
      console.log('Proxy Active: Reloading.');
      active.reload();
    }
  } catch (err) {
    console.log('Proxy Inactive: Instantiating new instance.');
    return browserSync.create(proxy).init(config);
  }
};
