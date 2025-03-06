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
  