import { ipcMain } from 'electron';
import { store } from './store';

ipcMain.on('get-config', (event, payload) => {
  event.sender.send(
    'get-config-reply',
    store.get('settings', {
      outlet_id: null,
      local_gateway: null,
      api_key: null,
      api_gateway: null,
    }),
  );
});

ipcMain.on('save-config', (event, payload) => {
  event.sender.send('save-config-reply', store.set('store', payload));
});
