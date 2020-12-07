
// Set the slideIndex to 1 (1st picture)
let slideIndex = 1;
// Call the showSlides function to display the 1st picture
showSlides(slideIndex);

// Next/previous controls
// function plusSlides calls the showSlides function with a new parameter (slideIndex) when the user clicks on the arrows (classes "prev" and "next" in gallery.html)
function plusSlides(n) {
  // slideIndex = slideIndex + n
  showSlides(slideIndex += n);
}

// Thumbnail image controls -- used in gallery.html to show a photo selected by the circles
function currentSlide(n) {
  showSlides(slideIndex = n);
}


  // ********************************************************************************************************************
  // Declare the variables:
  // Variable "i" is used in the for loop 
  // Variable "slides" is the element with the class name "mySlides" (images)
  // Variable "dots" is the element with the class name "dot" (dots under images used to select an image)
  //
  // We use "let" to declare a variable because we don't want them to be in global scope 
  // We use "const" to define a constant reference to a value, and then we can change the properties (ie. slides.length)
  // ********************************************************************************************************************

function showSlides(n) {

  let i;
  const slides = document.getElementsByClassName("mySlides");
  const dots = document.getElementsByClassName("dot");

  // We check the "length" property of the "slides" variable, if the "n" parameter is greater than the length of "slides", slideIndex becomes 1 (1st picture is shown)
  if (n > slides.length) {
    slideIndex = 1;
  }

  // We check whether the n is less than 1, if it is, the slideIndex value becomes equal to the length of the "slides" variable
  // When we click the left arrow while the first pic is shown, n becomes 0, so the slideIndex becomes 9, and thus the 9th picture is shown
  if (n < 1) {
    slideIndex = slides.length;
  }

  // This loop hides the elements with class "mySlides" by setting their display to "none"
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // This loop looks for the class name of the HTML element with "dot" class name and replaces the "active" with "" (deletes the active)
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  // Sets the current slide to be displayed as a block element 
  slides[slideIndex-1].style.display = "block";
  // Sets the currently selected dot's class to "active"
  dots[slideIndex-1].className += " active";

  // Show the value of n and slideIndex in console log
  console.log("n is:", n);
  console.log("slide index is:", slideIndex);
  console.log("visible element is:", slides[slideIndex-1]);
  
} 


