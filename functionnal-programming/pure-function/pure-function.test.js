const test = require("ava");
const { sum } = require("./pure-function");

const numberList = [1, 23, 45, 32, 7, 16];

test("Given a list of numbers, return the sum", t => {
  t.deepEqual(sum(numberList), 124);
});
