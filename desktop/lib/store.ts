const ElectronStore = require('electron-store');

export const configStore = new ElectronStore({ name: 'config' });
export const dataStore = new ElectronStore({ name: 'data' });
