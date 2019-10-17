const test = require("ava");
const { callSomethingAsync } = require("./basic-example");
const { asyncFunctionResult } = require("./basic-example.util");

test("Call an async function and return its result when it resolves", async t => {
  t.assert(await callSomethingAsync() === asyncFunctionResult);
});
