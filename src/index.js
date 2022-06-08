import background from "./background";
import weatherApp from "./documentObj";
import weather from "./weatherData";

const search = document.getElementById('searchBar');
const searchBtn = document.getElementById('searchBtn');
const searchInput = document.getElementById('searchInput');

search.addEventListener('submit', (e) => {
    e.preventDefault();
});

searchBtn.addEventListener('click', async () => {
    if (searchInput.value === "") return;
    const weatherLocation = await weather.getData(searchInput.value);
    weatherApp.captureWeather(weatherLocation);
    background.updateBackground(weatherLocation);
});


const defaultLocation = async () => {
    const weatherLocation = await weather.getData('centreville');
    weatherApp.captureWeather(weatherLocation);
    background.updateBackground(weatherLocation);
}
window.onload = defaultLocation();



const addFooter = () => {
    const footer = document.querySelector('.footer');
    const year = document.getElementById('year');
    let date = new Date().getFullYear();
    year.textContent = `Copyright © ${date} marcwsy`;
    footer.appendChild(year);
}
addFooter();