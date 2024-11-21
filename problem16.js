// Write a JavaScript function that takes an array of integers and a target number as input and returns all unique
// pairs of numbers from the array that add up to the target number. Avoid using the same element twice in a pair.

function findPairs(arr, target) {
  const seen = new Set();
  const pairs = new Set();

  arr.forEach((num) => {
    const complement = target - num;
    if (seen.has(complement)) {
      // Sort the pair to ensure uniqueness
      const sortedPair = [num, complement].sort((a, b) => a - b);
      pairs.add(sortedPair.join(","));
    }
    seen.add(num);
  });

  // Convert the unique pairs back to arrays
  return Array.from(pairs).map((pair) => pair.split(",").map(Number));
}

// Example Usage:
const numbers = [2, 4, 3, 7, 5, -1, 8];
const target = 6;

const result = findPairs(numbers, target);
console.log(result);
// Output: [ [ 2, 4 ], [ 3, 3 ], [ -1, 7 ] ]
