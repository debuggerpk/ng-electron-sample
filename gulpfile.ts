import * as gulp from 'gulp';
import * as typescript from 'gulp-typescript';
import { exec } from 'child_process';

/**
 * Gulp Configuration
 */

import {
  Paths
} from './tasks/config';

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
  setHmrVariableTask
} from './tasks/tasks';


/**
 * Gulp task wrapper.
 */
gulp.task('build:app', buildAppTask);
gulp.task('serve:app', serveAppTask);
gulp.task('build:electron', buildElectronTask);
gulp.task('serve:electron', serveElectronTask);
gulp.task('serve:hmr', serveHmrTask);
gulp.task('set:launchVar', setLaunchVariableTask);
gulp.task('set:hmrVar', setHmrVariableTask);


/**
 * Adding Watchers
 */
gulp.task('watch:app', done => {
  gulp.watch(Paths.app_src, gulp.series(buildAppTask));
  done();
});

gulp.task('watch:libs', done => {
  gulp.watch(Paths.lib_src, gulp.series(buildAppTask));
  done();
});

gulp.task('watch:electron', done => {
  gulp.watch(Paths.electron_src, gulp.series(buildElectronTask));
  done();
});


/**
 * Gulp Tasks
 */
gulp.task('serve', gulp.series('build:electron', gulp.parallel(['serve:app', 'watch:app', 'watch:electron', 'serve:electron', 'watch:libs'])));

gulp.task('default', gulp.series('build:electron', 'set:hmrVar', gulp.parallel(['serve:hmr', 'watch:electron', 'watch:libs'])));

