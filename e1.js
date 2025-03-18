/*************************************basic example************************************/
// const EventEmitter = require("node:events");

// const eventemitter = new EventEmitter();
// eventemitter.on("do", () => {
//   console.log("kkk");
// });
// eventemitter.on("do", () => {
//   console.log("llll");
// });
// eventemitter.on("do", () => {
//   console.log("888");
// });
// eventemitter.emit("do");

// const abc = () => {
//   console.log("jjj");
// };
// eventemitter.on("event", abc);
// console.log(eventemitter, "event");
// eventemitter.emit("event", abc);

// eventemitter.on("start", (name) => {
//   console.log("starting");
// });
// eventemitter.emit("start", "krupa");
// eventemitter.off("start");
// eventemitter.emit("start");

/******************************classs**************************** */

// const EventEmitter = require("node:events");
// class MyEmitter extends EventEmitter {}
// const myEmitter = new MyEmitter();

// myEmitter.on("event", function (a, b) {
//   console.log(a, b, this, this === myEmitter);
//   // Prints:
//   //   a b MyEmitter {
//   //     _events: [Object: null prototype] { event: [Function (anonymous)] },
//   //     _eventsCount: 1,
//   //     _maxListeners: undefined,
//   //     [Symbol(shapeMode)]: false,
//   //     [Symbol(kCapture)]: false
//   //   } true
// });
// myEmitter.emit("event", "a", "b");

// eventemitter.on("event", (a) => {
//   setImmediate(() => {
//     console.log("this happens asynchronously");
//   });
// });
// eventemitter.on("event2", (x, y) => {
//   setTimeout(() => {
//     console.log("this is 2nd event");
//   }, 3000);
// });
// eventemitter.on("event3", (u) => {
//   process.nextTick(() => {
//     console.log("this is next ");
//   });
// });
// eventemitter.on("event4", (i) => {
//   setTimeout(() => {
//     console.log("this is 3nd event");
//   }, 2000);
// });

// eventemitter.emit("event", "a");
// eventemitter.emit("event2", "x", "y");
// eventemitter.emit("event3", "u");
// eventemitter.emit("event4", "i");
//output
// this is next
// this happens asynchronously
// this is 3nd event
// this is 2nd event

// eventemitter.emit("error", new Error("whoops!"));

/************************************** */

// const { EventEmitter, errorMonitor } = require("node:events");

// const myEmitter = new EventEmitter();
// myEmitter.on(errorMonitor, (err) => {
//   MyMonitoringTool.log(err);
// });
// myEmitter.emit("error", new Error("whoops!"));
// // Still throws and crashes Node.js

/***************************************************** */

// const EventEmitter = require("node:events");
// const ee1 = new EventEmitter({ captureRejections: true });
// ee1.on("something", async (value) => {
//   console.log("value");
//   throw new Error("kaboom");
// });

// ee1.on("error", console.log);

// const ee2 = new EventEmitter({ captureRejections: true });
// ee2.on("something", async (value) => {
//   throw new Error("kaboom");
// });

// ee2[Symbol.for("nodejs.rejection")] = console.log;
// ee1.emit("something", "value");
// ee1.emit("error", console.log);
// ee2.emit("something", "value");

// const events = require("node:events");
// events.captureRejections = true;
// const ee1 = new events.EventEmitter();
// ee1.on("something", async (value) => {
//   throw new Error("kaboom");
// });

// ee1.on("error", console.log);

// const EventEmitter = require("node:events");
// class MyEmitter extends EventEmitter {}
// const myEmitter = new MyEmitter();

// const callbackA = () => {
//   console.log("A");
//   myEmitter.removeListener("event", callbackB);
// };

// const callbackB = () => {
//   console.log("B");
// };

// myEmitter.on("event", callbackA);

// myEmitter.on("event", callbackB);
// myEmitter.emit("event");
// myEmitter.emit("event");

// const EventEmitter = require("node:events");
// const ee = new EventEmitter();

// function pong() {
//   console.log("pong");
// }

// ee.on("ping", pong);
// ee.once("ping", pong);
// ee.removeListener("ping", pong);

// ee.emit("ping");
// ee.emit("ping");
// ee.emit("ping");

// const EventEmitter = require("node:events");
// class MyEmitter extends EventEmitter {}
// const myEmitter = new MyEmitter();
// let m = 0;
// myEmitter.once("event", () => {
//   console.log(++m);
// });
// myEmitter.emit("event");
// // Prints: 1
// myEmitter.emit("event");

// const EventEmitter = require("node:events");
// const emitter = new EventEmitter();
// emitter.once("log", () => console.log("log once"));
// const listeners = emitter.rawListeners("log");
// const logFnWrapper = listeners[0];

// logFnWrapper.listener();

// logFnWrapper();

// emitter.on("log", () => console.log("log persistently"));

// const newListeners = emitter.rawListeners("log");

// newListeners[0]();
// emitter.emit("log");

// const { EventEmitter, captureRejectionSymbol } = require("node:events");

// class MyClass extends EventEmitter {
//   constructor() {
//     super({ captureRejections: true });
//   }

//   [captureRejectionSymbol](err, event, ...args) {
//     console.log("rejection happened for", event, "with", err, ...args);
//     this.destroy(err);
//   }

//   destroy(err) {
//     // Tear the resource down here.
//   }
// }

