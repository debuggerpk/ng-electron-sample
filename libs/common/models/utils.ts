import { Event } from 'electron';

export interface FluxStandardAction {
  type: string;
  payload?: any;
}

export interface ProjectionIpcMainEvent {
  [key: number]: FluxStandardAction;
  0: Event;
}
