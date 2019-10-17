const filterPair = numberList => numberList.filter(number => number%2 === 0);

const filterObjectPair = objectList => objectList.filter(row => row.value % 2 === 0)

exports.filterPair = filterPair;
exports.filterObjectPair = filterObjectPair;