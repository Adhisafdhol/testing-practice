import reverseString from "./reverseString";

test("the string test will be reversed into tset", () => {
  expect(reverseString("test").toMatch("tset"));
});
