const { EventEmitter } = require("events");

class MyEmitter extends EventEmitter {}

const emitter = new MyEmitter();

const data = (msg) => {
  console.log(`message: ${msg}`);
};
const fun = (value) => {
  console.log(`here is value ${value}`);
};
emitter.on("event", data);
emitter.on("e2", fun);
emitter.once("data", fun);
emitter.emit("data", 21);
emitter.emit("e2", 20);
emitter.off("e2", fun);
emitter.emit("e2", 11);
emitter.emit("event", "hello from eventemitters");
