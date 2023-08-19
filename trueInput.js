/**
 * @param {*} value
 * @returns {number}
 */

export function checkInput(value) {
  value = Number(value);

  if (value < 0) {
    const error = new Error("Please,input the value greater than 0");
    throw error;
  }
  if (value > 100) {
    throw new Error("Maximum value is 100, the computer is too slow");
  }
  return value;
}

export function text(value) {
  const word = String(value);
  const words = word.toLowerCase();
  return words;
}
