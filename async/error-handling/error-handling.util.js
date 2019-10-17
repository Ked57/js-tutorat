const doSomethingAsync = () => {
    return new Promise((resolve, reject) => setTimeout(()=> reject(asyncFunctionResult), 1000))
};

const asyncFunctionResult = "C'est une erreur"

exports.doSomethingAsync = doSomethingAsync;
exports.asyncFunctionResult = asyncFunctionResult;