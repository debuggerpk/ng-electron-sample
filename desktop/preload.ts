import { ipcRenderer } from 'electron';

window['reaction'] = { ipc: ipcRenderer };
window['ELECTRON_DISABLE_SECURITY_WARNINGS'] = true;
