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
// Adding introduction image and AI voice
introductionButton.addEventListener("click", (e) => {
  e.preventDefault();

  //Adding introduction image
  introductionImage.classList.remove("hidden");

  //Adding introduction AI Voice
  window.speechSynthesis.cancel();
  const speech = new SpeechSynthesisUtterance(
    "This website calculates CO2 produced by the truck"
  );
  window.speechSynthesis.speak(speech);
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

//Caluacate button
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
