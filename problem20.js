// You are developing an online event booking system for a theater. The system needs to check
//  seat availability and book a seat for a customer.
//
// Requirements:
//
// If a seat is available, book it and confirm the booking.
// If a seat is already booked, notify the user.
// Ensure that the same seat cannot be booked twice.


class Theater {
    constructor(totalSeats) {
      this.totalSeats = totalSeats;
      this.bookedSeats = new Set(); // Using a Set to store booked seat numbers
    }
  
    // Method to book a seat
    bookSeat(seatNumber) {
      if (seatNumber < 1 || seatNumber > this.totalSeats) {
        return `❌ Seat ${seatNumber} is out of range. Please choose a valid seat.`;
      }
  
      if (this.bookedSeats.has(seatNumber)) {
        return `⚠️ Seat ${seatNumber} is already booked. Please choose another seat.`;
      }
  
      this.bookedSeats.add(seatNumber);
      return `✅ Seat ${seatNumber} has been successfully booked!`;
    }
  
    // Method to check available seats
    availableSeats() {
      let available = [];
      for (let i = 1; i <= this.totalSeats; i++) {
        if (!this.bookedSeats.has(i)) {
          available.push(i);
        }
      }
      return available.length ? `🎟 Available seats: ${available.join(', ')}` : "🚫 No seats available.";
    }
  }
  
  // Example usage
  const myTheater = new Theater(10); // Theater with 10 seats
  
  console.log(myTheater.bookSeat(3)); // ✅ Successfully booked seat 3
  console.log(myTheater.bookSeat(3)); // ⚠️ Already booked
  console.log(myTheater.availableSeats()); // 🎟 Shows available seats
  console.log(myTheater.bookSeat(11)); // ❌ Out of range error
  

  // Write a function in JavaScript that takes a string as input and returns the first 
  // non-repeating character. If all characters are repeated, return null.
  
  function firstNonRepeatingChar(str) {
    const charCount = {}; // Object to store character counts

    // First pass: Count occurrences of each character
    for (let char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    // Second pass: Find the first character with count 1
    for (let char of str) {
        if (charCount[char] === 1) {
            return char;
        }
    }

    return null; // No non-repeating character found
}

// Test cases
console.log(firstNonRepeatingChar("aabbcdd")); // "c"
console.log(firstNonRepeatingChar("aabbcc")); // null
console.log(firstNonRepeatingChar("abacd")); // "b"


// You are given data for 30 students, and each student has 7 subjects.
// Each student has obtained different marks in each subject after annual exams.
// 
// You need to:
// 
// Calculate the average score for every student.
// 
// Calculate the percentage for each subject score of a student (assuming each subject is out of 100).
// 


// Step 1: Generate data for 30 students with random scores in 7 subjects
const totalStudents = 30;
const subjectsPerStudent = 7;
const maxMarksPerSubject = 100;
const totalMarks = subjectsPerStudent * maxMarksPerSubject;

const students = Array.from({ length: totalStudents }, (_, i) => {
  const scores = Array.from({ length: subjectsPerStudent }, () => Math.floor(Math.random() * 101)); // 0 to 100
  return {
    id: i + 1,
    scores, // subject-wise scores
  };
});

// Step 2: Calculate average and percentage for each student
students.forEach(student => {
  const totalScore = student.scores.reduce((sum, score) => sum + score, 0);
  student.total = totalScore;
  student.average = (totalScore / subjectsPerStudent).toFixed(2);
  student.percentage = ((totalScore / totalMarks) * 100).toFixed(2);

  // Individual subject percentage
  student.subjectPercentages = student.scores.map(score => ((score / maxMarksPerSubject) * 100).toFixed(2));
});

// Step 3: Calculate collective class percentage (average of all students' percentages)
const classPercentage = (
  students.reduce((sum, student) => sum + parseFloat(student.percentage), 0) / totalStudents
).toFixed(2);

// Output the results
console.log("All Student Results:");
students.forEach(student => {
  console.log(`Student ${student.id}:`);
  console.log(`  Scores: ${student.scores.join(', ')}`);
  console.log(`  Subject-wise %: ${student.subjectPercentages.join('% , ')}%`);
  console.log(`  Total: ${student.total}`);
  console.log(`  Average: ${student.average}`);
  console.log(`  Overall %: ${student.percentage}%`);
});

console.log(`\n🏆 Collective Class Percentage: ${classPercentage}%`);


// 
// There are 20 employees in a company.
// Each employee works on 5 different projects throughout the year.
// Each project is evaluated and given a score out of 50 based on performance.
// 
// You need to:
// 
// Calculate the total score for each employee across all projects.
// 
// Calculate the average score of each employee.
// 
// Calculate the percentage score per project (out of 50).
// 
// Calculate the overall company performance percentage, which is the average percentage of all employees.


const totalEmployees = 20;
const projectsPerEmployee = 5;
const maxMarksPerProject = 50;
const totalMarkss = projectsPerEmployee * maxMarksPerProject;

// Step 1: Generate random performance scores
const employees = Array.from({ length: totalEmployees }, (_, i) => {
  const scores = Array.from({ length: projectsPerEmployee }, () => Math.floor(Math.random() * 51)); // 0 to 50
  return {
    id: i + 1,
    scores,
  };
});

// Step 2: Calculate performance metrics
employees.forEach(employee => {
  const totalScore = employee.scores.reduce((sum, val) => sum + val, 0);
  employee.total = totalScore;
  employee.average = (totalScore / projectsPerEmployee).toFixed(2);
  employee.percentage = ((totalScore / totalMarkss) * 100).toFixed(2);
  employee.projectPercentages = employee.scores.map(score => ((score / maxMarksPerProject) * 100).toFixed(2));
});

// Step 3: Calculate overall company performance percentage
const companyPerformance = (
  employees.reduce((sum, emp) => sum + parseFloat(emp.percentage), 0) / totalEmployees
).toFixed(2);

// Output
console.log("Employee Performance Report:");
employees.forEach(emp => {
  console.log(`Employee ${emp.id}:`);
  console.log(`  Scores: ${emp.scores.join(', ')}`);
  console.log(`  Project %s: ${emp.projectPercentages.join('% , ')}%`);
  console.log(`  Total Score: ${emp.total}`);
  console.log(`  Average Score: ${emp.average}`);
  console.log(`  Overall %: ${emp.percentage}%`);
});

console.log(`\n🏢 Company Performance Percentage: ${companyPerformance}%`);


// You're given an array of stock prices where prices[i] is the price of a given stock on the ith day.
// Write a JavaScript function to determine the maximum profit you can achieve by buying on one day and 
// selling on another day after the buy day. If no profit can be made, return 0.

function maxProfit(prices) {
  let minPrice = Infinity;
  let maxProfit = 0;

  for (let price of prices) {
    if (price < minPrice) {
      minPrice = price;
    } else {
      maxProfit = Math.max(maxProfit, price - minPrice);
    }
  }

  return maxProfit;
}
