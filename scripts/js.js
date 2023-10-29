// JavaScript file (script.js)

// Function to handle button click event
function handleClick() {
  // Get the input value
  var input = document.getElementById("myInput").value;
  
  // Display an alert with the input value
  alert("You entered: " + input);
}

// Add event listener to the button
var button = document.getElementById("myButton");
button.addEventListener("click", handleClick);