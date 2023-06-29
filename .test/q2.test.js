const func = require("../q2");

test("q2 test case 1", () => {
  expect(func([-1, 2, 3])).toEqual("-123");
});

test("q2 test case 2", () => {
  expect(func([1, 0, 9, 8, 7, 6, 5])).toEqual("1098765");
});

test("q2 test case 3", () => {
  expect(func([])).toEqual("");
});
