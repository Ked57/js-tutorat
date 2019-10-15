const test = require("ava");
const { sum } = require("./reduce");

const numberList = [1, 23, 45, 32, 7, 17];

test("Given a list of numbers, return the sum", t => {
  t.deepEqual(sum(numberList), 124);
});

