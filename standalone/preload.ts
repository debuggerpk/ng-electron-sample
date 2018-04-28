import { ipcRenderer } from 'electron';

(<any>window).reaction = { ipc: ipcRenderer };
