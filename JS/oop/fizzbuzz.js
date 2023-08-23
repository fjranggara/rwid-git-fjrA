import { parseToNumber } from "../helpers.js";

class Fizzbuzz {
  n;
  fizz_buzz(value) {
    this.n = parseToNumber(value);
    let array = [];
    for (let i = 1; i <= this.n; i++) {
      if (i % 4 == 0 || i % 7 == 0) {
        array.push("fizz buzz");
      } else if (i % 2 !== 0) {
        array.push("fizz");
      } else {
        array.push("buzz");
      }
    }
    return array;
  }
}

document
  .querySelector("div #fizzbuzz-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    try {
      const n = event.target["input"].value;
      const object = new Fizzbuzz();
      const result = object.fizz_buzz(n);
      console.info(result);
      document.querySelector("div#result").textContent = JSON.stringify(result);
    } catch (error) {
      alert(error.message);
    }
  });
