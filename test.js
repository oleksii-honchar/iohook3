const io = require('.');

io.on('event', e => {
  const ev = e.event;
  console.log(e);
  if (
    process.argv[2] ||
    (ev !== 'keypress' && ev !== 'mousemove' && ev !== 'mousedrag' && ev !== 'mousewheel')
  )
    console.log(e);
});
io.start();
