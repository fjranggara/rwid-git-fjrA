import { parseToString } from "../helpers.js";

function isPalindromeRec(n) {
  return new Promise(function (resolve) {
    const word = parseToString(n);

    let i = word.length;
    let j = 0;
    let l = rec(i);
    function rec(i) {
      if (i == 0) {
        resolve(true);
      }
      if (word.at(i - 1) !== word.at(j)) {
        resolve(false);
      }
      i--;
      j++;
      return rec(i);
    }
    resolve(l);
  });
}

function isPalindromeLoop(n) {
  const word = parseToString(n);

  for (let i in word) {
    let c = word.length;
    let b = [];
    b[i] = word[c - i - 1];
    if (b[i] !== word[i]) {
      return false;
    }
  }
  return true;
}

function isPalindromeReverse(n) {
  const word = parseToString(n);

  const arWord = Array.from(word);
  const newWorld = arWord.reduceRight(
    (accumulator, value) => accumulator + value,
  );
  if (word === newWorld) {
    return true;
  } else {
    return false;
  }
}

document
  .getElementById("palindrome-form")
  .addEventListener("submit", async function (event) {
    event.preventDefault();
    const method = event.target["method"].value;
    const value = event.target["input"].value;

    let result;
    if (method === "recursive") {
      result = await isPalindromeRec(value);
    } else if (method === "loop") {
      result = isPalindromeLoop(value);
    } else {
      result = isPalindromeReverse(value);
    }
    result == true
      ? (document.querySelector("div #result").textContent =
          "Theses words are Palindrome")
      : (document.querySelector("div #result").textContent =
          "These words are not Palindrome");
  });
