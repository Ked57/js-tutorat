const test = require("ava");
const { filterPair, filterObjectPair } = require("./filter");

const numberList = [1, 23, 45, 32, 7, 17];
const pairNumbersList = [32];
const objectList = [
  { value: 1 },
  { value: 23 },
  { value: 45 },
  { value: 32 },
  { value: 7 },
  { value: 17 }
];
const pairObjectList = [{value: 32}];

test("Given a list of numbers, return a list containing the pair values", t => {
  t.assert(
    filterPair(numberList).every(number => pairNumbersList.includes(number))
  );
});

test("Given a list of objects, return a list containing the pair values", t => {
  t.assert(
    filterObjectPair(objectList).every(row => pairObjectList.find(modelRow => row.value === modelRow.value) ? true: false)
  );
});