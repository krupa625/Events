// const { EventEmitter } = require("events");

// class MyEmitter extends EventEmitter {}

// const emitter = new MyEmitter();

// const data = (msg) => {
//   console.log(`message: ${msg}`);
// };
// const fun = (value) => {
//   console.log(`here is value ${value}`);
// };
// emitter.on("event", data);
// emitter.on("e2", fun);
// emitter.once("data", fun);
// emitter.emit("data", 21);
// emitter.emit("e2", 20);
// emitter.off("e2", fun);
// emitter.emit("e2", 11);
// emitter.emit("event", "hello from eventemitters");

/********************************************************************* */

const eventemitter = require("events");
const stockEmitter = new eventemitter();

const appleAlert = (price) =>
  console.log(` Apple stock alert! New price: $${price}`);
const teslaAlert = (price) =>
  console.log(` Tesla stock alert! New price: $${price}`);
const amazonOneTimeAlert = (price) =>
  console.log(` Amazon stock hit target! Price: $${price} `);

stockEmitter.on("AAPL", appleAlert);
stockEmitter.on("TSLA", teslaAlert);
stockEmitter.once("AMZN", amazonOneTimeAlert);

stockEmitter.emit("AAPL", 175);
stockEmitter.emit("TSLA", 850);
stockEmitter.emit("AMZN", 3400);

console.log(" Active Listeners:", stockEmitter.listeners("AMZN"));

stockEmitter.off("TSLA", teslaAlert);
stockEmitter.emit("TSLA", 820);
