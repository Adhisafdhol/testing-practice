function reverseString(string) {
  const arrString = string.split("");
  const newArr = [];

  for (let i = string.length; i >= 0; i--) {
    newArr.push(arrString[i]);
  }

  return newArr.join("");
}

export default reverseString;
