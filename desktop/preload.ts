import { ipcRenderer, remote } from 'electron';

window['reaction'] = { remote, ipc: ipcRenderer };
window['ELECTRON_DISABLE_SECURITY_WARNINGS'] = true;
