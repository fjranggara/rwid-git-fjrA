import { parseToNumber } from "../helpers.js";

class Fibonacci {
  n;
  fiboRec(value) {
    this.n = value;
    if (this.n == 0) {
      return 0;
    } else if (this.n == 1) {
      return 1;
    } else {
      return this.fiboRec(this.n - 1) + this.fiboRec(this.n - 2).bind(this);
    }
  }
  fiboLoop(value) {
    this.n = parseToNumber(value);
    let a = [];
    let result;
    for (let i = 0; i <= this.n; i++) {
      if (i == 0) {
        a[i] = 0;
      } else if (i == 1) {
        a[i] = 1;
      } else {
        a[i] = a[i - 1] + a[i - 2];
      }
    }
    result = a[this.n];
    return result;
  }
}

document
  .getElementById("fibonacci-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const value = event.target["input"].value;
    const method = event.target["method"].value;
    const object = new Fibonacci();
    let result;
    try {
      if (method === "loop") {
        result = object.fiboLoop(value);
      } else {
        result = object.fiboRec(value);
      }
      document.querySelector("div #result").textContent = result;
    } catch (error) {
      alert(error.message);
    }
  });
