'use strict';
const IOHook = require('bindings')('iohook');

const kCodes = {
  65288: 'backspace',
  65289: 'tab',
  65293: 'enter',
  65505: 'leftShift',
  65506: 'rightShift',
  65507: 'leftCtrl',
  65508: 'rightCtrl',
  65509: 'capsLock',
  65513: 'leftAlt',
  65514: 'rightAlt',
  65515: 'leftMeta',
  65516: 'rightMeta',
  65300: 'mediaPlay',
  65301: 'mediaStop',
  65302: 'mediaBack',
  65303: 'mediaNext',
  65307: 'esc',
  65282: 'brightUp',
  65283: 'brightDown',
  65299: 'pauseBreak',
  65361: 'left',
  65362: 'up',
  65363: 'right',
  65364: 'down',
  65365: 'pageUp',
  65366: 'pageDown',
  65379: 'insert',
  65535: 'delete',
  65360: 'home',
  65367: 'end',
  65377: 'printScr',
  65407: 'numLock',
  65470: 'f1',
  65471: 'f2',
  65472: 'f3',
  65473: 'f4',
  65474: 'f5',
  65475: 'f6',
  65476: 'f7',
  65477: 'f8',
  65478: 'f9',
  65479: 'f10',
  65480: 'f11',
  65481: 'f12',
};

class IOCallback {
  constructor() {
    this._cb = {};
  }
  set(event, cb) {
    this._cb[event] = cb;
  }
  get() {
    return d => {
      if (!this.active) return;
      if (d == null) return console.log(d);
      let m = d.mask,
        e = d.mouse || d.wheel || {},
        n;
      switch (d.type) {
        case 0:
          n = 'key0';
          break;
        case 1:
          n = 'key1';
          break;
        case 2:
          n = 'key2';
          break;
        case 4:
          n = 'key4';
          break;
        case 3:
          n = 'keydown';
          break;
        case 5:
          n = 'keyup';
          break;
        case 6:
          n = 'mouseclick';
          break;
        case 7:
          n = 'mousedown';
          break;
        case 8:
          n = 'mouseup';
          break;
        case 9:
          n = 'mousemove';
          break;
        case 10:
          n = 'mousedrag';
          break;
        case 11:
          n = 'mousewheel';
      }
      e.event = n;
      if (d.kb) {
        e.code = d.kb.rawcode;
        e.key = e.code < 200 ? String.fromCharCode(e.code).toLowerCase() : kCodes[e.code];
        ((e.leftShift = !!(m & 1)), (e.rightShift = !!(m & 16)), (e.shift = m & 1 || m & 16));
        ((e.leftCtrl = !!(m & 2)), (e.rightCtrl = !!(m & 32)), (e.ctrl = !!(m & 2 || m & 32)));
        ((e.leftMeta = !!(m & 4)), (e.rightMeta = !!(m & 64)), (e.meta = !!(m & 4 || m & 64)));
        ((e.leftAlt = !!(m & 8)), (e.rightAlt = !!(m & 128)), (e.alt = !!(m & 8 || m & 128)));
        e.capsLock = !!(m & 16384);
      }
      try {
        if (this._cb[n]) this._cb[n](e);
        if (this._cb.event) this._cb.event(e);
      } catch (e) {
        console.log(e);
      }
    };
  }
}

class Hook {
  constructor() {
    this.cb = new IOCallback();
    process.on('exit', this.stop);
  }
  on(e, cb) {
    this.cb.set(e, cb);
  }
  start() {
    if (!this.status) {
      IOHook.start_hook(this.cb.get());
      ((this.status = 1), (this.cb.active = 1));
    }
  }
  pause() {
    this.cb.active = 0;
  }
  resume() {
    this.cb.active = 1;
  }
  stop() {
    IOHook.stop_hook();
    this.status = 0;
  }
}
module.exports = new Hook();
