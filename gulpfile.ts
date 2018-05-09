import * as gulp from 'gulp';
import { ngServeHMR } from './tasks/angular';
import { PATHS } from './tasks/config';
import { restartElectron, runElectron, writeDesktopPackageJson, installElectronDependencies } from './tasks/electron';
import { environmentHMR } from './tasks/environment';
import { electronMainBundle, electronPreloadBundle } from './tasks/rollup';

/**
 * Electron Build Taks
 */
gulp.task('rollup:electron:main', electronMainBundle);
gulp.task('rollup:electron:preload', electronPreloadBundle);
gulp.task('rollup:electron', gulp.parallel(['rollup:electron:main', 'rollup:electron:preload']));

// /**
//  * Gulp Tasks
//  */
// gulp.task('serve', gulp.series('build:electron', gulp.parallel(['serve:app', 'watch:electron', 'serve:electron'])));

// gulp.task('default', gulp.series('build:electron', 'set:hmrVar', gulp.parallel(['serve:hmr', 'watch:electron'])));

gulp.task('ng:hmr', ngServeHMR);

gulp.task('environment:hmr', environmentHMR);

gulp.task('electron:run', runElectron);
gulp.task('electron:restart', restartElectron);
gulp.task('electron:package', writeDesktopPackageJson);
gulp.task('electron:deps', installElectronDependencies);

gulp.task('watch:electron', done => {
  gulp.watch(PATHS.electron.src.watch, gulp.series(['rollup:electron', 'electron:restart']));
  done();
});

gulp.task(
  'serve',
  gulp.series([
    gulp.parallel(['environment:hmr', 'rollup:electron', 'electron:package', 'electron:deps']),
    'ng:hmr',
    'electron:run',
    'watch:electron',
  ]),
);
