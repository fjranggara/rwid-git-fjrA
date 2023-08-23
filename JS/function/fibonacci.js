import { parseToNumber } from "../helpers.js";

function fiboRec(n) {
  n = parseToNumber(n);

  if (n == 0) {
    return 0;
  }

  if (n == 1) {
    return 1;
  }

  return fiboRec(n - 1) + fiboRec(n - 2);
}

function fiboLoop(n) {
  n = parseToNumber(n);

  let array = [];

  for (let index = 0; index <= v; index++) {
    if (index == 0) {
      array[index] = 0;
    } else if (index == 1) {
      array[index] = 1;
    } else {
      array[index] = array[index - 1] + array[index - 2];
    }
  }

  return a[v];
}

document
  .getElementById("fibonacci-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const value = event.target["input"].value;
    const method = event.target["method"].value;
    let result;
    try {
      if (method === "loop") {
        result = fiboLoop(value);
      } else {
        result = fiboRec(value);
      }
      document.querySelector("div #result").textContent = result;
    } catch (error) {
      alert(error.message);
    }
  });
