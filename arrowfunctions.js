const sum = (a, b) => a + b;

const subtract = (a, b) => a - b;

const multiply = (a, b) => a * b;

const divide = (a, b) => a / b;

function log(a, b) {
  let firstSum = (sum(2, 4) * sum(5, 2));
  console.log(firstSum)
  let firstSubtract = (subtract(firstSum, 2));
  console.log(firstSubtract)
  let finalResult = (divide(firstSubtract, 5));
  console.log(finalResult)
}

log()
