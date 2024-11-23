// Write a function filterAndTransform that takes an array of objects and filters the objects based on
//  a given condition. Then, transform the filtered results into a new array of specific values.
//
// Each object in the array contains the following properties:
//
// id (number): A unique identifier for the object.
// name (string): The name of the object.
// age (number): The age associated with the object.
// isActive (boolean): Indicates whether the object is active.
// The function should:
//
// Filter the objects where isActive is true and age is greater than 20.
// Transform the filtered objects into an array of their name property.
// Return the resulting array of names.

function filterAndTransform(data) {
  // Filter objects based on isActive being true and age > 20
  const filtered = data.filter((item) => item.isActive && item.age > 20);

  // Transform the filtered objects into an array of names
  const result = filtered.map((item) => item.name);

  // Return the resulting array
  return result;
}

// Example input data
const data = [
  { id: 1, name: "Alice", age: 25, isActive: true },
  { id: 2, name: "Bob", age: 19, isActive: true },
  { id: 3, name: "Charlie", age: 30, isActive: false },
  { id: 4, name: "David", age: 22, isActive: true },
];

// Call the function and log the result
console.log(filterAndTransform(data)); // Output: ["Alice", "David"]
