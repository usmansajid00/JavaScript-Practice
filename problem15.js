// Write a function that takes a string as input and returns the longest word in the sentence.
//  If two or more words have the same length, return the first one encountered.
//
// Constraints:
//
// The input string will contain only letters and spaces.
// Words are separated by spaces.
// The function should return the longest word as a string.

function findLongestWord(sentence) {
  if (!sentence || typeof sentence !== "string") {
    return "Invalid input!";
  }

  // Split the sentence into words
  const words = sentence.split(" ");

  // Initialize variables to keep track of the longest word
  let longestWord = "";

  // Iterate through each word
  for (const word of words) {
    if (word.length > longestWord.length) {
      longestWord = word; // Update if a longer word is found
    }
  }

  return longestWord;
}

// Example usage:
const sentence = "The quick brown fox jumped over the lazy dog";
const result = findLongestWord(sentence);
console.log(`The longest word is: "${result}"`); // Output: "jumped"
