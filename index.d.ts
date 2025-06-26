export type EventType =
  | 'keydown'
  | 'keyup'
  | 'mouseclick'
  | 'mousedown'
  | 'mouseup'
  | 'mousemove'
  | 'mousedrag'
  | 'mousewheel'
  | 'event';

export interface HookEvent {
  event: string;
  key?: string;
  code?: number;
  shift?: boolean;
  alt?: boolean;
  ctrl?: boolean;
  meta?: boolean;
  capsLock?: boolean;
  leftShift?: boolean;
  rightShift?: boolean;
  leftCtrl?: boolean;
  rightCtrl?: boolean;
  leftAlt?: boolean;
  rightAlt?: boolean;
  leftMeta?: boolean;
  rightMeta?: boolean;
  button?: number;
  clicks?: number;
  x?: number;
  y?: number;
  direction?: number;
  rotation?: number;
}

declare const iohook: {
  on(event: EventType, callback: (event: HookEvent) => void): void;
  start(): void;
  pause(): void;
  resume(): void;
  stop(): void;
};

export default iohook; 