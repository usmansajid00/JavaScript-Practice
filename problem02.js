// Write a JavaScript function that checks if a given string is a palindrome,
// ignoring spaces, punctuation, and special characters. A palindrome is a word,
//  phrase, or sequence that reads the same backward as forward, after removing
//  non-alphabetic characters and ignoring case
const isPalindrome = (str) => {
  // Step 1: Convert the input string to lowercase to make the check case-insensitive
  let lowerCaseStr = str.toLowerCase();

  // Step 2: Remove non-alphabetic characters using regex
  let cleanedStr = lowerCaseStr.replace(/[^a-z0-9]/g, "");

  // Step 3: Reverse the cleaned string to compare with the original cleaned string
  let reversedStr = cleanedStr.split("").reverse().join("");

  // Step 4: Check if the cleaned string is equal to its reverse
  return cleanedStr === reversedStr;
};

// Test cases
console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
console.log(isPalindrome("race a car")); // false
console.log(isPalindrome("No 'x' in Nixon")); // true
