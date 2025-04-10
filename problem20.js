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
