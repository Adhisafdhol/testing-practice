import capitalize from "./capitalize";

test("Capitalize the first character of a string", () => {
  expect(capitalize("test")).toMatch(/^Test$/);
});
