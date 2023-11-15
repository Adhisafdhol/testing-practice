const capitalize = (string) => {
  let arrString = string.split("");
  arrString[0] = arrString[0].toUpperCase();
  return arrString.join("");
};

export default capitalize;
