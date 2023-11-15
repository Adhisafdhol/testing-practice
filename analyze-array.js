function analyzeArray(arr) {
  const average =
    arr.reduce((accumulator, current) => accumulator + current) / arr.length;
  const min = arr.reduce((accumulator, current) =>
    accumulator < current ? accumulator : current
  );
  const max = arr.reduce((accumulator, current) =>
    accumulator > current ? accumulator : current
  );
  const length = arr.length;
  return { average, min, max, length };
}

export default analyzeArray;
