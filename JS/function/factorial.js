import { parseToNumber } from "../helpers.js";

function factRec(value) {
  value = parseToNumber(value);

  if (value <= 0) {
    return 1;
  }

  return value * factRec(value - 1);
}

function factFor(value) {
  value = parseToNumber(value);

  if (value <= 0) {
    return 1;
  }

  for (let iteration = value - 1; iteration > 1; iteration--) {
    value *= iteration;
  }

  return value;
}

function factWhile(value) {
  value = parseToNumber(value);

  if (value <= 0) {
    return 1;
  }

  let iteration = value - 1;

  while (iteration > 1) {
    value *= iteration;
    iteration--;
  }

  return value;
}

function factDo(value) {
  value = parseToNumber(value);

  if (value <= 0) {
    return 1;
  }

  let iteration = value - 1;

  do {
    value *= iteration;
    iteration--;
  } while (iteration > 0);

  return value;
}

document
  .getElementById("factorial-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    try {
      const number = event.target["input"].value;
      const method = event.target["method"].value;

      let result;

      if (method === "doLoop") {
        result = factDo(number);
      } else if (method === "forLoop") {
        result = factFor(number);
      } else if (method === "whileLoop") {
        result = factWhile(number);
      } else if (method === "recursive") {
        result = factRec(number);
      }

      document.getElementById("result").textContent = result;
    } catch (error) {
      alert(error.message);
      console.error(error);
    }
  });
