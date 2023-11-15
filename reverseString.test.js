import reverseString from "./reverseString";

test(`The string "test" will be reversed into "tset"`, () => {
  expect(reverseString("test")).toMatch(/^tset$/);
});

test(`The string "My name" will be reversed into "eman yM"`, () => {
  expect(reverseString("My name")).toMatch(/^eman yM$/);
});
