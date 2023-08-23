import { parseToNumber } from "../helpers.js";

function fizz_buzz(number) {
  const n = parseToNumber(number);
  let array = [];
  for (let i = 1; i <= n; i++) {
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

document
  .querySelector("div #fizzbuzz-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    try {
      const n = event.target["input"].value;
      const result = fizz_buzz(n);
      console.info(result);
      document.querySelector("div#result").textContent = JSON.stringify(result);
    } catch (error) {
      alert(error.message);
    }
  });
