import { ipcMain } from 'electron';
import { store } from './store';

ipcMain.on('get-config', (event, payload) => {
  event.sender.send('get-config-reply', store.store);
});

ipcMain.on('save-config', (event, payload) => {
  event.sender.send('save-config-reply', store.set('store', payload));
});
