const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('#figcaption');
const url = 'https://api.openweathermap.org/data/3.0/onecall?lat=5.473368253538019&lon=7.081021564406769&units=metric&appid=4943c402bc529c51e5747e2b9205ed55';

async function apiFetch(url) {
    try {
        const response = await fetch(url);
       if (response.ok) {
        const data = await response.json();
        displayResults(data);
       }
       else {
        throw Error(await response.text());
       }
    }
    catch (error) {
        console.log(error);
    }
}

function displayResults(data) {
  currentTemp.innerHTML = `~  ${data.current.temp}&deg;C`;
  const iconsrc = `https://openweathermap.org/img/w/${data.current.weather[0].icon}.png`;
  let desc = data.current.weather[0].description;
  weatherIcon.setAttribute('src', iconsrc);
  weatherIcon.setAttribute('alt', 'weather icon');
  captionDesc.textContent = `${desc} ~  `;
}

apiFetch(url);