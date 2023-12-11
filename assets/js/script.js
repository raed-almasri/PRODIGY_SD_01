function celsiusToFahrenheit(celsius) {
    return (celsius * 9) / 5 + 32;
}

function celsiusToKelvin(celsius) {
    return celsius + 273.15;
}

function fahrenheitToCelsius(fahrenheit) {
    return ((fahrenheit - 32) * 5) / 9;
}

function fahrenheitToKelvin(fahrenheit) {
    return ((fahrenheit + 459.67) * 5) / 9;
}

function kelvinToCelsius(kelvin) {
    return kelvin - 273.15;
}

function kelvinToFahrenheit(kelvin) {
    return (kelvin * 9) / 5 - 459.67;
}

function convertTemperature(value, originalUnit, targetUnit) {
    let result = 0;

    if (originalUnit === "Celsius") {
        if (targetUnit === "Fahrenheit") {
            result = celsiusToFahrenheit(value);
        } else if (targetUnit === "Kelvin") {
            result = celsiusToKelvin(value);
        }
    } else if (originalUnit === "Fahrenheit") {
        if (targetUnit === "Celsius") {
            result = fahrenheitToCelsius(value);
        } else if (targetUnit === "Kelvin") {
            result = fahrenheitToKelvin(value);
        }
    } else if (originalUnit === "Kelvin") {
        if (targetUnit === "Celsius") {
            result = kelvinToCelsius(value);
        } else if (targetUnit === "Fahrenheit") {
            result = kelvinToFahrenheit(value);
        }
    }

    return result;
}
document.getElementById("convertBtn").addEventListener("click", function () {
    const inputValue = parseFloat(document.getElementById("inputValue").value);
    const originalUnit = document.getElementById("unitSelector").value;

    if (isNaN(inputValue)) {
        if (!inputValue) {
            document.getElementById("alertBox").hidden = false;
        }
        return;
    }
    document.getElementById("alertBox").hidden = true;
    const resultInCelsius = convertTemperature(
        inputValue,
        originalUnit,
        "Celsius"
    ).toFixed(2);
    const resultInFahrenheit = convertTemperature(
        inputValue,
        originalUnit,
        "Fahrenheit"
    ).toFixed(2);
    const resultInKelvin = convertTemperature(
        inputValue,
        originalUnit,
        "Kelvin"
    ).toFixed(2);
    document.getElementById(
        "resultInCelsius"
    ).innerHTML = `${resultInCelsius} degrees Celsius`;
    document.getElementById(
        "resultInFahrenheit"
    ).innerHTML = `${resultInFahrenheit} degrees Fahrenheit`;
    document.getElementById(
        "resultInKelvin"
    ).innerHTML = `${resultInKelvin} Kelvin`;
});
