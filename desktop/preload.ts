import { ipcRenderer } from 'electron';

(<any>window).reaction = { ipc: ipcRenderer };
// (<any>window).__devtron = { require: require, process: process };
