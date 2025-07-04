# iohook3
Nodejs bindings for libuiohook, and a replacement/renewal to the abandoned iohook library (and at least 5 other alternatives that have also been abandoned!)

Install with `npm install iohook3`

# About
This package allows your nodejs program to read keyboard and mouse events on a global scope, even if the user isn't focused in the console window!

### You can check for the following events:
- keypress *[TODO: Needs fixing. Use keydown/keyup]*
- keydown
- keyup
- mouseclick
- mousedown
- mouseup
- mousemove
- mousedrag
- mousewheel

## Example
```
const io = require('iohook3');

io.on('keydown', e => {
    console.log(e.key+" pressed!");
});
io.on('keyup', e => {
    console.log(e.key+" released!");
});

io.start();
```

## Build Requirements
- Windows: VS2015
- MAC: Clang
- Linux: GCC

### Linux
**The following packages are required:** git cmake pkg-config libx11-dev libxtst-dev libxt-dev libxinerama-dev libx11-xcb-dev libxkbcommon-dev libxkbcommon-x11-dev libxkbfile-dev

### Windows
Please install [cmake](https://cmake.org/download). Any required DLLs should be pre-installed.

*Note: Windows support is WIP. Code compiles with no errors but then has a strange linker issue.*

### Mac
TBD

## Detailed Usage
All key events provide a `key` property with the key name as a String, as well as a `code` property with the raw keycode. The recognized special keys are as follows:
- backspace
- esc
- tab
- enter
- capsLock
- leftShift / rightShift
- leftCtrl / rightCtrl
- leftAlt / rightAlt
- leftMeta / rightMeta
- mediaPlay / mediaStop / mediaBack / mediaNext
- up / down / right / left
- pageUp / pageDown
- insert / delete
- home / end
- brightUp / brightDown
- printScr
- pauseBreak
- numLock
- f1 -> f12

Additionally, the following boolean properties are available in any key event to check if a *modifier key* is being held:
- capsLock
- leftShift / rightShift / shift
- leftCtrl / rightCtrl / ctrl
- leftAlt / rightAlt / alt
- leftMeta / rightMeta / meta

### TODO:
- scrollLock (SCROLL LOCK BUTTON IS ANGY, CAN'T GET CODE)
- Test mediaStop (I don't have a stop button. It's kinda redundant isn't it?)
- volumeUp/Down/Mute (Yeah I don't have an excuse for this one besides lazy)
- Number Pad Buttons (Could be of use to many programs, but I don't have a numberpad on hand, will have to dig one out somewhere. Or hacksaw one off the neighbor's keyboard they won't notice)
- Documentation for mouse/wheel events
- Document on('event'), start(), pause(), resume(), stop()