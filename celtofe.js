function temperatureConverter() {
    const tempInput = document.getElementById('temperature');
    const unitSelector = document.getElementById('unit');
    const finalresultDisplay = document.getElementById('result');


    const temperature = parseFloat(tempInput.value);
    const unit = unitSelector.value;

    if (unit === 'celsius') {
        const fahrenheit = (temperature * 9 / 5) + 32;
        finalresultDisplay.textContent = temperature + "°C is " + Math.round(fahrenheit * 100) / 100 + "°F";
    } else {
        const celsius = (temperature - 32) * 5 / 9;
        finalresultDisplay.textContent = temperature + "°F is " + Math.round(celsius * 100) / 100 + "°C";
    }
}
