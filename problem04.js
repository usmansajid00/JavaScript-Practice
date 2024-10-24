// You are building an Inventory Management System for a warehouse.
// The warehouse needs to manage its stock in real-time. Items can be
// added to the inventory, removed when shipped, or updated when new
// stock arrives. Each item has an id, name, quantity, and price. The
// system should be able to:
//
// Add new items to the inventory.
// Update the quantity of an existing item.
// Remove items from the inventory when they are shipped out.
// Calculate the total value of the inventory (sum of quantity * price for each item).
// Additionally, the system must check that:
//
// An item cannot be removed if it doesn't exist.
// Quantity of items should not fall below zero.

class Inventory {
  constructor() {
    // Store inventory as an array of objects
    this.items = [];
  }

  // Function to add a new item to the inventory
  addItem(id, name, quantity, price) {
    // Check if the item already exists
    const existingItem = this.items.find((item) => item.id === id);

    if (existingItem) {
      console.log(`Item with ID ${id} already exists.`);
    } else {
      const newItem = { id, name, quantity, price };
      this.items.push(newItem);
      console.log(`Item "${name}" added to the inventory.`);
    }
  }

  // Function to update the quantity of an existing item
  updateItemQuantity(id, newQuantity) {
    const item = this.items.find((item) => item.id === id);

    if (item) {
      item.quantity = newQuantity;
      console.log(`Item "${item.name}" quantity updated to ${newQuantity}.`);
    } else {
      console.log(`Item with ID ${id} not found.`);
    }
  }

  // Function to remove an item from the inventory
  removeItem(id) {
    const itemIndex = this.items.findIndex((item) => item.id === id);

    if (itemIndex !== -1) {
      const removedItem = this.items.splice(itemIndex, 1);
      console.log(`Item "${removedItem[0].name}" removed from the inventory.`);
    } else {
      console.log(`Item with ID ${id} not found.`);
    }
  }

  // Function to calculate the total value of the inventory
  calculateTotalValue() {
    let totalValue = 0;
    this.items.forEach((item) => {
      totalValue += item.quantity * item.price;
    });
    return totalValue;
  }

  // Display the current inventory items
  displayInventory() {
    console.log("Current Inventory:");
    this.items.forEach((item) => {
      console.log(
        `ID: ${item.id}, Name: ${item.name}, Quantity: ${item.quantity}, Price: ${item.price}`
      );
    });
  }
}

// Example usage
const warehouseInventory = new Inventory();

// Add items
warehouseInventory.addItem(1, "Laptop", 50, 1000);
warehouseInventory.addItem(2, "Phone", 200, 500);
warehouseInventory.addItem(3, "Tablet", 150, 300);

// Update item quantity
warehouseInventory.updateItemQuantity(2, 180);

// Remove an item
warehouseInventory.removeItem(3);

// Display inventory
warehouseInventory.displayInventory();

// Calculate total value of the inventory
const totalValue = warehouseInventory.calculateTotalValue();
console.log(`Total Inventory Value: $${totalValue}`);
