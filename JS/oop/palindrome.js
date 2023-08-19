import { text } from "../../trueInput.js";

class Palindrome {
  word;
  length;

  isPalindromeRec(input) {
    this.word = text(input);
    this.length = this.word.length;
    const isPalindrome = this.recursive(this.length);
    return isPalindrome;
  }
  recursive(i) {
    if (i == 0) {
      return true;
    }
    if (this.word.at(i - 1) !== this.word.at(this.length - i)) {
      return false;
    }
    i--;
    return this.recursive(i);
  }
  isPalindromeLoop(input) {
    this.word = text(input);
    this.length = this.word.length;

    for (let i = 0; i < this.length; i++) {
      let b = [];
      b[i] = word[this.length - i - 1];
      if (b[i] !== word[i]) {
        return false;
      }
    }
    return true;
  }
  isPalindromeReverse(input) {
    this.word = text(input);
    this.length = this.word.length;

    const arWord = Array.from(this.word);
    const newWorld = arWord.reduceRight(
      (accumulator, value) => accumulator + value,
    );
    if (word === newWorld) {
      return true;
    } else {
      return false;
    }
  }
}

document
  .getElementById("palindrome-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const method = event.target["method"].value;
    const value = event.target["input"].value;
    const object = new Palindrome();
    let result;
    if (method === "recursive") {
      result = object.isPalindromeRec(value, length);
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
