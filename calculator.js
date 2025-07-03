// Simple calculator with intentional issues for SonarCloud demo

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

// duplicate logic – SonarCloud should flag this
function sum(a, b) {
  return a + b;
}

// unused function – dead code
function unusedHelper() {
  console.log("This function is never used");
}

// complex function – should trigger cognitive complexity warning
function validate(input) {
  if (input > 0) {
    if (input < 100) {
      if (input % 2 === 0) {
        if (input !== 50) {
          if (input !== 20) {
            return true;
          }
        }
      }
    }
  }
  return false;
}

// bad practice: console.log
console.log("Debugging: This log should not be in production");

// export only required functions
module.exports = { add, subtract, multiply, sum, validate };
