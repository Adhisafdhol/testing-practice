import calculator from "./calculator";

test("1 + 2 is equal to 3", () => {
  expect(calculator.add(1, 2)).toBe(3);
});
