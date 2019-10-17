const test = require("ava");
const { callSomethingAsync } = require("./chaining");
const { asyncFunctionResult, asyncFunction2Result } = require("./chaining.util");

test("Call an async function and return its result when it rejects", async t => {
  t.assert(await callSomethingAsync() === asyncFunctionResult + asyncFunction2Result);
});
