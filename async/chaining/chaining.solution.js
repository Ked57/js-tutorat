const { doSomethingAsync, doSomethingElseAsync } = require("./chaining.util");

const callSomethingAsync = async () =>
  (await doSomethingAsync()) + (await doSomethingElseAsync());

const callSomethingAsyncV2 = async () => {
  const results = await Promise.all([
    doSomethingAsync(),
    doSomethingElseAsync()
  ]);
  return results.reduce((sum, row) => sum + row);
};

exports.callSomethingAsync = callSomethingAsync;
