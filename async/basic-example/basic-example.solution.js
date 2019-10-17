const {doSomethingAsync} = require("./basic-example.util")

const callSomethingAsync = async () => await doSomethingAsync()

exports.callSomethingAsync = callSomethingAsync;