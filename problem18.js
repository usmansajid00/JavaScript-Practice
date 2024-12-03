// writing a function that takes an array of numbers and returns the second largest number in the array.
//  If the array has less than two unique numbers, the function should return null.

function findSecondLargest(arr) {
  // Filter out duplicates and sort in descending order
  const uniqueNumbers = [...new Set(arr)].sort((a, b) => b - a);

  // Check if there are at least two unique numbers
  return uniqueNumbers.length > 1 ? uniqueNumbers[1] : null;
}

// Test cases
console.log(findSecondLargest([10, 20, 20, 40, 30])); // Output: 30
console.log(findSecondLargest([5, 5, 5])); // Output: null
console.log(findSecondLargest([100])); // Output: null
console.log(findSecondLargest([15, 25, 35, 25])); // Output: 25
