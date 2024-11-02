// You have a list of groceries you want to buy, but it's unorganized. Some items are duplicated, and
// you want to categorize them (e.g., fruits, vegetables, dairy, etc.). Additionally, you want to sort the list
// alphabetically within each category and remove any duplicates.

// Step 1: Initial unorganized grocery list with duplicates
const groceries = [
  "apple",
  "milk",
  "banana",
  "apple",
  "broccoli",
  "carrot",
  "yogurt",
  "milk",
  "cheese",
  "orange",
  "banana",
  "spinach",
];

// Step 2: Define categories and categorize each item
const categories = {
  fruits: ["apple", "banana", "orange"],
  vegetables: ["broccoli", "carrot", "spinach"],
  dairy: ["milk", "cheese", "yogurt"],
};

// Step 3: Create a function to organize and clean up the list
function organizeGroceryList(list) {
  const organizedList = {};

  // Remove duplicates
  const uniqueItems = [...new Set(list)];

  // Categorize items and sort alphabetically within each category
  for (const item of uniqueItems) {
    for (const [category, items] of Object.entries(categories)) {
      if (items.includes(item)) {
        if (!organizedList[category]) {
          organizedList[category] = [];
        }
        organizedList[category].push(item);
      }
    }
  }

  // Sort each category alphabetically
  for (const category in organizedList) {
    organizedList[category].sort();
  }

  return organizedList;
}

// Step 4: Organize the grocery list
const organizedGroceries = organizeGroceryList(groceries);

// Step 5: Display the organized list
console.log(organizedGroceries);

/* Output:
  {
    fruits: ["apple", "banana", "orange"],
    vegetables: ["broccoli", "carrot", "spinach"],
    dairy: ["cheese", "milk", "yogurt"]
  }
  */
