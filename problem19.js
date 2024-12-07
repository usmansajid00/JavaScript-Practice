// Write a JavaScript program that takes a string of text and calculates the frequency of each word in the text.
// Ignore case, punctuation, and extra spaces.
//
// Requirements:
//
// Accept a string of text as input.
// Normalize the text by converting it to lowercase and removing punctuation.
// Split the text into individual words.
// Count the frequency of each word.
// Return an object where keys are words and values are their frequencies.

function wordFrequency(text) {
  // Step 1: Normalize the text (lowercase and remove punctuation)
  const normalizedText = text.toLowerCase().replace(/[^\w\s]/g, ""); // Remove punctuation

  // Step 2: Split the text into words
  const words = normalizedText.split(/\s+/); // Split by whitespace

  // Step 3: Count the frequency of each word
  const frequency = {};
  words.forEach((word) => {
    if (word) {
      // Skip empty strings
      frequency[word] = (frequency[word] || 0) + 1;
    }
  });

  return frequency;
}

// Test the function
const text = "Hello, world! Hello again, world. This is a test: hello world.";
console.log(wordFrequency(text));
