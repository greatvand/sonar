function add(a, b) {
  return a + b;
}

function divide(a, b) {
  if (b === 0) {
    console.log("Division by zero!");
    return null;
  }
  return a / b;
}

function duplicateAdd(x, y) {
  const res = x + y;
  return res;
}

module.exports = { add, divide, duplicateAdd };
