
const weather = (() => {
    async function getData(location) {
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?zip=${location}&q=${location}&units=imperial&appid=3ffa190a9fecc3765c8c5d046edfdd85`;
        const errorMsg = document.querySelector('.error');
        try {
            const response = await fetch(apiUrl, {mode: 'cors'});
            if (!response.ok) {
                const message = `An error has occured: ${response.status}`;
                throw new Error(message);
            }
            const weatherData = await response.json();
            console.log(weatherData);
            errorMsg.classList.remove('active');
            return weatherData;
        } catch(error) {
            alert(error)
            errorMsg.classList.add('active');
            return null;
        }
    }
    return { getData }
})();

export default weather;