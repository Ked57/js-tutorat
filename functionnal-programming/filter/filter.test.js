const test = require("ava");
const { filterPair } = require("./filter");

const numberList = [1, 23, 45, 32, 7, 17];
const pairNumbersList = [32]

test("Given a list of numbers, return a list containing the pari values", t => {
  t.assert(filterPair(numberList).every(number => pairNumbersList.includes(number)));
});
