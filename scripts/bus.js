const seats = document.querySelectorAll('.seat');
const seatSummaryContainer = document.getElementById('seatSummary');
const totalPriceContainer = document.getElementById('totalPrice');

let selectedSeats = [];
const seatPrice = 550; // Regular price for each seat

seats.forEach(seat => {
  seat.addEventListener('click', () => {
    seat.classList.toggle('bg-green-500');  // Toggle selection color
    seat.classList.toggle('text-white');

    const seatNumber = seat.textContent;

    // Add or remove seat from selected seats list
    if (selectedSeats.includes(seatNumber)) {
      selectedSeats = selectedSeats.filter(s => s !== seatNumber);
    } else {
      selectedSeats.push(seatNumber);
    }

    // Update seat summary display
    updateSeatSummary();

    // Calculate and display total price
    const totalAmount = selectedSeats.length * seatPrice;
    totalPriceContainer.textContent = `BDT ${totalAmount}`;
  });
});

function updateSeatSummary() {
  // Clear previous seat summary
  seatSummaryContainer.innerHTML = '';

  // Display selected seats with their class and price
  selectedSeats.forEach(seatNumber => {
    const seatRow = document.createElement('div');
    seatRow.classList.add('flex', 'justify-between', 'items-center', 'mb-2');

    seatRow.innerHTML = `
      <span class="text-gray-800">${seatNumber}</span>
      <span class="text-gray-600">Economy</span>
      <span class="text-gray-800">BDT ${seatPrice}</span>
    `;

    seatSummaryContainer.appendChild(seatRow);
  });
}


/* welcome */
// Wait for the page to fully load
window.onload = function() {
  // First, hide the loading spinner after a small delay (just to simulate loading)
  setTimeout(function() {
      // Hide the loading spinner
      document.getElementById('loadingSpinner').style.display = 'none';
      
      // Show the "Hello :)" message
      document.getElementById('helloMessage').classList.remove('hidden');

      // Then, after 2 seconds, hide the "Hello :)" message and show the main content
      setTimeout(function() {
          document.getElementById('helloMessage').style.display = 'none';
          document.getElementById('mainContent').classList.remove('hidden');
      }, 2000); // "Hello :)" will stay for 2 seconds
  }, 1000); // Loading animation stays for 2 seconds
};


function bookSuccess() {

    showElementById('success');
    hideElementById('footer');
    hideElementById('booking')
    hideElementById('Banner')
    hideElementById('Home')
}


function continueToPage() {
    hideElementById('success');
    showElementById('footer');
    showElementById('booking')
    showElementById('Banner')
    showElementById('Home')
}