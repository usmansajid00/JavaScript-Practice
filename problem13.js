// You are working on a construction project and need to calculate the total cost of flooring for a room. Here are the details:
//
// The flooring material costs $25 per square meter.
// The room’s dimensions are provided by the user: length and width in meters.
// The user wants a 10% buffer to account for any cutting or wastage.
// Write a JavaScript function to calculate the total cost of flooring based on these inputs.

const calculateFlooringCost = (length, width, costPerSquareMeter) => {
  const area = length * width; // Calculate the area of the room
  const areaWithBuffer = area * 1.1; // Add a 10% buffer for wastage
  const totalCost = areaWithBuffer * costPerSquareMeter; // Calculate the total cost
  return totalCost.toFixed(2); // Return result rounded to 2 decimal places
};

// Example usage
const roomLength = 10; // meters
const roomWidth = 5; // meters
const flooringCostPerSquareMeter = 25; // dollars per square meter

const totalFlooringCost = calculateFlooringCost(
  roomLength,
  roomWidth,
  flooringCostPerSquareMeter
);

console.log(`The total cost for flooring is $${totalFlooringCost}`);
