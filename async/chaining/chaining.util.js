const doSomethingAsync = () => {
    return new Promise((resolve, reject) => setTimeout(()=> resolve(asyncFunctionResult), 1000))
};
const doSomethingElseAsync = () => {
    return new Promise((resolve, reject) => setTimeout(()=> resolve(asyncFunction2Result), 1000))
};

const asyncFunctionResult = 1
const asyncFunction2Result = 2

exports.doSomethingAsync = doSomethingAsync;
exports.doSomethingElseAsync = doSomethingElseAsync;
exports.asyncFunctionResult = asyncFunctionResult;
exports.asyncFunction2Result = asyncFunction2Result;