const test = require("ava");
const { destructure } = require("./destructuring");

const object = {
    a: "this is a",
    b: "this is b"
}

test("Given an object, destructure it and return `${a}, ${b}`", t => {
    t.deepEqual(destructure(object), `${object.a}, ${object.b}`)
});