/************************************************************** */
// const EventEmitter = require("node:events");
// const emitter = new EventEmitter();
// emitter.setMaxListeners(20);
// emitter.once("event", () => {
//   console.log("hhhh");

//   // emitter.setMaxListeners(Math.max(emitter.getMaxListeners() - 1, 0));
// });
// emitter.on("event", () => {
//   console.log("hhhh");
// });
// emitter.on("event", () => {
//   console.log("hhhh");
// });
// emitter.on("event", () => {
//   console.log("hhhh");
// });
// emitter.on("event", () => {
//   console.log("hhhh");
// });
// emitter.on("event", () => {
//   console.log("hhhh");
// });
// emitter.on("event", () => {
//   console.log("hhhh");
// });
// emitter.on("event", () => {
//   console.log("hhhh");
// });
// emitter.on("event", () => {
//   console.log("hhhh");
// });
// emitter.on("event", () => {
//   console.log("hhhh");
// });
// emitter.on("event", () => {
//   console.log("hhhh");
// });
// emitter.on("event", () => {
//   console.log("hhhh");
// });
// emitter.on("event", () => {
//   console.log("hhhh");
// });
// emitter.emit("event");

/********************************************************************** */

// const { getEventListeners, EventEmitter } = require("node:events");

// {
//   const ee = new EventEmitter();
//   const listener = () => console.log("Events are fun");
//   ee.on("foo", listener);
//   console.log(getEventListeners(ee, "foo")); // [ [Function: listener] ]
// }
// {
//   const et = new EventTarget();
//   const listener = () => console.log("Events are fun");
//   et.addEventListener("foo", listener);
//   console.log(getEventListeners(et, "foo")); // [ [Function: listener] ]
// }

/****************************************************************** */

// const { once, EventEmitter } = require("node:events");

// async function run() {
//   const ee = new EventEmitter();

//   process.nextTick(() => {
//     ee.emit("myevent", 42);
//   });

//   const [value] = await once(ee, "myevent");
//   console.log(value);

//   const err = new Error("kaboom");
//   process.nextTick(() => {
//     ee.emit("error", err);
//   });

//   try {
//     await once(ee, "myevent");
//   } catch (err) {
//     console.error("error happened", err);
//   }
// }

// run();

/*********************************************************** */

// const { EventEmitter, once } = require("node:events");

// const ee = new EventEmitter();
// const ac = new AbortController();

// async function foo(emitter, event, signal) {
//   try {
//     await once(emitter, event, { signal });
//     console.log("event emitted!");
//   } catch (error) {
//     if (error.name === "AbortError") {
//       console.error("Waiting for the event was canceled!");
//     } else {
//       console.error("There was an error", error.message);
//     }
//   }
// }

// foo(ee, "foo", ac.signal);
// ac.abort();

/************************************************************************ */
// const { EventEmitter, once } = require("node:events");

// const myEE = new EventEmitter();

// async function foo() {
//   await once(myEE, "bar");
//   console.log("bar");
//   await once(myEE, "foo");
//   console.log("foo");
// }

// process.nextTick(() => {
//   myEE.emit("bar");
//   myEE.emit("foo");
// });

// foo().then(() => console.log("done"));

/******************************************************************* */

// const { EventEmitter, once } = require("node:events");

// const myEE = new EventEmitter();

// async function foo() {
//   await Promise.all([once(myEE, "bar"), once(myEE, "foo")]);
//   console.log("foo", "bar");
// }

// process.nextTick(() => {
//   myEE.emit("bar");
//   myEE.emit("foo");
// });

// foo().then(() => console.log("done"));

/************************************************************************** */

// var emitter = require("events").EventEmitter;

// function LoopProcessor(num) {
//   var e = new emitter();

//   setTimeout(function () {
//     for (var i = 1; i <= num; i++) {
//       e.emit("BeforeProcess", i);

//       console.log("Processing number:" + i);

//       e.emit("AfterProcess", i);
//     }
//   }, 2000);

//   return e;
// }
// var lp = LoopProcessor(3);

// lp.on("BeforeProcess", function (data) {
//   console.log("About to start the process for " + data);
// });

// lp.on("AfterProcess", function (data) {
//   console.log("Completed processing " + data);
// });

/*************************************************************** */

// const EventEmitter = require("events");
// const emitter = new EventEmitter();

// emitter.on("greet", (e) => {
//   e.msg += "world!";
//   console.log("kk");
// });
// const e = { msg: "helo" };
// emitter.emit("greet", e);
// console.log(e.msg);

/*************************************************************************** */

const Eventemitter = require("events");

function action() {
  const eventemitter = new Eventemitter();
  setTimeout(() => {
    eventemitter.emit("data", { msg: "helo from events" });
  });
  return eventemitter;
}

const myemitter = action();
myemitter.on("data", (data) => {
  console.log(data.msg);
});

/******************************************************** */

// const Eventemitter = require("events");

// class Myemitter extends Eventemitter {
//   action() {
//     console.log("started....");
//     setTimeout(() => {
//       this.emit("data", "action completed successfully...");
//     }, 1000);
//   }
// }
// const Instance = new Myemitter();

// Instance.on("data", (message) => {
//   console.log(message);
// });
// Instance.action();

/************************************************************ */

const EventEmitter = require("events");

class Logger extends EventEmitter {
  action() {
    setTimeout(() => {
      this.emit("data", { message: "hello" });
    }, 2000);
  }
}

const logger = new Logger();

logger.on("data", (data) => {
  console.log(data.message);
});
logger.action();
