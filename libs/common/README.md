# Introduction

Common library for functions, classes and interfaces shared between all platofrms.

i.e.

* Angular
* Electron
* NativeScript

## Usage

Lets say, we want to define a function somewhere in the app that handles an event, and then map the response.

```ts
import { ipcMain } from 'electron';
import * as Store form 'electron-store';
import { Configuration } from '@reaction/models';
import { configEventNames } from '@reaction/constants';

export const store = new Store({ name: 'config' });

ipcMain.on(configEventNames.GET_CONFIG, (event: Event, payload: any) => {
  event.sender.send(
    configEventNames.GET_CONFIG_REPLY,
    store.get<Configuration>('settings', {
      outlet_id: null,
      local_gateway: null,
      api_key: null,
      api_gateway: null,
    }),
  );
});
```
