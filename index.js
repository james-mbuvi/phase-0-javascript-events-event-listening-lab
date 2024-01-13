// index.js
document.addEventListener('DOMContentLoaded', function () {
  // Wait for the DOM to be fully loaded before binding the event listener
  const myButton = document.getElementById('myButton');

  if (myButton) {
    // Define the event listener function
    const input = document.getElementById('button')

    function handleClick() {
      console.log('Button clicked!');
    }

    // Bind the event listener to the button
    function addingEventListener() {
      const input = document.getElementById("button");
      input.addEventListener("click", function () {
        alert("I was clicked!");
      });
    }
input.addEventListener('click', clickAlert);
    myButton.addEventListener('click', handleClick);
  } else {
    console.error('Button with ID "myButton" not found.');
  }
});

