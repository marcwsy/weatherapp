(()=>{"use strict";const e=(()=>{let e;return{updateBackground:async function(t){t.weather[0].description.includes("clouds")?e="0Styincf6K2tvfjb5Q":t.weather[0].description.includes("clear")?e="12dSTdoNQVTJjq":t.weather[0].description.includes("sunny")?e="ctGFLebG1AqK4":t.weather[0].description.includes("overcast")?e="yB3gwsCaymSglI1Jqt":t.weather[0].description.includes("lightning")?e="13ZEwDgIZtK1y":t.weather[0].description.includes("rain")?e="26DMWExfbZSiV0Btm":t.weather[0].description.includes("wind")&&(e="3o7aCRZYNerX4ovPwI");const n=`https://api.giphy.com/v1/gifs/${e}?api_key=bSyVSJqipuBRY9r730v8cXypZZ1kV2VV`,a=document.querySelector(".container"),o=await fetch(n,{mode:"cors"}),c=await o.json();console.log(c),a.style.backgroundImage=`url(${c.data.images.original.url})`,a.style.backgroundRepeat="no-repeat",a.style.backgroundSize="cover"}}})(),t=(()=>{const e=e=>Math.round(5/9*(e-32));return{captureWeather:t=>{const n=document.getElementById("cityName"),a=document.getElementById("temperature"),o=document.getElementById("description"),c=document.getElementById("tempMax"),r=document.getElementById("tempMin");document.getElementById("celsius").checked?(n.textContent=t.name,a.textContent=`${e(t.main.temp)} C°`,o.textContent=t.weather[0].description,r.textContent=`Low of ${e(t.main.temp_min)} C°`,c.textContent=`High of ${e(t.main.temp_max)} C°`):(n.textContent=t.name,a.textContent=`${Math.round(t.main.temp)} F°`,o.textContent=t.weather[0].description,r.textContent=`Low of ${Math.round(t.main.temp_min)} F°`,c.textContent=`High of ${Math.round(t.main.temp_max)} F°`)}}})(),n={getData:async function(e){const t=`https://api.openweathermap.org/data/2.5/weather?zip=${e}&q=${e}&units=imperial&appid=3ffa190a9fecc3765c8c5d046edfdd85`,n=document.querySelector(".error");try{const e=await fetch(t,{mode:"cors"});if(!e.ok){const t=`An error has occured: ${e.status}`;throw new Error(t)}const a=await e.json();return console.log(a),n.classList.remove("active"),a}catch(e){return alert(e),n.classList.add("active"),null}}},a=n,o=document.getElementById("searchBar"),c=document.getElementById("searchBtn"),r=document.getElementById("searchInput");o.addEventListener("submit",(e=>{e.preventDefault()})),c.addEventListener("click",(async()=>{if(""===r.value)return;const n=await a.getData(r.value);t.captureWeather(n),e.updateBackground(n)})),window.onload=(async()=>{const n=await a.getData("centreville");t.captureWeather(n),e.updateBackground(n)})(),(()=>{const e=document.querySelector(".footer"),t=document.getElementById("year");let n=(new Date).getFullYear();t.textContent=`Copyright © ${n} marcwsy`,e.appendChild(t)})()})();