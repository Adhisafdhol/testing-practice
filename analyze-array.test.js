import analyzeArray from "./analyze-array";

test("[1,8,3,4,2,6] == {average: 4, min: 1, max: 8, length: 6}", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});

test("[5,1,3,76,2,89, 76, 22, 6] == {average: 31.11, min: 1, max: 89, length: 9}", () => {
  expect(analyzeArray([5, 1, 3, 76, 2, 89, 76, 22, 6])).toEqual({
    average: 31.11,
    min: 1,
    max: 89,
    length: 9,
  });
});

test("[0.5, 70, 0.25, 1, 8, -1, 0] == {average: 11.25, min: -1, max: 70, length: 6}", () => {
  expect(analyzeArray([0.5, 70, 0.25, 1, 8, -1, 0])).toEqual({
    average: 11.25,
    min: -1,
    max: 70,
    length: 7,
  });
});
