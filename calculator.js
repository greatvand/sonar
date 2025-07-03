// Intentionally problematic JS file for SonarCloud demo

function add(a, b) {
  return a + b;
}

function insecureEval(input) {
  // 🚨 Security Hotspot
  return eval(input);
}

function duplicateSum(x, y) {
  // 🚨 Maintainability: Duplicate logic with add()
  return x + y;
}

function unusedFunction() {
  // 🚨 Code Smell: Unused function
  const temp = 42;
  console.log("This function is never used");
}

function overlyNested(input) {
  // 🚨 Cognitive complexity
  if (input > 0) {
    if (input < 10) {
      if (input !== 5) {
        if (input % 2 === 0) {
          return true;
        }
      }
    }
  }
  return false;
}

module.exports = { add, insecureEval, duplicateSum, overlyNested };
