import { checkInput } from "../../trueInput.js";

function factRec(b) {
  b = checkInput(b);
  let i;
  if (b > 0) {
    return b * factRec(b - 1); //return juga bisa menyimpan data
  }
  if (b == 0) {
    return 1;
  }
}

function factFor(b) {
  b = checkInput(b);
  if (b == 0) {
    return 1;
  }

  for (let i = b - 1; i > 1; i--) {
    b *= i;
  }
  return b;
}

function factWhile(b) {
  b = checkInput(b);
  if (b == 0) {
    return 1;
  }
  if (b > 0) {
    let i = b - 1;
    while (i > 0) {
      b *= i;
      i--;
    }
  }
  return b;
}

function factDo(b) {
  b = checkInput(b);
  if (b == 0 || b == 1) {
    return 1;
  }
  if (b > 0) {
    let i = b - 1;
    do {
      b *= i;
      i--;
    } while (i > 0);
  }
  return b;
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
      } else {
        result = factRec(number);
      }
      document.getElementById("result").textContent = result;
    } catch (error) {
      alert(error.message);
      console.error(error);
    }
  });
