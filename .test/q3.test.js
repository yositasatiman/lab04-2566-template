const func = require("../q3");

const yes = "YES";
const no = "NO";

test("q3 test case 1", () => {
  expect(func(7)).toEqual(yes);
});

test("q3 test case 2", () => {
  expect(func(8)).toEqual(no);
});

test("q3 test case 3", () => {
  expect(func(19)).toEqual(yes);
});

test("q3 test case 4", () => {
  expect(func(20)).toEqual(no);
});
