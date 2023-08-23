import { parseToNumber } from "../helpers.js";

class Factorial {
  n;
  factRec(input) {
    this.n = parseToNumber(input);
    if (this.n > 0) {
      return this.n * this.factRec(this.n - 1);
    }
    if (this.n == 0) {
      return 1;
    }
  }
  factFor(input) {
    this.n = parseToNumber(input);
    let result = this.n;
    if (result == 0) {
      return 1;
    }

    for (let i = result - 1; i > 1; i--) {
      result *= i;
    }
    console.info(result);
    return result;
  }
  factWhile(input) {
    this.n = parseToNumber(input);
    if (this.n == 0) {
      return 1;
    }
    if (this.n > 0) {
      let i = this.n - 1;
      while (i > 0) {
        this.n *= i;
        i--;
      }
    }
    return this.n;
  }
  factDo(input) {
    this.n = parseToNumber(input);
    if (this.n == 0 || this.n == 1) {
      return 1;
    }
    if (this.n > 0) {
      let i = this.n - 1;
      do {
        this.n *= i;
        i--;
      } while (i > 0);
    }
    return this.n;
  }
}

document
  .getElementById("factorial-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    try {
      const number = event.target["input"].value;
      const method = event.target["method"].value;
      const object = new Factorial();
      let result;
      if (method === "doLoop") {
        result = object.factDo(number);
      } else if (method === "forLoop") {
        result = object.factFor(number);
      } else if (method === "whileLoop") {
        result = object.factWhile(number);
      } else {
        result = object.factRec(number);
      }
      document.getElementById("result").textContent = result;
    } catch (error) {
      alert(error.message);
      console.error(error);
    }
  });
