// Slider

var distanceSlider = document.getElementById("distance");
var weightSlider = document.getElementById("weight");
var output1 = document.querySelector(".demo1"); //Distance value
var output2 = document.querySelector(".demo2"); //weight  value

output1.innerHTML = distanceSlider.value; // Display the default slider value
output2.innerHTML = weightSlider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
distanceSlider.oninput = function () {
  output1.innerHTML = this.value;
};

weightSlider.oninput = function () {
  output2.innerHTML = this.value;
};

// Slide show AI voice
const slideShowAI = () => {
  if (slideIndex === 1) {
    window.speechSynthesis.cancel();
    const speech = new SpeechSynthesisUtterance("This is slide show 1");
    window.speechSynthesis.speak(speech);
  }
  if (slideIndex === 2) {
    window.speechSynthesis.cancel();
    const speech = new SpeechSynthesisUtterance("This is slide show 2");
    window.speechSynthesis.speak(speech);
  }
  if (slideIndex == 3) {
    window.speechSynthesis.cancel();
    const speech = new SpeechSynthesisUtterance("This is slide show 3");
    window.speechSynthesis.speak(speech);
  }
};

// Slide show
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
  slideShowAI();
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  console.log(slideIndex);
}

// Selectors
const calculateButton = document.querySelector(".js--btn-cal");
const introductionButton = document.querySelector(".js--introduction-button");
const introductionImage = document.querySelector(".js--introduction-image");
const radioButton = document.querySelector(".radio-button");
const result = document.querySelector(".js--result");
let energySourceVal = 0;

// *******************************************************************************
// *******************************************************************************

// Event Listeners
window.addEventListener("load", () => {
  //Adding introduction AI Voice
  window.speechSynthesis.cancel();
  const speech = new SpeechSynthesisUtterance(
    "This website calculates CO2 produced by the truck"
  );
  window.speechSynthesis.speak(speech);
});

// Adding introduction image and AI voice
introductionButton.addEventListener("click", (e) => {
  e.preventDefault();

  //Adding introduction image
  introductionImage.classList.remove("hidden");

  // Speech for each slide show
  slideShowAI();
});

// -------------------------------------------------------------------------------
// Energy source radio button
radioButton.addEventListener("click", (e) => {
  // Guard Clause
  const source = e.target.closest(".source");
  if (!source) return;
  const energySourceType = source.id;

  //   Set the value of energy source
  if (energySourceType === "diesel") energySourceVal = 1;
  if (energySourceType === "gas") energySourceVal = 2;
  if (energySourceType === "electric") energySourceVal = 3;
});
// -------------------------------------------------------------------------------

//Calculate button
calculateButton.addEventListener("click", (e) => {
  e.preventDefault();

  const co2ProducedValue =
    energySourceVal + Number(distanceSlider.value) + Number(weightSlider.value);

  window.speechSynthesis.cancel();
  const speech = new SpeechSynthesisUtterance(
    `The CO2 produced by the truck is ${co2ProducedValue}`
  );
  window.speechSynthesis.speak(speech);
  result.innerText = `Result: The CO2 produced by the truck is ${co2ProducedValue}.`;
});
