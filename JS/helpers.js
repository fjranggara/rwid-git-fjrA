export function parseToNumber(value) {
  const parsed = Number(value);

  if (parsed < 0) {
    throw new Error("Please input the value greater than 0.");
  }

  if (parsed > 100) {
    throw new Error("Maximum value is 100, the computer is too slow.");
  }

  return parsed;
}

export function parseToString(value) {
  let parsed = String(value);
  parsed = parsed.toLowerCase();

  return parsed;
}
