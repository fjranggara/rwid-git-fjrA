import { checkInput } from "../../trueInput.js";

function fiboRec(n) {
  const v = checkInput(n);
  if (v == 0) {
    return 0;
  } else if (v == 1) {
    return 1;
  } else {
    return fiboRec(v - 1) + fiboRec(v - 2);
  }
}
function fiboLoop(n) {
  const v = checkInput(n);
  let a = [];
  let result;
  for (let i = 0; i <= v; i++) {
    if (i == 0) {
      a[i] = 0;
    } else if (i == 1) {
      a[i] = 1;
    } else {
      a[i] = a[i - 1] + a[i - 2];
    }
  }
  result = a[v];
  return result;
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
