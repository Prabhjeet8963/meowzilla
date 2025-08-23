// Define a Function
function sayHello() {
  alert('Hello there, Catie person!');
}

// Use a CSS selector to identify an element
var catImage = document.querySelector('#catlogo');

// Assign the function to the onclick event on that element
catImage.onclick = sayHello;

function sayMlem() {
  alert('Meow! I lick u, hooman');
}

var catGif = document.querySelector('#catlick');
catGif.onclick = sayMlem;
