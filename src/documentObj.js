const weatherApp = (() => {

    const farhenheitToCelsius = (num) => {
        let celsiusTotal = Math.round((num - 32) * (5/9));
        return celsiusTotal;
    };

    const captureWeather = (weatherLocation) => {

        const cityName = document.getElementById('cityName');
        const temperature = document.getElementById('temperature');
        const desc = document.getElementById('description');
        const tempMax = document.getElementById('tempMax');
        const tempMin = document.getElementById('tempMin');
        const celsius = document.getElementById('celsius');

        if (celsius.checked) {
            cityName.textContent = weatherLocation.name;
            temperature.textContent = `${farhenheitToCelsius(weatherLocation.main.temp)} C°`;
            desc.textContent = weatherLocation.weather[0].description;
            tempMin.textContent = `Low of ${farhenheitToCelsius(weatherLocation.main.temp_min)} C°`;
            tempMax.textContent = `High of ${farhenheitToCelsius(weatherLocation.main.temp_max)} C°`;
        } else {
            cityName.textContent = weatherLocation.name;
            temperature.textContent = `${Math.round(weatherLocation.main.temp)} F°`;
            desc.textContent = weatherLocation.weather[0].description;
            tempMin.textContent = `Low of ${Math.round(weatherLocation.main.temp_min)} F°`;
            tempMax.textContent = `High of ${Math.round(weatherLocation.main.temp_max)} F°`;
        }
    }
    return { captureWeather };
})();

export default weatherApp;
