const background = (() => {

    const rainy = '26DMWExfbZSiV0Btm';
    const windy = '3o7aCRZYNerX4ovPwI';
    const lightning = '13ZEwDgIZtK1y';
    const storm = 'yB3gwsCaymSglI1Jqt';
    const sunny = 'ctGFLebG1AqK4';
    const cloudy = '0Styincf6K2tvfjb5Q';
    const clear = '12dSTdoNQVTJjq';
    let description;

    async function updateBackground(weatherLocation) {
        if (weatherLocation.weather[0].description.includes('clouds')) {
            description = cloudy;
        } else if (weatherLocation.weather[0].description.includes('clear')) {
            description = clear;
        } else if (weatherLocation.weather[0].description.includes('sunny')) {
            description = sunny;
        } else if (weatherLocation.weather[0].description.includes('overcast')) {
            description = storm;
        } else if (weatherLocation.weather[0].description.includes('lightning')) {
            description = lightning;
        } else if (weatherLocation.weather[0].description.includes('rain')) {
            description = rainy;
        } else if (weatherLocation.weather[0].description.includes('wind')) {
            description = windy;
        }

        const gifUrl = `https://api.giphy.com/v1/gifs/${description}?api_key=bSyVSJqipuBRY9r730v8cXypZZ1kV2VV`;
        const container = document.querySelector('.container');
        const response = await fetch(gifUrl, {mode: 'cors'});
        const gifData = await response.json();
        console.log(gifData);
        container.style.backgroundImage = `url(${gifData.data.images.original.url})`;
        container.style.backgroundRepeat = "no-repeat";
        container.style.backgroundSize = "cover"
    }
    return { updateBackground };
})();

export default background;