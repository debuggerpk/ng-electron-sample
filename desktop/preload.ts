import { ipcRenderer } from 'electron';

(<any>window).reaction = { ipc: ipcRenderer };
window['ELECTRON_DISABLE_SECURITY_WARNINGS'] = true;
