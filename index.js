// This function runs when a button is clicked
function handleButtonClick(buttonName) {
    console.log("You clicked on the " + buttonName + " button!");
    // You can add logic here to scroll to a section or open a new page
}

// 1. We find the buttons in the HTML using their ID
var homeButton = document.getElementById("homeBtn");
var aboutButton = document.getElementById("aboutBtn");
var eventsButton = document.getElementById("eventsBtn");
var teamButton = document.getElementById("teamBtn");
var contactButton = document.getElementById("contactBtn");

// 2. We tell the computer to "listen" for a click on each button
// When the click happens, it performs the code inside the function

homeButton.addEventListener("click", function() {
    handleButtonClick("Home");
});

aboutButton.addEventListener("click", function() {
    handleButtonClick("About Us");
});

eventsButton.addEventListener("click", function() {
    handleButtonClick("Events");
});

teamButton.addEventListener("click", function() {
    handleButtonClick("Team");
});

contactButton.addEventListener("click", function() {
    handleButtonClick("Contact Us");
});