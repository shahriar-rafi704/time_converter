let conversionType = document.getElementById("conversionType");
let inputValue = document.getElementById("inputValue");
let outputValue = document.getElementById("outputValue");
let convertButton = document.getElementById("convertButton");

const performConversion = () => {
  const selectedOption = conversionType.value;
  const input = parseFloat(inputValue.value);

  let result;
  switch (selectedOption) {
    case "hrToMnt":
      result = (input * 60).toFixed(2) + " Minutes";
      break;
    case "mntToHr":
      result = (input / 60).toFixed(2) + " Hours";
      break;
    case "hrToSec":
      result = (input * 3600).toFixed(2) + " Seconds";
      break;
    case "secToHr":
      result = (input / 3600).toFixed(2) + " Hours";
      break;
    case "mntToSec":
      result = (input * 60).toFixed(2) + " Seconds";
      break;
    case "secToMnt":
      result = (input / 60).toFixed(2) + " Minutes";
      break;
    default:
      result = "Invalid Conversion";
  }

  outputValue.value = result || "";
};

convertButton.addEventListener("click", performConversion);
inputValue.addEventListener("input", () => {
  outputValue.value = "";
});
performConversion();