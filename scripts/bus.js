document.addEventListener('DOMContentLoaded', () => {
    const seats = document.querySelectorAll('.seat');
    const selectedCountElement = document.getElementById('selectedCount');
    let selectedSeats = 0;

    seats.forEach(seat => {
        seat.addEventListener('click', () => {
            // Toggle the selected state
            if (seat.classList.contains('bg-green-500')) {
                seat.classList.remove('bg-green-500', 'text-white');
                seat.classList.add('bg-gray-200');
                selectedSeats--;
            } else {
                seat.classList.remove('bg-gray-200');
                seat.classList.add('bg-green-500', 'text-white');
                selectedSeats++;
            }

            // Update the selected count display
            selectedCountElement.textContent = selectedSeats;
        });
    });
});

function bookSuccess() {

    showElementById('success');
    hideElementById('footer');
    hideElementById('booking')
    hideElementById('Banner')
    hideElementById('Home')
}


function continueToPage(){
    hideElementById('success');
    showElementById('footer');
    showElementById('booking')
    showElementById('Banner')
    showElementById('Home')
}