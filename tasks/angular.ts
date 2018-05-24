import { exec } from 'child_process';
import * as loadGulpPlugins from 'gulp-load-plugins';

const $ = loadGulpPlugins();

export const ngServeHMR = done => {
  const ng = exec('ng serve --hmr -c=hmr');

  ng.stdout.pipe(process.stdout);

  ng.stdout.on('data', data => {
    // done();
    if (
      String(data)
        .toLowerCase()
        .includes('compiled successfully')
    ) {
      done();
    }
  });

  ng.on('error', error => {
    throw error;
  });

  process.on('exit', () => {
    ng.kill();
  });
};
