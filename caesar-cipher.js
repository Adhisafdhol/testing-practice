function caesarCipher(string, shift) {
  const arrString = string.split("");
  const newArr = iterateArr(arrString, shift);
  return newArr.join("");
}

function getShiftIndex(index, shift, arr) {
  return index + shift > arr.length - 1
    ? index + shift - (arr.length - 1)
    : index + shift;
}

function shiftCharacter(string, shift) {
  const lCAlphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  const uCAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  const lCPattern = /[a-z]/;
  const uCPattern = /[A-Z]/;

  if (lCPattern.test(string)) {
    const index = lCAlphabet.findIndex((a) => a === string);
    const newIndex = getShiftIndex(index, shift, lCAlphabet);
    return lCAlphabet[newIndex];
  }

  if (uCPattern.test(string)) {
    const index = uCAlphabet.findIndex((a) => a === string);
    const newIndex = getShiftIndex(index, shift, uCAlphabet);
    return uCAlphabet[newIndex];
  }

  if (!lCPattern.test(string) && !uCPattern.test(string)) {
    return string;
  }
}

function iterateArr(arr, shift) {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(shiftCharacter(arr[i], shift));
  }

  return newArr;
}

export default caesarCipher;
