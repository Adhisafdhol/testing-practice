import calculator from "./calculator";

test("1 + 2 is equal to 3", () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test(`1 + "lol" returns error`, () => {
  expect(calculator.add(1, "lol")).toMatch(/^ERROR!$/);
});

test(`"lol" + 2 returns error`, () => {
  expect(calculator.add(1, "lol")).toMatch(/^ERROR!$/);
});
