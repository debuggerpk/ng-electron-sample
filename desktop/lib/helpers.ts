export const IS_DEV = process.env.NODE_ENV === 'development';
export const IS_HMR = process.env.LAUNCH_MODE === 'hmr';

export const installElectronDeveloperExtensions = () => {
  if (IS_DEV) {
    const { default: installExtension, REDUX_DEVTOOLS } = require('electron-devtools-installer');

    installExtension(REDUX_DEVTOOLS)
      .then(name => {
        console.log(`Added Extension:  ${name}`);
      })
      .catch(err => {
        console.log('An error occurred: ', err);
      });
  }
};
