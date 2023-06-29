const func = require("../q1");

const iLoveYou = "I LOVE YOU";
const notMatched = "NOT MATCHED";

test("q1 test case 1", () => {
  expect(func("Jack", "")).toEqual(iLoveYou);
});

test("q1 test case 2", () => {
  expect(func(0, -220)).toEqual(-220);
});

test("q1 test case 3", () => {
  expect(func("0", 100)).toEqual(notMatched);
});
