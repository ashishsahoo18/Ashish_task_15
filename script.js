// Dummy array for testing
const numbers = [4, 8, 2, 11, 6, 7, 10];

// 1. Function declaration: find the maximum number
function findMax(arr) {
  if (arr.length === 0) return null; // Math.max() on [] would give -Infinity
  return Math.max(...arr);
}

// 2. Arrow function: sum of all elements
const calculateSum = (arr) => arr.reduce((total, n) => total + n, 0);

// 3. Anonymous function expression: count odd numbers
const countOdd = function (arr) {
  return arr.filter((n) => n % 2 !== 0).length; // works for negatives too
};

// Run the operations
const maxValue = findMax(numbers);
const sumValue = calculateSum(numbers);
const oddCount = countOdd(numbers);

// Display results in the console
console.log("Array:", numbers);
console.log("Maximum number:", maxValue);
console.log("Sum of all elements:", sumValue);
console.log("Count of odd numbers:", oddCount);

// Also show results on the page
document.getElementById("array").textContent = "[" + numbers.join(", ") + "]";
document.getElementById("max").textContent = maxValue;
document.getElementById("sum").textContent = sumValue;
document.getElementById("odd").textContent = oddCount;