const doSomethingAsync = () => {
    return new Promise((resolve, reject) => setTimeout(()=> resolve(asyncFunctionResult), 1000))
};

const asyncFunctionResult = "async/await c'est cool"

exports.doSomethingAsync = doSomethingAsync;
exports.asyncFunctionResult = asyncFunctionResult;