// Write a JavaScript function to find and return all the duplicate characters in a given string. The function should:
//
// Ignore case (e.g., "A" and "a" are considered the same character).
// Return the duplicates as an array of characters.
// Handle edge cases, such as empty strings or strings with no duplicates.

const findDuplicates = (str) => {
  if (!str) return []; // Handle empty string

  const normalizedStr = str.toLowerCase();
  const charCount = {};
  const duplicates = [];

  // Count occurrences of each character
  normalizedStr.split("").forEach((char) => {
    charCount[char] = (charCount[char] || 0) + 1;
  });

  // Find characters with more than one occurrence
  Object.keys(charCount).forEach((char) => {
    if (charCount[char] > 1) {
      duplicates.push(char);
    }
  });

  return duplicates;
};

// Test cases
console.log(findDuplicates("Programming"));
console.log(findDuplicates("JavaScript"));
console.log(findDuplicates(""));
console.log(findDuplicates("Unique"));
