// Write a JavaScript function that removes all duplicate elements from an array,
// keeping only the first occurrence of each element. The function should return a
// new array with unique elements, preserving the original order.

function removeDuplicates(arr) {
  // Create an empty array to store unique elements
  let uniqueArray = [];
  // Create an empty object to track elements that have been added
  let seenElements = {};

  // Loop through each element in the array
  for (let i = 0; i < arr.length; i++) {
    let element = arr[i];

    // If the element is not in the seenElements object, add it
    if (!seenElements[element]) {
      uniqueArray.push(element);
      seenElements[element] = true; // Mark the element as seen
    }
  }

  // Return the array of unique elements
  return uniqueArray;
}

// Example usage:
let numbers = [1, 2, 2, 3, 4, 4, 5, 3, 6];
let uniqueNumbers = removeDuplicates(numbers);
console.log(uniqueNumbers); // Output: [1, 2, 3, 4, 5, 6]
