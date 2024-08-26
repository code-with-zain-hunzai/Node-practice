
setTimeout(() => {
  console.log("outTime")
}, 0);

setImmediate(() => {
  console.log("hello")
})

// timeout_vs_immediate.js
const fs = require('node:fs');

fs.readFile(__filename, () => {
  setTimeout(() => {
    console.log('timeout');
  }, 0);
  setImmediate(() => {
    console.log('immediate');
  });
});


// const server = net.createServer();
// server.on('connection', conn => {});

// server.listen(8080);
// server.on('listening', () => {});

// const EventEmitter = require('node:events');

// class MyEmitter extends EventEmitter {
//   constructor() {
//     super();

//     // use nextTick to emit the event once a handler is assigned
//     process.nextTick(() => {
//       this.emit('event');
//     });
//   }
// }

// const myEmitter = new MyEmitter();
// myEmitter.on('event', () => {
//   console.log('an event occurred!');
// });


// const EventEmitter = require('node:events');

// class MyEmitter extends EventEmitter {}

// const myEmitter = new MyEmitter();
// myEmitter.on('event', () => {
//   console.log('an event occurred!');
// });
// myEmitter.emit('event');

// Passing arguments and this to listeners
// const EventEmitter = require('node:events');
// class MyEmitter extends EventEmitter {}
// const myEmitter = new MyEmitter();
// myEmitter.on('event', (a, b) => {
//   console.log(a, b, this);
//   // Prints: a b {}
// });
// myEmitter.emit('event', 'a', 'b');

// Asynchronous vs. synchronous

// const EventEmitter = require('node:events');
// class MyEmitter extends EventEmitter {}
// const myEmitter = new MyEmitter();
// myEmitter.on('event', (a, b) => {
//   setImmediate(() => {
//     console.log('this happens asynchronously');
//   });
// });
// myEmitter.emit('event', 'a', 'b');

// Handling events only once
// const EventEmitter = require('node:events');
// class MyEmitter extends EventEmitter { }
// const myEmitter = new MyEmitter();
// let m = 0;
// myEmitter.on('event', () => {
//   console.log(++m);
// });
// myEmitter.emit('event');
// // Prints: 1
// myEmitter.emit('event');
// // Prints: 2

const EventEmitter = require('events');
const celebrity = new EventEmitter();

celebrity.on('race', (results) => {
  if (results === 'win') {
    console.log('Congrats');
  }
});

celebrity.on('race', (results) => {
  if (results === 'win') {
    console.log('Boo! I could have done better than that!');
  }

});

celebrity.on('race', (results) => {
  if (results === 'lost') {
    console.log("oops you lost")
  }
})

process.on('exit', (code) => {
  console.log('Process exit event with code:', code);
});


celebrity.emit('race', 'win');
celebrity.emit('race', 'lost');