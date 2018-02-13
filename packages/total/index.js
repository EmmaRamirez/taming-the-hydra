const subtract = require('./subtract');
const add = require('./add');

console.log(`Calculating 5 + (4 - 2)`)
console.log(
  add(5, subtract(4, 2))
);