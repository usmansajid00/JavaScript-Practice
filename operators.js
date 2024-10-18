// Create a function that calculates the area and perimeter of a rectangle. The function should take the length and width as parameters and use arithmetic operators to compute the results.
const areaAndPerimeter = (width, height) => {
  console.log(`The Area of Rectangle is:${width * height}`);
  console.log(`The Perimeter of Rectangle is: ${width * 2 + height * 2}`);
};
areaAndPerimeter(10, 20);

// Implement a simple calculator that supports addition, subtraction, multiplication, division, and modulus operations. The calculator should take a string input in the format "number1 operator number2" and return the result. Handle errors such as division by zero and invalid inputs gracefully.
const calculator = (num1, operator, num2) => {
  switch (operator) {
    case "+":
      console.log(num1 + num2);
      break;
    case "-":
      console.log(num1 - num2);
      break;
    case "*":
      console.log(num1 * num2);
      break;
    case "/":
      console.log(num1 / num2);
      break;
    case "%":
      console.log(num1 % num2);
      break;
    default:
      console.log("Invalid Operator");
  }
};

calculator(10, "%", 20);

// Write a JavaScript program that declares a variable, assigns it a value, and then updates the value using the +=, -=, *=, and /= assignment operators. Print the variable after each operation.
let assignedValue = 10;
console.log(`Original variable ${assignedValue}`);
console.log(`After Plus: ${(assignedValue += 10)}`);
console.log(`After Subtraction: ${(assignedValue -= 10)}`);
console.log(`After Muliuply: ${(assignedValue *= 10)}`);
console.log(`After Division: ${(assignedValue /= 10)}`);

// Create a function that initializes an object with properties for name, age, and score. Use assignment operators to update the score property based on a given increment or decrement value
const person = {
  name: "John",
  age: 30,
  score: 100,
};
const scoreIncrement = (increment) => {
  person.score += increment;
  console.log(`Score Increment: ${person.score}`);
};
scoreIncrement(10);

// Develop a program that simulates a bank account. Use assignment operators to manage the balance, allowing deposits and withdrawals. Implement validation to prevent negative balances.
const bankAccount = {
  balance: 100,
  deposit: (amount) => {
    bankAccount.balance += amount;
  },
  withdraw: (amount) => {
    bankAccount.balance -= amount;
  },
};
bankAccount.deposit(100);

// Write a function that takes two numbers as arguments and returns true if the first number is greater than the second number, and false otherwise.
const comparison = (a, b) => {
  if (a > b) {
    console.log(true);
  } else {
    console.log(false);
  }
};

comparison(10, 20);

// Create a function that compares two strings and returns true if they are equal, ignoring case differences. Use comparison operators and appropriate string methods.

const compareString = (str1, str2) => {
  if (str1.toLowerCase() === str2.toLowerCase()) {
    console.log(true);
  } else {
    console.log(false);
  }
};

compareString("Hello", "hello");

// Implement a sorting function that sorts an array of objects based on a specified property. Use comparison operators to determine the order of the elements.

const sortArray = (arr) => {
  arr.sort((a, b) => {
    if (a.age > b.age) {
      return 1;
    } else {
      return -1;
    }
  });
  console.log(arr);
};
sortArray([
  { name: "John", age: 30 },
  { name: "Jane", age: 20 },
  { name: "Jill", age: 40 },
  { name: "Jack", age: 10 },
  { name: "Joe", age: 50 },
]);

// Write a function that takes two boolean values as input and returns their logical AND, OR, and NOT results.
const logical = (a, b) => {
  console.log(`AND: ${a && b}`);
  console.log(`OR: ${a || b}`);
  console.log(`NOT: ${!a}`);
};
logical(true, false);

// Create a function that checks if a given year is a leap year. Use logical operators to combine the conditions for determining a leap year.
const isLeapYear = (year) => {
  if (year % 4 === 0) {
    if (year % 100 === 0) {
      if (year % 400 === 0) {
        console.log(true);
      } else {
        console.log(false);
      }
    } else {
      console.log(true);
    }
  } else {
    console.log(false);
  }
};

isLeapYear(2020);

// Implement a login system that checks a user's credentials (username and password) against a stored list. Use logical operators to handle multiple conditions such as empty input fields, incorrect username, or incorrect password.
const login = (username, password) => {
  if (username === "" && password === "") {
    console.log("Please Enter Username and Password");
  }
  if (username === "") {
    console.log("Please Enter Username");
  }
  if (password === "") {
    console.log("Please Enter Password");
  }
  if (username === "admin" && password === "123") {
    console.log("Login Successful");
  } else {
    console.log("Login Failed");
  }
};
login("admin", "123");

// Write a function that takes a number as input and returns its negation using the unary minus operator.

const negation = (num) => {
  console.log(-num);
};
negation(10);

// Create a function that increments a counter variable by 1 using the unary increment operator (++) and prints the updated value.

let counter = 0;
const increment = () => {
  console.log(++counter);
};
increment();

// Implement a function that takes an array of numbers and returns a new array with each element negated. Use the unary minus operator within a loop or array method.

const negateArray = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = -arr[i];
  }
  console.log(arr);
};

negateArray([1, 2, 3, 4, 5]);

// Write a function that takes a number as input and returns "Positive" if the number is greater than zero, "Negative" if it is less than zero, and "Zero" if it is equal to zero, using the ternary operator.
const checkNum = (a) => {
  console.log(a > 0 ? "Positive" : a < 0 ? "Negative" : "Zero");
};
checkNum(10);
