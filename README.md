# iohook2
Nodejs bindings for libuiohook, and a replacement/renewal to the abandoned iohook library (and at least 5 other alternatives that have also been abandoned!)

Install with `npm install iohook2`

# About
This package allows your nodejs program to read keyboard and mouse events on a global scope, even if the user isn't focused in the console window!

### You can check for the following events:
- keypress
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
const io = require('iohook2');

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
- MAC: clang
- Linux: GCC

**On Linux, the following packages are required:** git cmake pkg-config libx11-dev libxtst-dev libxt-dev libxinerama-dev libx11-xcb-dev libxkbcommon-dev libxkbcommon-x11-dev libxkbfile-dev