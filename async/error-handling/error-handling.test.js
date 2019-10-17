const test = require("ava");
const { callSomethingAsync } = require("./error-handling");
const { asyncFunctionResult } = require("./error-handling.util");

test("Call an async function and return its result when it rejects", async t => {
  t.assert(await callSomethingAsync() === asyncFunctionResult);
});
