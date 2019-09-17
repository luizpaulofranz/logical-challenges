const maximalSquare = require("./index");

test("maximalSquare is a function", () => {
  expect(typeof maximalSquare).toEqual("function");
});

test("maximalSquare is 4", () => {
  expect(maximalSquare(["0111", "1111", "1111", "1111"])).toEqual(4);
});
