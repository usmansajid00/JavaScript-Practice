// Imagine you're trying to keep track of your daily expenses. Every day, you make several purchases,
//  and it's easy to lose track of how much you're spending. You want a simple solution where you can
//  enter each expense, see the total for the day, and get a summary at the end of the day.

// Expense Tracker
class ExpenseTracker {
  constructor() {
    this.expenses = [];
  }

  // Add an expense
  addExpense(description, amount) {
    if (amount <= 0) {
      console.log("Please enter a valid expense amount.");
      return;
    }
    this.expenses.push({ description, amount });
    console.log(`Added: ${description} - $${amount.toFixed(2)}`);
  }

  // Calculate the total expenses
  getTotal() {
    return this.expenses.reduce((total, expense) => total + expense.amount, 0);
  }

  // Display summary of all expenses
  getSummary() {
    console.log("Daily Expense Summary:");
    this.expenses.forEach((expense, index) => {
      console.log(
        `${index + 1}. ${expense.description}: $${expense.amount.toFixed(2)}`
      );
    });
    console.log(`Total Spent Today: $${this.getTotal().toFixed(2)}`);
  }

  // Reset the expenses for the new day
  resetExpenses() {
    this.expenses = [];
    console.log("Expenses reset for the new day.");
  }
}

// Using the ExpenseTracker
const tracker = new ExpenseTracker();

tracker.addExpense("Coffee", 3.5);
tracker.addExpense("Lunch", 12.0);
tracker.addExpense("Groceries", 25.5);

tracker.getSummary(); // Display all expenses and total

// End of the day
tracker.resetExpenses(); // Reset for the next day
