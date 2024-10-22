// creating a program that takes an array of numbers and returns the product
//  of all the numbers except the one at the current index for each element
//  in the array. You cannot use division for this solution.

//Examples
// Input: [1, 2, 3, 4]
// Output: [24, 12, 8, 6]
//
// Explanation:
// - For index 0: Product of all elements except 1 is 2 * 3 * 4 = 24
// - For index 1: Product of all elements except 2 is 1 * 3 * 4 = 12
// - For index 2: Product of all elements except 3 is 1 * 2 * 4 = 8
// - For index 3: Product of all elements except 4 is 1 * 2 * 3 = 6

const productExceptSelf = (nums) => {
  const n = nums.length;
  const result = Array(n).fill(1);

  // First pass: Calculate left products
  let leftProduct = 1;
  for (let i = 0; i < n; i++) {
    result[i] = leftProduct;
    leftProduct *= nums[i];
  }

  // Second pass: Calculate right products and multiply with the left
  let rightProduct = 1;
  for (let i = n - 1; i >= 0; i--) {
    result[i] *= rightProduct;
    rightProduct *= nums[i];
  }

  return result;
};

// Example usage
const nums = [1, 2, 3, 4];
console.log(productExceptSelf(nums)); // Output: [24, 12, 8, 6]
