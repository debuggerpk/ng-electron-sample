import { spawn } from 'child_process';
import * as path from 'path';
import * as jetpack from 'fs-jetpack';
import { PATHS } from './config';
import { installOrRebuild } from 'electron-builder-lib/out/util/yarn';

const electron = require('electron');
let child = null;

/** gets electron version */
const getElectronVersion = () => {
  const electronPackage = jetpack.read('./node_modules/electron/package.json', 'json');
  return electronPackage.version;
};

/** write desktop package.json, required for electron-builder */
export const writeDesktopPackageJson = done => {
  const metadata = jetpack.read('./package.json', 'json');

  const fields = ['name', 'productName', 'version', 'description', 'homepage', 'license', 'dependencies'];

  const desktopPackage = fields.reduce((previous, field) => {
    previous[field] = metadata[field];
    return previous;
  }, {});

  const dest = jetpack.dir(PATHS.electron.dest, { empty: true });
  dest.write('package.json', desktopPackage);
  done();
};

export const installElectronDependencies = done => {
  const rootPackage = jetpack.read('./package.json', 'json');
  const version = getElectronVersion();
  const options = {
    frameworkInfo: {
      version,
      useCustomDist: false,
    },
    platform: process.platform,
    arch: process.arch,
  };
  installOrRebuild(rootPackage.build, PATHS.electron.dest, options)
    .then(() => done())
    .catch(error => {
      throw error;
    });
};

/** runs electron */
export const runElectron = done => {
  child = spawn(<any>electron, [PATHS.electron.dest], { stdio: 'inherit' });

  // child.on('close', () => process.exit());
  child.on('error', error => {
    throw error;
  });

  process.on('exit', () => {
    child.kill();
  });

  done();
};

/** restarts electron */
export const restartElectron = done => {
  if (child) {
    child.kill();
  }

  runElectron(done);
};
