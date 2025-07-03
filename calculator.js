// Intentionally problematic JS file for SonarCloud demo

function add(a, b) {
  return a + b;
}

function insecureEval(input) {
  // Security hotspot
  return eval(input);
}

function duplicateLogic(x, y) {
  // Duplicate logic
  return x + y;
}

function unusedCode() {
  const temp = 42;
  console.log("This function is never used");
}

function brokenSyntax() {
  let x = ; // Syntax error
}

module.exports = { add, insecureEval, duplicateLogic };
