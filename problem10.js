// Imagine a user wants to order food from an online delivery service. When they select multiple items,
// each with a different price, they want to see a breakdown of the total price and the amount after
// applying a discount if they order more than 5 items.

// Array representing the user's selected food items with prices
const cartItems = [
  { name: "Burger", price: 5 },
  { name: "Fries", price: 2 },
  { name: "Pizza", price: 8 },
  { name: "Salad", price: 4 },
  { name: "Soda", price: 1 },
  { name: "Ice Cream", price: 3 },
];

// Discount threshold and percentage
const DISCOUNT_THRESHOLD = 5;
const DISCOUNT_PERCENTAGE = 10; // 10%

// Function to calculate total price
function calculateTotal(cartItems) {
  return cartItems.reduce((total, item) => total + item.price, 0);
}

// Function to calculate discount
function applyDiscount(total, itemCount) {
  if (itemCount > DISCOUNT_THRESHOLD) {
    return total - (total * DISCOUNT_PERCENTAGE) / 100;
  }
  return total;
}

// Main function to calculate final amount
function calculateFinalAmount(cartItems) {
  const total = calculateTotal(cartItems);
  const itemCount = cartItems.length;
  const discountedTotal = applyDiscount(total, itemCount);

  return {
    itemCount,
    total,
    discountedTotal,
    discountApplied: itemCount > DISCOUNT_THRESHOLD,
  };
}

// Displaying the result
const result = calculateFinalAmount(cartItems);
console.log(`Items in Cart: ${result.itemCount}`);
console.log(`Total Price: $${result.total}`);
if (result.discountApplied) {
  console.log(
    `Discount Applied! Total after discount: $${result.discountedTotal}`
  );
} else {
  console.log("No discount applied.");
}
