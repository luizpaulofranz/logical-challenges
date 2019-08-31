const parenthesesMatching = require("./index");

test("parenthesesMatching is a function", () => {
  expect(typeof parenthesesMatching).toEqual("function");
});

it("checks (c]", () => {
  expect(parenthesesMatching("(c]")).toEqual(false);
});

it("checks )(", () => {
  expect(parenthesesMatching(")(")).toEqual(false);
});

it("checks empty", () => {
  expect(parenthesesMatching("")).toEqual(false);
});

it("checks {([])}", () => {
  expect(parenthesesMatching("{([])}")).toEqual(true);
});

it("checks f(e(d))", () => {
  expect(parenthesesMatching("f(e(d))")).toEqual(true);
});

it("checks {([{((((((((([[[{}]]])))))))))}])}", () => {
  expect(parenthesesMatching("{([{((((((((([[[{}]]])))))))))}])}")).toEqual(
    true
  );
});

it("checks {([{((((((((([[[{}]]])))))))])}])}", () => {
  expect(parenthesesMatching("{([{((((((((([[[{}]]])))))))])}])}")).toEqual(
    false
  );
});

it("checks (a[0]+b[2c[6]]){24+53}", () => {
  expect(parenthesesMatching("(a[0]+b[2c[6]]){24+53}")).toEqual(true);
});
