import { spawn } from 'child_process';
import { PATHS } from './config';

const electron = require('electron');

let child = null;

export const runElectron = done => {
  // child = cp.spawn(electron, ['.'], { stdio: 'inherit' }).on('close', () => {
  //   process.exit();
  // });
  child = spawn(<any>electron, [PATHS.electron.dest], { stdio: 'inherit' });

  child.on('close', () => process.exit());
  child.on('error', error => {
    throw error;
  });

  done();
};

export const restartElectron = done => {
  if (child) {
    child.kill();
  }

  runElectron(done);
};
