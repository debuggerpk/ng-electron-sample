import { exec } from 'child_process';
import * as loadGulpPlugins from 'gulp-load-plugins';

const $ = loadGulpPlugins();

let FIRST_RUN: boolean = true;

export const ngServeHMR = done => {
  const ng = exec('ng serve --hmr -e=hmr -dop=false');

  ng.stdout.pipe(process.stdout);

  ng.stdout.on('data', data => {
    // done();
    if (String(data) === 'webpack: Compiled successfully.\n') {
      done();
    }
  });

  ng.on('error', error => {
    throw error;
  });
};
