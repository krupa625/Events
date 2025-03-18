const { EventEmitter } = require("events");

const emitter = new EventEmitter();

// emitter.on("event", (data) => {
//   console.log(`data is ${data}`);
// });

// const method = (name) => {
//   console.log(`Name: ${name}`);
// };
// emitter.once("event", method);
// emitter.emit("event", "hello");
// emitter.off("event", (msg) => {
//   console.log(`removed ${msg}`);
// });
// console.log(emitter.listeners("event"));

const listener1 = (msg) => console.log(`Listener 1: ${msg}`);
const listener2 = (msg) => console.log(`Listener 2: ${msg}`);

emitter.on("greet", listener1);
emitter.once("greet", listener2);

emitter.emit("greet", "Hello, World!");

console.log("Current Listeners:", emitter.listeners("greet"));

emitter.off("greet", listener1);
emitter.emit("greet", "Hello again!");

emitter.removeAllListeners("greet");
emitter.emit("greet", "Final Call");
