const calculator = {
  add: (a, b) => {
    if (typeof a !== "number" || typeof b !== "number") {
      return "ERROR!";
    }

    return a + b;
  },
  subtract: (a, b) => {
    if (typeof a !== "number" || typeof b !== "number") {
      return "ERROR!";
    }

    return a - b;
  },
  multiply: (a, b) => {
    if (typeof a !== "number" || typeof b !== "number") {
      return "ERROR!";
    }

    return a * b;
  },
  divide: (a, b) => {
    if (typeof a !== "number" || typeof b !== "number" || b === 0) {
      return "ERROR!";
    }

    if (a === 0) {
      return 0;
    }

    return a / b;
  },
};

export default calculator;
