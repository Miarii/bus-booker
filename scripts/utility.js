function activeButton(elementID) {
    const element = document.getElementById(elementID);
    
    // Check if the element exists
    if (!element) {
        console.error(`Element with ID ${elementID} not found.`);
        return;
    }

    // Optional: Set an initial state (if needed)
    // element.classList.add("bg-blue-500");

    element.addEventListener("click", () => {
        // Toggle classes for background color
        element.classList.toggle("bg-green-500");
    });
}


function hideElementById(elementID) {
    const element = document.getElementById(elementID)
    element.classList.add('hidden')
}

function showElementById(elementID) {
    const element = document.getElementById(elementID)
    element.classList.remove('hidden')
}