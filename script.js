document.getElementById("convertButton").addEventListener("click", function() {
    var temperatureInput = document.getElementById("temperatureInput").value;
    var unitSelect = document.getElementById("unitSelect").value;
    var resultArea = document.getElementById("resultArea");
    
    if (temperatureInput === "") {
      resultArea.innerHTML = "Please enter a temperature.";
      return;
    }
    
    var temperature = parseFloat(temperatureInput);
    
    if (isNaN(temperature)) {
      resultArea.innerHTML = "Invalid temperature input.";
      return;
    }
    
    var convertedTemperature;
    var resultUnit;
    
    if (unitSelect === "celsius") {
      convertedTemperature = (temperature - 32) * 5 / 9;
      resultUnit = "°C";
    } else if (unitSelect === "fahrenheit") {
      convertedTemperature = temperature * 9 / 5 + 32;
      resultUnit = "°F";
    } else if (unitSelect === "kelvin") {
      convertedTemperature = temperature + 273.15;
      resultUnit = "K";
    }
    
    resultArea.innerHTML = "Converted temperature: " + convertedTemperature.toFixed(2) + resultUnit;
  });