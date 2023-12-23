// index.js
document.addEventListener('DOMContentLoaded', function () {
  // Wait for the DOM to be fully loaded before binding the event listener
  const myButton = document.getElementById('myButton');

  if (myButton) {
    // Define the event listener function
    function handleClick() {
      console.log('Button clicked!');
    }

    // Bind the event listener to the button
    myButton.addEventListener('click', handleClick);
  } else {
    console.error('Button with ID "myButton" not found.');
  }
});

