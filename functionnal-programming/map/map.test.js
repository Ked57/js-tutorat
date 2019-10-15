const test = require("ava");
const { double } = require("./map");

const numberList = [1, 23, 45, 32, 7, 17];

test("Given a list of numbers, return a list containing the double of each value", t => {
  t.assert(double(numberList).every(number => numberList.includes(number / 2)));
});
