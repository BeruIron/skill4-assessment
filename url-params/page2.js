// Function to get parameters from URL
function getURLParameters() {
    const params = new URLSearchParams(window.location.search);
    const fullname = params.get('fullname');
    const age = params.get('age');

    // Display all values in console log
    console.log(`Fullname: ${fullname}`);
    console.log(`Age: ${age}`);
}

// Call the function to get URL parameters and display them
getURLParameters();
