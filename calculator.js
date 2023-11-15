const calculator = {
  add: (a, b) => {
    if (typeof a !== "number" || typeof b !== "number") {
      return "ERROR!";
    }

    return a + b;
  },
};

export default calculator;
