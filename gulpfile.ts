import * as gulp from 'gulp';
import * as typescript from 'gulp-typescript';
import { exec } from 'child_process';

/**
 * Gulp Configuration
 */

import { PATHS } from './tasks/config';

/**
 * Importing Gulp Tasks
 */
import {
  buildAppTask,
  serveAppTask,
  buildElectronTask,
  serveElectronTask,
  setLaunchVariableTask,
  serveHmrTask,
  setHmrVariableTask,
} from './tasks/tasks';

import { electronMainBundle, electronPreloadBundle } from './tasks/rollup';

/**
 * Electron Build Taks
 */
gulp.task('rollup:electron:main', electronMainBundle);
gulp.task('rollup:electron:preload', electronPreloadBundle);
gulp.task('rollup:electron', gulp.parallel(['rollup:electron:main', 'rollup:electron:preload']));
/**
 * Gulp task wrapper.
 */
gulp.task('build:app', buildAppTask);
gulp.task('serve:app', serveAppTask);
gulp.task('build:electron', gulp.series(['rollup:electron']));
gulp.task('serve:electron', serveElectronTask);
gulp.task('serve:hmr', serveHmrTask);
gulp.task('set:launchVar', setLaunchVariableTask);
gulp.task('set:hmrVar', setHmrVariableTask);

/**
 * Adding Watchers
 */
gulp.task('watch:app', done => {
  gulp.watch(PATHS.app.src.watch, gulp.series(buildAppTask));
  done();
});

gulp.task('watch:libs', done => {
  gulp.watch(PATHS.lib.src.watch, gulp.series(buildAppTask));
  done();
});

gulp.task('watch:electron', done => {
  gulp.watch(PATHS.electron.src.watch, gulp.series(['rollup:electron']));
  done();
});

/**
 * Gulp Tasks
 */
gulp.task(
  'serve',
  gulp.series(
    'build:electron',
    gulp.parallel(['serve:app', 'watch:app', 'watch:electron', 'serve:electron', 'watch:libs']),
  ),
);

gulp.task(
  'default',
  gulp.series('build:electron', 'set:hmrVar', gulp.parallel(['serve:hmr', 'watch:electron', 'watch:libs'])),
);
